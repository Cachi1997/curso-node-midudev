/** Como leer un JSON en ESModules
 * 1) import movies from './movies.json' <-- Esta forma de importar json esta mal
 * 2) import fs from 'node:fs'
 *    const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))
 * 3) import movies from './movies.json' assert { type: 'json' }  <-- Esta forma es experimental y ya no se usa
*/

// Leer de forma adecuada un JSON con ESModules
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url) // import.meta.url tiene la direccion del fichero actual

export const readJSON = (path) => require(path)
