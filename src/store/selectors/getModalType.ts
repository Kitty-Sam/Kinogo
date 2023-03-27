import { RootState } from '~store/store';

export const getModalType = (state: RootState) => state.modals.type;
