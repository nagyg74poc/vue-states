import {GET_USER_ERROR, UNAUTHENTICATED} from "../../mutation-types";
import {http, httpService} from '../../../services/httpService'
import * as Cookies from 'js-cookie';

export async function logoutAction({commit, state, dispatch}: any, payload: any): Promise<void> {
    try {

        const url = `/logout`;
        const method = 'GET';

        await httpService.instance({url, method})
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