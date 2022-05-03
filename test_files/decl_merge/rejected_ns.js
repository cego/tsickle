// test_files/decl_merge/rejected_ns.ts(7,11): error TS0: transformation of plain namespace not supported.
// test_files/decl_merge/rejected_ns.ts(11,11): error TS0: declaration merging with non-class is not supported
// test_files/decl_merge/rejected_ns.ts(19,11): error TS0: declaration merging with non-class is not supported
/**
 *
 * @fileoverview Test namespace transformations that are not supported
 *   and result in compiler errors.
 *
 * Generated from: test_files/decl_merge/rejected_ns.ts
 */
goog.module('test_files.decl_merge.rejected_ns');
var module = module || { id: 'test_files/decl_merge/rejected_ns.ts' };
goog.require('tslib');
// Declaration merging with function is not supported.
/**
 * @return {void}
 */
function funcToBeMerged() { }
/** @enum {number} */
const Colors = {
    red: 0,
    green: 1,
    blue: 2,
};
Colors[Colors.red] = 'red';
Colors[Colors.green] = 'green';
Colors[Colors.blue] = 'blue';
