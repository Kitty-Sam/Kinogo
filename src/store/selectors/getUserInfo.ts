import { RootState } from '~store/store';

export const getUserInfo = (state: RootState) => state.user;
export const getCurrentUserId = (state: RootState) => state.user.user.id;
