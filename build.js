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
