import {GET_USER_ERROR, SET_USER} from "../../mutation-types";
import {axiosInstance} from "../../../axiosInstance";

export async function getUserAction({commit, state}: any, payload: any): Promise<void> {
    try {

        const url = `/customer/${payload.UID}`;
        const method = 'GET';

        await axiosInstance({url, method})
            .then((response) => {
                const user = {
                    username: response.data.username,
                    balance: {
                        withdrawable: 0,
                        locked: 0,
                        bonus: 0,
                    }
                };

                commit(SET_USER, user);
            })
            .catch((error) => {
                throw new Error(error);
            });

    } catch (error) {
        commit(GET_USER_ERROR, error.message);
    }
}