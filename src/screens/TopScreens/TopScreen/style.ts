import styled from 'styled-components/native';
import { width } from '~constants/dimensions';
import { THEME_COLORS } from '~constants/theme';

export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    align-items: center;
    background-color: ${(props) => props.bgColor};
`;

export const TitleText = styled.Text<{ textColor: string }>`
    font-size: 15px;
    font-weight: 700;
    color: ${(props) => props.textColor};
`;

export const AdditionalText = styled.Text<{ textColor: string }>`
    font-size: 12px;
    font-weight: 300;
    color: ${(props) => props.textColor};
    padding: 0 4px;
`;

export const TopFilmContainer = styled.View`
    flex-direction: row;
    width: ${width * 0.9}px;
    height: ${width * 0.5}px;
    margin-top: 16px;
`;

export const FilmImage = styled.Image`
    width: 35%;
    height: 100%;
    border-radius: 10px;
    object-fit: scale-down;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const RightBlockContainer = styled.View`
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    justify-content: space-around;
    margin-left: 8px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    background-color: ${THEME_COLORS.button};
    padding: 5px;
    border-radius: 5px;
`;

export const TextInputSearch = styled.TextInput<{ textColor: string }>`
    border-color: grey;
    border-width: 1px;
    flex: 2;
    margin: 4px 18px 20px 18px;
    padding: 12px;
    border-radius: 20px;
    color: ${(props) => props.textColor};
`;
