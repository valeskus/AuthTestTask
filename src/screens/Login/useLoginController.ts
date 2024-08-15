import { useNavigation } from "@react-navigation/native"
import { useCallback, useState } from "react";
import { useLoginUser } from "../../stores/user/hooks";

export const useLoginController = () => {
    const [number, setNumber] = useState<string>('');
    const [invalidNumber, setInvalidNumber] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)
    const loginUser = useLoginUser();
    const navigation = useNavigation();

    const onPress = useCallback(async () => {
        if (!number) {
            return
        }
        try {
            setLoading(true)
            await loginUser(number)
            setInvalidNumber(false)
            navigation.navigate('Home')
        } catch (error) {
            setInvalidNumber(true)
        } finally {
            setLoading(false)
        }
    }, [number])

    const onChangeNumber = useCallback((value: string) => {
        setNumber(value)
    }, [])

    return {
        number,
        onPress,
        onChangeNumber,
        invalidNumber,
        disabled: isLoading || !number
    }
}