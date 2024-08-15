import { StyleSheet } from 'react-native';
import { Colors } from '../../UI/Colors';

export const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 40
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
        color: Colors.primaryTextColor
    },
    description: {
        fontSize: 18,
        marginBottom: 10,
        color: Colors.secondaryTextColor
    }
})