import { assert } from 'chai';
import { existsSync, readdirSync } from 'fs';

import Lists from '../src/Lists.ts';

describe('List tests', () => {
    Object.entries(Lists).forEach((l) => {
        if (l[0] == 'custom') return;

        describe(l[0], () => {
            it(`There shouldnt be duplicate names`, () => {
                const names = l[1].list.map((c) => c.name);
                const dupedNames = names.filter((item, index) => names.indexOf(item) !== index);
                assert(dupedNames.length == 0, `Characters with dupe names: ${dupedNames.map((n) => `"${n}" `)}`);
            });

            it(`There shouldnt be duplicate images`, () => {
                const imgs = l[1].list.map((c) => c.img);
                const dupedImgs = imgs.filter((item, index) => imgs.indexOf(item) !== index)
                assert(dupedImgs.length == 0, `Characters with dupe images: ${dupedImgs.map((n) => `"${n}" `)}`);
            });
        })
    });

    describe('All characters in default list should have valid png', () => {
        Lists['default'].list.forEach((c) => {
            it(`${c.name} should have a valid png path`, () => {
                assert(existsSync(`./public/${c.img}`), `${c.name} PNG path is not valid (${c.img})`);
            });
        });
    });
});

const getFiles = source =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => !dirent.isDirectory())
        .map(dirent => dirent.name);

const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

describe('Filesystem tests', () => {
    it('All pngs should have a character assigned', () => {
        getDirectories('./public/characters').forEach((d) => {
            describe(d, () => {
                getFiles('./public/characters/' + d).forEach((c) => {
                    it(`${c} Should exist in default list`, () => {
                        let i = Lists['default'].list.find((e) => e.img == `characters/${d}/${c}`);

                        assert(typeof i != 'undefined', `Cannot find "characters/${d}/${c}", i: ${i}`);
                    });
                });
            });
        });
    });
});
