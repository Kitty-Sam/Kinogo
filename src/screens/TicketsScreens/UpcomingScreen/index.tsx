import React, { useCallback, useEffect } from 'react';
import { ListContainer, ScreenContainer } from '~screens/TicketsScreens/style';
import { useColor } from '~hooks/useColor';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { getUserInfo } from '~store/selectors/getUserInfo';
import { FlatList, StatusBar } from 'react-native';
import { today } from '~src/helpers/getDateNow';
import moment from 'moment/moment';
import { AddNewOrderPayloadType, fetchOrders } from '~store/sagas/sagasActions';
import { OrderItem } from '~components/OrderItem';

export const UpcomingScreen = () => {
    const { bgColor, textColor, statusBar } = useColor();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, []);

    const { orders } = useAppSelector(getUserInfo);

    const currentOrders = orders.filter((order) => moment(order.markedDate).format('YYYY-DD-MM') >= today);

    const renderOrderItem = useCallback(
        ({ item }: { item: AddNewOrderPayloadType }) => <OrderItem item={item} />,
        [textColor],
    );

    return (
        <ScreenContainer bgColor={bgColor}>
            <StatusBar barStyle={statusBar} />
            <ListContainer>
                {currentOrders.length ? <FlatList data={currentOrders} renderItem={renderOrderItem} /> : <></>}
            </ListContainer>
        </ScreenContainer>
    );
};
