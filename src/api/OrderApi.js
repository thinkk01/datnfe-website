import Instance from '../axios/Instance'

export const createOrder = (data) =>{
    const url = `api/site/create-order`;
    return Instance.post(url, data);
}