//depth first search implementation

var api = (function() {
  "use strict";

  // private area: empty

  return {

    treeCountLeaves: function loop(node) {

      if (node.children.length == 0) {
        return 1;
      } else {
        return node.children.reduce(
          function(
            previousValue,
            currentValue
          ) {
            return previousValue + loop(currentValue);
          }, 0
        );
      }
    }
  }
})();
