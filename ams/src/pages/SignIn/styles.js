import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor: '#CCD0D9'
 },
 containerHeader:{
  marginTop: '14%',
  marginBottom: '8%',
  paddingStart: '5%',
  flexDirection: 'row',
  alignItems: 'center',
//   justifyContent: 'center'
 },
 message:{
  fontSize: 30,
  fontWeight: 'bold',
  color: '#4C5059',
  marginLeft: 15,
 },
 containerForm:{
  backgroundColor: '#F2F2F2',
  flex: 1,
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingStart: '5%',
  paddingEnd: '5%'
 },
 title:{
  fontSize: 20,
  marginTop: 28,
 },
 input:{
  paddingLeft: 10
 },
 button:{
  backgroundColor: '#4C5059',
  width: '100%',
  borderRadius: 4,
  paddingVertical: 8,
  marginTop: 14,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'black',
  shadowOffset: {width: 2, height: 3},
  shadowOpacity: 0.2,
  shadowRadius: 3,
 },
 buttonText:{
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold'
 },
 buttonRegister:{
  marginTop: 14,
  alignSelf: 'center'
 },
 registerText:{
  color: '#8F96A6',
  fontSize: 16
 },
 logo: {
  width: '20%',
  height: '100%',
  

 },
})

export default styles;