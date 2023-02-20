import React, { FC } from 'react';
import { Text } from 'react-native';
import { ProfileTabScreenProps } from '~screens/ProfileScreen/type';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen: FC<ProfileTabScreenProps> = () => {
    return (
        <SafeAreaView>
            <Text>Profile</Text>
        </SafeAreaView>
    );
};
