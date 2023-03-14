import React, { FC } from 'react';
import { Modal } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { CalendarPropsType } from '~components/CalendarModal/type';
import {
    ButtonContainer,
    ButtonText,
    CentredView,
    ModalTitle,
    ModalTitleContainer,
    ModalView,
    styles,
} from '~components/CalendarModal/style';
import { Calendar } from 'react-native-calendars';
import { THEME_COLORS } from '~constants/theme';

export const CalendarModal: FC<CalendarPropsType> = ({ calendarOpen, setCalendarOpen, markedDate, setMarkedDate }) => {
    const { bgColorModal, textColor } = useColor();

    const onCloseIconPress = () => {
        setCalendarOpen();
    };

    const mark = {
        [markedDate]: { selected: true, marked: true, selectedColor: THEME_COLORS.button },
    };

    const chooseDate = (date: any) => () => {
        console.log(date);
        setCalendarOpen();
    };

    return (
        <Modal animationType="slide" transparent={true} visible={calendarOpen}>
            <CentredView>
                <ModalView bgColor={bgColorModal}>
                    <ModalTitleContainer>
                        <ModalTitle textColor={textColor}>Calendar</ModalTitle>
                        <Icon name={'close-circle-sharp'} onPress={onCloseIconPress} color={textColor} size={24} />
                    </ModalTitleContainer>
                    <Calendar
                        style={styles.calendar}
                        onDayPress={(day) => {
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
                    <ButtonContainer onPress={chooseDate(markedDate)}>
                        <ButtonText>Choose</ButtonText>
                    </ButtonContainer>
                </ModalView>
            </CentredView>
        </Modal>
    );
};
