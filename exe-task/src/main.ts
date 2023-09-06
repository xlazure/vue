import './assets/main.css'
import type { Ref } from "vue";
import { createApp,ref } from 'vue'
import App from './App.vue'

const name:Ref<string> | undefined = ref('')
const copyItem:Ref<any> | undefined = ref({})


const app = createApp(App)

app.provide('selectedColumnName',name)
app.provide('copyItem',copyItem)
app.mount('#app')


