#!/usr/bin/env node
'use strict';
const fs = require('fs');
// const meow = require('meow');
const postcss = require('postcss');
const tailwind = require('tailwindcss');
const build = require('./build');

// meow(`
// 	Usage
// 	  $ create-theme
// `);

const source = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;


const tailwinds = {};
const themeFilesDirectory = __dirname + '/lib/themes';
const styleFilesDirectory = __dirname + '/lib/.styles';

if (!fs.existsSync(styleFilesDirectory)) {
    fs.mkdirSync(styleFilesDirectory);
}

const themeFile = fs.readdirSync(themeFilesDirectory)

writeFile();

async function writeFile() {
    for (let i = 0; i < themeFile.length; i++) {
        const file = themeFile[i];
        const themeName = file.replace('.js', '');

        tailwinds[themeName] = tailwind(`${themeFilesDirectory}/${file}`);
        // tailwinds[themeName] = tailwind(`${themeName}-config.js`);
        try {
            const { css } = await postcss([tailwinds[themeName]]).process(source, { from: undefined });
            const { colorStyles, styles } = build(css);
            fs.writeFileSync(`${styleFilesDirectory}/styles-${themeName}.json`, JSON.stringify(colorStyles, null, '\t'));
            fs.writeFileSync(`${styleFilesDirectory}/styles-base.json`, JSON.stringify(styles, null, '\t'));
        } catch (error) {
            console.error('> Error occurred while generating styles');
            console.error(error.stack);
            process.exit(1);
        }
    }
}
