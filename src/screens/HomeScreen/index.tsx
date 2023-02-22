import React, { FC, useState } from 'react';
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

const categories = ['Action', 'Comedy', 'Romance', 'Thriller', 'Fantasy'];

const slideList = Array.from({ length: 5 }).map((_, i) => {
    return {
        id: i.toString(),
        image: `https://picsum.photos/1440/2842?random=${i}`,
    };
});

export const HomeScreen: FC<HomeTabScreenProps> = () => {
    const [category, setCategory] = useState('');

    const renderItem = ({ item }: { item: { id: string; image: string } }) => {
        return (
            <FilmContainer>
                <FilmImage source={{ uri: item.image }} />
                <FilmTitleText textColor={'#fff'}>Film title</FilmTitleText>
            </FilmContainer>
        );
    };

    return (
        <ScreenContainer bgColor={'#1e1f27'}>
            <ChapterTitleText textColor={'#fff'}>Coming Soon</ChapterTitleText>

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
                            bgColor={category === item ? '#D98639' : '#1e1f27'}
                            onPress={() => setCategory(item)}
                        >
                            <CategoryFilmText textColor={'#fff'}>{item}</CategoryFilmText>
                        </CategoryFilmTextContainer>
                    )}
                />
            </CategoriesListContainer>

            <ChapterTitleText textColor={'#fff'}>Now Showing</ChapterTitleText>

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
