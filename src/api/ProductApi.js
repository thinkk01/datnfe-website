import Instance from '../axios/Instance'

export const getAllProducts = (page, size) =>{
    const url = `/api/site/get-products?page=${page}&size=${size}`;
    return Instance.get(url);
}

export const getTotalPage = () =>{
    const url = `/api/site/get-total-page`;
    return Instance.get(url);
}