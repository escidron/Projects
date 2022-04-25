function makeTable(){
    var table = document.getElementById('tab')
    var row = document.getElementById('rows').value
    var col = document.getElementById('cols').value

    console.log(row+"X"+col)
    const arr = ["a","b","c"]
    for(var rowIndex =0;rowIndex<row;rowIndex++){
        var tr =document.createElement('tr');
        for(var colIndex =0;colIndex<col;colIndex++){
            var td = document.createElement('td');
            td.setAttribute('onmouseover','popup(this)');
            td.setAttribute('onmouseout','popuput(this)');
            td.setAttribute('onClick','popupClick(this)');

            var text = document.createTextNode(rowIndex+"X"+colIndex)
            var divtext = document.createTextNode(arr[1])
            var span = document.createElement('span')
            span.setAttribute('id','cellText');
            var div = document.createElement('div')
            div.setAttribute('id','details');
          


            td.appendChild(span);
            td.appendChild(div)
            span.appendChild(text)
            div.appendChild(divtext)
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

  function popup(cell) {
      
    var x=document.getElementById('tab').rows[cell.parentElement.rowIndex].cells;   
    x[cell.cellIndex].querySelector('div').style.transform = "translateY(70%) scale(1)"
  }

  function popuput(cell){

   

    var x=document.getElementById('tab').rows[cell.parentElement.rowIndex].cells;  

    if (x[cell.cellIndex].querySelector('div').classList.contains('show')){
      
    }
    else{
      x[cell.cellIndex].querySelector('div').style.transform = "translateY(70%) scale(0)" 
    }
    
    console.log(x[cell.cellIndex].querySelector('div').classList.contains('show')) 
    //.classList.contains('secondary')
  }

  function popupClick(cell) {
      
    var x=document.getElementById('tab').rows[cell.parentElement.rowIndex].cells;   
    x[cell.cellIndex].querySelector('div').classList.toggle("show")
    
  }
  

document.getElementById('make').addEventListener('click',makeTable)
document.getElementById('btnGet').addEventListener('click',getData)
