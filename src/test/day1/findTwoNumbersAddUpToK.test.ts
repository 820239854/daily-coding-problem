import {findTwoNumbersAddUpToK} from "../../main/day1/findTwoNumbersAddUpToK";

describe("findTwoNumbersAddUpToK", () => {
    it("should be true for the sample list in the problem statement", () => {
        expect(findTwoNumbersAddUpToK([10, 15, 3, 7], 17)).toBeTruthy();
    });
    it("should be true, when there are two number adding up to k - another list", () => {
        expect(findTwoNumbersAddUpToK([3, 1, 2, 5, 100, 2, 100, 34, 99], 100)).toBeTruthy();
    });
    it("should be false, when there are NOT two number adding up to k - another list", () => {
        expect(findTwoNumbersAddUpToK([3, 1, 2, 5, 100, 2, 100, 34, 99], 1000)).toBeFalsy();
    });
    it("should always be false, ie can never find two numbers adding up to k,  when the list is empty", () => {
        expect(findTwoNumbersAddUpToK([], 1000)).toBeFalsy();
        expect(findTwoNumbersAddUpToK([], getRandomInt(0, 999999))).toBeFalsy();
    });
    it("should always be false, ie can never find two numbers adding up to k, when the list only has one number",
        () => {
            expect(findTwoNumbersAddUpToK([getRandomInt(0, 999999)], 1000)).toBeFalsy();
            expect(findTwoNumbersAddUpToK([getRandomInt(0, 999999)], getRandomInt(0, 999999))).toBeFalsy();
        });
    it("should be false, when there are no two number found to add up to k", () => {
        expect(findTwoNumbersAddUpToK([1, 2], 4)).toBeFalsy();
        expect(findTwoNumbersAddUpToK([0, 1, 2], 4)).toBeFalsy();
        expect(findTwoNumbersAddUpToK([1, 0, 2], 4)).toBeFalsy();
    });
    it("should be true, when there are two number adding up to k", () => {
        expect(findTwoNumbersAddUpToK([1, 2], 3)).toBeTruthy();
        expect(findTwoNumbersAddUpToK([1, 0, 2], 3)).toBeTruthy();
        expect(findTwoNumbersAddUpToK([1, 2, 0], 3)).toBeTruthy();
        expect(findTwoNumbersAddUpToK([0, 1, 2], 3)).toBeTruthy();
        expect(findTwoNumbersAddUpToK([1, 2, 0], 3)).toBeTruthy();
    });

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
