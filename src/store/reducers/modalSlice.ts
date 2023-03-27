import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IModal {
    type: 'login' | 'signUp' | 'filters' | 'calendar' | null;
}

const initialState: IModal = {
    type: null,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalType(state, { payload }: PayloadAction<IModal>) {
            state = payload;
        },
        removeModalType(state) {
            state.type = null;
        },
    },
});

export default modalSlice.reducer;
export const { setModalType } = modalSlice.actions;
