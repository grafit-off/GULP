# Gulp and layout templates

## HTML | SCSS | JS
 *  ***Commonly used javascript scripts***
 *  ***SCSS structure and blocks***

### Redirect to index.html after 10 seconds
[GitHub Pages](https://grafit-off.github.io/GULP/)

*gulp-cli should be installed globally

## Gulp includes such plugins
 *  browser-sync
 *  gp-autoprefixer
 *  gp-clean-css
 *  gp-file-include
 *  gp-notify
 *  gp-rename
 *  gp-sass
 *  gp-sourcemaps
 *  gp-svg-sprite
 *  gp-tinypng-compress
 *  gp-ttf2woff
 *  gp-ttf2woff2
 *  gp-uglify-es
 *  gp-util
 *  node-sass
 *  del
 *  vinyl-ftp

## Tasks
 _Images compress - tinyPNG_

```js
const tinypng = () => {
	return src(['./src/img/**/*.jpg', './src/img/**/*.png', './src/img/**/*.jpeg'])
		.pipe(tiny({
			key: 'KEY',
			log: true
		}))
		.pipe(dest('./src/img'))
		.pipe(dest('./build/img'))
		.pipe(dest('./app/img'))
}
exports.tinypng = tinypng;
```

_Tunnel server - gulp host_

```js
const host = () => {
	browserSync.init({
		server: {
			baseDir: "./app"
		},
		tunnel: "grafit-off",
		open: "tunnel",
	})
}
exports.host = host;
```
_HTML validation - npm run validateHtml_

```
	node-w3c-validator -f lint -evH -i app/**/*.html
```

_JSON Server - npm run jsonServer_

```
	json-server --watch app/resources/db.json --port 3004
```
