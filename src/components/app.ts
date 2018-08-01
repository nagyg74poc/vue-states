import Vue from "vue";
import {Component} from 'vue-property-decorator';

@Component({
    name: 'mainApp',
    data: () => {
        return {
            headline: 'Hello Vue App!'
        };
    },
    props: ['prm1'],
    delimiters: ['[[', ']]'],
    created(){
        console.log(this);
    },
    mounted(){
        console.log(this);
    },
    template : `<div class="vue-app">
    <h1>
        [[ headline ]]
    </h1>
    <h3>param: [[ prm1 ]]</h3>
    <user></user>
    <login></login>
    <logout></logout>
    <change-balance></change-balance>
</div>`
})
export class App extends Vue {
}

// Vue.component('mainApp', App);