import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import Immutable from 'seamless-immutable';
import DocumentsActions, { DocumentsTypes, getDocuments } from '../redux/DocumentsRedux';


function* attemptToIssueNewDocument(api, { data }) {

    const contexts = ['https://www.w3.org/2018/credentials/v1']
    if (data?.context  && data?.context !==  'https://www.w3.org/2018/credentials/v1') {
        contexts.push(data.context)
    }
    const credential = {
        context: contexts,
        type: [data.type? data.type: 'VerifiableCredential'],
        status: data?.status?.length > 0? {
            id: 'https://www.w3.org/2018/credentials/v1',
            type: data.status,
        }: undefined,
        issuer: process.env.REACT_APP_ISSUER_DID,
        subject: {
            id: data.id,
            name: data.subject
        }
    }

    const createVCResponse = yield call(api.postRequest, 'credentials', {
        persist: false,
        anchor: false,
        credential
    });

    if (createVCResponse.ok) {
        const {issuedDocuments} = yield select(getDocuments);
        const newDocuments = Array.isArray(issuedDocuments)? issuedDocuments.concat([createVCResponse.data]): [createVCResponse.data]
        yield put(DocumentsActions.documentsAddToList(newDocuments));
        alert("Verifiable Credential created successfully")
    } else {
        alert(createVCResponse.data?.message || createVCResponse.problem)
    }

}



function* attemptToCreatePresentation(api, { data }) {

    const {issuedDocuments} = yield select(getDocuments);

    const signedVS = Immutable.asMutable(issuedDocuments[parseInt(data.index)], {
        deep: true
    });

    const context = signedVS['@context'];
    const type = signedVS.type;
    if (data.context && data.context?.length > 0) {
        context.push(data.context)
    }
    if (data.type && data.type?.length > 0) {
        type.push(data.type)
    }
    const requestData = {
        holder:  data.id?.length > 0? data.id: signedVS.id,
        credentials: [
            {
                ...signedVS,
                ['@context']: context,
                type

            }
        ]
    }

    const createPresentationResponse = yield call(api.postRequest, 'presentations', requestData);

    if (createPresentationResponse.ok) {
        alert("Presentable created successfully")

    } else {
        alert(createPresentationResponse.data?.message || createPresentationResponse.problem)
    }

}

function* apiSaga(api) {
    yield all([takeEvery(DocumentsTypes.DOCUMENTS_CREATE, attemptToIssueNewDocument, api)]);
    yield all([takeEvery(DocumentsTypes.DOCUMENTS_CREATE_PRESENTATION, attemptToCreatePresentation, api)]);
}

export default apiSaga;
