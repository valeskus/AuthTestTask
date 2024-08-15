import { Pressable, Text, View } from "react-native";
import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import { styles } from './styles';
import { Header } from "../../components/Header";
import { Link } from "@react-navigation/native";
import { useLoginController } from "./useLoginController";

export function Login(): JSX.Element {
    const { number, onPress, onChangeNumber, invalidNumber, disabled } = useLoginController();
    return (
        <View style={styles.loginContainer}>
            <Header description="Please enter your details." />
            <View style={styles.form}>
                <Input label='Phone number' placeholder='+33 222 111 2222' onChangeText={onChangeNumber} invalid={invalidNumber} type='numeric' value={number} />
                <Button title="Login" onPress={onPress} disabled={disabled} />
                <View style={styles.noteContainer}>
                    <View style={styles.note}>
                        <Text style={styles.text}>Don't have an account? </Text>
                        <Link style={styles.link} to={{ screen: 'RegisterForm' }}>Sign up</Link>
                    </View>
                </View>

            </View>

        </View>)
}
