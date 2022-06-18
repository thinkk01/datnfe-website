import Instance from '../axios/Instance'

export const createOrder = (data) =>{
    const url = `api/site/create-order`;
    return Instance.post(url, data);
}

export const getAllOrder = (id) =>{
    const url = `api/site/get-orders?id=${id}`;
    return Instance.get(url);
}