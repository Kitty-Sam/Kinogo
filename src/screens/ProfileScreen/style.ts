import styled from 'styled-components/native';

export const ScreenContainer = styled.SafeAreaView<{ bgColor: string }>`
    flex: 1;
    align-items: center;
    background-color: ${(props) => props.bgColor};
`;

export const ButtonsContainer = styled.View`
    padding-top: 32px;
    flex-direction: row;
    margin: 20px 48px;
`;

export const Avatar = styled.Image`
    margin-top: 100px;
    width: 150px;
    height: 150px;
    border-radius: 75px;
`;

export const ProfileNameText = styled.Text<{ textColor: string }>`
    padding: 10px 0;
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.textColor};
`;

export const SmallLogo = styled.Image`
    position: absolute;
    bottom: 16px;
`;
