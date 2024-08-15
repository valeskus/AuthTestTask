import { useNavigation } from "@react-navigation/native"
import { useCallback } from "react"

export const useHomeController = () => {
    const navigation = useNavigation()
    const onPressLogin = useCallback(() => {
        navigation.navigate('Login')
    }, [])

    const onPressRegister = useCallback(() => {
        navigation.navigate('RegisterForm')
    }, [])
    return {
        onPressLogin,
        onPressRegister
    }
}