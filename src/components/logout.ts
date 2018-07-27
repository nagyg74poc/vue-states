import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {LOGOUT} from '../store/action-types';

@Component({
    template: `<div class="vue-logoutform">
        <div class="vuelogoutform__submit">
            <button @click="doLogout()">Logout</button>
        </div>
        </div>`,
})
export class logout extends Vue {

    doLogout(): void {
        this.$store.dispatch('user/' + LOGOUT);
    }

}

Vue.component('logout', logout);

export default logout;