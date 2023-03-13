import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

export const InputIcon = styled.Image<{ color: string }>`
    width: 14px;
    height: 15px;
    color: ${(props) => props.color};
`;

export const Input = styled.TextInput`
    font-size: 14px;
    font-weight: 300;
    width: 100%;
    border-bottom-width: 1px;
    border-color: ${THEME_COLORS.placeholder};
    border-style: solid;
    padding: 8px;
    margin: 8px;
    color: ${THEME_COLORS.placeholder};
`;

export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
