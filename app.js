/*$
  Write a function to determine if 2 strings are an anagram of each other.

  An anagram of a string is another string that contains same letters (ignoring spaces, capitalization, and punctuation), only the order of letters can be different.
  For example,
    "dormitory", "Dirty Room!" => true
    "tag", "cat" => false
*/

function isLetter(char) {
  return /[A-Za-z]/.test(char);
}

function compare(input1, input2) {
  let split1 = input1.split("");
  let split2 = input2.split("");

  let arr1 = [];
  let arr2 = [];
  split1.map((item) => {
    if (isLetter(item)) {
      arr1.push(item.toLowerCase());
    }
    return;
  });
  split2.map((item) => {
    if (isLetter(item)) {
      arr2.push(item.toLowerCase());
    }
    return;
  });

  arr1 = arr1.sort((a, b) => (a > b ? 1 : -1));
  arr2 = arr2.sort((a, b) => (a > b ? 1 : -1));

  arr1 = arr1.join("");
  arr2 = arr2.join("");
  return arr1 === arr2;
}

// console.log(compare("dormitory", "Dirty Room!"));
// console.log(compare("tag", "cat"));

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    } else if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
    return "nothing found";
  }
}

let test = new Node(10);
test.insert(9);
test.insert(9);
test.insert(9);

console.log(test);
