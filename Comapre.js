var expect = function (val) {
  return {
    toBe: function (expected) {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (expected) {
      if (val !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

/**
 * Example usage:
 * expect(5).toBe(5); // true
 * try {
 *     expect(5).notToBe(5); // throws "Equal"
 * } catch (e) {
 *     console.log(e.message); // "Equal"
 * }
 * try {
 *     expect(5).toBe(null); // throws "Not Equal"
 * } catch (e) {
 *     console.log(e.message); // "Not Equal"
 * }
 * expect(5).notToBe(null); // true
 */
