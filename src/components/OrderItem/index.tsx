import React, { memo } from 'react';
import {
    ButtonContainer,
    ButtonText,
    Image,
    RowContainer,
    RowContainerWithPrice,
    TextContainer,
    TicketText,
    TicketWrapper,
    TitleRatingText,
    TitleText,
} from '~screens/TicketsScreens/style';
import { poster } from '~constants/posters';
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME_COLORS } from '~constants/theme';
import moment from 'moment/moment';
import { AddNewOrderPayloadType, removeOrder } from '~store/sagas/sagasActions';
import { useColor } from '~hooks/useColor';
import { useAppDispatch } from '~store/hooks';

export const OrderItem = memo(({ item }: { item: AddNewOrderPayloadType }) => {
    const { textColor, bgColorModal } = useColor();
    const dispatch = useAppDispatch();
    const removeOrderPress = (id: string) => () => {
        dispatch(removeOrder({ id }));
    };

    return (
        <TicketWrapper bgColor={bgColorModal}>
            <Image source={{ uri: item.film.imageurl?.length ? item.film.imageurl[0] : poster }} />
            <TextContainer>
                <RowContainer>
                    <TitleText textColor={textColor}>{item.film.title.slice(0, 8)}...</TitleText>
                    <TitleRatingText textColor={textColor}>{item.film.imdbrating}</TitleRatingText>
                    <Icon name="star" color={THEME_COLORS.button} />
                </RowContainer>
                <TicketText textColor={textColor}>{moment(item.markedDate).format('MMMM DD, YYYY')}</TicketText>
                <TicketText textColor={textColor}>{item.quantity} ticket(s)</TicketText>

                <RowContainerWithPrice>
                    <TitleText textColor={textColor}>{item.quantity * 5}$</TitleText>
                    <ButtonContainer onPress={removeOrderPress(item.id)}>
                        <ButtonText textColor={textColor}>Cancel</ButtonText>
                    </ButtonContainer>
                </RowContainerWithPrice>
            </TextContainer>
        </TicketWrapper>
    );
});
