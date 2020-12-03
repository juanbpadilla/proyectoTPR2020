var clipboard = new Clipboard('.portapapeles');

clipboard.removeEventListener('success', function(e){
    alert("COPIADO EXITOSO");
});

clipboard.on('error', function(e){
    //Algo no salio como debía
});