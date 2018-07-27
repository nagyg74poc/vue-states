import {GET_USER_ERROR, UNAUTHENTICATED} from "../../mutation-types";
import {axiosInstance} from "../../../axiosInstance";
import * as Cookies from 'js-cookie';

export async function logoutAction({commit, state, dispatch}: any, payload: any): Promise<void> {
    try {

        const url = `/logout`;
        const method = 'GET';
        const withCredentials = true;
console.log(axiosInstance.defaults.headers.common);
        // const headers = {
        //     'X-Auth-Token':                 Cookies.get('XSRF-TOKEN'),
        //     // 'content-type': 'application/json',
        //     // 'Access-Control-Request-Headers': 'access-control-allow-origin, content-type',
        // };
        await axiosInstance({url, withCredentials, method})
            .then((response) => {
                // axios.defaults.headers.common['X-Auth-Token'] = null;
                Cookies.remove('JWT');
                commit(UNAUTHENTICATED);
                commit(GET_USER_ERROR);
            })
            .catch((error) => {
                commit(GET_USER_ERROR, error.message);
            });

    } catch (error) {
        commit(GET_USER_ERROR, error.message);
    }
}