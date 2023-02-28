import styled from 'styled-components/native';
import { width } from '~constants/dimensions';
export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    background-color: ${(props) => props.bgColor};
`;

export const ChapterTitleText = styled.Text<{ textColor: string }>`
    padding: ${width * 0.05}px ${width * 0.05}px;
    font-size: 22px;
    font-weight: 500;
    color: ${(props) => props.textColor};
`;

export const FilmTitleText = styled.Text<{ textColor: string }>`
    padding: ${width * 0.05}px ${width * 0.05}px;
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.textColor};
`;

export const CategoryFilmText = styled.Text<{ textColor: string }>`
    padding: 0 2%;
    font-size: 13px;
    font-weight: 400;
    color: ${(props) => props.textColor};
`;

export const CategoryFilmTextContainer = styled.TouchableOpacity<{ bgColor: string }>`
    border-radius: 5px;
    margin: 10px;
    height: 30px;
    justify-content: center;
    align-items: center;
    padding: 6px;
    background-color: ${(props) => props.bgColor};
`;

export const PlayerContainer = styled.View`
    width: 75%;
    height: ${width * 0.4}px;
    margin: 0 auto;
    border-radius: 10px;
`;

export const PlayerImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const CategoriesListContainer = styled.View``;

export const FilmContainer = styled.View`
    width: ${width}px;
    height: ${width * 0.8}px;
    align-items: center;
`;

export const FilmImage = styled.Image`
    width: 60%;
    height: 100%;
    border-radius: 10px;
    object-fit: scale-down;
`;
