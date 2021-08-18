import { RootState, useAppSelector } from '@src/redux/store';
import { getThemeSelector } from '@src/redux/selectors';
import { createMuiTheme, Theme } from '@material-ui/core';
import { LIGHT } from '@src/constants';

const useCurrentTheme = (): Theme => {
    const currentTheme = useAppSelector((state: RootState) => getThemeSelector(state));

    return createMuiTheme({
        palette: {
            type: currentTheme || LIGHT,
        },
    });
};

export default useCurrentTheme;
