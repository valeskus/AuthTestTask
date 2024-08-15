import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Input } from '../Input';
import { useCodeInputsController } from './useCodeInputsController';

export type Props = {
  label: string;
  onChange: (value: number) => void;
  valid: boolean;
};

export function CodeInputs({ label, onChange, valid }: Props): JSX.Element {
  const {
    codePlaceholderList,
    getOnChangeHandler,
    refList,
    handleKeyPress,
    code
  } = useCodeInputsController(onChange);
  return (
    <View style={styles.codeInputsContainer}>
      <Text>{label}</Text>
      <View style={styles.codeInputsGroup}>
        {codePlaceholderList.map((item, index) => (
          <>{item === '-' && <Text style={styles.codeLine} key={index}>{item}</Text>}
            {item !== '-' &&
              <View style={styles.codeInput} key={index}>
                <Input
                  onChange={getOnChangeHandler(index)}
                  textAlign="center"
                  invalid={!valid}
                  refValue={refList[index]}
                  onKeyPressed={e => handleKeyPress(e, index)}
                  value={code[index]}
                  type="number-pad"
                  isSelectTextOnFocus
                  length={1}
                  placeholder='0'
                />
              </View>}
          </>
        ))}
      </View>
    </View>
  );
}