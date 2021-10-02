import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import path from "path";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

const svgr = require("@svgr/rollup").default;
const root = path.resolve(__dirname);

export default {
  input: "src/index.js",
  plugins: [
    svgr(),
    alias({
      resolve: ["*", ".js", ".jsx", ".svg"],
      entries: [
        {
          find: "@",
          replacement: path.resolve(root, "./src"),
        },
      ],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    commonjs({
      include: ["node_modules/**"],
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "dist"],
      historyApiFallback: true,
      host: "localhost",
      port: 3001,
    }),
    livereload({ watch: "dist" }),
  ],
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
  },
};
