import Vue from "vue"
import HelloWorld from "../components/HelloWorld.vue"

const VueUseTest = {
    install:function(){
        console.log("aaaaaaaaaaaaaa");
        Vue.component("VueUseTest",HelloWorld);
    }
}
export default VueUseTest;