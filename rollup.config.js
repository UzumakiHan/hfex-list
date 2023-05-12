import resolve from '@rollup/plugin-node-resolve';
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
        babel({
            exclude: "**/node_modules/**"
        }),
        commonjs(),
        postcss()
    ]
}