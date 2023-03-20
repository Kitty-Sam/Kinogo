import React, { useEffect } from 'react';
import {
    ButtonContainer,
    ButtonText,
    Image,
    ListContainer,
    RowContainer,
    RowContainerWithPrice,
    ScreenContainer,
    TextContainer,
    TicketContainer,
    TicketText,
    TitleRatingText,
    TitleText,
} from '~screens/TicketsScreens/style';
import { useColor } from '~hooks/useColor';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { getUserInfo } from '~store/selectors/getUserInfo';
import { FlatList, StatusBar } from 'react-native';
import { today } from '~src/helpers/getDateNow';
import moment from 'moment/moment';
import { THEME_COLORS } from '~constants/theme';

import Icon from 'react-native-vector-icons/Ionicons';
import { fetchOrders, removeOrder } from '~store/sagas/sagasActions';

export const UpcomingScreen = () => {
    const { bgColorModal, bgColor, textColor, statusBar } = useColor();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, []);

    const { orders } = useAppSelector(getUserInfo);

    const currentOrders = orders.filter((order) => moment(order.markedDate).format('YYYY-DD-MM') >= today);

    const removeOrderPress = (id: string) => () => {
        dispatch(removeOrder({ id }));
    };

    return (
        <ScreenContainer bgColor={bgColor}>
            <StatusBar barStyle={statusBar} />
            <ListContainer>
                {currentOrders.length ? (
                    <FlatList
                        data={currentOrders}
                        renderItem={({ item }) => (
                            <TicketContainer bgColor={bgColorModal}>
                                {/*<Image source={{ uri: item ? item.film?.imageurl[0] : poster }} />*/}
                                <Image />
                                <TextContainer>
                                    <RowContainer>
                                        <TitleText textColor={textColor}>{item.film.title.slice(0, 8)}...</TitleText>
                                        <TitleRatingText textColor={textColor}>{item.film.imdbrating}</TitleRatingText>
                                        <Icon name="star" color={THEME_COLORS.button} />
                                    </RowContainer>
                                    <TicketText textColor={textColor}>
                                        {moment(item.markedDate).format('MMMM DD, YYYY')}
                                    </TicketText>
                                    <TicketText textColor={textColor}>{item.quantity} ticket(s)</TicketText>

                                    <RowContainerWithPrice>
                                        <TitleText textColor={textColor}>{item.quantity * 5}$</TitleText>
                                        <ButtonContainer onPress={removeOrderPress(item.id)}>
                                            <ButtonText textColor={textColor}>Cancel</ButtonText>
                                        </ButtonContainer>
                                    </RowContainerWithPrice>
                                </TextContainer>
                            </TicketContainer>
                        )}
                    />
                ) : (
                    <></>
                )}
            </ListContainer>
        </ScreenContainer>
    );
};
