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
    width: 80%;
    height: ${width * 1.2}px;
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

export const FormContainer = styled.View`
    margin-top: 5%;
    flex: 1;
    align-items: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
    margin-top: 10%;
    padding: 2% 4%;
    border-radius: 10px;
    background-color: #d98639;
`;

export const ButtonText = styled.Text`
    color: #fff;
`;

export const AdditionalText = styled.Text<{ textColor: string }>`
    margin-top: 7%;
    font-size: 14px;
    font-weight: 300;
    color: ${(props) => props.textColor};
`;
