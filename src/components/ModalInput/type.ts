import { ImageSourcePropType, KeyboardTypeOptions } from 'react-native';
import { ChangeEvent } from 'react';

export interface ModalInputPropsType {
    icon: ImageSourcePropType | undefined;
    placeholder: string;
    onChangeText: (e: string | ChangeEvent<any>) => void;
    name: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    value?: string;
}
