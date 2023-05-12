
import vue2 from 'rollup-plugin-vue2';

import commonRollUpConfig from './rollup.config.js'
const vue2Config = vue2({
    css: true,
    compilerTemplate: true,
    preprocessStyles: true
})
commonRollUpConfig.plugins.push(vue2Config)
export default commonRollUpConfig