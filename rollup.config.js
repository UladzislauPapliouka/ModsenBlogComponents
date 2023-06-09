import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert {type:"json"};

import postcss from "rollup-plugin-postcss";
import url from '@rollup/plugin-url';
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                modules:true,
                use:['sass']
            }),
            url({
                // by default, rollup-plugin-url will not handle font files
                include: ['**/*.ttf'],
                // setting infinite limit will ensure that the files
                // are always bundled with the code, not copied to /dist
                limit: Infinity,
            }),
            terser(),

        ],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/,/\.scss$/],
    },
];