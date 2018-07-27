import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {User} from '../../@types/User';
import {GET_CURRENT_STATE} from "../../store/action-types";

@Component({
    data(): User {
        return this.$store.state.user
    },
    mounted(): void {
        this.$store.dispatch('user/' + GET_CURRENT_STATE);
    },
    template: `<div class="vue-user">
        <h3>User Component</h3>
        <div class="vue-user__name">Username: {{data.username}}</div>
        <div class="vue-user__authenticated">isAuthenticated: {{properties.isAuthenticated}}</div>
        <div class="vue-user__balance">
            <user-balance v-bind:balance="data.balance"></user-balance>
        </div>
        </div>`,
})
export class user extends Vue {}

Vue.component('user', user);