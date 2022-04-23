function makeTable(){
    var table = document.getElementById('tab')
    var row = document.getElementById('rows').value
    var col = document.getElementById('cols').value

    console.log(row+"X"+col)

    for(var rowIndex =0;rowIndex<row;rowIndex++){
        var tr =document.createElement('tr');
        for(var colIndex =0;colIndex<col;colIndex++){
            var td = document.createElement('td');
            td.setAttribute('onmouseover','detalhe()');
            td.setAttribute('id','cells');
            var text = document.createTextNode(rowIndex+"X"+colIndex)
            var div = document.createElement('div')
            div.setAttribute('id','detalhes');

            td.appendChild(text);
            td.appendChild(div)
            tr.appendChild(td)

        }
        table.appendChild(tr)
    }

    alturaRua(row)
    
}

const getData = ()=>{
    fetch('https://reqres.in/api/users?page=2')
    .then(Response=>{
        return Response.json()
    })
    .then(ResponseData=>{
        console.log(ResponseData.data[1])
    })
}

function alturaRua(numFilas) {
    console.log(70*numFilas)
    var altura = 70*numFilas
    document.getElementById('rua').style.height=parseInt(altura)+"px"
    document.getElementById('tab').style.height=parseInt(altura)+"px"
    //document.getElementsByClass("rua").style.height = 70*numFilas;
  }

function detalhe(){
    //document.getElementsByClassName('tooltiptext').style.width="400px;"
    //alert('hello')
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }



document.getElementById('make').addEventListener('click',makeTable)
document.getElementById('btnGet').addEventListener('click',getData)
