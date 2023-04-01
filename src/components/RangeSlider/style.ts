import styled from 'styled-components/native';

export const RootContainer = styled.View`
    align-items: center;
    margin: 10px;
`;

export const LabelsContainer = styled.View`
    flex-direction: row;
`;

export const RangeText = styled.Text<{ textColor: string }>`
    font-size: 14px;
    margin-right: 24px;
    color: ${(props) => props.textColor};
`;
