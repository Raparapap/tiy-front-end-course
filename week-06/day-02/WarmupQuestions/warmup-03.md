console.log('hello'.repeatify(3)); // hellohellohello

Solution:


function repeatify(n) {
    if (n===1||n===0) {
        return this.toString();
    }
    return this.repeatify(n-1) + this;
}



String.prototype.repeatify = repeatify;
console.log('hello'.repeatify(5));