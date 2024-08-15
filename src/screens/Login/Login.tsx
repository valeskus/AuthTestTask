import { Pressable, Text, View } from "react-native";
import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import { styles } from './styles';
import { Header } from "../../components/Header";
import { Link } from "@react-navigation/native";

export function Login(): JSX.Element {
    return (
        <View style={styles.loginContainer}>
            <Header description="Please enter your details." />
            <View style={styles.form}>
                <Input label='Phone number' placeholder='+33 222 111 2222' />
                <Button title="Login" onPress={() => { }} />
                <View style={styles.noteContainer}>
                    <View style={styles.note}>
                        <Text style={styles.text}>Don't have an account? </Text>
                        <Link style={styles.link} to={{ screen: 'RegisterForm' }}>Sign up</Link>
                    </View>
                </View>

            </View>

        </View>)
}
