/**There is a singly-linked list head and we want to delete a node node in it. You are given 
  the node to be deleted node. You will not be given access to the first node of head. */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteNode = function (node) {
  //craeting a node with name "nextNode" that points to the curr_node.next
  var nextNode = node.next;
  //Copying the nextNode value to the curr_Node
  node.val = nextNode.val;
  //and assigning the nextNode.next pointer to the curr_node.next
  node.next = nextNode.next;
  // so the current node and the nextNode values and pointing to the same next Node
  // so we can then making the next.node .next pointer to null
  nextNode.next = null;
  // the nextNode containing the same val and pointing to nothing
  //so now we can delete the nextNode
  delete nextNode;
};
