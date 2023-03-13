import React from 'react';
import { StatusBar } from 'react-native';
import { ScreenContainer, Title } from '~screens/TicketsScreens/style';
import { useColor } from '~hooks/useColor';

export const MissedScreen = () => {
    const { bgColor, textColor, statusBar } = useColor();

    return (
        <ScreenContainer bgColor={bgColor}>
            {/*<StatusBar barStyle={statusBar} />*/}
            <Title textColor={textColor}>missed</Title>
        </ScreenContainer>
    );
};
