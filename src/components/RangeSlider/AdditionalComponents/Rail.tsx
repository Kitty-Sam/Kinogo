import React, { memo } from 'react';
import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

export const Rail = memo(() => <RailContainer />);

export const RailContainer = styled.View`
    flex: 1;
    height: 5px;
    background-color: ${THEME_COLORS.scheduleWrapper};
    border-radius: 2px;
`;
