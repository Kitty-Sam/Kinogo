import styled from 'styled-components/native';
import { width } from '~constants/dimensions';

export const InputIcon = styled.Image<{ color: string }>`
    width: 14px;
    height: 15px;
    color: ${(props) => props.color};
`;

export const Input = styled.TextInput`
    font-size: 14px;
    font-weight: 300;
    width: 70%;
    border-bottom-width: 1px;
    border-color: #ccc;
    border-style: solid;
    padding: 4px;
    margin: ${width * 0.03}px;
    color: #fff;
`;

export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
