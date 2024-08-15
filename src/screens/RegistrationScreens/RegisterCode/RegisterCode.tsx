import React from 'react';
import { Pressable, Text, View } from "react-native";
import { CodeInputs } from "../../../UI/CodeInputs/CodeInputs";
import { Input } from '../../../UI/Input';
import { Header } from '../../../components/Header';
import { Button } from '../../../UI/Button';
import { useRegisterCodeController } from './useRegisterCodeController';

export function RegisterCode(): JSX.Element {
    const { handleChange,
        onSignUp,
        disabled } = useRegisterCodeController();
    return (
        <View style={{ flex: 1 }}>
            <Header description='Enter the confirmation code that will be sent to you by SMS' />
            <View style={{ flex: 2 }}>
                <View >
                    <CodeInputs label={'Secure code'}
                        onChange={handleChange}
                        valid={true}
                    />
                </View>
                <Pressable>
                    <Text>Resent the code</Text>
                </Pressable>
                <Button title='Sign up' onPress={onSignUp} disabled={disabled}/>
            </View>

        </View>
    )
}
