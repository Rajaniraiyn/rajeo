import { terser } from "rollup-plugin-terser";

const terserOptions = {
  module: false,
  compress: {
    drop_console: true,
    ecma: 6,
    keep_classnames: /Rajeo/,
    unsafe_math: true,
    unsafe_methods: true,
  },
  mangle: {
    keep_classnames: /Rajeo/,
  },
  format: {
    comments: /\*!$/gm,
  },
};

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/esm/index.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/cjs/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/umd/index.js",
      format: "umd",
      name: "rajeo",
      sourcemap: true,
    },

    {
      file: "dist/esm/index.min.js",
      format: "esm",
      sourcemap: true,
      plugins: [terser(terserOptions)],
    },
    {
      file: "dist/cjs/index.min.js",
      format: "cjs",
      sourcemap: true,
      plugins: [terser(terserOptions)],
    },
    {
      file: "dist/umd/index.min.js",
      format: "umd",
      name: "rajeo",
      sourcemap: true,
      plugins: [terser(terserOptions)],
    },
  ],
};
