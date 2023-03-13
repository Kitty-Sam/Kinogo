import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import {
    AdditionalText,
    ButtonContainer,
    FilmImage,
    RightBlockContainer,
    RowContainer,
    ScreenContainer,
    styles,
    TextInputSearch,
    TitleText,
    TopFilmContainer,
} from '~screens/TopScreens/TopScreen/style';
import { THEME_COLORS } from '~constants/theme';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { ITopFilm } from '~store/models/ITopFilm';
import Icon from 'react-native-vector-icons/Ionicons';
import { useOpen } from '~hooks/useOpen';
import { FiltersModal } from '~components/FiltersModal';
import { RatingStackNavigationName, TopScreenProps } from '~navigation/RatingsStack/type';
import { useColor } from '~hooks/useColor';
import { getTopFilms } from '~store/selectors/getTopFilms';
import { debounce } from 'lodash';
import { filterTopFilms } from '~store/sagas/sagasActions';
import { width } from '~constants/dimensions';

export const TopScreen: FC<TopScreenProps> = memo(({ navigation }) => {
    const { bgColor, textColor } = useColor();

    const [search, setSearch] = useState('');

    const filters = useOpen(false);

    const { topFilms, isLoading, filteredTopFilms } = useAppSelector(getTopFilms);

    const onFilmOpenPress = (value: ITopFilm) => () => {
        navigation.navigate(RatingStackNavigationName.FILM_RATING, { film: value });
    };

    const onFilterOpenPress = () => {
        setSearch('');
        filters.onOpen();
    };

    const dispatch = useAppDispatch();

    useEffect(() => {
        filterHandler();
    }, [search]);

    const filterBySearch = () => {
        if (search) {
            dispatch(
                filterTopFilms({
                    filters: {
                        lowYear: 1996,
                        highYear: 2023,
                        lowRating: 6,
                        highRating: 9,
                    },
                    search: search,
                }),
            );
        }
    };

    const filterHandler = useCallback(debounce(filterBySearch, 1000), [search]);

    const renderTopFilmItem = useCallback(
        ({ item, index }: { item: ITopFilm; index: number }) => (
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
                    <ButtonContainer onPress={onFilmOpenPress(item)}>
                        <AdditionalText textColor={THEME_COLORS.lightColor}>More</AdditionalText>
                        <Icon name="arrow-forward" color={THEME_COLORS.lightColor} />
                    </ButtonContainer>
                </RightBlockContainer>
            </TopFilmContainer>
        ),
        [],
    );

    return (
        <ScreenContainer bgColor={bgColor}>
            <RowContainer>
                <TextInputSearch
                    placeholder="search movie in the top"
                    placeholderTextColor={THEME_COLORS.placeholder}
                    textColor={textColor}
                    onChangeText={setSearch}
                    value={search}
                />
                <Icon
                    name="options-outline"
                    color={THEME_COLORS.placeholder}
                    style={styles.filterIcon}
                    size={18}
                    onPress={onFilterOpenPress}
                />
            </RowContainer>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <View>
                    <FlatList
                        maxToRenderPerBatch={10}
                        data={filteredTopFilms.length ? filteredTopFilms : topFilms}
                        renderItem={renderTopFilmItem}
                        getItemLayout={(data, index) => ({ length: width * 0.5, offset: width * 0.5 * index, index })}
                    />
                </View>
            )}

            {filters.isOpen && <FiltersModal filtersModalOpen={filters.isOpen} setFiltersModalOpen={filters.onClose} />}
        </ScreenContainer>
    );
});
