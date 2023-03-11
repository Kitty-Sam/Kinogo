import React, { FC, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { FilmDetailsScreenProps, HomeStackNavigationName } from '~navigation/HomeStack/type';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { getFilms } from '~store/selectors/getFilms';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColor } from '~hooks/useColor';
import { THEME_COLORS } from '~constants/theme';
// import { fetchFilmDetails } from '~store/sagas/sagasActions';
import { poster } from '~constants/posters';
import {
    BadgeText,
    ButtonText,
    CommentContainer,
    CommentTextInput,
    DescriptionText,
    FilmTitleText,
    Image,
    RowCenterContainer,
    RowContainer,
    ScreenContainer,
    styles,
    TextContainer,
    TicketsButtonContainer,
} from '~screens/HomeSreens/FilmDetailsScreen/style';

export const FilmDetailsScreen: FC<FilmDetailsScreenProps> = ({ route, navigation }) => {
    const { film } = route.params;
    const { genre, title, synopsis, type } = film;

    const { filmDetails } = useAppSelector(getFilms);
    const { countries, languages } = filmDetails;

    const { textColor, bgColor } = useColor();

    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(fetchFilmDetails({ id: film.imdbid }));
    }, [film]);

    const goBackPress = () => {
        navigation.goBack();
    };

    const onGetTicketsPress = () => {
        navigation.navigate(HomeStackNavigationName.CINEMA, { film });
    };

    return (
        <ScreenContainer bgColor={bgColor}>
            <StatusBar hidden />
            <Image source={{ uri: film.imageurl.length ? film.imageurl[0] : poster }} />
            <TicketsButtonContainer onPress={onGetTicketsPress}>
                <Icon name={'rocket'} size={24} color={textColor} />
                <ButtonText textColor={textColor}>Get Tickets</ButtonText>
            </TicketsButtonContainer>
            <Icon name={'arrow-back'} onPress={goBackPress} size={24} style={styles.iconBack} color={textColor} />

            <TextContainer>
                <RowContainer>
                    <BadgeText textColor={textColor}>{genre[0]}</BadgeText>
                    <BadgeText textColor={textColor}>{type}</BadgeText>
                </RowContainer>
                <FilmTitleText textColor={textColor}>{title}</FilmTitleText>
                <DescriptionText textColor={textColor}>{synopsis}</DescriptionText>
            </TextContainer>

            <CommentContainer>
                <RowCenterContainer>
                    <Icon name={'person'} size={24} style={styles.iconAvatar} color={THEME_COLORS.placeholder} />
                    <CommentTextInput placeholder="Add a comment" placeholderTextColor={THEME_COLORS.placeholder} />
                    <Icon name={'send'} size={18} style={styles.iconSend} color={THEME_COLORS.placeholder} />
                </RowCenterContainer>
            </CommentContainer>
        </ScreenContainer>
    );
};
