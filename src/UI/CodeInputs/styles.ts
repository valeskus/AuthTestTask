import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  codeInputsContainer:{
    justifyContent: 'center',
    alignSelf:'center'
  },
  codeInputsGroup: {
    flexDirection: 'row',
    width: '100%',
    height:70,
    alignItems:'center',
  },
  codeInput: {
    marginHorizontal: 3,
    width: 50,
  },
  codeLine: {
    marginHorizontal: 3,
    fontSize:30,
    color:'#D0D5DD',
    alignSelf:'center'
  }
});