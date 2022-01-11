import apisauce from 'apisauce';

const create = () => {
    const api = apisauce.create({
        baseURL: process.env.REACT_APP_DOCK_ENDPOINT,
        headers: { Authorization: `Bearer ${process.env.REACT_APP_DOCK_API_KEYS}` },
    });

    const postRequest = (url, data) => {
        return api.post(url, data);

    };
    const getRequest = (url) => {
        return api.get(
            url,
            {},
        );
    };
    const putRequest = (url, data) => {
        return api.put(url, data);
    };

    const deleteRequest = (url) => {
        return api.delete(
            url, {});
    };

    return {
        postRequest,
        getRequest,
        putRequest,
        deleteRequest,
    };
};
export default {
    create
};
