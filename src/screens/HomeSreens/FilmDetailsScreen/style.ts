import styled from 'styled-components/native';
import { width } from '~constants/dimensions';
import { THEME_COLORS } from '~constants/theme';
import { StyleSheet } from 'react-native';

export const ScreenContainer = styled.ScrollView<{ bgColor: string }>`
    flex: 1;
    background-color: ${(props) => props.bgColor};
`;

export const FilmTitleText = styled.Text<{ textColor: string }>`
    font-size: 18px;
    font-weight: 500;
    margin: 8px 0;
    color: ${(props) => props.textColor};
`;

export const DescriptionText = styled.Text<{ textColor: string }>`
    font-size: 12px;
    font-weight: 300;
    color: ${(props) => props.textColor};
`;

export const RowContainer = styled.View`
    flex-direction: row;
`;

export const RowCenterContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextContainer = styled.View`
    margin: 20px 24px 0 24px;
`;

export const CommentContainer = styled.View`
    margin: 50px 24px 0 24px;
`;
export const Image = styled.Image`
    width: ${width}px;
    height: ${width * 1.1}px;
    object-fit: scale-down;
`;

export const TicketsButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    border-radius: 10px;
    background-color: ${THEME_COLORS.button};
    margin: 10px;
    padding: 15px 30px;
    position: absolute;
    top: 300px;
    left: 100px;
`;

export const BadgeText = styled.Text<{ textColor: string }>`
    font-size: 13px;
    font-weight: 400;
    margin-right: 8px;
    color: ${(props) => props.textColor};
    background-color: ${THEME_COLORS.itemWrapper};
    align-self: flex-start;
    padding: 4px;
`;

export const ButtonText = styled.Text<{ textColor: string }>`
    font-size: 15px;
    font-weight: 700;
    color: ${(props) => props.textColor};
    padding-left: 8px;
`;

export const CommentTextInput = styled.TextInput`
    border-bottom-color: ${THEME_COLORS.placeholder};
    border-bottom-width: 1px;
    padding: 8px;
    width: 80%;
    color: ${THEME_COLORS.placeholder};
`;

export const styles = StyleSheet.create({
    iconBack: {
        position: 'absolute',
        top: 40,
        left: 18,
    },
    iconSend: {
        paddingLeft: 16,
    },
    iconAvatar: {
        paddingRight: 8,
    },
});
