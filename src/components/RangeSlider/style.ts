import styled from 'styled-components/native';

export const RootContainer = styled.View`
    align-items: center;
`;

export const LabelsContainer = styled.View`
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const RangeText = styled.Text<{ textColor: string }>`
    font-size: 14px;
    color: ${(props) => props.textColor};
`;
