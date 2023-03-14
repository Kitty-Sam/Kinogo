import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNewOrderPayloadType } from '~store/sagas/sagasActions';

export interface IUser {
    userName: string;
    userSurname: string;
    userId: string;
    photo: string;
}
interface UserState {
    user: {
        id: string;
    };
    users: Array<IUser>;
    isLoading: boolean;
    error: string;
    isLogged: boolean;
    currentOrder: AddNewOrderPayloadType;
}

const initialState: UserState = {
    user: {} as { id: string },
    isLoading: false,
    error: '',
    isLogged: false,
    currentOrder: {} as AddNewOrderPayloadType,
    users: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadingUser(state) {
            state.isLoading = true;
        },
        isLogged(state, { payload }: PayloadAction<boolean>) {
            state.isLogged = payload;
        },
        loadingUserSuccess(state) {
            state.isLoading = false;
        },
        setCurrentUser(state, { payload }: PayloadAction<{ id: string }>) {
            state.user = payload;
        },
        setCurrentOrder(state, { payload }: PayloadAction<AddNewOrderPayloadType>) {
            state.currentOrder = payload;
        },
        fetchUsers(state, { payload }: PayloadAction<Array<IUser>>) {
            state.users = payload;
        },
    },
});

export default userSlice.reducer;
export const { isLogged, loadingUser, loadingUserSuccess, setCurrentUser, fetchUsers, setCurrentOrder } =
    userSlice.actions;
