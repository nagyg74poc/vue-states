import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {CHANGE_BALANCE} from '../store/action-types';

@Component({
    data() {
        return {
            withdrawable: null,
            locked: null,
            bonus: null,
        }
    },
    template: `<div class="vue-balanceform">
        <h3>Balance Change Form</h3>
        <div class="vue-balanceform__w">
            <label>Withrawable: </label>
            <input v-model="withdrawable" placeholder="withdrawable">
        </div> 
        <div class="vue-balanceform__l">
            <label>Locked: </label>
            <input v-model="locked" placeholder="locked">
        </div>
        <div class="vue-balanceform__b">
            <label>Bonus: </label>
            <input v-model="bonus" placeholder="bonus">
        </div>
        <div class="vue-balanceform__submit">
            <button @click="doChange()">Change</button>
        </div>
        </div>`,
})
export class changeBalance extends Vue {

    withdrawable!: number;
    locked!: number;
    bonus!: number;

    doChange(): void {
        const payload = {
            withdrawable: this.withdrawable,
            locked: this.locked,
            bonus: this.bonus,
        };
        this.$store.dispatch('user/' + CHANGE_BALANCE, payload);
    }

};

Vue.component('changeBalance', changeBalance);

export default changeBalance;