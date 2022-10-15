import gulp from "gulp"
import {path} from './gulp/config/path.js'
import {plugins} from "./gulp/config/plugins.js";


global.app = {
    isProd: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

import {copy} from './gulp/tasks/copy.js'
import {reset} from './gulp/tasks/reset.js'
import {html} from './gulp/tasks/html.js'
import {server} from './gulp/tasks/server.js'
import {scss} from './gulp/tasks/scss.js'
import {js} from './gulp/tasks/js.js'
import {images} from './gulp/tasks/images.js'
import {fontStyle, otfToTtf, ttfToWoff} from './gulp/tasks/fonts.js'
import {svgSprite} from './gulp/tasks/svgSprite.js'
import {zip} from './gulp/tasks/zip.js'
import {ftp} from './gulp/tasks/ftp.js'

function watcher(){
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}

export { svgSprite }

const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle)

// const mainTasks = gulp.parallel(copy)
const mainTasks = gulp.parallel(fonts, copy, html, scss, js, images)

// const watchTasks = gulp.parallel(watcher, server)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const prod = gulp.series(reset, mainTasks)
const deployZip = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

export { dev }
export { prod }
export { deployZip }
export { deployFTP }

gulp.task('default', dev)
