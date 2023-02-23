import styled from 'styled-components/native';
import { width } from '~constants/dimensions';

export const CentredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    background-color: rgba(#0, 0.5);
`;

export const ModalView = styled.View<{ bgColor: string }>`
    margin: 20%;
    background-color: ${(props) => props.bgColor};
    border-radius: 10px;
    width: 75%;
    height: ${width * 0.5}px;
`;

export const ModalTitle = styled.Text<{ textColor: string }>`
    font-size: 20px;
    font-weight: 500;
    padding-top: 10%;
    color: ${(props) => props.textColor};
`;

export const ModalTitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const AdditionalText = styled.Text<{ textColor: string }>`
    padding: 7% 0 0 10%;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${(props) => props.textColor};
`;

export const SwitchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 2% 0 0 10%;
`;

export const Text = styled.Text<{ textColor: string }>`
    padding: 0 3%;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${(props) => props.textColor};
`;
