import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';
import { StyleSheet } from 'react-native';

export const TitleText = styled.Text<{ textColor: string }>`
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.textColor};
`;

export const RatingContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const Container = styled.View`
    padding: 0 18px;
    align-items: center;
`;

export const FilmTextContainer = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px 16px;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const PlayerContainer = styled.View`
    margin-top: 40px;
`;

export const AdditionalText = styled.Text<{ textColor: string }>`
    font-size: 12px;
    font-weight: 300;
    color: ${(props) => props.textColor};
    padding: 0 4px;
    line-height: 18px;
`;

export const ChapterTitleText = styled.Text`
    margin: 20px 0;
    font-size: 16px;
    font-weight: 400;
    padding: 0 4px;
    line-height: 18px;
    color: ${THEME_COLORS.button};
`;

export const styles = StyleSheet.create({
    handIcon: {
        marginTop: 30,
    },
    starIcon: {
        paddingLeft: 10,
    },
});
