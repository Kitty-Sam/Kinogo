import React, { FC, useCallback, useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { THEME_COLORS } from '~constants/theme';
import { ActivityIndicator, Alert } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { getYoutubeIdFromURL } from '~src/helpers/getYoutubeIdFromURL';
import {
    AdditionalText,
    ChapterTitleText,
    Container,
    FilmTextContainer,
    PlayerContainer,
    RatingContainer,
    RowContainer,
    styles,
    TitleText,
} from '~components/FilmAdditionalInfo/style';
import { FilmAdditionalInfoPropsType } from '~components/FilmAdditionalInfo/type';
import { playerHeight, playerWidth } from '~components/FilmAdditionalInfo/player';

export const FilmAdditionalInfo: FC<FilmAdditionalInfoPropsType> = ({ film, openModal, textColor }) => {
    const [playing, setPlaying] = useState(false);

    const youtubeId = getYoutubeIdFromURL(film.trailer);

    const onStateChange = useCallback((state: string) => {
        if (state === 'ended') {
            setPlaying(false);
            Alert.alert('video has finished playing!');
        }
    }, []);

    return (
        <Container>
            <FilmTextContainer>
                <TitleText textColor={textColor}>{film.title}</TitleText>
                <RatingContainer>
                    <TitleText textColor={textColor}>{film.rating}</TitleText>
                    <Icon name="star" color={THEME_COLORS.button} size={24} style={styles.starIcon} />
                </RatingContainer>
                <Icon name={'hand-pointer-o'} onPress={openModal()} color="grey" size={24} style={styles.handIcon} />
            </FilmTextContainer>
            <PlayerContainer>
                {youtubeId ? (
                    <YoutubePlayer
                        height={playerHeight}
                        width={playerWidth}
                        play={playing}
                        videoId={youtubeId}
                        onChangeState={onStateChange}
                    />
                ) : (
                    <ActivityIndicator />
                )}
            </PlayerContainer>

            <RowContainer>
                <AdditionalText textColor={textColor}>{film.year}</AdditionalText>
                {film.genre.map((el, index) => (
                    <AdditionalText key={index} textColor={textColor}>
                        {el}
                    </AdditionalText>
                ))}
            </RowContainer>

            <RowContainer>
                <AdditionalText textColor={textColor}>Director: </AdditionalText>
                {film.director.map((el, index) => (
                    <AdditionalText key={index} textColor={textColor}>
                        {el}
                    </AdditionalText>
                ))}
            </RowContainer>

            <ChapterTitleText>About</ChapterTitleText>
            <AdditionalText textColor={textColor}>{film.description}</AdditionalText>
            <ChapterTitleText>REVIEWS</ChapterTitleText>
        </Container>
    );
};
