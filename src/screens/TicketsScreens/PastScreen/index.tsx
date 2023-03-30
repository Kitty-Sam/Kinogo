import React, { useCallback, useEffect } from 'react';
import { ListContainer, ScreenContainer } from '~screens/TicketsScreens/style';
import { useColor } from '~hooks/useColor';
import { FlatList } from 'react-native';
import moment from 'moment';
import { AddNewOrderPayloadType, fetchOrders } from '~store/sagas/sagasActions';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { getUserInfo } from '~store/selectors/getUserInfo';
import { today } from '~src/helpers/getDateNow';

import { OrderItem } from '~components/OrderItem';

export const PastScreen = () => {
    const { bgColor, textColor } = useColor();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, []);

    const { orders } = useAppSelector(getUserInfo);

    const currentOrders = orders.filter((order) => moment(order.markedDate).format('YYYY-DD-MM') < today);

    const renderOrderItem = useCallback(
        ({ item }: { item: AddNewOrderPayloadType }) => <OrderItem item={item} />,
        [textColor],
    );

    return (
        <ScreenContainer bgColor={bgColor}>
            <ListContainer>
                <FlatList data={currentOrders} renderItem={renderOrderItem} />
            </ListContainer>
        </ScreenContainer>
    );
};
