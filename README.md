# HfexList
下拉滚动加载组件

### 安装使用

### `npm`安装


```bash
npm i hfex-list
```

### vue组件引入(Vue2)
```html
<hfex-list 
    v-model="flowLoading" 
    :finished="flowFinished" 
    :error="flowError" 
    @load="onLoad"
>
    <div 
    v-for="item in list" 
    :key="item" 
    :title="item"
    class="list"
    >
    {{ item }}
    </div>
</hfex-list>
```

```js
import HfexList from 'hfex-list/dist/vue2/index.esm.js';

export default {
    data() {
        return {
            flowLoading: false,
            flowFinished: false,
            flowError: false,
            list: []
        }
    },
    components:{
        MList
    },
    methods:{
        onLoad() {
            //这里就模拟一下ajax请求
            //加载失败就把flowError设置为true即可，这里就不做显示了
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            // 加载状态结束
            this.flowLoading = true;
            setTimeout(() => {
                this.flowLoading = false;
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.flowFinished = true;
                }
                
            }, 1000);

        }
    }
}
```

### vue组件引入(Vue3)
```js
<script
    lang="ts"
    setup
>
import {ref} from 'vue';
import HfexList from 'hfex-list'; 
const list = ref([]);
const flowLoading = ref(false);
const flowFinished = ref(false);
const flowError = ref(false);
const onLoad = () => {
    flowLoading.value = true;
    setTimeout(() => {
        flowLoading.value = false;
        for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
        }

        // 数据全部加载完成
        if (this.list.length >= 40) {
            flowFinished.value = true;
        }
                
    }, 1000);
}
</script>
```

### props

|   Prop    |   Type    |   Default  |   description    |
|  ----  | ----  |  ----  | ----  |
|   finished |   bool  |   false   |   数据是否加载结束   |
|   finishedText   |   string  |   没有更多了  |  数据全部加载结束提示词   |
|   loadingText   |   string  |   加载中...  |  数据加载中提示词   |
|   error   |   bool  |   false  |  数据加载失败   |
|   errorText   |   string  |   加载失败...  |  数据加载失败提示词   |
|   immediateCheck   |   bool  |   true  |  组件挂载时启动加载数据   |
|   pullupTipsBg   |   string  |   #f4f5f7  |  提示词容器背景色   |


### 截图示例
![截图示例](https://raw.githubusercontent.com/UzumakiHan/static-files/master/images/m-list.png)

### vue+ts引入提醒
遇到这样引入有红色下划线的情况
![截图示例](https://raw.githubusercontent.com/UzumakiHan/static-files/master/images/m-list-tip.png)

在`.d.ts`中加入
```ts
declare module 'hfex-list' {
    import HfexList from 'hfex-list';
    export default HfexList;
}
```