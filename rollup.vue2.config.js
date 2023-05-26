import resolve from '@rollup/plugin-node-resolve';
import vue2 from 'rollup-plugin-vue2';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss'
import tsPlugin from "rollup-plugin-typescript2";
import autoprefixer from 'autoprefixer'


export default {
    input: 'src/index.ts',
    output: {
        globals: {
            vue: "Vue"
        }
    },
    plugins: [
        resolve(),
        tsPlugin(),
        terser(),
        json(),
        vue2({
            css: true,
            compilerTemplate: true,
            preprocessStyles: true
        }),
        babel({
            babelHelpers: 'runtime',
            exclude: "**/node_modules/**"
        }),
        commonjs(),
        postcss({
            plugins:[autoprefixer()]
        })
    ]
}