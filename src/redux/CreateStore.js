import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform';

export default (rootReducer, rootSaga, history) => {
    const persistConfig = {
        key: 'root',
        storage,
        transforms: [immutablePersistenceTransform],
    };

    const middleware = [];
    const enhancers = [];

    const sagaMiddleware = createSagaMiddleware({ sagaMonitor: null });

    middleware.push(sagaMiddleware);
    middleware.push(routerMiddleware(history));

    enhancers.push(applyMiddleware(...middleware));

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(persistedReducer, compose(...enhancers));

    const persistor = persistStore(store);

    sagaMiddleware.run(rootSaga);

    return { store, persistor };
};
