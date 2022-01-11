import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    documentsCreate: ['data'],
    documentsCreatePresentation: ['data'],
    documentsAddToList: ['issuedDocuments'],
});

export const DocumentsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    issuedDocuments: []
});


export const getDocuments = (state) => state.documents;

/* ------------- Reducers ------------- */
const createDocumentReducer = (state) => state;
const addNewDocumentToList = (state, {issuedDocuments}) => {

    return state.merge({ issuedDocuments });
};


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.DOCUMENTS_CREATE]: createDocumentReducer,
    [Types.DOCUMENTS_CREATE_PRESENTATION]: createDocumentReducer,
    [Types.DOCUMENTS_ADD_TO_LIST]: addNewDocumentToList,
});
