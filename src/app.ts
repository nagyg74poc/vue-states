import Vue from 'vue';
import {store} from './store';

export const VueApp = new Vue({
    data: {
        headline: 'Hello Vue App!'
    },
    store,
});

VueApp.$mount('#vueapp');