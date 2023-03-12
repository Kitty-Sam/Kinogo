import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

export const CentredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    background-color: rgba(#0, 0.5);
`;

export const ModalView = styled.View<{ bgColor: string }>`
    background-color: ${(props) => props.bgColor};
    border-radius: 10px;
    flex: 0.5;
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

export const FormContainer = styled.View`
    flex: 1;
    margin: 0 18px;
`;

export const ButtonSignUpContainer = styled.TouchableOpacity`
    margin-top: 32px;
    padding: 8px 8px;
    border-radius: 10px;
    background-color: ${THEME_COLORS.button};
    width: 100px;
    align-items: center;
    justify-content: center;
`;

export const ButtonSignUpText = styled.Text`
    color: ${THEME_COLORS.lightColor};
`;

export const ErrorText = styled.Text`
    font-size: 8px;
    color: ${THEME_COLORS.error};
`;
