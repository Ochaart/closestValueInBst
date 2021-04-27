// Average: O(log(n)) | O(log(n)) space
// worst: O(n) time | O(n) space

function findClosestValueInBst(tree, target) {
  // Write your code here.
	return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest) {
	if (tree === null) return closest;
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	if (target > tree.value) {
		return findClosestValueInBstHelper(tree.right, target, closest)
	} else if (target < tree.value) {
		return findClosestValueInBstHelper(tree.left, target, closest)
	} else {
		return closest;
	}
}

// Ave: O(log(n)) | O(1)
// Worst: O(n) time | O(1) space

function findClosestValueInBst(tree, target) {
  // Write your code here.
	return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
	let currentNode = tree;
	while (currentNode !== null) {
		if (Math.abs(closest - target) > Math.abs(currentNode.value - target)) {
			closest = currentNode.value;
		}
		if (target > currentNode.value) {
			currentNode = currentNode.right;
		} else if (target < currentNode.value) {
			currentNode = currentNode.left;
		} else {
			break;
		}
	}
	return closest;
}

