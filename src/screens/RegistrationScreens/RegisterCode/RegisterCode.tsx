import React from 'react';
import { Pressable, Text, View } from "react-native";
import { CodeInputs } from "../../../UI/CodeInputs/CodeInputs";
import { Input } from '../../../UI/Input';
import { Header } from '../../../components/Header';
import { Button } from '../../../UI/Button';

export function RegisterCode(): JSX.Element {
    return (
        <View style={{ flex: 1 }}>
            <Header description='Enter the confirmation code that will be sent to you by SMS' />
            <View style={{ flex: 2 }}>
                <View >
                    <CodeInputs label={'Secure code'}
                        onChange={() => { }}
                        valid={true}
                    />
                </View>
                <Pressable>
                    <Text>Resent the code</Text>
                </Pressable>
                <Button title='Sign up' onPress={()=>{}}/>
            </View>

        </View>
    )
}
