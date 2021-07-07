import { Action, compose, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { UserReducer } from './user/userReducer';
import { SprintReducer } from './sprint/sprintReducer';
import { UiReducer } from './ui/uiReducer';
import { ThunkAction } from 'redux-thunk';
import { TaskReducer } from '@src/redux/task/taskReducer';

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
                  sprints: SprintReducer,
                  tasks: TaskReducer,
                  ui: UiReducer,
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
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;