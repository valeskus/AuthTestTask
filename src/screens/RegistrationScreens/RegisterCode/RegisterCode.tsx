import React from 'react';
import { Pressable, Text, View } from "react-native";
import { CodeInputs } from "../../../UI/CodeInputs/CodeInputs";
import { Input } from '../../../UI/Input';

export function RegisterCode(): JSX.Element {
    return (
        <View style={{ flex: 1 }}>
            <Text>Welcome to App</Text>
            <Text>Enter the confirmation code that will be sent to you by SMS</Text>
            <View style={{ flex: 1 }}>
                <CodeInputs label={'Secure code'}
                    onChange={() => { }}
                    valid={true}
                />
            </View>
            <Pressable>Resent the Code</Pressable>
            {/* <Button/> */}
        </View>
    )
}
