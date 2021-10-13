const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  tree = new Node(null)
  
  root() {
    return this.tree.data ? this.tree : null
  }

  add(data) {
    this._addNode(data, this.tree)
  }

  has(data) {
    return this.find(data) ? true : false
  }

  find(data) {
    return this._findNode(data, this.tree)
  }

  remove(data) {
    let parent = this._findParentNode(data, this.tree, null)
    let nodeToRemove = null
    if (parent) {
      if (parent.left && parent.left.data === data) {
        nodeToRemove = parent.left
        parent.left = null
      } else if (parent.right) {
        nodeToRemove = parent.right
        parent.right = null
      }
    } else if (this.tree.data === data) {
      nodeToRemove = this.tree
      this.tree = new Node(null)
    } else {
      return
    }
      this._mergeTree(nodeToRemove.left)
      this._mergeTree(nodeToRemove.right)
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  _addNode(data, node) {
    if (!node.data) {
      node.data = data
    } else {
      if (node.data > data) {
          if (!node.left) {
              node.left = new Node(data)
          } else {
              this._addNode(data, node.left)
          }
      } else {
          if (!node.right) {
              node.right = new Node(data)
          } else {
              this._addNode(data, node.right)
          }
      }
    }
  }

  _findNode(data, node) {
    if (!node) return null
    if (!node.data) return null
    if (node.data === data) return node
    return this._findNode(data, node.data > data ? node.left : node.right)
  }

  _mergeTree(node) {
    if (!node) return
    this.add(node.data)
    this._mergeTree(node.left)
    this._mergeTree(node.right)
  }

  _findParentNode(data, node, parentNode) {
    if (!node) return null
    if (!node.data) return null
    if (node.data === data) return parentNode
    return this._findParentNode(data, node.data > data ? node.left : node.right, node)
  }

}