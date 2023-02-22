import styled from 'styled-components/native';
import { width } from '~constants/dimensions';

export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    align-items: center;
    background-color: ${(props) => props.bgColor};
`;

export const ProfileButtonContainer = styled.TouchableOpacity`
    margin-top: ${width * 0.05}px;
    width: 50%;
    padding: 2% 0;
    border-radius: 10px;
    background-color: #767678;
    align-items: center;
    justify-content: center;
`;
export const ProfileButtonText = styled.Text`
    color: #fff;
    text-transform: uppercase;
`;

export const ThemeButtonContainer = styled.TouchableOpacity<{ bgColor: string }>`
    background-color: ${(props) => props.bgColor};
    width: 30%;
    padding: 2% 0;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const ThemeButtonText = styled.Text<{ textColor: string }>`
    color: ${(props) => props.textColor};
    text-transform: uppercase;
`;

export const ButtonsContainer = styled.View`
    padding-top: ${width * 0.1}px;
    flex-direction: row;
`;

export const Avatar = styled.Image`
    width: 150px;
    height: 150px;
    margin-top: ${width * 0.07}px;
`;

export const ProfileNameText = styled.Text<{ textColor: string }>`
    padding-top: 2%;
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.textColor};
`;

export const ProfileIDText = styled.Text<{ textColor: string }>`
    padding-top: 2%;
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.textColor};
`;

export const ProfileSexText = styled.Text<{ textColor: string }>`
    padding-top: 2%;
    padding-bottom: 5%;
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.textColor};
`;

export const SmallLogo = styled.Image`
    position: absolute;
    bottom: ${width * 0.05}px;
`;
