import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { mangaApi } from 'api/manga';
import searchReducer from 'reducers/search';

const rootReducer = combineReducers({
  search: searchReducer,
  [mangaApi.reducerPath]: mangaApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mangaApi.middleware),
  });
};

export const store = setupStore({});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
