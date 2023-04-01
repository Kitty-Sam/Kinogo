import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IModal {
    type: 'login' | 'edit' | 'settings' | 'signUp' | 'filters' | 'calendar' | null;
}

const initialState: IModal = {
    type: null,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalType(state, { payload }: PayloadAction<IModal>) {
            state.type = payload.type;
        },
        removeModalType(state) {
            state.type = null;
        },
    },
});

export default modalSlice.reducer;
export const { setModalType, removeModalType } = modalSlice.actions;
