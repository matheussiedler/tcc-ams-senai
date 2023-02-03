import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor: '#CCD0D9'
 },
 containerHeader:{
  flex: 1,
  marginTop: '14%',
  marginBottom: '8%',
  flexDirection: 'column',
  alignItems: 'center'
 },
 message:{
  fontSize: 30,
  fontWeight: 'bold',
  color: '#4C5059',
  marginLeft: 15,
 },
 containerForm:{
  backgroundColor: '#F2F2F2',
  flex: 3,
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
 icon:{
  alignItems: 'center',
  justifyContent: 'center',
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
 buttonLogin:{
  marginTop: 14,
  alignSelf: 'center'
 },
 loginText:{
  color: '#8F96A6',
  fontSize: 16
 },
 logo: {
  width: '70%',
  height: '70%'
 },
})

export default styles;