import {SET_BALANCE} from "../../mutation-types";

export function changeBalance({commit, state}: any, payload: any): void {
    if (state.properties.isAuthenticated) {
        const data = {
            withdrawable: parseInt(payload.withdrawable || state.data.balance.withdrawable),
            locked: parseInt(payload.locked || state.data.balance.locked),
            bonus: parseInt(payload.bonus || state.data.balance.bonus),
        };

        commit(SET_BALANCE, data);
    }
}