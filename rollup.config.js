import { terser } from "rollup-plugin-terser";

const terserOptions = {
  module: false,
  compress: {
    drop_console: true,
    ecma: 6,
    unsafe_math: true,
    unsafe_methods: true,
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
