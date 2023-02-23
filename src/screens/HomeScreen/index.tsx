import React, { FC, useContext, useState } from 'react';
import { FlatList } from 'react-native';
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

const categories = ['Action', 'Comedy', 'Romance', 'Thriller', 'Fantasy'];

const slideList = Array.from({ length: 5 }).map((_, i) => {
    return {
        id: i.toString(),
        image: `https://picsum.photos/1440/2842?random=${i}`,
    };
});

export const HomeScreen: FC<HomeTabScreenProps> = () => {
    const [category, setCategory] = useState('');
    const { theme } = useContext(ThemeContext);

    const bgColor = theme === 'light' ? THEME_COLORS.light.background : THEME_COLORS.dark.background;
    const textColor = theme === 'light' ? THEME_COLORS.light.text : THEME_COLORS.dark.text;

    const renderItem = ({ item }: { item: { id: string; image: string } }) => {
        return (
            <FilmContainer>
                <FilmImage source={{ uri: item.image }} />
                <FilmTitleText textColor={textColor}>Film title</FilmTitleText>
            </FilmContainer>
        );
    };

    return (
        <ScreenContainer bgColor={bgColor}>
            <ChapterTitleText textColor={textColor}>Coming Soon</ChapterTitleText>

            <PlayerContainer>
                <PlayerImage source={{ uri: 'https://picsum.photos/1440/2842?random=7' }} />
            </PlayerContainer>

            <CategoriesListContainer>
                <FlatList
                    contentContainerStyle={{ flex: 1, justifyContent: 'space-around' }}
                    horizontal={true}
                    data={categories}
                    renderItem={({ item }) => (
                        <CategoryFilmTextContainer
                            bgColor={category === item ? THEME_COLORS.button : bgColor}
                            onPress={() => setCategory(item)}
                        >
                            <CategoryFilmText textColor={textColor}>{item}</CategoryFilmText>
                        </CategoryFilmTextContainer>
                    )}
                />
            </CategoriesListContainer>

            <ChapterTitleText textColor={textColor}>Now Showing</ChapterTitleText>

            <FlatList
                data={slideList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            />
        </ScreenContainer>
    );
};
