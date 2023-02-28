import React, { FC, useContext, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { HomeTabScreenProps } from '~screens/HomeScreen/type';
import {
    CategoriesListContainer,
    CategoryFilmText,
    CategoryFilmTextContainer,
    ChapterTitleText,
    FilmContainer,
    FilmImage,
    FilmTitleText,
    PlayerContainer,
    PlayerImage,
    ScreenContainer,
} from '~screens/HomeScreen/style';
import { ThemeContext } from '~context/ThemeContext';
import { THEME_COLORS } from '~constants/theme';
import { useAppSelector } from '~store/hooks';
import { IFilm } from '~store/models/IFilm';
import { categories } from '~constants/categories';
import { shallowEqual } from 'react-redux';

export const HomeScreen: FC<HomeTabScreenProps> = () => {
    const [category, setCategory] = useState('Action');

    const { films, isLoading } = useAppSelector((state) => state.films, shallowEqual);
    const { theme } = useContext(ThemeContext);
    console.log('films', films.length);

    const bgColor = theme === 'light' ? THEME_COLORS.light.background : THEME_COLORS.dark.background;
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;

    const onCategoryPress = (item: string) => () => setCategory(item);

    const renderCategoryItem = ({ item }: { item: string }) => (
        <CategoryFilmTextContainer
            bgColor={category === item ? THEME_COLORS.button : bgColor}
            onPress={onCategoryPress(item)}
        >
            <CategoryFilmText textColor={textColor}>{item}</CategoryFilmText>
        </CategoryFilmTextContainer>
    );

    const renderFilmItem = ({ item }: { item: IFilm }) => {
        return (
            <FilmContainer>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FilmImage
                        source={{
                            uri: item.imageurl.length ? item.imageurl[0] : 'https://picsum.photos/1440/2842?random=7',
                        }}
                    />
                )}
                <FilmTitleText textColor={textColor}>{item.title}</FilmTitleText>
            </FilmContainer>
        );
    };

    return (
        <ScreenContainer bgColor={bgColor}>
            <ChapterTitleText textColor={textColor}>Coming Soon</ChapterTitleText>

            <PlayerContainer>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <PlayerImage
                        source={{
                            uri: films.length ? films[0].imageurl[0] : 'https://picsum.photos/1440/2842?random=7',
                        }}
                    />
                )}
            </PlayerContainer>

            <CategoriesListContainer>
                <FlatList
                    initialNumToRender={10}
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={'center'}
                    data={categories}
                    renderItem={renderCategoryItem}
                />
            </CategoriesListContainer>

            <ChapterTitleText textColor={textColor}>Now Showing</ChapterTitleText>

            <FlatList
                initialNumToRender={10}
                data={films.filter((el) => el.genre.includes(category))}
                keyExtractor={(item) => item.imdbid}
                renderItem={renderFilmItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            />
        </ScreenContainer>
    );
};
