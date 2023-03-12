import React, { FC, useCallback, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import {
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
import { CARD_LEN, FilmCarouselItem, SPACING } from '~components/FilmCarouselItem';
import { poster } from '~constants/posters';
import { useColor } from '~hooks/useColor';
import { getFilms } from '~store/selectors/getFilms';
import { HomeScreenProps } from '~navigation/HomeStack/type';

export const HomeScreen: FC<HomeScreenProps> = () => {
    const [category, setCategory] = useState('Action');
    const [scrollX, setScrollX] = useState(0);

    const { films, isLoading } = useAppSelector(getFilms);
    const { bgColor, textColor } = useColor();

    const onCategoryPress = (item: string) => () => setCategory(item);

    const renderCategoryItem = ({ item }: { item: string }) => (
        <CategoryFilmTextContainer
            bgColor={category === item ? THEME_COLORS.button : bgColor}
            onPress={onCategoryPress(item)}
        >
            <CategoryFilmText textColor={textColor}>{item}</CategoryFilmText>
        </CategoryFilmTextContainer>
    );

    return (
        <ScreenContainer bgColor={bgColor}>
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
                            initialNumToRender={10}
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
                            initialNumToRender={10}
                            snapToAlignment="center"
                            disableScrollViewPanResponder={true}
                            disableIntervalMomentum={true}
                            scrollEventThrottle={16}
                            showsHorizontalScrollIndicator={false}
                            decelerationRate={0.8}
                            snapToInterval={CARD_LEN + SPACING * 1.5}
                            data={films.filter((el) => el.genre.includes(category))}
                            renderItem={({ item, index }) => (
                                <FilmCarouselItem index={index} item={item} scrollX={scrollX} />
                            )}
                            horizontal={true}
                            keyExtractor={(item) => item.imdbid}
                            onScroll={(event) => {
                                setScrollX(event.nativeEvent.contentOffset.x);
                            }}
                        />
                    </Animated.View>
                </>
            ) : (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            )}
        </ScreenContainer>
    );
};
