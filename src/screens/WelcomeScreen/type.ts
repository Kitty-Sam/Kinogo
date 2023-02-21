import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { AuthStackNavigationName, AuthStackParamList } from '~navigation/AuthStack/type';

export type WelcomeTabScreenProps = NativeStackScreenProps<AuthStackParamList, AuthStackNavigationName.WELCOME>;
