function stringCount (string) {
    const length = string.length;
    if (length>= 1 && length < 10){
        return length;
    }
    else {
        throw new Error("Invalid" );
    }
  

}

module.exports = stringCount;