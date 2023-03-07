import React, { FC, useCallback, useContext } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

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
import { useColor } from '~hooks/useColor';

export const TopScreen: FC<TopScreenProps> = ({ navigation }) => {
    const { bgColor, textColor } = useColor();

    const filters = useOpen(false);

    const { topFilms, isLoading } = useAppSelector((state) => state.topFilms);

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
                    <AdditionalText textColor={THEME_COLORS.lightColor}>More</AdditionalText>
                    <Icon name="arrow-forward" color={THEME_COLORS.lightColor} />
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
                    textColor={textColor}
                />
                <Icon
                    name="options-outline"
                    color={THEME_COLORS.placeholder}
                    style={{ position: 'absolute', right: 32, top: 12 }}
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
                    ItemSeparatorComponent={() => <View />}
                />
            )}

            {filters.isOpen && <FiltersModal filtersModalOpen={filters.isOpen} setFiltersModalOpen={filters.onClose} />}
        </ScreenContainer>
    );
};
