import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor: '#CCD0D9',
  alignItems: 'center',
  justifyContent: 'center',
 },
 maintext: {
    fontSize: 16,
    margin: 20,
 },
 barcodebox: {
  alignItems: 'center',
  justifyContent: 'center',
  height: 300,
  width: 300,
  overflow: 'hidden',
  borderRadius: 30,
  backgroundColor: '#fff'
 },
 button:{
  backgroundColor: '#4C5059',
  width: '70%',
  borderRadius: 4,
  paddingVertical: 8,
  marginTop: 14,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'black',
  shadowOffset: {width: 2, height: 3},
  shadowOpacity: 0.2,
  shadowRadius: 3
 },
  buttonCamera:{
  backgroundColor: '#4C5059',
  width: '40%',
  borderRadius: 4,
  paddingVertical: 8,
  marginTop: 14,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'black',
  shadowOffset: {width: 2, height: 3},
  shadowOpacity: 0.2,
  shadowRadius: 3
 },
  buttonText:{
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold'
 },
})

export default styles;