import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filmReducer from './reducers/filmSlice';
import topFilmReducer from './reducers/topFilmSlice';
import userReducer from './reducers/userSlice';

export const rootReducer = combineReducers({
    films: filmReducer,
    topFilms: topFilmReducer,
    user: userReducer,
});
export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
