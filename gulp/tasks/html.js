import fileInclude from 'gulp-file-include'
import version from 'gulp-version-number'
// import webphtml from 'gulp-webp-html-nosvg'


export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title:'html',
                message:'Error <%= error.message %>'
            })
        ))
        .pipe(fileInclude())
        .pipe(app.plugins.if(
            app.isProd,
            version({
                value: '%DT%',
                append: {
                    'key':'_v',
                    'cover':0,
                    'to':['css','js']
                },
                'output':{
                    'file':'gulp/version.json'
                }
            })
        ))
        // .pipe(webphtml())
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream())
}
