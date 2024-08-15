import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useState } from "react";
import { useSentCode, useSetUser } from "../../../stores/user/hooks";

export const useRegistrationFormController = () => {
    const [name, setName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [number, setNumber] = useState<string>();
    const [invalidNumber, setInvalidNumber] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)
    const navigation = useNavigation();
    const setUser = useSetUser();
    const sentCode = useSentCode();


    const onPressContinue = useCallback(async () => {
        if (!name || !lastName || !number) {
            return
        }

        try {
            setLoading(true)
            await sentCode(number)

            setUser({ name, lastName, phoneNumber: number })
            navigation.navigate('RegisterCode')
            setName('');
            setLastName('')
            setNumber('');
            setInvalidNumber(false)
        } catch (error) {
            setInvalidNumber(true)
        } finally {
            setLoading(false)
        }
    }, [name, lastName, number]);

    const onChangeName = useCallback((value: string) => {
        setName(value);
    }, []);

    const onChangeLastName = useCallback((value: string) => {
        setLastName(value)
    }, []);

    const onChangeNumber = useCallback((value: string) => {
        setNumber(value)
    }, [])

    return {
        onPressContinue,
        onChangeName,
        onChangeLastName,
        onChangeNumber,
        name,
        lastName,
        number,
        invalidNumber,
        disabledButton: (!name && !lastName && !number) || isLoading
    }
}