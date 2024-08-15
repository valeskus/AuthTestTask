import React from 'react';
import { Pressable, Text, View } from "react-native";
import { Input } from '../../../UI/Input';
import { Link } from '@react-navigation/native';
import { styles } from './styles';
import { Button } from '../../../UI/Button';


export function RegisterForm(): JSX.Element {
    return (
        <View style={{ flex: 1 }}>
            <Text>Welcome to App</Text>
            <Text>Please enter your details.</Text>
            <Input label='Name' placeholder='Enter name' />
            <Input label='Last Name' placeholder='Enter last name' />
            <Input label='Phone number' placeholder='+33 222 111 2222' />
            <Pressable>
                <Text>Resent the code</Text>
            </Pressable>
            <Button onPress={() => { }} title='Sign up' />
            <View style={styles.noteContainer}>
                <View style={styles.note}>
                    <Text style={styles.text}>Do you have any account? </Text>
                    <Link style={styles.link} to={{ screen: 'Login' }}>Sign up</Link>
                </View>
            </View>
        </View>
    )
}
