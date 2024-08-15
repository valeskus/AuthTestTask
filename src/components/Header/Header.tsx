import { Text, View } from "react-native";
import { styles } from './styles';

export type Props = {
    description: string;
};

export function Header({ description }: Props): JSX.Element {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.text}>Welcome to App</Text>
            <Text style={styles.description}>{description}</Text>
        </View>)
}
