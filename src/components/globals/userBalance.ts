import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Balance} from '../../@types/Balance';

@Component({
    name: 'userBalance',
    template: `<div class="vue-balance">
        <div class="vue-balance__withdrawable">withdrawable: {{balance.withdrawable}}</div>
        <div class="vue-balance__locked">locked: {{balance.locked}}</div>
        <div class="vue-balance__bonus">bonus: {{balance.bonus}}</div>
        <div class="vue-balance__total">total: {{total}}</div>
        </div>`
})
export class userBalance extends Vue {
    @Prop({
        default: {
            withdrawable: 0,
            locked: 0,
            bonus: 0,
        }
    })
    balance!: Balance;

    get total() {
        return this.balance.withdrawable + this.balance.bonus;
    }

}

Vue.component('userBalance', userBalance);