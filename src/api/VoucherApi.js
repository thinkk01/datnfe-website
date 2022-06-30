import Instance from '../axios/Instance'

export const getVoucherByCode = (code) =>{
    const url = `/api/site/get-voucher-by-code?code=${code}`;
    return Instance.get(url);
}
