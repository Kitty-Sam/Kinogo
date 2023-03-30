import React, { FC, memo, useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, NativeScrollEvent, NativeSyntheticEvent, StatusBar, View } from 'react-native';

import {
    ActivityIndicatorWrapper,
    CategoryFilmText,
    CategoryFilmTextContainer,
    ChapterTitleText,
    PlayerContainer,
    PlayerImage,
    ScreenContainer,
} from '~screens/HomeSreens/HomeScreen/style';
import { THEME_COLORS } from '~constants/theme';
import { useAppSelector } from '~store/hooks';

import { categories } from '~constants/categories';

import Animated from 'react-native-reanimated';
import { FilmCarouselItem } from '~components/FilmCarouselItem';
import { poster } from '~constants/posters';
import { useColor } from '~hooks/useColor';
import { getFilms } from '~store/selectors/getFilms';
import { HomeScreenProps } from '~navigation/HomeStack/type';
import { snapToInterval } from '~components/FilmCarouselItem/config';
import { IFilm } from '~store/models/IFilm';
import { decelerationRate, initialNumToRender, scrollEventThrottle } from '~constants/flatlist';

export const HomeScreen: FC<HomeScreenProps> = memo(() => {
    const [category, setCategory] = useState('Action');
    const [scrollX, setScrollX] = useState(0);

    const { films, isLoading } = useAppSelector(getFilms);
    const { bgColor, textColor, statusBar } = useColor();

    const onCategoryPress = (item: string) => () => setCategory(item);

    const filteredFilms = films.filter((el) => el.genre.includes(category));

    const renderCategoryItem = useCallback(
        ({ item }: { item: string }) => (
            <CategoryFilmTextContainer
                bgColor={category === item ? THEME_COLORS.button : bgColor}
                onPress={onCategoryPress(item)}
            >
                <CategoryFilmText textColor={textColor}>{item}</CategoryFilmText>
            </CategoryFilmTextContainer>
        ),
        [category, bgColor],
    );

    const renderFilmItem = useCallback(
        ({ item, index }: { item: IFilm; index: number }) => (
            <FilmCarouselItem index={index} item={item} scrollX={scrollX} />
        ),
        [scrollX],
    );

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        setScrollX(event.nativeEvent.contentOffset.x);
    };

    return (
        <ScreenContainer bgColor={bgColor}>
            <StatusBar barStyle={statusBar} />
            {!isLoading ? (
                <>
                    <ChapterTitleText textColor={textColor}>Coming Soon</ChapterTitleText>

                    <PlayerContainer>
                        <PlayerImage
                            source={{
                                uri: films.length ? films[0].imageurl[0] : poster,
                            }}
                        />
                    </PlayerContainer>

                    <View>
                        <FlatList
                            initialNumToRender={initialNumToRender}
                            pagingEnabled={true}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            snapToAlignment={'center'}
                            data={categories}
                            renderItem={renderCategoryItem}
                        />
                    </View>

                    <ChapterTitleText textColor={textColor}>Now Showing</ChapterTitleText>

                    <Animated.View>
                        <FlatList
                            initialNumToRender={initialNumToRender}
                            snapToAlignment="center"
                            disableScrollViewPanResponder={true}
                            disableIntervalMomentum={true}
                            scrollEventThrottle={scrollEventThrottle}
                            showsHorizontalScrollIndicator={false}
                            decelerationRate={decelerationRate}
                            snapToInterval={snapToInterval}
                            data={filteredFilms}
                            renderItem={renderFilmItem}
                            horizontal={true}
                            onScroll={onScroll}
                        />
                    </Animated.View>
                </>
            ) : (
                <ActivityIndicatorWrapper>
                    <ActivityIndicator />
                </ActivityIndicatorWrapper>
            )}
        </ScreenContainer>
    );
});
