import util from './util';

describe('Message Splitting', () => {
    test('Less than 50 characters', () => {
        const result = util.splitMessage(`How are you?`);
        expect(result).toHaveLength(1);
        expect(result[0]).toBe(`How are you?`);
    });

    test('More than 50 characters and less than 100 characters', () => {
        const result = util.splitMessage(`I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.`);
        expect(result).toHaveLength(2);
        expect(result[0]).toBe(`1/2 I can't believe Tweeter now supports chunking`);
        expect(result[1]).toBe(`2/2 my messages, so I don't have to do it myself.`);
    });

    test('More than 100 characters and less than 150 characters', () => {
        const result = util.splitMessage(`I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself. It is a very useful feature.`);
        expect(result).toHaveLength(3);
        expect(result[0]).toBe(`1/3 I can't believe Tweeter now supports chunking`);
        expect(result[1]).toBe(`2/3 my messages, so I don't have to do it myself.`)
        expect(result[2]).toBe(`3/3 It is a very useful feature.`)
    });

    test('Word with 51 characters', () => {
        function split() {
            util.splitMessage(`adnsandskndaskdnasndkasndkasndkasndkasndkasndkasndk`);
        }
        expect(split).toThrow('Word adnsandskndaskdnasndkasndkasndkasndkasndkasndkasndk is too long');
    });

    test('Word with 47 characters in a sentence', () => {
        function split() {
            util.splitMessage(`I love adnsandskndaskdnasndkasndkasndkasndkasndkasndka`);
        }
        expect(split)
            .toThrow('Word adnsandskndaskdnasndkasndkasndkasndkasndkasndka is too long');
    });

    test('Word with 46 characters in a sentence', () => {
        const result = util.splitMessage(`I love adnsandskndaskdnasndkasndkasndkasndkasndkasndk`);
        expect(result).toHaveLength(2);
        expect(result[0]).toBe(`1/2 I love`);
        expect(result[1]).toBe(`2/2 adnsandskndaskdnasndkasndkasndkasndkasndkasndk`);
    });
});