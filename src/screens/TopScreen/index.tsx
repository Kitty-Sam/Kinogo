import React, { FC } from 'react';
import { Text } from 'react-native';
import { TopTabScreenProps } from '~screens/TopScreen/type';
import { SafeAreaView } from 'react-native-safe-area-context';

export const TopScreen: FC<TopTabScreenProps> = () => {
    return (
        <SafeAreaView>
            <Text>Top</Text>
        </SafeAreaView>
    );
};
