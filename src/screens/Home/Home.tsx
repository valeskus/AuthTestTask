import React from 'react';
import { Image, SafeAreaView, Text, View } from "react-native";
import { Button } from '../../UI/Button';
import { ImageConstants } from '../../UI/ImageConstants';
import { styles } from './styles';


export function Home(): JSX.Element {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <View style={{ flex: 1 }}>
                <Image style={{ width: '100%', height: '100%' }} source={ImageConstants.homeIcom} />
            </View>
            <View style={styles.screenContainer}>
                <Text style={styles.header}>Welcome to App</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet phasellus augue. Neque at felis pulvinar malesuada varius egestas dis cras. </Text>
                <Button title='Login' onPress={() => { }} />
                <Button title='Register' onPress={() => { }} secondaryStyle={true} />
            </View>

        </SafeAreaView>
    )
}
