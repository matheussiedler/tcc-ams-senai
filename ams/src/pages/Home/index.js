import React, { useState } from 'react';
import { 
 View,
 TouchableOpacity,
 Linking
} from 'react-native';
import { Text, Input } from 'react-native-elements';
import SelectList from 'react-native-dropdown-select-list';

import logo from '../../assets/logo.png';
import styles from './styles.js';

import * as Animatable from 'react-native-animatable';

import { useNavigation, useRoute } from '@react-navigation/native';

import ativoService from '../../service/AtivoService';
import { useEffect } from 'react';

export default function Home({route}) {
 const navigation = useNavigation();

 const [selected, setSelected] = useState("");

 const [data,setData] = React.useState([]);

 const [nomeLogado, setNomeLogado] = useState();

 const scanner = () => {
  navigation.navigate('Scanner', {nome: nomeLogado, ambiente: selected})
 }

//  const rota = useRoute();
 const dadosLogin = () => {
  setNomeLogado(route.params?.nome)
 }

 const gerarAmbientes = () => {
  ativoService.listarAmbientes()
  .then((response) => {
    // Store Values in Temporary Array
    let newArray = response.data.map((item) => {
      return {value: item.ambiente}
    })
    //Set Data Variable
    setData(newArray)
  })
  .catch((e) => {
    console.log(e)
  })
 }

  useEffect(() => 
    //Get Values from database
    gerarAmbientes()
  ,[])

  useEffect(() => {
    dadosLogin()
  });

 return (
  <View style={styles.container}>
   <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>

    <Animatable.Image
     animation="flipInY"
     source={logo}
     style={styles.logo}
     resizeMode="contain"
    />

   </Animatable.View>

   <Animatable.View animation="fadeInUp" style={styles.containerForm}>
    {/* <Text style={styles.title}>Nome</Text>
    
    <Input
      style={styles.input}
      placeholder='Digite seu Nome e Sobrenome'
      leftIcon={
        {
          type: 'font-awesome',
          name: 'user',
          color: '#0D0D0D'
        }
      }
      keyboardType='number-pad'
      returnKeyType='done'
      onChangeText={value => setNif(value)}
    /> */}

    <SelectList
     setSelected={setSelected}
     data={data}
     placeholder={'Selecione um ambiente'}
     searchPlaceholder={'Pesquise'}
     notFoundText={'Ambiente não encontrado'}
     boxStyles={{marginTop: 30, marginBottom: 8}}
    />

    {/* <Text>{selected}</Text>

    <Text>{nomeLogado}</Text> */}

    {/* <Text>{nifLogado}</Text> */}

    <TouchableOpacity 
     style={styles.button}
     onPress={ () => scanner() }
    >
     <Text style={styles.buttonText}>Scanear</Text>
    </TouchableOpacity>

    <TouchableOpacity 
     style={styles.button}
     onPress={ () => navigation.navigate('Welcome') }
    >
     <Text style={styles.buttonText}>Voltar</Text>
    </TouchableOpacity>

    {/* <TouchableOpacity 
     style={styles.button}
     onPress={() => {
      Linking.openURL('https://reactnative.dev');
     }}
    >
     <Text style={styles.buttonText}>Ver Relatório e Alertas</Text>
    </TouchableOpacity> */}
    
   </Animatable.View>
  </View>
 );
}