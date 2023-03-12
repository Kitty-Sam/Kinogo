import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

export const RootContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    background-color: ${(props) => props.bgColor};
`;
export const HeaderText = styled.Text<{ textColor: string }>`
    font-size: 15px;
    font-weight: 400;
    color: ${(props) => props.textColor};
`;

export const AdditionalText = styled.Text<{ textColor: string }>`
    font-size: 12px;
    font-weight: 300;
    color: ${(props) => props.textColor};
`;

export const AdditionalBoldText = styled.Text<{ textColor: string }>`
    font-size: 10px;
    font-weight: 600;
    color: ${(props) => props.textColor};
`;

export const ScreenText = styled.Text<{ textColor: string }>`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.textColor};
`;

export const BackContainer = styled.View`
    position: absolute;
    top: 40px;
    left: 18px;
    flex-direction: row;
    align-items: center;
`;

export const PriceContainer = styled.View`
    align-items: center;
`;

export const SeatsExplanationContainer = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const Gap = styled.View`
    width: 5%;
`;

export const BuyTicketBlock = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
`;

export const ScheduleContainer = styled.View`
    margin: 40px 18px 0 18px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

export const ScheduleItemContainer = styled.TouchableOpacity`
    height: 70px;
    border-width: 2px;
    border-color: ${THEME_COLORS.placeholder};
    padding: 10px;
    margin: 20px 18px;
    border-radius: 10px;
    background-color: ${THEME_COLORS.itemWrapper};
`;

export const SeatsContainer = styled.View`
    margin: 30px 18px 0 18px;
`;

export const ScreenContainer = styled.View`
    margin-top: 20px;
    flex-direction: row;
`;

export const SeatContainer = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border-width: 1px;
    border-color: ${THEME_COLORS.placeholder};
    margin: 8px;
    border-radius: 5px;
`;

export const SeatWrapper = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
    width: 40%;
    background-color: ${THEME_COLORS.button};
    border-radius: 10px;
    padding: 15px 20px;
    align-items: center;
`;

export const ButtonBoldText = styled.Text<{ textColor: string }>`
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.textColor};
`;

export const styles = StyleSheet.create({
    iconBack: { paddingRight: 8 },
    columnWrapperLeft: {
        marginHorizontal: 18,
        justifyContent: 'flex-end',
    },
    columnWrapperRight: {
        marginHorizontal: 18,
        justifyContent: 'flex-start',
    },
});
