import React, { FC, useEffect } from 'react';
import { Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { fetchingFilms } from '~store/reducers/ActionsCreators';
import { FilmsTabScreenProps } from '~screens/FilmsScreen/type';

export const FilmsScreen: FC<FilmsTabScreenProps> = () => {
    const { films } = useAppSelector((state) => state.films);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchingFilms());
    }, []);

    return (
        <>
            <Text>Redux toolkit</Text>
            {films.map((film) => (
                <Text key={film.id}>{film.title}</Text>
            ))}
        </>
    );
};
