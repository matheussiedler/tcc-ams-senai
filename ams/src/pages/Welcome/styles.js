import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor: '#CCD0D9'
 },
 containerLogo:{
  flex: 2,
  backgroundColor: '#CCD0D9',
  alignItems: 'center',
  justifyContent: 'center',
 },
 containerForm:{
  flex: 1,
  backgroundColor: '#F2F2F2',
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingStart: '5%',
  paddingEnd: '5%'
 },
 title:{
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 28,
  marginBottom: 12,
  color: '#0D0D0D',
  textAlign: 'center'
 },
 text:{
  color: '#8F96A6',
  fontSize: 20,
  textAlign: 'center',
  fontStyle: 'italic'
 },
 button:{
  position: 'absolute',
  backgroundColor: '#4C5059',
  borderRadius: 50,
  paddingVertical: 8,
  width: '60%',
  alignSelf: 'center',
  bottom: '15%',
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: 'black',
  shadowOffset: {width: 2, height: 3},
  shadowOpacity: 0.2,
  shadowRadius: 3,
 },
 buttonText:{
  fontSize: 18,
  color: '#fff',
  fontWeight: 'bold'
 },
 logo: {
  width: '50%',
  height: '100%'
 },
})

export default styles;