import { AppThunk } from '@src/redux/store';
import { ApiAdapter } from '@src/api/ApiAdapter';
import { toggleTheme, fetch, setErrorMessage } from './uiReducer';

export const getTheme =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(fetch());
            try {
                const theme = await ApiAdapter.getTheme();
                dispatch(toggleTheme(theme));
            } catch (e) {
                dispatch(setErrorMessage(e.message));
            }
        };