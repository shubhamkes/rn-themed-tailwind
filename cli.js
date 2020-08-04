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
const styleFilesDirectory = __dirname + '/lib/temp-styles';

if (!fs.existsSync(styleFilesDirectory)) {
    fs.mkdirSync(styleFilesDirectory);
}

const themeFile = fs.readdirSync(themeFilesDirectory)

writeFile();

// async function writeFile() {
//     // @TODO update method to create styles-theme.json and accomodate theme-classes from all the themes
//     for (let i = 0; i < themeFile.length; i++) {
//         const file = themeFile[i];
//         const themeName = file.replace('.js', '');

//         tailwinds[themeName] = tailwind(`${themeFilesDirectory}/${file}`);
//         // tailwinds[themeName] = tailwind(`${themeName}-config.js`);
//         try {
//             const { css } = await postcss([tailwinds[themeName]]).process(source, { from: undefined });
//             const { colorStyles, styles } = build(css);
//             fs.writeFileSync(`${styleFilesDirectory}/styles-${themeName}.json`, JSON.stringify(colorStyles, null, '\t'));
//             fs.writeFileSync(`${styleFilesDirectory}/styles-base.json`, JSON.stringify(styles, null, '\t'));
//         } catch (error) {
//             console.error('> Error occurred while generating styles');
//             console.error(error.stack);
//             process.exit(1);
//         }
//     }
// }


async function writeFile() {
    // @TODO update method to create styles-theme.json and accomodate theme-classes from all the themes
    const styleThemeContents = {};
    let baseWritten = false;
    for (let i = 0; i < themeFile.length; i++) {
        const file = themeFile[i];
        const themeName = file.replace('.js', '');
        if (themeName == 'base') {
            continue;
        }

        tailwinds[themeName] = tailwind(`${themeFilesDirectory}/${file}`);
        // tailwinds[themeName] = tailwind(`${themeName}-config.js`);
        try {
            const { css } = await postcss([tailwinds[themeName]]).process(source, { from: undefined });
            const { colorStyles, styles } = build(css);
            styleThemeContents[themeName] = colorStyles;

            // to make sure base is written on once
            if (!baseWritten) {
                baseWritten = true;
                fs.writeFileSync(`${styleFilesDirectory}/styles-base.json`, JSON.stringify(styles, null, '\t'));
            }
        } catch (error) {
            console.error('> Error occurred while generating styles');
            console.error(error.stack);
            process.exit(1);
        }
    }
    fs.writeFileSync(`${styleFilesDirectory}/styles-themes.json`, JSON.stringify(styleThemeContents, null, '\t'));
}
