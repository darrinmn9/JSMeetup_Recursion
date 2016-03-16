var api;
var QUnit;

/*
 below is dummy data to test treeCountLeaves
 treeCountLeaves(tree1) should return 6
 feel free to try it on other nodes

 1
 / \
 2   3
 / \   \
 4  5    6
 / | \  | \
 7  8  9 10 11
 */

var tree7 = {
    value: 7,
    children: []
};

var tree8 = {
    value: 8,
    children: []
};

var tree9 = {
    value: 9,
    children: []
};

var tree10 = {
    value: 10,
    children: []
};

var tree11 = {
    value: 11,
    children: []
};

var tree4 = {
    value: 4,
    children: []
};

var tree5 = {
    value: 5,
    children: [tree7, tree8, tree9]
};

var tree6 = {
    value: 6,
    children: [tree10, tree11]
};


var tree2 = {
    value: 2,
    children: [tree4, tree5]
};

var tree3 = {
    value: 3,
    children: [tree6]
};

var tree1 = {
    value: 1,
    children: [tree2, tree3]
};

QUnit.test("tree7 test", function(assert) {
    assert.ok(1 === api.treeCountLeaves(tree7), "Passed!");
});

QUnit.test("tree8 test", function(assert) {
    assert.ok(1 === api.treeCountLeaves(tree8), "Passed!");
});

QUnit.test("tree9 test", function(assert) {
    assert.ok(1 === api.treeCountLeaves(tree9), "Passed!");
});

QUnit.test("tree10 test", function(assert) {
    assert.ok(1 === api.treeCountLeaves(tree10), "Passed!");
});

QUnit.test("tree11 test", function(assert) {
    assert.ok(1 === api.treeCountLeaves(tree11), "Passed!");
});

QUnit.test("tree4 test", function(assert) {
    assert.ok(1 === api.treeCountLeaves(tree4), "Passed!");
});

QUnit.test("tree5 test", function(assert) {
    assert.ok(3 === api.treeCountLeaves(tree5), "Passed!");
});

QUnit.test("tree6 test", function(assert) {
    assert.ok(2 === api.treeCountLeaves(tree6), "Passed!");
});

QUnit.test("tree2 test", function(assert) {
    assert.ok(4 === api.treeCountLeaves(tree2), "Passed!");
});

QUnit.test("tree3 test", function(assert) {
    assert.ok(2 === api.treeCountLeaves(tree3), "Passed!");
});

QUnit.test("tree1 test", function(assert) {
    assert.ok(6 === api.treeCountLeaves(tree1), "Passed!");
});
