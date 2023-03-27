import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity<{ bgColor: string }>`
    margin-top: 32px;
    padding: 8px 8px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: ${(props) => props.bgColor};
`;

export const ButtonText = styled.Text<{ textColor: string }>`
    color: ${(props) => props.textColor};
    text-transform: uppercase;
`;
