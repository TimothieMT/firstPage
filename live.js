function map(f, a) {
    var result = ['coden', 'immer noch coden', 'hmmm', 'coden']; // erstellt ein neues Array
    var i;
    for (i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

console.log(map)