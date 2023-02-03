import React from 'react';
import { 
 View, 
 Text,
 TouchableOpacity
} from 'react-native';

import logo from '../../assets/logo.png';
import styles from './styles.js';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
 const navigation = useNavigation();

 return (
  <View style={styles.container}>

   <View style={styles.containerLogo}>
    
    <Animatable.Image
     animation="flipInY"
     source={logo}
     style={styles.logo}
     resizeMode="contain"
    />
    
   </View>

   <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
    <Text style={styles.title}>Monitore e organize seus Ativos de qualquer lugar!</Text>
    <Text style={styles.text}>Asset Management System</Text>

    <TouchableOpacity
     style={styles.button}
     onPress={ () => navigation.navigate('SignIn') }
    >
     <Text style={styles.buttonText}>Acessar</Text>
    </TouchableOpacity>

   </Animatable.View>

  </View>
 );
}