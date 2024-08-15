import React, {
    createRef,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import {
    NativeSyntheticEvent,
    TextInput,
    TextInputChangeEventData,
    TextInputKeyPressEventData,
} from 'react-native';

export const useCodeInputsController = ( onChange: (value: number) => void) => {
    const [code, setCode] = useState<Array<string>>([]);
    const codePlaceholderList = [1, 2, 3, '-', 4, 5, 6]

    const refList = useMemo(
        () =>
            codePlaceholderList
                .map((): React.RefObject<TextInput> => createRef()),
        [],
    );

    const setFocus = useCallback(
        (text: string, index: number) => {
            if (text === '' && index >= 1) {
                return refList[index - 1].current?.focus();
            }
            if (text !== '' && index === 2) {
                return refList[index + 2].current?.focus();
            }
            if (text !== '' && index < codePlaceholderList.length - 1) {
                return refList[index + 1].current?.focus();
            }

            return refList[index].current?.focus();
        },
        [codePlaceholderList, refList],
    );

    const getOnChangeHandler = useCallback(
        (inputIndex: number) =>
            (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                const { text } = event.nativeEvent;

                const isPasteEvent = text.length === codePlaceholderList.length;

                if (isPasteEvent) {
                    setCode(text.split(''));
                    refList[codePlaceholderList.length - 1].current?.focus();
                } else {
                    const nextCode = [...code];

                    const isLastInput = inputIndex !== codePlaceholderList.length - 1;
                    const isInputLengthExceeded = text.length === 2;

                    let targetIndex = inputIndex;
                    if (isInputLengthExceeded && isLastInput) {
                        targetIndex = inputIndex + 1;
                    }

                    nextCode[targetIndex] = text[text.length - 1] || '';

                    setCode(nextCode);
                    setFocus(nextCode[inputIndex], inputIndex);
                }
            },

        [code, setFocus, refList, codePlaceholderList],
    );

    useEffect(() => {
        onChange(Number(code.join('').replace(/\D/g, '')));
    }, [code]);

    const handleKeyPress = useCallback(
        (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
            const nextCode = [...code];
            if (e.nativeEvent.key === 'Backspace' && index !== 0) {
                if(index === 4){
                    nextCode[index - 2] = '';
                    setCode(nextCode);
                    return refList[index - 2].current?.focus();
                }
                if (code[index] === '') {
                    nextCode[index - 1] = '';
                    setCode(nextCode);
                }
                return refList[index - 1].current?.focus();
            }

            if (index === codePlaceholderList.length - 1) {
                return refList[index].current?.focus();
            }

            if (e.nativeEvent.key === 'Backspace' && index === 0) {
                return refList[index].current?.focus();
            }

            return refList[index + 1].current?.focus();
        },
        [refList, codePlaceholderList, code],
    );

    return {
        codePlaceholderList,
        getOnChangeHandler,
        refList,
        handleKeyPress,
        code,
    };
};