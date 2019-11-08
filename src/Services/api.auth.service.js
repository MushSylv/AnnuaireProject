import getAxios from "./api.base";

export const auth = async (login, password) => {
    const response = await getAxios().post('/login', {
        login: login,
        password: password
    });
    return response.data;
}
