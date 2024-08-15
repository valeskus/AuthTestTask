import React from 'react';
import { Pressable, Text, View } from "react-native";
import { Input } from '../../../UI/Input';
import { Link } from '@react-navigation/native';
import { styles } from './styles';
import { Button } from '../../../UI/Button';
import { Header } from '../../../components/Header';
import { useRegistrationFormController } from './useRegistrationFormController';


export function RegisterForm(): JSX.Element {
    const {onPressContinue} = useRegistrationFormController();
    return (
        <View style={{ flex: 1 }}>
            <Header description='Please enter your details.' />
            <View style={styles.formContainer}>
                <Input label='Name' placeholder='Enter name' />
                <Input label='Last Name' placeholder='Enter last name' />
                <Input label='Phone number' placeholder='+33 222 111 2222' />
                <Button onPress={onPressContinue} title='Continue' />
                <View style={styles.noteContainer}>
                    <View style={styles.note}>
                        <Text style={styles.text}>Do you have any account? </Text>
                        <Link style={styles.link} to={{ screen: 'Login' }}>Sign up</Link>
                    </View>
                </View>
            </View>

        </View>
    )
}
