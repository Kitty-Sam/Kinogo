import React, { FC } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WelcomeTabScreenProps } from '~screens/WelcomeScreen/type';

export const WelcomeScreen: FC<WelcomeTabScreenProps> = () => {
    return (
        <SafeAreaView>
            <Text>Welcome</Text>
        </SafeAreaView>
    );
};
