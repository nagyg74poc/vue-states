import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {LoginValues} from "../@types/loginValues";
import {createNamespacedHelpers} from 'vuex';
import {LOGIN} from '../store/action-types';

const {
    mapActions: mapUserActions,
    mapState: mapUserState,
} = createNamespacedHelpers(`user`);

@Component({
    data(): LoginValues {
        return {
            username: 'saratest5@test.com',
            password: 'test1234',
            businessUnitId: '116',
            ipAddress: ''
        };
    },
    template: `<div class="vue-loginform">
        <h3>Login Form</h3>
        <div class="vue-loginform__uname">
            <label>Username: </label>
            <input v-model="username" placeholder="username">
        </div>
        <div class="vueloginform__password">
            <label>Password: </label>
            <input v-model="password" placeholder="password">
        </div>
        <div class="vueloginform__bu">
            <label>BU: </label>
            <input v-model="businessUnitId" placeholder="BU">
        </div>
        <div class="vueloginform__submit">
            <button @click="doLogin()">Login</button>
        </div>
        </div>`,
})
export class login extends Vue {
    username!: string;
    password!: string;
    businessUnitId!: string;
    ipAddress!: string;

    doLogin(): void {
        const payload = {
            username: this.username,
            password: this.password,
            businessUnitId: this.businessUnitId,
        };
        this.$store.dispatch('user/' + LOGIN, payload);
    }

};

Vue.component('login', login);

export default login;