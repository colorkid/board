import { compose, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { UserReducer } from './userReducer';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
});

const composeEnhancers =
    // @ts-ignore
    (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const store =
    process.env.NODE_ENV !== 'test'
        ? configureStore({
              reducer: {
                  user: UserReducer,
              },
              // @ts-ignore
              composeEnhancers,
              middleware: customizedMiddleware,
          })
        : null;

// @ts-ignore
export type RootState = ReturnType<typeof store.getState>;
// @ts-ignore
export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;