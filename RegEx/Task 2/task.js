function passWord(user) {
    if(/^[A-Za-z]\w{7,14}$/.test(user)) {
    console.log('Valid');
    } 
    else {
    console.log('Not Valid');
    }
}
passWord('pavi978861015_');
passWord('63528%792');     