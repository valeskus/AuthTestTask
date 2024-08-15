import { useCallback, useEffect, useState } from "react"
import { useSentCode } from "../../../stores/user/hooks/useSentCode"
import { useRegisterUser, useUserStore } from "../../../stores/user/hooks"
import { useNavigation } from "@react-navigation/native";

export const useRegisterCodeController = () => {
    const [code, setCode] = useState<number>();
    const sentCode = useSentCode();
    const registerUser = useRegisterUser();
    const { name, lastName, phoneNumber } = useUserStore();
    const [isLoading, setLoading] = useState<boolean>(false)
    const [invalidCode, setInvalidCode] = useState<boolean>(false)

    const navigation = useNavigation();

    const handleChange = useCallback((value: number) => {
        setCode(value);
    }, [])

    const onSignUp = useCallback(async () => {
        if (!code || !name || !lastName || !phoneNumber) {
            return
        }
        try {
            setLoading(true)
            await registerUser({ name, lastName, phoneNumber, code })
            navigation.navigate('Login')
            setInvalidCode(false)

        } catch (error) {
            setInvalidCode(true)
        }finally{
            setLoading(false)
        }

    }, [code, name, lastName, phoneNumber])

    const onResent = useCallback(() => {
        sentCode(phoneNumber)
    }, [phoneNumber])

    return {
        handleChange,
        onSignUp,
        onResent,
        invalidCode,
        disabled: !code || isLoading
    }
}