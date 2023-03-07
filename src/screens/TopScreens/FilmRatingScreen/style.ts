import styled from 'styled-components/native';

export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    background-color: ${(props) => props.bgColor};
`;

export const ImageContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    //background-color: red;
`;

export const Image = styled.Image`
    width: 80%;
    height: 70%;
    object-fit: contain;
    border-radius: 10px;
`;

export const TextCommonContainer = styled.View`
    margin-top: 20px;
`;
