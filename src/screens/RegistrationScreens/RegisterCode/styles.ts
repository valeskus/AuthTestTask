import { StyleSheet } from 'react-native';
import { Colors } from '../../../UI/Colors';

export const styles = StyleSheet.create({
    codeForm: {
        flex: 2
    },
    link: {
        fontSize: 15,
        color: Colors.tertiaryTextColor,
        fontWeight: '600',
        textDecorationLine: 'underline'
    },
    linkContainer: {
        alignSelf: 'center',
        marginVertical: 30
    },
    codeContainer: {
        flex: 1
    }
})