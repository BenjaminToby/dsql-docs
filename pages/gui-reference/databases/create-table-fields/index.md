---
title: Create Database Table Fields
description: Learn how to create fields/columns in your tables
---

## Create Database Table Fields

Fields (or Columns) define the structure of your SQL tables. Datasquirel Helps you define these structures and even extend them.

```json
{
    "name": "@moduletrace/turbosync",
    "version": "1.2.2",
    "module": "dist/index.js",
    "scripts": {
        "start": "node dist/index.js",
        "build": "tsc",
        "compile": "bun build index.ts --compile --outfile bin/turbosync",
        "dev": "tsc --watch"
    },
    "bin": {
        "turbosync": "./dist/index.js"
    },
    "description": "Sync files and directories with ease",
    "repository": {
        "type": "git",
        "url": "https://git.tben.me/Moduletrace/turbo-sync.git"
    },
    "main": "index.js",
    "author": "Benjamin Toby",
    "license": "ISC",
    "devDependencies": {
        "@types/node": "^22.10.2"
    }
}
```
