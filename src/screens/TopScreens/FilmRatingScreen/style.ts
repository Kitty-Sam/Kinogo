import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    background-color: ${(props) => props.bgColor};
`;

export const ImageContainer = styled.View`
    flex: 0.8;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 80%;
    height: 70%;
    object-fit: contain;
    border-radius: 10px;
`;

export const TextCommonContainer = styled.View`
    margin-top: 10px;
`;

export const BackContainer = styled.View`
    flex-direction: row;
    margin-top: 40px;
    margin-left: 18px;
`;

export const BackText = styled.Text`
    padding-left: 20px;
    color: ${THEME_COLORS.placeholder};
`;
