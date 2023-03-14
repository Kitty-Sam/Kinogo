import React, { FC, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';

import { CinemaScreenProps, RootStackNavigationName } from '~navigation/RootStack/type';
import Icon from 'react-native-vector-icons/Ionicons';

import { useColor } from '~hooks/useColor';
import {
    AdditionalBoldText,
    AdditionalText,
    BackContainer,
    ButtonBoldText,
    ButtonContainer,
    BuyTicketBlock,
    Gap,
    HeaderText,
    PriceContainer,
    RootContainer,
    ScheduleContainer,
    ScheduleItemContainer,
    ScreenContainer,
    ScreenText,
    SeatContainer,
    SeatsContainer,
    SeatsExplanationContainer,
    SeatWrapper,
    styles,
} from '~screens/HomeSreens/CinemaScreen/style';
import { getDateNow } from '~src/helpers/getDateNow';
import { THEME_COLORS } from '~constants/theme';
import {
    schedule,
    seatsLeftArr,
    seatsRightArr,
    seatsSorts,
    SeatType,
} from '~screens/HomeSreens/CinemaScreen/cinemaConst';
import { HomeStackNavigationName } from '~navigation/HomeStack/type';
import { useOpen } from '~hooks/useOpen';
import { CalendarModal } from '~components/CalendarModal';
import { addNewOrder } from '~store/sagas/sagasActions';
import { useAppDispatch } from '~store/hooks';

export const CinemaScreen: FC<CinemaScreenProps> = ({ route, navigation }) => {
    const [isPressedScheduleItemId, setIsPressedScheduleItemId] = useState('');
    const [seatPressed, setSeatPressed] = useState<Array<string>>([]);
    const [markedDate, setMarkedDate] = useState(() => getDateNow(false, true));

    const { film } = route.params;

    const { textColor, bgColor } = useColor();

    const calendar = useOpen(false);

    const goBackPress = () => {
        navigation.goBack();
    };

    const scheduleItemPress = (id: string) => () => {
        setSeatPressed([]);
        setIsPressedScheduleItemId(id);
    };

    const onSeatPress = (id: string) => () => {
        if (!isPressedScheduleItemId) {
            Alert.alert('Choose date and time first');
            return;
        }
        setSeatPressed((prev) => (prev.includes(id) ? prev.filter((el) => el !== id) : prev.concat(id)));
    };

    const dispatch = useAppDispatch();

    const onBuyNowPress = () => {
        navigation.navigate(RootStackNavigationName.HOME, {
            screen: HomeStackNavigationName.TICKETS_STACK,
        });
        dispatch(
            addNewOrder({
                markedDate,
                film,
                session: schedule.filter((el) => el.id === isPressedScheduleItemId)[0],
                quantity: seatPressed.length,
                id: Date.now().toString(),
            }),
        );
        // console.log(
        //     'order',
        //     markedDate,
        //     film,
        //     seatPressed.length,
        //     schedule.filter((el) => el.id === isPressedScheduleItemId)[0],
        // );
    };

    const onCalendarPress = () => {
        calendar.onOpen();
    };

    return (
        <RootContainer bgColor={bgColor}>
            <BackContainer>
                <Icon name={'arrow-back'} onPress={goBackPress} size={24} style={styles.iconBack} color={textColor} />
                <HeaderText textColor={textColor}>Choose cinema & Seats</HeaderText>
            </BackContainer>

            <ScheduleContainer>
                <View>
                    <HeaderText textColor={textColor}>Schedule</HeaderText>
                    <AdditionalText textColor={textColor}>{getDateNow()}</AdditionalText>
                </View>
                <Icon name={'calendar-outline'} size={18} color={textColor} onPress={onCalendarPress} />
            </ScheduleContainer>
            <View>
                <FlatList
                    data={schedule}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ScheduleItemContainer
                            onPress={scheduleItemPress(item.id)}
                            style={isPressedScheduleItemId === item.id && { borderColor: THEME_COLORS.button }}
                        >
                            <AdditionalBoldText textColor={textColor}>
                                {item.dateStart} - {item.dateEnd}
                            </AdditionalBoldText>
                            <AdditionalText textColor={textColor}>Cinema: {item.type}</AdditionalText>
                            <AdditionalText textColor={textColor}>{item.seats} seats available</AdditionalText>
                        </ScheduleItemContainer>
                    )}
                />
            </View>

            <SeatsContainer>
                <HeaderText textColor={textColor}>Seats</HeaderText>
            </SeatsContainer>

            <ScreenText textColor={textColor}>Screen</ScreenText>

            <ScreenContainer>
                <FlatList
                    data={seatsLeftArr}
                    numColumns={4}
                    columnWrapperStyle={styles.columnWrapperLeft}
                    renderItem={({ item }) => (
                        <SeatContainer
                            style={seatPressed.includes(item.id) && { backgroundColor: THEME_COLORS.seatSelected }}
                            onPress={onSeatPress(item.id)}
                        />
                    )}
                />
                <Gap />
                <FlatList
                    data={seatsRightArr}
                    numColumns={4}
                    columnWrapperStyle={styles.columnWrapperRight}
                    renderItem={({ item }) => (
                        <SeatContainer
                            style={seatPressed.includes(item.id) && { backgroundColor: THEME_COLORS.seatSelected }}
                            onPress={onSeatPress(item.id)}
                        />
                    )}
                />
            </ScreenContainer>

            <SeatsExplanationContainer>
                {seatsSorts.map((el) => (
                    <SeatWrapper key={el}>
                        <SeatContainer
                            style={{
                                backgroundColor:
                                    el === SeatType.RESERVED
                                        ? THEME_COLORS.seatReserved
                                        : el === SeatType.SELECTED
                                        ? THEME_COLORS.seatSelected
                                        : undefined,
                            }}
                        />
                        <AdditionalText textColor={textColor}>{el}</AdditionalText>
                    </SeatWrapper>
                ))}
            </SeatsExplanationContainer>

            <BuyTicketBlock>
                <PriceContainer>
                    <AdditionalText textColor={textColor}>{seatPressed.length} Seat(s)</AdditionalText>
                    <ButtonBoldText textColor={textColor}>{seatPressed.length * 5} $</ButtonBoldText>
                </PriceContainer>

                <ButtonContainer onPress={onBuyNowPress}>
                    <ButtonBoldText textColor={textColor}>Book Now</ButtonBoldText>
                </ButtonContainer>
            </BuyTicketBlock>

            {calendar.isOpen && (
                <CalendarModal
                    calendarOpen={calendar.isOpen}
                    setCalendarOpen={calendar.onClose}
                    markedDate={markedDate}
                    setMarkedDate={setMarkedDate}
                />
            )}
        </RootContainer>
    );
};
