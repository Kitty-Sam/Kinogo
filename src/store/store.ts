import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filmReducer from './reducers/filmSlice';

const rootReducer = combineReducers({
    films: filmReducer,
});
export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
