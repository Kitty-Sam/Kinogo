import styled from 'styled-components/native';

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

export const AdditionalText = styled.Text<{ textColor: string }>`
    padding: 32px 0 0 32px;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
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

export const BackDrop = styled.TouchableWithoutFeedback`
    flex: 1;
    opacity: 0.5;
`;
