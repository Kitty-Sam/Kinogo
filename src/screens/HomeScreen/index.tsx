import React, { FC } from 'react';
import { Text } from 'react-native';
import { HomeTabScreenProps } from '~screens/HomeScreen/type';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen: FC<HomeTabScreenProps> = () => {
    return (
        <SafeAreaView>
            <Text>Home</Text>
        </SafeAreaView>
    );
};
