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
    orders: AddNewOrderPayloadType[];
}

const initialState: UserState = {
    user: {} as { id: string },
    isLoading: false,
    error: '',
    isLogged: false,
    users: [],
    orders: [],
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
        addOrder(state, { payload }: PayloadAction<AddNewOrderPayloadType>) {
            state.orders = state.orders.concat(payload);
        },
        removeOrder(state, { payload }: PayloadAction<{ id: string }>) {
            state.orders = state.orders.filter((order) => order.id !== payload.id);
        },
        fetchUsers(state, { payload }: PayloadAction<Array<IUser>>) {
            state.users = payload;
        },
        updateUser(state, { payload }: PayloadAction<{ currentUserId: string; newName: string; newSurname: string }>) {
            let currentUser = state.users.filter((user) => user.userId === payload.currentUserId)[0];
            currentUser.userName = payload.newName;
            currentUser.userSurname = payload.newSurname;
            state.users = [...state.users, currentUser];
        },
        fetchOrders(state, { payload }: PayloadAction<Array<AddNewOrderPayloadType>>) {
            state.orders = payload;
        },
    },
});

export default userSlice.reducer;
export const {
    isLogged,
    loadingUser,
    loadingUserSuccess,
    setCurrentUser,
    fetchUsers,
    addOrder,
    fetchOrders,
    removeOrder,
    updateUser,
} = userSlice.actions;
