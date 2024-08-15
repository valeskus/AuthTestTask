import {StyleSheet} from 'react-native';
import {Colors} from '../Colors'

export const styles = StyleSheet.create({
  input: {
    height:50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FCFFFE',
    paddingHorizontal: 5,
    letterSpacing: 0.04,
    fontWeight: '600',
    color: Colors.tertiaryTextColor,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
  },
  codeInput: {
    height:70,
    textAlign: 'center',
    borderColor: Colors.secondaryBorderColor,
    fontSize:35,
  },
  onFocus:{
    borderColor: Colors.borderColor,
    color:Colors.primary,
  },
  invalid: {
    borderColor: 'red',
    borderWidth: 1,
  },
});