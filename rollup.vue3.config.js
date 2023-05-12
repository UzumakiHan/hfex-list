import resolve from '@rollup/plugin-node-resolve';
import vue3 from 'rollup-plugin-vue3';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss'
import tsPlugin from "rollup-plugin-typescript2";


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
        vue3({
            css: true,
            compilerTemplate: true,
            preprocessStyles: true
        }),
        babel({
            exclude: "**/node_modules/**"
        }),
        commonjs(),
        postcss()
    ]
}