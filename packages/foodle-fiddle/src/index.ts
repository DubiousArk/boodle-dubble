#!/usr/bin/env node

import path from "node:path"
import fse from "fs-extra"

async function foodle(){
  const distTempDir = path.resolve(__dirname, 'temp')
  const srcTempDir = path.resolve(__dirname, '..', 'temp')

  console.log('dist: ', fse.readdirSync(distTempDir))
  console.log('src: ', fse.readdirSync(srcTempDir))
}

foodle()