import React from 'react';
import {
    KeyboardTypeOptions,
    NativeSyntheticEvent,
    Text,
    TextInput,
    TextInputProps,
    TextInputChangeEventData,
    TextInputKeyPressEventData,
    View,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './styles';
import { Colors } from '../Colors';

export type Props = {
    type?: KeyboardTypeOptions;
    label?: string;
    length?: number;
    invalid?: boolean;
    placeholder?: string;
    value?: string;
    refValue?: any;
    textAlign?: TextInputProps['textAlign'];
    isSelectTextOnFocus?: boolean;
    onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onChangeText?: ((text: string) => void);
    onKeyPressed?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
};

export function Input({
    type,
    label,
    length,
    invalid,
    value,
    placeholder,
    onChange,
    refValue,
    isSelectTextOnFocus,
    textAlign,
    onKeyPressed,
    onChangeText
}: Props): JSX.Element {
    const isCodeInput = length === 1 ? true : false;
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style={styles.inputContainer} >
                <Text style={styles.label}> {label} </Text>
                < TextInput
                    textAlign={textAlign}
                    style={
                        [
                            styles.input,
                            isCodeInput && styles.codeInput,
                            isCodeInput && !!value && styles.onFocus,
                            invalid && styles.invalid
                        ]}
                    keyboardType={type}
                    maxLength={length}
                    onChange={onChange}
                    onChangeText={onChangeText}
                    value={value}
                    ref={refValue}
                    selectTextOnFocus={isSelectTextOnFocus}
                    onKeyPress={onKeyPressed}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.secondary}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}