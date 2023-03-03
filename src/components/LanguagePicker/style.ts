import styled from 'styled-components/native';

export const CentredView = styled.TouchableOpacity`
    flex-direction: column;
    align-items: center;
`;

export const PickerText = styled.Text<{ textColor: string }>`
    padding: 6px;
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.textColor};
`;

export const ItemContainer = styled.TouchableOpacity`
    flex-direction: row;
    width: 200px;
    padding: 10px;
    border-bottom-width: 1px;
    border-color: grey;
`;

export const DropDownContainer = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ContainerView = styled.View`
    flex-direction: row;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    border-width: 1px;
    border-color: grey;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
