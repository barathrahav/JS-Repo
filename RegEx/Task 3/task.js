function allNumeric(user) {
    if(/^[0-9]+$/.test(user)) {
    console.log('Valid');
    } else {
    console.log('Not Valid');
    }
}
allNumeric('9788610156');
allNumeric('pavithr+a'); 