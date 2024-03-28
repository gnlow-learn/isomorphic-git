import * as fs from "node:fs"
import * as http from "node:http"

import { clone } from "npm:isomorphic-git@1.25.6"

const result = await clone({
    fs,
})