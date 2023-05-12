import HfexList from './vue/index.vue';
HfexList.install = (Vue:any)=>{
    console.log(Vue)
    Vue.component(HfexList.name,HfexList);
}
export default HfexList;