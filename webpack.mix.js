let mix = require('laravel-mix');


mix
  .js('src/js/script.js', 'public/js/')
  .sass('src/scss/style.scss', 'public/css/')
  .copyDirectory('src/html', 'public/')
;
