import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    align-items: center;
    background-color: ${(props) => props.bgColor};
`;

export const ProfileButtonContainer = styled.TouchableOpacity`
    margin-top: 18px;
    width: 50%;
    padding: 8px 0;
    border-radius: 10px;
    background-color: ${THEME_COLORS.placeholder};
    align-items: center;
    justify-content: center;
`;
export const ProfileButtonText = styled.Text`
    color: ${THEME_COLORS.lightColor};
    text-transform: uppercase;
`;

export const ThemeButtonContainer = styled.TouchableOpacity<{ bgColor: string }>`
    background-color: ${(props) => props.bgColor};
    flex: 1;
    padding: 8px 0;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const ThemeButtonText = styled.Text<{ textColor: string }>`
    color: ${(props) => props.textColor};
    text-transform: uppercase;
`;

export const ButtonsContainer = styled.View`
    padding-top: 32px;
    flex-direction: row;
    margin: 20px 48px;
`;

export const Avatar = styled.Image`
    width: 150px;
    height: 150px;
    margin-top: 32px;
`;

export const ProfileNameText = styled.Text<{ textColor: string }>`
    padding-top: 4px;
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.textColor};
`;

export const ProfileIDText = styled.Text<{ textColor: string }>`
    padding-top: 4px;
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.textColor};
`;

export const ProfileSexText = styled.Text<{ textColor: string }>`
    padding: 2px 0 4px 0;
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.textColor};
`;

export const SmallLogo = styled.Image`
    position: absolute;
    bottom: 16px;
`;
