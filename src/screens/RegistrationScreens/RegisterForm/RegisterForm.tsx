import React from 'react';
import { Pressable, Text, View } from "react-native";
import { Input } from '../../../UI/Input';

export function RegisterForm(): JSX.Element {
    return (
        <View style={{ flex: 1 }}>
            <Text>Welcome to App</Text>
            <Text>Please enter your details.</Text>
            <Input label='Name' placeholder='Enter name' />
            <Input label='Last Name' placeholder='Enter last name' />
            <Input label='Phone number' placeholder='+33 222 111 2222' />
            {/* <Button/> */}
            <Text>Do you have any account?</Text>
            <Pressable onPress={() => { }} >Login</Pressable>
        </View>
    )
}
