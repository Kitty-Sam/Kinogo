import React, { FC } from 'react';
import { Alert, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { CalendarPropsType } from '~components/CalendarModal/type';

import { Calendar } from 'react-native-calendars';
import { THEME_COLORS } from '~constants/theme';
import moment from 'moment';
import { today } from '~src/helpers/getDateNow';
import { removeModalType } from '~store/reducers/modalSlice';
import { useAppDispatch } from '~store/hooks';
import { SimpleButton } from '~components/SimpleButton';
import { ModalTitle, ModalTitleContainer } from '~components/style';
import { styles } from '~components/CalendarModal/style';

export const CalendarModal: FC<CalendarPropsType> = ({ markedDate, setMarkedDate }) => {
    const { textColor } = useColor();
    const dispatch = useAppDispatch();

    const onCloseIconPress = () => {
        dispatch(removeModalType());
    };

    const mark = {
        [markedDate]: { selected: true, marked: true, selectedColor: THEME_COLORS.button },
    };

    const chooseDatePress = () => {
        dispatch(removeModalType());
    };

    return (
        <>
            <ModalTitleContainer>
                <ModalTitle textColor={textColor}>Calendar</ModalTitle>
                <Icon name={'close-circle-sharp'} onPress={onCloseIconPress} color={textColor} size={24} />
            </ModalTitleContainer>
            <View style={{ alignItems: 'center' }}>
                <Calendar
                    style={styles.calendar}
                    onDayPress={(day) => {
                        const TODAY = today;
                        const ORDER_DAY = moment(day).format('YYYY-DD-MM');

                        if (TODAY > ORDER_DAY) {
                            Alert.alert(`It's impossible to choose the past, ${day.dateString}`);
                            return;
                        }
                        setMarkedDate(day.dateString);
                    }}
                    markedDates={mark}
                    monthFormat={'yyyy MMMM'}
                    onMonthChange={(month) => {
                        console.log('month changed', month);
                    }}
                    hideExtraDays={true}
                    firstDay={1}
                    hideDayNames={true}
                    onPressArrowLeft={(subtractMonth) => subtractMonth()}
                    onPressArrowRight={(addMonth) => addMonth()}
                    disableAllTouchEventsForDisabledDays={true}
                    enableSwipeMonths={true}
                    theme={{
                        selectedDayTextColor: 'white',
                        todayTextColor: THEME_COLORS.button,
                        arrowColor: THEME_COLORS.button,
                    }}
                />
                <SimpleButton
                    title={'Choose'}
                    onPress={chooseDatePress}
                    backgroundColor={THEME_COLORS.button}
                    textColor={THEME_COLORS.lightColor}
                />
            </View>
        </>
    );
};
