import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from '../reducers/root_reducer';

export const configureAppStore = preloadedState => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: getDefaultMiddleware => getDefaultMiddleware()
            .concat(process.env.NODE_ENV !== 'production' ? logger : []),
    })

    return store;
}