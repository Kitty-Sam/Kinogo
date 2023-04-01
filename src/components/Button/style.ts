import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ bgColor: string }>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding: 16px 10px;
    border-radius: 10px;
    background-color: ${(props) => props.bgColor};
    margin: 12px;
`;

export const Title = styled.Text<{ textColor: string }>`
    font-size: 16px;
    color: ${(props) => props.textColor};
`;

export const Img = styled.Image`
    width: 18px;
    height: 18px;
    position: absolute;
    left: 20px;
`;
