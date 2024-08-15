import { useNavigation } from "@react-navigation/native"
import { useCallback } from "react";

export const useRegistrationFormController = () => {
    const navigation = useNavigation();
    const onPressContinue = useCallback(() => {
        navigation.navigate('RegisterCode')
    }, [])

    return {
        onPressContinue
    }
}