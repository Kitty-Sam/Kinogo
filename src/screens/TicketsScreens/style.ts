import styled from 'styled-components/native';

export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    background-color: ${(props) => props.bgColor};
`;

export const Title = styled.Text<{ textColor: string }>`
    font-size: 32px;
    font-style: italic;
    color: ${(props) => props.textColor};
    padding: 18px;
`;
