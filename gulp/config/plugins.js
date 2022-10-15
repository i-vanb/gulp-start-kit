import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import browserSync from 'browser-sync'
import newer from 'gulp-newer'
import ifGulp from 'gulp-if'


export const plugins = {
    plumber, notify, browserSync, newer, if:ifGulp
}
