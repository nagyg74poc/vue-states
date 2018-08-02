// 1. Make sure to import 'vue' before declaring augmented types
import Vue from 'vue'

declare module 'vue/types/vue' {
    // Global properties can be declared
    // on the `VueConstructor` interface
    interface Vue {
        $appConfig?: any,
        $http?: any
    }
}

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        $appConfig?: any,
        $http?: any
    }
}