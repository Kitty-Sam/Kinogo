import React from 'react';
import { ScreenContainer, Title } from '~screens/TicketsScreens/style';
import { useColor } from '~hooks/useColor';
import { useAppSelector } from '~store/hooks';
import { getUserInfo } from '~store/selectors/getUserInfo';

export const UpcomingScreen = () => {
    const { bgColor, textColor, statusBar } = useColor();

    const { currentOrder } = useAppSelector(getUserInfo);
    console.log('currentOrder', currentOrder);

    return (
        <ScreenContainer bgColor={bgColor}>
            {/*<StatusBar barStyle={statusBar} />*/}
            <Title textColor={textColor}>upcoming</Title>
        </ScreenContainer>
    );
};
