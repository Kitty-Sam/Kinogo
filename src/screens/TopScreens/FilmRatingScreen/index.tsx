import React, { FC } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { RatingScreenProps } from '~navigation/RatingsStack/type';
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME_COLORS } from '~constants/theme';

export const FilmRatingScreen: FC<RatingScreenProps> = ({ navigation, route }) => {
    const { film } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    borderColor: 'red',
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image source={{ uri: film.image }} style={{ width: '75%', height: '60%', borderRadius: 10 }} />
            </View>
            <Text style={{ color: 'black', marginTop: 8, fontSize: 20 }}>{film.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>{film.rating}</Text>
                <Icon name="star" color={THEME_COLORS.button} size={16} />
            </View>
        </SafeAreaView>
    );
};
