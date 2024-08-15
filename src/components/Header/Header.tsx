import { Pressable, Text, View } from "react-native";
import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import { LinkButton } from "../../UI/LinkButton";
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
