import { defineConfig, Options } from "tsup";
import path from "node:path"
import fse from "fs-extra"

async function onSuccess() {
  const from = path.resolve(__dirname, "..", "..", "temp", "math-helpers");
  const to = path.resolve(__dirname, "dist", "temp");

  fse.copySync(from, to , {filter: (src) => path.basename(src) !== 'node_modules'});
}

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  format: ["cjs"],
  clean: true,
  onSuccess,
  ...options,
}));