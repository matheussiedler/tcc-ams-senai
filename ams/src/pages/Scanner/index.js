import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import logo from '../../assets/logo.png';
import styles from './styles.js';

import * as Animatable from 'react-native-animatable';

import SelectList from 'react-native-dropdown-select-list';

import { Alert } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import inventarioService from '../../service/InventarioService';

export default function Scanner({route}) {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Ainda não escaneado');

  const [nomeLogado, setNomeLogado] = useState();
  const [ambiente, setAmbiente] = useState();

  const dadosLogin = () => {
    setNomeLogado(route.params?.nome)
    setAmbiente(route.params?.ambiente)
  }

  useEffect(() => {
    dadosLogin()
  });

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    let idativo = data.slice(0, data.indexOf(' - '));

    console.log('Type: ' + type + '\nData: ' + data);

    verificar(idativo)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Solicitando permissão de câmera</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Sem acesso à câmera</Text>
        <TouchableOpacity 
          style={styles.buttonCamera}
          onPress={() => askForCameraPermission()}
          >
          <Text style={styles.buttonText}>Acessar Câmera</Text>
        </TouchableOpacity>
      </View>)
  }

  const verificar = (idAssetToCheck) => {

    // console.log(idAssetToCheck)

    inventarioService.listarAtivo(idAssetToCheck)
    .then((response) => {

      // console.log(response.data)

      let values = response.data.map((item) => {
        return {value: item.idativo}
      })

      let ativos = values.map(item => `${item.value}`);

      // console.log(ativos)

      // console.log(ativos.indexOf(idAssetToCheck))

      if (ativos.indexOf(idAssetToCheck) == -1) {
        setText("✅ Escaneado com sucesso!")
        salvar(idAssetToCheck)
      }
      else
      {
        setText("❌ Já escaneado!")
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const salvar = (idAsset) => {

    let dataAtual = "";
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    dataAtual = day + "/" + month + "/" + year;
    
    let data = {
      usuario: nomeLogado,
      ambiente: ambiente,
      data: dataAtual,
      idativo: idAsset
    }
    
    inventarioService.registrar(data)
    .then((response) => {
      // const titulo = (response.data.status) ? "Sucesso" : "Erro";
      // Alert.alert(titulo, response.data.mensagem)
      // console.log(response.data)
    })
    .catch((error) => {
      // Alert.alert("Erro", "Houve um erro inesperado.")
      // console.log(error)
    })
  }

  // Return the View
  return (
    <View style={styles.container}>

      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>

      <Text style={styles.maintext}>{text}</Text>

      {scanned && <TouchableOpacity 
        style={styles.button}
        onPress={() => {setScanned(false), setText('Ainda não escaneado')} }
        >
        <Text style={styles.buttonText}>Escanear novamente?</Text>
      </TouchableOpacity>}

      <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('Home', { nome: nomeLogado }) }
        >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}