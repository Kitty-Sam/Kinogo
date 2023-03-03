import React, { memo } from 'react';
import styled from 'styled-components/native';
import { THEME_COLORS } from '~constants/theme';

const THUMB_RADIUS = 6;

export const Thumb = memo(() => <ThumbContainer />);

export const ThumbContainer = styled.View`
    border-width: 1px;
    border-color: #fff;
    background-color: ${THEME_COLORS.scheduleWrapper};
    border-radius: ${THUMB_RADIUS}px;
    width: ${THUMB_RADIUS * 2}px;
    height: ${THUMB_RADIUS * 2}px;
`;
