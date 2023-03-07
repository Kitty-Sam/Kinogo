import styled from 'styled-components/native';

export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    background-color: ${(props) => props.bgColor};
`;

export const TitleText = styled.Text<{ textColor: string }>`
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.textColor};
`;

export const ImageContainer = styled.View`
    flex: 0.8;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 80%;
    height: 80%;
    object-fit: contain;
    border-radius: 10px;
`;

export const RatingContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const FilmTextContainer = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 16px;
`;
