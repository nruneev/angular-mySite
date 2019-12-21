'use strict';

console.log('Prepare assets...');

const SVGSpriter = require('svg-sprite'),
        mkdirp = require('mkdirp'),
        path = require('path'),
        fs = require('fs'),
        File = require('vinyl'),
        glob = require('glob');

function makeSprite(folder, config) {
    const spriter = new SVGSpriter(config);
    const cwd = path.resolve(folder);

    glob('**/*.svg', {cwd: cwd}, function(err, files) {
        files.forEach(function(file) {
            spriter.add(new File({
                path: path.join(cwd, file),
                base: cwd,
                contents: fs.readFileSync(path.join(cwd, file))
            }));
        });

        spriter.compile(function(error, result) {
            for (let type in result.symbol) {
                if (result.symbol.hasOwnProperty(type)) {
                    mkdirp.sync(path.dirname(result.symbol[type].path));
                    fs.writeFileSync(result.symbol[type].path, result.symbol[type].contents);
                    console.log(`${result.symbol[type].path} was wrote.`);
                }
            }
        });
    });
}


makeSprite('src/assets/icons-src', {
    dest: 'src/assets/',
    shape: {
        transform: [{
            svgo: {
                plugins: [{
                    removeAttrs: {attrs: 'fill'}
                }]
            }
        }]
    },
    svg: {
        transform: [
            /**
             * Custom sprite SVG transformation
             *
             * @param {String} svg Sprite SVG
             * @return {String} Processed SVG
             */
            function(svg) {
                return svg.replace(/stroke="[^"]*"/i, 'stroke="currentColor"');
            }
        ]
    },
    mode: {
        symbol: {
            dest: './',
            sprite: 'icons.gen.svg'
        }
    }
});


makeSprite('src/assets/flags-src', {
    dest: 'src/assets/',
    mode: {
        symbol: {
            dest: './',
            sprite: 'flags.gen.svg'
        }
    }
});
