import React from 'react';
import { Pressable, ScrollView, Text, View } from "react-native";
import { Input } from '../../../UI/Input';
import { Link } from '@react-navigation/native';
import { styles } from './styles';
import { Button } from '../../../UI/Button';
import { Header } from '../../../components/Header';
import { useRegistrationFormController } from './useRegistrationFormController';


export function RegisterForm(): JSX.Element {
    const { onPressContinue,
        onChangeName,
        onChangeLastName,
        onChangeNumber,
        name,
        lastName,
        number,
        disabledButton
    } = useRegistrationFormController();

    return (
        <ScrollView style={styles.formContainer}
            automaticallyAdjustKeyboardInsets={true}
            contentContainerStyle={{
                flex: 1
            }}>
            <Header description='Please enter your details.' />
            <View style={styles.formContainer}>
                <Input label='Name' placeholder='Enter name' onChangeText={onChangeName} value={name} />
                <Input label='Last Name' placeholder='Enter last name' onChangeText={onChangeLastName} value={lastName} />
                <Input label='Phone number' placeholder='+33 222 111 2222' onChangeText={onChangeNumber} type='numeric' value={number} />
                <Button onPress={onPressContinue} title='Continue' disabled={disabledButton} />
                <View style={styles.noteContainer}>
                    <View style={styles.note}>
                        <Text style={styles.text}>Do you have any account? </Text>
                        <Link style={styles.link} to={{ screen: 'Login' }}>Sign up</Link>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}
