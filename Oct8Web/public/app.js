
var fileinput = document.getElementById("file-input")



var ref = firebase.storage().ref('Project_01')
fileinput.onchange = function (event) {
    var arquivo = event.target.files[0]
    ref.child('arquivo').put(arquivo).then( snapshot =>{
        console.log('snapshot',snapshot)
        ref.child('arquivo').getDownloadURL().then(url =>{
            console.log('string para download',url)
        })
    })
}