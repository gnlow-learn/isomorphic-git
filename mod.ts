import * as fs from "node:fs"
import * as http from "node:http"

import { clone } from "npm:isomorphic-git@1.27.1"

const result = await clone({
    fs,
    http,
    dir: "/tutorial",
    corsProxy: 'https://cors.isomorphic-git.org',
    url: 'https://github.com/isomorphic-git/isomorphic-git',
    ref: 'main',
    singleBranch: true,
    depth: 10,
})
