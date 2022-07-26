import Instance from '../axios/Instance'

export const registerAccount = (data) =>{
    const url = `/api/site/account/register`;
    return Instance.post(url, data);
}

export const createAccount = (data) =>{
    const url = `/api/site/account/create`;
    return Instance.post(url, data);
}
