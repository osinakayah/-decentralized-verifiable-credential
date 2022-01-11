import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import configureSore from './CreateStore';
import rootSaga from '../saga/index';
import {connectRouter} from "connected-react-router";



export const history = createBrowserHistory();
export default () => {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        documents: require('./DocumentsRedux').reducer,
    });

    return configureSore(rootReducer, rootSaga, history);
};
