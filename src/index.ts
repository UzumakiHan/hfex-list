/* eslint-disable */
import component from './vue/index.vue';
//@ts-ignore
component.install = vue => {
    vue.component(component.name, component);
};
export default component;
