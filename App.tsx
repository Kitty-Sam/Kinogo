import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from './src/store/hooks';
import { fetchFilms } from './src/store/reducers/ActionsCreators';

export const App = () => {
    const { films, isLoading } = useAppSelector((state) => state.films);
    const dispatch = useAppDispatch();

    console.log('films', films);

    useEffect(() => {
        dispatch(fetchFilms());
    }, []);

    return (
        <SafeAreaView>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <>
                    <Text>Redux toolkit</Text>
                    {films.map((film) => (
                        <Text key={film.id}>{film.title}</Text>
                    ))}
                </>
            )}
        </SafeAreaView>
    );
};
