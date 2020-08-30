
const gr = 1.61803398875;
const spacerBase = 1.61803398875;
const spacerUnit = "rem";
// const spacerUnit = theme('goldenRatio.spacerUnit', 'rem');
// const spacerBase = parseFloat(theme('goldenRatio.spacerBase', 1.5));
const spacer1 = spacerBase / gr / gr / gr / gr / gr;
const spacer2 = spacerBase / gr / gr / gr / gr;
const spacer3 = spacerBase / gr / gr / gr;
const spacer4 = spacerBase / gr / gr;
const spacer5 = spacerBase / gr;
const spacer6 = spacerBase;
const spacer7 = spacerBase * gr;
const spacer8 = spacerBase * gr * gr;
const spacer9 = spacerBase * gr * gr * gr;
const spacer10 = spacerBase * gr * gr * gr * gr;
const spacer11 = spacerBase * gr * gr * gr * gr * gr;

const goldenRatio1 = `${spacer1}${spacerUnit}`; // 0.135269rem
const goldenRatio2 = `${spacer2}${spacerUnit}`; // 0.218865rem
const goldenRatio3 = `${spacer3}${spacerUnit}`; // 0.354124rem
const goldenRatio4 = `${spacer4}${spacerUnit}`; // 0.572973rem
const goldenRatio5 = `${spacer5}${spacerUnit}`; // 0.92707rem
const goldenRatio6 = `${spacer6}${spacerUnit}`; // 1.5rem
const goldenRatio7 = `${spacer7}${spacerUnit}`; // 2.427rem
const goldenRatio8 = `${spacer8}${spacerUnit}`; // 3.92689rem
const goldenRatio9 = `${spacer9}${spacerUnit}`; // 6.35371rem
const goldenRatio10 = `${spacer10}${spacerUnit}`; // 10.2803rem
const goldenRatio11 = `${spacer11}${spacerUnit}`; // 16.6335rem

const goldenRatioHalf1 = `${spacer1 / 2}${spacerUnit}`; // 0.0676345rem
const goldenRatioHalf2 = `${spacer2 / 2}${spacerUnit}`; // 0.1094325rem
const goldenRatioHalf3 = `${spacer3 / 2}${spacerUnit}`; // 0.177062rem
const goldenRatioHalf4 = `${spacer4 / 2}${spacerUnit}`; // 0.2864865rem
const goldenRatioHalf5 = `${spacer5 / 2}${spacerUnit}`; // 0.463535rem
const goldenRatioHalf6 = `${spacer6 / 2}${spacerUnit}`; // 0.75rem 
const goldenRatioHalf7 = `${spacer7 / 2}${spacerUnit}`; // 1.2135rem
const goldenRatioHalf8 = `${spacer8 / 2}${spacerUnit}`; // 1.963445rem
const goldenRatioHalf9 = `${spacer9 / 2}${spacerUnit}`; // 3.176855rem
const goldenRatioHalf10 = `${spacer10 / 2}${spacerUnit}`; // 5.14015rem
const goldenRatioHalf11 = `${spacer11 / 2}${spacerUnit}`; // 8.31675rem

const goldenRatioDouble1 = `${spacer1 * 2}${spacerUnit}`; // 0.270538rem
const goldenRatioDouble2 = `${spacer2 * 2}${spacerUnit}`; // 0.43773rem
const goldenRatioDouble3 = `${spacer3 * 2}${spacerUnit}`; // 0.708248rem
const goldenRatioDouble4 = `${spacer4 * 2}${spacerUnit}`; // 1.145946rem
const goldenRatioDouble5 = `${spacer5 * 2}${spacerUnit}`; // 1.85414rem
const goldenRatioDouble6 = `${spacer6 * 2}${spacerUnit}`; // 3rem r
const goldenRatioDouble7 = `${spacer7 * 2}${spacerUnit}`; // 4.854rem
const goldenRatioDouble8 = `${spacer8 * 2}${spacerUnit}`; // 7.85378rem
const goldenRatioDouble9 = `${spacer9 * 2}${spacerUnit}`; // 12.70742rem
const goldenRatioDouble10 = `${spacer10 * 2}${spacerUnit}`; // 20.5606rem
const goldenRatioDouble11 = `${spacer11 * 2}${spacerUnit}`; // 33.267rem

module.exports = {
    theme: {
        fontSize: {
            sm: 12,
            base: 14,
            lg: 16,
            xl: 18,
            xxl: 22,
            xxxl: 24,
        },
        fontWeight: {
            normal: 400,
            semibold: 500,
            bold: 600
        },
        letterSpacing: {
            tightest: -.75,
            tighter: -.5,
            tight: -.25,
            normal: 0,
            wide: 1.5,
            wider: 2,
            widest: 2.5
        },
        extend: {
            spacing: {
                px: '1px',
                '0': '0',
                '1': '0.125rem',
                '2': '0.25rem',
                '3': '0.375rem',
                '4': '0.5rem',
                '5': '0.625rem',
                '6': '0.75rem',
                '8': '1rem',
                '10': '1.25rem',
                '12': '1.5rem',
                '16': '2rem',
                '20': '2.5rem',
                '24': '3rem',
                '32': '4rem',
                '40': '5rem',
                '48': '6rem',
                '56': '7rem',
                '64': '8rem',
                '128': '9rem',

            }
        }
    },
    variants: []
}


// module.exports = {
//     theme: {
//         fontSize: {
//             sm: 12,
//             base: 14,
//             lg: 16,
//             xl: 18
//         },
//         fontWeight: {
//             normal: 400,
//             semibold: 500,
//             bold: 600
//         },
//         letterSpacing: {
//             tightest: -.75,
//             tighter: -.5,
//             tight: -.25,
//             normal: 0,
//             wide: 1.5,
//             wider: 2,
//             widest: 2.5
//         },
//         extend: {
//             scale: {
//                 'gr-1': `3rem`, // 0.0901792
//                 'gr-2': `${1 / gr / gr / gr / gr}`, // 0.14591
//                 'gr-3': `${1 / gr / gr / gr}`, // 0.236083
//                 'gr-4': `${1 / gr / gr}`, // 0.381982
//                 'gr-5': `${1 / gr}`, // 0.618047
//                 'gr-6': `${1}`, // 1
//                 'gr-7': `${1 * gr}`, // 1.61803398875
//                 'gr-8': `${1 * gr * gr}`, // 2.61798
//                 'gr-9': `${1 * gr * gr * gr}`, // 4.23589
//                 'gr-10': `${1 * gr * gr * gr * gr}`, // 6.85367
//                 'gr-11': `${1 * gr * gr * gr * gr * gr}`, // 11.0892
//             },

//             width: (theme) => ({
//                 'gr-1': `${100 / gr / gr / gr / gr / gr}%`, // 9.01792%
//                 'gr-2': `${100 / gr / gr / gr / gr}%`, // 14.591%
//                 'gr-3': `${100 / gr / gr / gr}%`, // 23.6083%
//                 'gr-4': `${100 / gr / gr}%`, // 38.1982%
//                 'gr-5': `${100 / gr}%`, // 61.8047%
//                 'gr-6': `${100}%`, // 100%

//                 'gr-half-1': `${100 / gr / gr / gr / gr / gr / 2}%`, // 4.50896%
//                 'gr-half-2': `${100 / gr / gr / gr / gr / 2}%`, // 7.2955%
//                 'gr-half-3': `${100 / gr / gr / gr / 2}%`, // 11.80415%
//                 'gr-half-4': `${100 / gr / gr / 2}%`, // 19.0991%
//                 'gr-half-5': `${100 / gr / 2}%`, // 30.90235%
//                 'gr-half-6': `${100 / 2}%`, // 50%
//                 'gr-half-7': `${(100 * gr) / 2}%`, // 80.9%

//                 'gr-double-1': `${(100 / gr / gr / gr / gr / gr) * 2}%`, // 18.03584%
//                 'gr-double-2': `${(100 / gr / gr / gr / gr) * 2}%`, // 29.182%
//                 'gr-double-3': `${(100 / gr / gr / gr) * 2}%`, // 47.2166%
//                 'gr-double-4': `${(100 / gr / gr) * 2}%`, // 76.3964%
//             }),

//             maxWidth: (theme) => ({
//                 ...theme('spacing'),
//             }),

//             maxHeight: (theme) => ({
//                 ...theme('spacing'),
//             }),

//             minWidth: (theme) => ({
//                 ...theme('spacing'),
//             }),

//             minHeight: (theme) => ({
//                 ...theme('spacing'),
//             }),
//         },

//         spacing: {
//             '0': '0',
//             '1': goldenRatio1,
//             '2': goldenRatio2,
//             '3': goldenRatio3,
//             '4': goldenRatio4,
//             '5': goldenRatio5,
//             '6': goldenRatio6,
//             '7': goldenRatio7,
//             '8': goldenRatio8,
//             '9': goldenRatio9,
//             '10': goldenRatio10,
//             '11': goldenRatio11,

//             'half-1': goldenRatioHalf1,
//             'half-2': goldenRatioHalf2,
//             'half-3': goldenRatioHalf3,
//             'half-4': goldenRatioHalf4,
//             'half-5': goldenRatioHalf5,
//             'half-6': goldenRatioHalf6,
//             'half-7': goldenRatioHalf7,
//             'half-8': goldenRatioHalf8,
//             'half-9': goldenRatioHalf9,
//             'half-10': goldenRatioHalf10,
//             'half-11': goldenRatioHalf11,

//             'double-1': goldenRatioDouble1,
//             'double-2': goldenRatioDouble2,
//             'double-3': goldenRatioDouble3,
//             'double-4': goldenRatioDouble4,
//             'double-5': goldenRatioDouble5,
//             'double-6': goldenRatioDouble6,
//             'double-7': goldenRatioDouble7,
//             'double-8': goldenRatioDouble8,
//             'double-9': goldenRatioDouble9,
//             'double-10': goldenRatioDouble10,
//             'double-11': goldenRatioDouble11,
//         },

//         borderWidth: {
//             default: goldenRatio1,
//             '0': '0',
//             '2': goldenRatio2,
//             '3': goldenRatio3,
//             '4': goldenRatio4,
//             '5': goldenRatio5,
//             '6': goldenRatio6,
//             '7': goldenRatio7,
//             '8': goldenRatio8,
//             '9': goldenRatio9,
//             '10': goldenRatio10,
//             '11': goldenRatio11,

//             half: goldenRatioHalf1,
//             'half-2': goldenRatioHalf2,
//             'half-3': goldenRatioHalf3,
//             'half-4': goldenRatioHalf4,
//             'half-5': goldenRatioHalf5,
//             'half-6': goldenRatioHalf6,
//             'half-7': goldenRatioHalf7,
//             'half-8': goldenRatioHalf8,
//             'half-9': goldenRatioHalf9,
//             'half-10': goldenRatioHalf10,
//             'half-11': goldenRatioHalf11,

//             double: goldenRatioDouble1,
//             'double-2': goldenRatioDouble2,
//             'double-3': goldenRatioDouble3,
//             'double-4': goldenRatioDouble4,
//             'double-5': goldenRatioDouble5,
//             'double-6': goldenRatioDouble6,
//             'double-7': goldenRatioDouble7,
//             'double-8': goldenRatioDouble8,
//             'double-9': goldenRatioDouble9,
//             'double-10': goldenRatioDouble10,
//             'double-11': goldenRatioDouble11,
//         },

//         lineHeight: {
//             none: '1',
//             '1': goldenRatio1,
//             '2': goldenRatio2,
//             '3': goldenRatio3,
//             '4': goldenRatio4,
//             '5': goldenRatio5,
//             '6': goldenRatio6,
//             '7': goldenRatio7,
//             '8': goldenRatio8,
//             '9': goldenRatio9,
//             '10': goldenRatio10,
//             '11': goldenRatio11,
//         },
//     },
// }
