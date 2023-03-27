import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Modal, View } from 'react-native';

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

import { RatingStackNavigationName, TopScreenProps } from '~navigation/RatingsStack/type';
import { useColor } from '~hooks/useColor';
import { getTopFilms } from '~store/selectors/getTopFilms';
import { debounce } from 'lodash';
import { filterTopFilms } from '~store/sagas/sagasActions';
import { width } from '~constants/dimensions';
import { getModalType } from '~store/selectors/getModalType';
import { setModalType } from '~store/reducers/modalSlice';
import { CentredView, ModalView } from '~components/style';
import { Filters } from '~components/Filters';
import { maxToRenderPerBatch } from '~constants/flatlist';

export const TopScreen: FC<TopScreenProps> = memo(({ navigation }) => {
    const type = useAppSelector(getModalType);
    const [search, setSearch] = useState('');

    const { topFilms, isLoading, filteredTopFilms } = useAppSelector(getTopFilms);

    const { bgColor, textColor, bgColorModal } = useColor();

    const onFilmOpenPress = (value: ITopFilm) => () => {
        navigation.navigate(RatingStackNavigationName.FILM_RATING, { film: value });
    };

    const onFilterOpenPress = () => {
        setSearch('');
        dispatch(setModalType({ type: 'filters' }));
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
        [textColor],
    );

    return (
        <ScreenContainer bgColor={bgColor}>
            {type === 'filters' && (
                <Modal animationType="slide" transparent={true} visible={!!type}>
                    <CentredView>
                        <ModalView bgColor={bgColorModal}>
                            <Filters />
                        </ModalView>
                    </CentredView>
                </Modal>
            )}
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
                        maxToRenderPerBatch={maxToRenderPerBatch}
                        data={filteredTopFilms.length ? filteredTopFilms : topFilms}
                        renderItem={renderTopFilmItem}
                        getItemLayout={(data, index) => ({ length: width * 0.5, offset: width * 0.5 * index, index })}
                    />
                </View>
            )}
        </ScreenContainer>
    );
});
