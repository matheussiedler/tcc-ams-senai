import React, { useState } from 'react';
import { 
 View,
 TouchableOpacity
} from 'react-native';
import { Text, Input } from 'react-native-elements';

import logo from '../../assets/logo.png';
import styles from './styles.js';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import usuarioService from '../../service/UsuarioService';

import { Alert } from 'react-native';

export default function SignIn() {
 const navigation = useNavigation();

 const [nif, setNif] = useState(null);
 const [password, setPassword] = useState(null);

 const entrar = () => {

  let data = {
    username: nif,
    password: password
  }
  
  usuarioService.login(data)
  .then((response) => {
    let nome = response.data.nome;
    navigation.navigate('Home', {
      nome: nome,
    });
  })
  .catch((error) => {
    Alert.alert("Alerta", "Usuário não existe")
  })
 }

 const signIn = () => {
  navigation.navigate('Home');
 }

 const signUp = () => {
  navigation.navigate('SignUp');
 }

 return (
  <View style={styles.container}>
   <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>

    <Animatable.Image
     animation="flipInY"
     source={logo}
     style={styles.logo}
     resizeMode="contain"
    />
    <Text style={styles.message}>Bem-vindo(a)</Text>

   </Animatable.View>

   <Animatable.View animation="fadeInUp" style={styles.containerForm}>
    <Text style={styles.title}>NIF</Text>
    
    <Input
      style={styles.input}
      placeholder='Digite seu identificador'
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
    />

    <Text style={styles.title}>Senha</Text>
    
    <Input
      style={styles.input}
      placeholder='Digite sua senha'
      leftIcon={
        {
          type: 'font-awesome',
          name: 'lock',
          color: '#0D0D0D'
        }
      }
      secureTextEntry={true}
      onChangeText={value => setPassword(value)}
    />

    <TouchableOpacity 
     style={styles.button}
     onPress={ () => entrar() }
    >
     <Text style={styles.buttonText}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity
     style={styles.buttonRegister}
     onPress={ () => signUp() }
    >
     <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
    </TouchableOpacity>
   </Animatable.View>
  </View>
 );
}