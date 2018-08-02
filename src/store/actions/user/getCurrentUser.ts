import {AUTHENTICATED, GET_USER_ERROR, SET_USER} from "../../mutation-types";
import {httpService} from '../../../services/httpService'

export async function getCurrentUser({commit}: any): Promise<void> {
    try {

        const url = `/current-customer`;
        const method = 'GET';
        await httpService.instance({url, method})
            .then((response) => {
                if (response.status === 200) {
                    commit(AUTHENTICATED);

                    const user = {
                        username: response.data.username,
                        balance: {
                            withdrawable: 0,
                            locked: 0,
                            bonus: 0,
                        }
                    };

                    commit(SET_USER, user);
                }
            })
            .catch((error) => {
                commit(GET_USER_ERROR, error.message);
            });

    } catch (error) {

    }
}