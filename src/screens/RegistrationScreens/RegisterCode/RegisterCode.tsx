import React from 'react';
import { Pressable, Text, View } from "react-native";
import { CodeInputs } from "../../../UI/CodeInputs/CodeInputs";
import { Header } from '../../../components/Header';
import { Button } from '../../../UI/Button';
import { useRegisterCodeController } from './useRegisterCodeController';
import { styles } from './styles';

export function RegisterCode(): JSX.Element {
    const { handleChange,
        onSignUp,
        disabled,
        onResent,
        invalidCode } = useRegisterCodeController();
    return (
        <View style={styles.codeContainer}>
            <Header description='Enter the confirmation code that will be sent to you by SMS' />
            <View style={styles.codeForm}>
                <View >
                    <CodeInputs label={'Secure code'}
                        onChange={handleChange}
                        invalid={invalidCode}
                    />
                </View>
                <Pressable style={styles.linkContainer} onPress={onResent}>
                    <Text style={styles.link}>Resent the code</Text>
                </Pressable>
                <Button title='Sign up' onPress={onSignUp} disabled={disabled} />
            </View>

        </View>
    )
}
