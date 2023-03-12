import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

export const CentredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(#0, 0.5);
`;

export const ModalView = styled.View<{ bgColor: string }>`
    background-color: ${(props) => props.bgColor};
    border-radius: 10px;
    width: 75%;
    height: 40%;
`;

export const ModalTitle = styled.Text<{ textColor: string }>`
    font-size: 20px;
    font-weight: 500;
    color: ${(props) => props.textColor};
`;

export const ModalTitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin: 24px 0;
`;

export const AdditionalText = styled.Text<{ textColor: string }>`
    padding: 8px 0 0 16px;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${(props) => props.textColor};
`;

export const Text = styled.Text<{ textColor: string }>`
    padding: 0 10px;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${(props) => props.textColor};
`;

export const BackDrop = styled.TouchableWithoutFeedback`
    flex: 1;
`;

export const ButtonContainer = styled.TouchableOpacity`
    width: 80px;
    padding: 8px 8px;
    border-radius: 10px;
    background-color: ${THEME_COLORS.button};
    align-items: center;
    justify-content: center;
    margin: 20px 100px;
`;

export const ButtonText = styled.Text`
    color: ${THEME_COLORS.lightColor};
`;
