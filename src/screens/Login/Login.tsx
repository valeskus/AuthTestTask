import { Pressable, Text, View } from "react-native";
import { Input } from "../../UI/Input";

export function Login(): JSX.Element {
    return (
        <View style={{ flex: 1 }}>
        <Text>Welcome to App</Text>
        <Text>Please enter your details.</Text>
        <Input label='Name' placeholder='Enter name'/>
        <Input label='Last Name' placeholder='Enter last name'/>
        <Input label='Phone number' placeholder='+33 222 111 2222'/>
        {/* <Button/> */}
        <Text>Don't have an account?</Text>
        <Pressable onPress={()=>{}} >Sign up</Pressable>
    </View>    )
}
