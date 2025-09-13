// test case: print a sorted array in a bst form.

const sortedList = [1, 2, 3, 4, 5, 6, 7];

function buildBST(arr) {
  if (arr.length === 0) return null;
  const mid = Math.floor(arr.length / 2);
  const node = {
    value: arr[mid],
    left: buildBST(arr.slice(0, mid)),
    right: buildBST(arr.slice(mid + 1)),
  };
  return node;
}

function printTree(node, prefix = "", isLeft = true) {
  if (node === null) return;
  console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);
  printTree(node.left, prefix + (isLeft ? "│   " : "    "), true);
  printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
}

function levelOrder(head) {
  const queue = [];
  queue.push(head);

  const len = queue.length;
  while (len > 0) {
    const current = queue[0];
    if (!current) return;
    console.log(current.value);
    const left = current.left;
    const right = current.right;
    if (left) queue.push(left);
    if (right) queue.push(right);
    queue.shift();
  }
}

/**
 * visualizing `buildBST` callstack
 * input -> [1, 2, 3, 4, 5, 6, 7]
 * pt()
 *  4
 *  ->  pt()
 *      2
 *      ->  pt()
 *          1
 *      ->  pt()
 *          3
 *  ->  pt()
 *      6
 *      ->  pt()
 *          5
 *      ->  pt()
 *          7
 */

const bst = buildBST(sortedList);
// printTree(bst);
levelOrder(bst);
