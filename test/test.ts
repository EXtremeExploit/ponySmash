import { assert } from 'chai';
import { createHash } from 'crypto';
import { existsSync, readdirSync, readFileSync } from 'fs';

import Lists from '../src/Lists.ts';

describe('List tests', () => {
    Object.entries(Lists).forEach((l) => {
        if (l[0] == 'custom') return; // Ignore custom as its special

        describe(l[0], () => {
            it(`There shouldnt be duplicate names`, () => {
                const names = l[1].list.map((c) => c.name);
                const dupedNames = names.filter((item, index) => names.indexOf(item) !== index);
                assert(dupedNames.length == 0, `Characters with dupe names: ${dupedNames.map((n) => `"${n}" `)}`);
            });

            it(`There shouldnt be duplicate images`, () => {
                const imgs = l[1].list.map((c) => c.img);
                const dupedImgs = imgs.filter((item, index) => imgs.indexOf(item) !== index);
                assert(dupedImgs.length == 0, `Characters with dupe images: ${dupedImgs.map((n) => `"${n}" `)}`);
            });
        });
    });

    it('All characters in default list should have valid png', () => {
        Lists['default'].list.forEach((c) => {
            assert(existsSync(`./public/${c.img}`), `${c.name} PNG path is not valid (${c.img})`);
        });
    });
});

function getFiles(source) {
    return readdirSync(source, { withFileTypes: true, recursive: true })
        .filter((dirent) => !dirent.isDirectory())
        .map((dirent) => `${dirent.path}/${dirent.name}`);
}

describe('Filesystem tests', () => {
    const files = getFiles('./public/characters');

    it('Files should be the same length of default list', () => {
        assert(files.length == Lists['default'].list.length);
    });

    it('All PNGs should have a character assigned', () => {
        files.forEach((filename) => {
            const i = Lists['default'].list.find((character) => character.img == filename.replace('public/', ''));
            assert(typeof i != 'undefined', `Cannot find "${filename.replace('public/', '')}", i: ${i}`);
        });
    });

    it('There shouldnt be any duplicate image hashes', () => {
        const hashes: string[] = [];
        files.forEach((file) => {
            const character = Lists['default'].list.find((c) => c.img == file.replace('public/', ''));

            const blob = readFileSync(file);

            const sha1 = createHash('sha1').update(blob).digest('hex');

            const isDuped = hashes.includes(sha1);

            assert(isDuped == false, `Duplicate SHA1: ${sha1} for character ${character?.name}, img: ${character?.img}`);

            if (!isDuped)
                hashes.push(sha1);
        });
    });
});
