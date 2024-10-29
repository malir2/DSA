// Map function

const map = new Map();
map.set(1, "Ali");
map.set(2, "Umer");

// console.log(map);

// Implementation of map method with class

// We will make a class function in which we will implement al function and then use it also check the functionality way

class tableData {
  constructor(size) {
    this.table = new Array(size); // Fix the size of the array
    this.size = size;
  }

  // Here I will make a function to make index with key with the help of the ASCII code

  hash(key) {
    let index = 0;

    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt[i];
    }

    return index % this.size; // To make insure that index must be in the range of array size
  }

  set(key, value) {
    let index = this.hash(key); // We will use now hash function to set the index

    this.table[index] = value;
  }

  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }

  delete(key) {
    let index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hashTable = new tableData(20);

// Here is problem now name and main have same index becuase there ASCII code are same this process is called collision.

// In data structure there is no option of data lost

// hashTable.set("name", "Ali");
// hashTable.get("name");
// hashTable.set("mane", "Branch");

// hashTable.display();

// Here we will resolve that issue of collision

class tableObj {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.size;
  }

  // Now we will use array approach
  set(key, value) {
    const index = this.hash(key);

    // Now check if there is any data at that index
    if (!this.table[index]) {
      this.table[index] = [];
    }

    // Check if the key already exists
    const bucket = this.table[index];
    const sameKey = bucket.find((item) => item[0] === key);

    if (sameKey) {
      // If the key is found, update the value
      sameKey[1] = value;
    } else {
      // Otherwise, add a new key-value pair
      bucket.push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        return sameKey[1];
      }
    }
    console.log(undefined);
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyIndex = bucket.findIndex((item) => item[0] === key);
      if (sameKeyIndex !== -1) {
        bucket.splice(sameKeyIndex, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] && this.table[i].length > 0) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hashMap = new tableObj(50);

hashMap.set("name", "Ali");
hashMap.set("name", "M Ali");
hashMap.set("mane", "Role");
hashMap.remove("mane");
hashMap.get("mane");
hashMap.set("main", "Role");
hashMap.set("mani", "Role");

hashMap.display();
