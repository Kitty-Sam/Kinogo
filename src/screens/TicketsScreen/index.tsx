import React, { FC } from 'react';
import { Text } from 'react-native';
import { TicketsTabScreenProps } from '~screens/TicketsScreen/type';
import { SafeAreaView } from 'react-native-safe-area-context';

export const TicketsScreen: FC<TicketsTabScreenProps> = () => {
    return (
        <SafeAreaView>
            <Text>Tickets</Text>
        </SafeAreaView>
    );
};
