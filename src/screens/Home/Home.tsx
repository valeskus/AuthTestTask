import React from 'react';
import { Text, View } from "react-native";
import { CodeInputs } from "../../UI/CodeInputs/CodeInputs";
import { Input } from '../../UI/Input';
import { Button } from '../../UI/Button';

export function Home(): JSX.Element {
    return (
        <View style={{ flex: 1 }}>
            <Text>Welcome to App</Text>
            <Text>Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet phasellus augue. Neque at felis pulvinar malesuada varius egestas dis cras. </Text>
            <Button title='Login' onPress={() => { }} />
            <Button title='Register' onPress={() => { }} secondaryStyle={true} />
        </View>
    )
}
