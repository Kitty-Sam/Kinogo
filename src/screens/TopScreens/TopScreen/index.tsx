import React, { FC, useContext } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import {
    AdditionalText,
    ButtonContainer,
    FilmImage,
    RightBlockContainer,
    RowContainer,
    ScreenContainer,
    TextInputSearch,
    TitleText,
    TopFilmContainer,
} from '~screens/TopScreens/TopScreen/style';
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';
import { useAppSelector } from '~store/hooks';
import { ITopFilm } from '~store/models/ITopFilm';
import Icon from 'react-native-vector-icons/Ionicons';
import { useOpen } from '~hooks/useOpen';
import { FiltersModal } from '~components/FiltersModal';
import { RatingStackNavigationName, TopScreenProps } from '~navigation/RatingsStack/type';

export const TopScreen: FC<TopScreenProps> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);

    const filters = useOpen(false);

    const { topFilms, isLoading } = useAppSelector((state) => state.topFilms);

    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;
    const bgColor = theme === 'light' ? THEME_COLORS.light.background : THEME_COLORS.dark.background;

    const renderTopFilmItem = ({ item, index }: { item: ITopFilm; index: number }) => (
        <TopFilmContainer key={item.imdbid}>
            <FilmImage source={{ uri: item.image }} />
            <RightBlockContainer>
                <TitleText textColor={textColor}>{`${index + 1}. ${item.title} (${item.year})`}</TitleText>
                <RowContainer>
                    <AdditionalText textColor={textColor}>Genre:</AdditionalText>
                    {item.genre.map((el, index) => (
                        <AdditionalText key={index} textColor={textColor}>
                            {el}
                        </AdditionalText>
                    ))}
                </RowContainer>

                <RowContainer>
                    <AdditionalText textColor={textColor}>Authors:</AdditionalText>
                    {item.director.map((el, index) => (
                        <AdditionalText key={index} textColor={textColor}>
                            {el}
                        </AdditionalText>
                    ))}
                </RowContainer>

                <RowContainer>
                    <TitleText textColor={textColor}>{item.rating}</TitleText>
                    <Icon name="star" color={THEME_COLORS.button} style={{ marginLeft: 4 }} />
                </RowContainer>
                <ButtonContainer
                    onPress={() => navigation.navigate(RatingStackNavigationName.FILM_RATING, { film: item })}
                >
                    <AdditionalText textColor={'#fff'}>More</AdditionalText>
                    <Icon name="arrow-forward" color={'#fff'} />
                </ButtonContainer>
            </RightBlockContainer>
        </TopFilmContainer>
    );

    return (
        <ScreenContainer bgColor={bgColor}>
            <RowContainer>
                <TextInputSearch
                    placeholder="search movie in the top"
                    placeholderTextColor={THEME_COLORS.placeholder}
                />
                <Icon
                    name="options-outline"
                    color={THEME_COLORS.placeholder}
                    style={{ position: 'absolute', right: 18, top: 10 }}
                    size={18}
                    onPress={() => filters.onOpen()}
                />
            </RowContainer>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    style={{ flex: 1 }}
                    data={topFilms}
                    keyExtractor={(item) => item.imdbid}
                    renderItem={renderTopFilmItem}
                    pagingEnabled={true}
                />
            )}

            {filters.isOpen && <FiltersModal filtersModalOpen={filters.isOpen} setFiltersModalOpen={filters.onClose} />}
        </ScreenContainer>
    );
};
