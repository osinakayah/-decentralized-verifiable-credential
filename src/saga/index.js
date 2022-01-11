import { fork, all } from 'redux-saga/effects';


import DocumentsSaga from './DocumentsSaga';
import API from '../services/APIService';

const api = API.create();

export default function* rootSaga() {
    yield all([
        yield fork(DocumentsSaga, api)
    ]);
}
