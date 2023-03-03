import { ImageSourcePropType } from 'react-native';

export interface ButtonPropsType {
    title: string;
    onPress: () => void;
    icon: ImageSourcePropType | undefined;
    bgColor: string;
    textColor: string;
}
