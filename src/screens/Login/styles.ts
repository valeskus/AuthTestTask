import { StyleSheet } from 'react-native';
import { Colors } from '../../UI/Colors';

export const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    },
    note: {
        flexDirection: 'row',
        width: '65%',
    },
    text: {
        color: Colors.secondaryTextColor,
        fontSize: 15,
    },
    noteContainer: {
        alignItems: 'center',
        marginTop:30
    },
    link:{
        fontSize: 15,
        color: Colors.tertiaryTextColor,
        fontWeight: '600',
        textDecorationLine: 'underline'
    }
})