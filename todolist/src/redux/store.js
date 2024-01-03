import { configureStore } from '@reduxjs/toolkit';

import {todosReducers} from './reducers/todosReducer';
import {tabReducer} from './reducers/tabReducer';

const store = configureStore({
    reducer: {
        todos: todosReducers,
        currentTab: tabReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production', // Automatically use Redux DevTools if not in production
});

export default store;
