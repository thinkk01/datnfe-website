import Instance from '../axios/Instance'

export const createOrder = (data) =>{
    const url = `api/site/create-order`;
    return Instance.post(url, data);
}

export const getAllOrder = (id) =>{
    const url = `api/site/get-orders?id=${id}`;
    return Instance.get(url);
}

export const getOrderById = (id) =>{
    const url = `api/site/get-order-by-id?id=${id}`;
    return Instance.get(url);
}

export const getOrderDetailByOrderId = (id) =>{
    const url = `api/site/get-order-detail-by-id?id=${id}`;
    return Instance.get(url);
}