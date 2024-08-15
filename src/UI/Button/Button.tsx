import React from 'react';
import {
    Pressable,
    StyleProp,
    ViewStyle,
    Text,
} from 'react-native';
import { styles } from './styles';

export type Props = {
    title: string;
    onPress: () => void;
    pressableStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    secondaryStyle?: boolean;
};

export function Button({
    title,
    onPress,
    pressableStyle,
    disabled,
    secondaryStyle
}: Props): JSX.Element {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.button,
                secondaryStyle && styles.secondaryButton,
                pressed && styles.buttonPressed,
                pressableStyle,
                disabled && styles.buttonDisabled,
            ]}>
            <Text style={[styles.buttonTitle, secondaryStyle && styles.secondaryButtonTitle]}>{title}</Text>
        </Pressable>
    );
}