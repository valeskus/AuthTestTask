import { useCallback, useEffect, useState } from "react"
import { useSentCode } from "../../../stores/user/hooks/useSentCode"
import { useRegisterUser, useUserStore } from "../../../stores/user/hooks"
import { useNavigation } from "@react-navigation/native";

export const useRegisterCodeController = () => {
    const [code, setCode] = useState<number>();
    const sentCode = useSentCode();
    const registerUser = useRegisterUser();
    const { name, lastName, phoneNumber } = useUserStore();
    const navigation = useNavigation();

    useEffect(() => {
        if (!phoneNumber) {
            return
        }
        sentCode(phoneNumber)
    }, [phoneNumber])

    const handleChange = useCallback((value: number) => {
        setCode(value);
    }, [])

    const onSignUp = useCallback(() => {
        if (!code || !name || !lastName || !phoneNumber) {
            return
        }
        registerUser({ name, lastName, phoneNumber, code })
        navigation.navigate('Login')
    }, [code, name, lastName, phoneNumber])

    const onResent = useCallback(() => {
        sentCode(phoneNumber)
    }, [phoneNumber])

    return {
        handleChange,
        onSignUp,
        onResent,
        disabled: !code
    }
}