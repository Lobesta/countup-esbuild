const { argv } = require("process")
const { build } = require("esbuild")
const path = require("path")
const fs = require("fs")

const IS_DEV = argv[2] === "development"

// サーバー側のビルド
const serverOptions = {
  entryPoints: [path.resolve(__dirname, "src/index.ts")],
  minify: !IS_DEV,
  bundle: true,
  target: "es2020",
  platform: "node",
  outdir: path.resolve(__dirname, "dist"),
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
  external: fs.readdirSync("./node_modules")
}
build(serverOptions).catch(err => {
  process.stderr.write(err.stderr)
  process.exit(1)
})

// クライアント側のビルド
const clientOptions = {
    define: {"process.env.NODE_ENV": IS_DEV?"\"development\"": "\"production\""},
    entryPoints: [path.resolve(__dirname, "src/view/client.tsx")],
    minify: !IS_DEV,
    bundle: true,
    target: "es6",
    platform: "browser",
    outdir: path.resolve(__dirname, "dist/static"),
    tsconfig: path.resolve(__dirname, "tsconfig.json")
}
build(clientOptions).catch(err => {
    process.stderr.write(err.stderr)
    process.exit(1)
})
