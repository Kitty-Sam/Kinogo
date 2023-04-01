import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    background-color: ${(props) => props.bgColor};
`;

export const Title = styled.Text<{ textColor: string }>`
    font-size: 18px;
    color: ${(props) => props.textColor};
    padding: 18px;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const RowContainerWithPrice = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    justify-content: space-around;
    width: 80%;
`;

export const TitleText = styled.Text<{ textColor: string }>`
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.textColor};
`;

export const TitleRatingText = styled.Text<{ textColor: string }>`
    padding-left: 50px;
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.textColor};
`;

export const TicketText = styled.Text<{ textColor: string }>`
    padding-top: 4px;
    font-size: 12px;
    font-weight: 500;
    color: ${(props) => props.textColor};
`;

export const TicketContainer = styled.View<{ bgColor: string }>`
    width: 90%;
    background-color: ${THEME_COLORS.placeholder};
    flex-direction: row;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 18px;
    background-color: ${(props) => props.bgColor};
`;

export const TicketWrapper = styled.View<{ bgColor: string }>`
    width: 90%;
    background-color: ${THEME_COLORS.placeholder};
    flex-direction: row;
    border-radius: 10px;
    background-color: ${(props) => props.bgColor};
    margin-top: 10px;
    margin-left: 18px;
`;

export const Image = styled.Image`
    width: 100px;
    border-radius: 10px;
    border: 1px solid grey;
`;

export const TextContainer = styled.View`
    margin: 18px;
    align-items: flex-start;
    padding: 10px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    border-radius: 4px;
    padding: 8px;
    background-color: ${THEME_COLORS.button};
`;

export const ButtonText = styled.Text<{ textColor: string }>`
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.textColor};
`;

export const ListContainer = styled.View`
    flex: 1;
    margin-top: 20px;
`;
