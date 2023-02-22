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

export const Logo = styled.Image`
    margin-top: ${width * 0.05}px;
`;

export const Text = styled.Text<{ textColor: string }>`
    font-size: 14px;
    font-style: italic;
    color: ${(props) => props.textColor};
`;

export const VersionText = styled.Text<{ textColor: string }>`
    font-size: 14px;
    font-style: italic;
    color: ${(props) => props.textColor};
    position: absolute;
    bottom: ${width * 0.05}px;
`;

export const LinkText = styled.Text<{ textColor: string }>`
    font-size: 14px;
    font-style: italic;
    text-decoration-line: underline;
    color: ${(props) => props.textColor};
    padding-right: 10%;
`;

export const TextContainer = styled.View`
    flex-direction: row;
`;

export const StudiosContainer = styled.View`
    padding-top: ${width * 0.06}px;
    padding-bottom: ${width * 0.05}px;
    flex-direction: row;
    width: 85%;
    align-items: center;
    justify-content: space-around;
`;
