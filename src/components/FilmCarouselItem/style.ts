import styled from 'styled-components/native';
import { width } from '~constants/dimensions';
import { StyleSheet } from 'react-native';
import { CARD_LEN } from '~components/FilmCarouselItem/index';

export const FilmTitleText = styled.Text<{ textColor: string }>`
    padding: ${width * 0.05}px ${width * 0.05}px;
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.textColor};
`;

export const ImageContainer = styled.Image`
    width: 100%;
    height: 100%;
`;

export const styles = StyleSheet.create({
    root: {
        width: CARD_LEN,
        height: width * 0.8,
        overflow: 'hidden',
        borderRadius: 15,
        borderColor: 'grey',
        borderWidth: 1,
    },
});
