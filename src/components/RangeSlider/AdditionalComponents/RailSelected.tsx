import React, { memo } from 'react';
import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

export const RailSelected = memo(() => <RailSelectedContainer />);

export const RailSelectedContainer = styled.View`
    height: 5px;
    background-color: ${THEME_COLORS.button};
    border-radius: 2px;
`;
