import styled from 'styled-components/native';

export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    align-items: center;
    background-color: ${(props) => props.bgColor};
`;

export const Title = styled.Text<{ textColor: string }>`
    font-size: 32px;
    font-style: italic;
    color: ${(props) => props.textColor};
    padding: 10% 10%;
`;

export const Logo = styled.Image`
    margin-top: 10%;
`;

export const Text = styled.Text<{ textColor: string }>`
    font-size: 14px;
    font-style: italic;

    color: ${(props) => props.textColor};
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
    padding-top: 10%;
    padding-bottom: 15%;
    flex-direction: row;
    width: 85%;
    align-items: center;
    justify-content: space-around;
`;
