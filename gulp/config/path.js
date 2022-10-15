import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './dist'
const sourceFolder = './src'

export const path = {
    build: {
        css:`${buildFolder}/css/`,
        js:`${buildFolder}/js/`,
        html:`${buildFolder}/`,
        files: `${buildFolder}`,
        images: `${buildFolder}/img/`,
        fonts:`${buildFolder}/fonts`
    },
    src: {
        js:`${sourceFolder}/js/app.js`,
        scss:`${sourceFolder}/scss/app.scss`,
        html:`${sourceFolder}/html/*.html`,
        files: `${sourceFolder}/**/*.*`,
        images: `${sourceFolder}/img/**/*.{jpg,jpeg,png,webp,gif}`,
        svg: `${sourceFolder}/svg/**/*.svg`,
        svgIcons:`${sourceFolder}/svgicons/*.svg`
    },
    watch: {
        js:`${sourceFolder}/js/**/*.js`,
        scss:`${sourceFolder}/scss/**/*.scss`,
        html:`${sourceFolder}/html/**/*.html`,
        images: `${sourceFolder}/img/**/*.{jpg,jpeg,png,webp,gif,svg}`,
        files: `${sourceFolder}/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    sourceFolder: sourceFolder,
    rootFolder: rootFolder,
    ftp: `test`
}
