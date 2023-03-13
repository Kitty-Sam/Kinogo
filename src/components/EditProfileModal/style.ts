import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

export const CentredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
    background-color: rgba(#0, 0.5);
`;

export const ModalView = styled.View<{ bgColor: string }>`
    background-color: ${(props) => props.bgColor};
    border-radius: 10px;
    flex: 0.6;
`;

export const ModalTitle = styled.Text<{ textColor: string }>`
    font-size: 20px;
    font-weight: 500;
    color: ${(props) => props.textColor};
`;

export const ModalTitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
`;

export const FormContainer = styled.View`
    margin-top: 12px;
    flex: 1;
    align-items: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
    margin-top: 32px;
    padding: 8px 8px;
    border-radius: 10px;
    background-color: ${THEME_COLORS.button};
`;

export const ButtonText = styled.Text`
    color: ${THEME_COLORS.lightColor};
`;

export const AdditionalText = styled.Text<{ textColor: string }>`
    margin-top: 16px;
    font-size: 14px;
    font-weight: 300;
    color: ${(props) => props.textColor};
`;
