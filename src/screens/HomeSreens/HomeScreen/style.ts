import styled from 'styled-components/native';
export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    background-color: ${(props) => props.bgColor};
`;

export const ChapterTitleText = styled.Text<{ textColor: string }>`
    padding: 18px;
    font-size: 22px;
    font-weight: 500;
    color: ${(props) => props.textColor};
`;

export const CategoryFilmText = styled.Text<{ textColor: string }>`
    padding: 0 4px;
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
    flex: 1;
    margin: 0 18px;
    border-radius: 10px;
`;

export const PlayerImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ActivityIndicatorWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
