import React, { useState } from 'react';
import { 
 View,
 TouchableOpacity
} from 'react-native';
import { Text, Input, CheckBox } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles.js';
import logo from '../../assets/logo.png';

import { useNavigation } from '@react-navigation/native';

import usuarioService from '../../service/UsuarioService';
import { Alert } from 'react-native';

export default function SignUp() {
 const navigation = useNavigation();

 const [fullname, setFullname] = useState(null);
 const [email, setEmail] = useState(null);
 const [nif, setNif] = useState(null);
 const [password, setPassword] = useState(null);
 const [isSelected, setSelected] = useState(false);

 const [errorFullname, setErrorFullname] = useState(null);
 const [errorEmail, setErrorEmail] = useState(null);
 const [errorNif, setErrorNif] = useState(null);
 const [errorPassword, setErrorPassword] = useState(null);

 const [isLoading, setLoading] = useState(false)

 const validar = () => {
  let error = false;

  setErrorFullname(null);
  setErrorEmail(null);
  setErrorNif(null);
  setErrorPassword(null);

  if (fullname == null) {
    setErrorFullname('Preencha seu nome corretamente.');
    error = true;
  }

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!re.test(String(email).toLowerCase())) {
    setErrorEmail('Preencha seu email corretamente.');
    error = true;
  }

  if (nif == null) {
    setErrorNif('Preencha seu nif corretamente.');
    error = true;
  }

  if (password == null) {
    setErrorPassword('Preencha sua senha corretamente.');
    error = true;
  }

  return !error;
 }

 const salvar = () => {
  if (validar()){
    setLoading(true)
    
    let data = {
      nome: fullname,
      nif: nif,
      senha: password,
      email: email
    }
    
    usuarioService.cadastrar(data)
    .then((response) => {
      setLoading(false)
      const titulo = (response.data.status) ? "Sucesso" : "Erro";
      Alert.alert(titulo, response.data.mensagem)
      // console.log(response.data)
    })
    .catch((error) => {
      setLoading(false)
      Alert.alert("Erro", "Houve um erro inesperado.")
      Alert.alert(error)
    })
    }
  }

 const registerUser = () => {
  if (validar()) {
    alert('Cadastrou!')
    navigation.navigate('SignUp');
  }
 }

 const backSignIn = () => {
  navigation.navigate('SignIn');
 }

 return (
  <ScrollView style={styles.container}>
   <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>

    <Animatable.Image
     animation="flipInY"
     source={logo}
     style={styles.logo}
     resizeMode="contain"
    />
    <Text style={styles.message}>Cadastro</Text>

   </Animatable.View>

   <Animatable.View animation="fadeInUp" style={styles.containerForm}>
    <Text style={styles.title}>Nome Completo</Text>

    <Input
      style={styles.input}
      placeholder='Digite seu nome'
      keyboardType='default'
      onChangeText={value => (
        setFullname(value),
        setErrorFullname(null)
        )
      }
      errorMessage={errorFullname}
    />

    <Text style={styles.title}>Email</Text>

    <Input
      style={styles.input}
      placeholder='Digite seu Email'
      keyboardType='email-address'
      onChangeText={value => (
        setEmail(value),
        setErrorEmail(null)
        )
      }
      errorMessage={errorEmail}
    />

    <Text style={styles.title}>NIF</Text>
    
    <Input
      style={styles.input}
      placeholder='Digite seu identificador'
      keyboardType='number-pad'
      returnKeyType='done'
      onChangeText={value => (
        setNif(value),
        setErrorNif(null)
        )
      }
      errorMessage={errorNif}
    />

    <Text style={styles.title}>Senha</Text>
    
    <Input
      style={styles.input}
      placeholder='Digite sua senha'
      secureTextEntry={true}
      onChangeText={value => (
        setPassword(value),
        setErrorPassword(null)
        )
      }
      errorMessage={errorPassword}
    />

    <CheckBox
      title='Eu aceito os Termos de Uso.'
      checkedIcon='check'
      uncheckedIcon='square'
      checkedColor='green'
      uncheckedColor='#CCD0D9'
      checked={isSelected}
      onPress={() => setSelected(!isSelected)}
    />

    { isLoading && 
      <Text style={styles.textLoading}>Carregando...</Text>
    }

    { !isLoading &&
      <TouchableOpacity 
      style={styles.button}
      onPress={ () => salvar() }
      >
      <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    }

    <TouchableOpacity
     style={styles.buttonLogin}
     onPress={ () => backSignIn() }
    >
     <Text style={styles.loginText}>Já possui uma conta? Faça o Login</Text>
    </TouchableOpacity>
   </Animatable.View>
  </ScrollView>
 );
}