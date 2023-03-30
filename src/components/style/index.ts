import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

// Modal
export const CentredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(#0, 0.5);
`;

export const CentredSimpleView = styled.View`
    align-items: center;
`;

export const ModalView = styled.View<{ bgColor: string }>`
    background-color: ${(props) => props.bgColor};
    border-radius: 10px;
    padding: 20px;
`;

// SignIn SignUp Edit Settings

export const ModalTitle = styled.Text<{ textColor: string }>`
    font-size: 20px;
    font-weight: 500;
    color: ${(props) => props.textColor};
`;

export const ModalTitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const FormContainer = styled.View`
    align-items: center;
`;

export const ErrorText = styled.Text`
    font-size: 8px;
    color: ${THEME_COLORS.error};
`;

export const AdditionalText = styled.Text<{ textColor: string }>`
    margin-top: 16px;
    font-size: 14px;
    font-weight: 300;
    color: ${(props) => props.textColor};
`;

export const SwitchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 16px 0 0 32px;
`;

export const Text = styled.Text<{ textColor: string }>`
    padding: 0 8px;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${(props) => props.textColor};
`;
