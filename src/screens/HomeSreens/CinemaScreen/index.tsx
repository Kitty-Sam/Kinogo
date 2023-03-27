import React, { FC, useCallback, useState } from 'react';
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
import { today, todayWithMonth } from '~src/helpers/getDateNow';
import { THEME_COLORS } from '~constants/theme';
import {
    ISeat,
    ISession,
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
import { initialNumToRender, numColumnsForCinema } from '~constants/flatlist';

export const CinemaScreen: FC<CinemaScreenProps> = ({ route, navigation }) => {
    const [isPressedScheduleItemId, setIsPressedScheduleItemId] = useState('');
    const [seatPressed, setSeatPressed] = useState<Array<string>>([]);
    const [markedDate, setMarkedDate] = useState(today);

    const { film } = route.params;

    const dispatch = useAppDispatch();

    const { textColor, bgColor, bgColorModal } = useColor();

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
    };

    const renderScheduleItem = useCallback(
        ({ item }: { item: ISession }) => (
            <ScheduleItemContainer
                bgColor={bgColorModal}
                onPress={scheduleItemPress(item.id)}
                style={isPressedScheduleItemId === item.id && { borderColor: THEME_COLORS.button }}
            >
                <AdditionalBoldText textColor={textColor}>
                    {item.dateStart} - {item.dateEnd}
                </AdditionalBoldText>
                <AdditionalText textColor={textColor}>Cinema: {item.type}</AdditionalText>
                <AdditionalText textColor={textColor}>{item.seats} seats available</AdditionalText>
            </ScheduleItemContainer>
        ),
        [isPressedScheduleItemId, bgColorModal, textColor],
    );

    const renderSeatItem = useCallback(
        ({ item }: { item: ISeat }) => (
            <SeatContainer
                style={seatPressed.includes(item.id) && { backgroundColor: THEME_COLORS.seatSelected }}
                onPress={onSeatPress(item.id)}
            />
        ),
        [seatPressed],
    );

    const onCalendarPress = () => {
        calendar.onOpen();
    };

    return (
        <RootContainer bgColor={bgColor}>
            <BackContainer>
                <Icon
                    name={'arrow-back'}
                    onPress={goBackPress}
                    size={THEME_COLORS.iconSize['24']}
                    style={styles.iconBack}
                    color={textColor}
                />
                <HeaderText textColor={textColor}>Choose cinema & Seats</HeaderText>
            </BackContainer>

            <ScheduleContainer>
                <View>
                    <HeaderText textColor={textColor}>Schedule</HeaderText>
                    <AdditionalText textColor={textColor}>Date: {todayWithMonth}</AdditionalText>
                </View>
                <Icon
                    name={'calendar-outline'}
                    size={THEME_COLORS.iconSize['18']}
                    color={textColor}
                    onPress={onCalendarPress}
                />
            </ScheduleContainer>
            <View>
                <FlatList
                    initialNumToRender={initialNumToRender}
                    data={schedule}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderScheduleItem}
                />
            </View>

            <SeatsContainer>
                <HeaderText textColor={textColor}>Seats</HeaderText>
            </SeatsContainer>

            <ScreenText textColor={textColor}>Screen</ScreenText>

            <ScreenContainer>
                <FlatList
                    data={seatsLeftArr}
                    numColumns={numColumnsForCinema}
                    columnWrapperStyle={styles.columnWrapperLeft}
                    renderItem={renderSeatItem}
                />
                <Gap />
                <FlatList
                    data={seatsRightArr}
                    numColumns={numColumnsForCinema}
                    columnWrapperStyle={styles.columnWrapperRight}
                    renderItem={renderSeatItem}
                />
            </ScreenContainer>

            <SeatsExplanationContainer>
                {seatsSorts.map((seat) => (
                    <SeatWrapper key={seat}>
                        <SeatContainer
                            style={{
                                backgroundColor:
                                    seat === SeatType.RESERVED
                                        ? THEME_COLORS.seatReserved
                                        : seat === SeatType.SELECTED
                                        ? THEME_COLORS.seatSelected
                                        : undefined,
                            }}
                        />
                        <AdditionalText textColor={textColor}>{seat}</AdditionalText>
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
