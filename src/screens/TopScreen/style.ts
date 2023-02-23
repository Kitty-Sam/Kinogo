import styled from 'styled-components/native';
import { width } from '~constants/dimensions';

export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    align-items: center;
    background-color: ${(props) => props.bgColor};
`;

export const Title = styled.Text<{ textColor: string }>`
    font-size: 32px;
    font-style: italic;
    color: ${(props) => props.textColor};
    padding: ${width * 0.05}px;
`;
