import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useState } from "react";
import { useSetUser } from "../../../stores/user/hooks";

export const useRegistrationFormController = () => {
    const [name, setName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [number, setNumber] = useState<string>();
    const navigation = useNavigation();
    const setUser = useSetUser();

    const onPressContinue = useCallback(() => {
        if (!name || !lastName || !number) {
            return
        }
        setUser({ name, lastName, phoneNumber: number })
        navigation.navigate('RegisterCode')
        setName('');
        setLastName('')
        setNumber('');
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
        disabledButton: name && lastName && number ? false : true
    }
}