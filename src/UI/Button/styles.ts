import {StyleSheet} from 'react-native';
import { Colors } from '../Colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    width: '100%',
    borderRadius: 10,
    marginBottom: 30,
  },
  secondaryButton:{
    backgroundColor: 'white',
    borderColor: Colors.secondary,
    borderWidth: 1,
  },
  secondaryButtonTitle:{
    color: Colors.primaryTextColor
  },
  buttonPressed: {
    transform: [{scale: 0.9}],
  },
  buttonDisabled: {
    backgroundColor: Colors.secondaryButtonColor,
  },
  loadingIndicator: {
    marginVertical: 18,
  },
  buttonTitle: {
    fontSize: 18,
    padding: 18,
    textAlign: 'center',
    color: 'rgb(252, 255, 255)',
    fontWeight: '600',
  },
});