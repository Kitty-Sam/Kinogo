import React from 'react';
import { ScreenContainer, Title } from '~screens/TicketsScreens/style';
import { useColor } from '~hooks/useColor';

export const UpcomingScreen = () => {
    const { bgColor, textColor, statusBar } = useColor();

    return (
        <ScreenContainer bgColor={bgColor}>
            {/*<StatusBar barStyle={statusBar} />*/}
            <Title textColor={textColor}>upcoming</Title>
        </ScreenContainer>
    );
};
