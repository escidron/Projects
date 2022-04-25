function makeTable(row,col){
  //  var table = document.getElementById('tab')
    var container = document.getElementById("container")
    
    var table = document.createElement('table')
    table.setAttribute('id','tab');
    container.appendChild(table)
    for(var rowIndex =0;rowIndex<row;rowIndex++){
        var tr =document.createElement('tr');
        for(var colIndex =0;colIndex<col;colIndex++){
            var td = document.createElement('td');
            td.setAttribute('onmouseover','popup(this)');
            td.setAttribute('onmouseout','popuput(this)');
            td.setAttribute('onClick','popupClick(this)');

            var text = document.createTextNode(rowIndex+"X"+colIndex)
            var divtext = document.createTextNode("popup teste")
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

    
    
}

function makeRua(altura){
  var rua = document.createElement('div')
  rua.setAttribute('class','rua');
  rua.setAttribute('id','rua');
  var container = document.getElementById("container")
  container.appendChild(rua)
  
  
}

function makeTorre(){
  var torre = document.createElement('div')
  torre.setAttribute('class','torre');
  var container = document.getElementById("container")
  container.appendChild(torre)

}

function mapa(){
  var row    = document.getElementById('rows').value
  var col    = document.getElementById('cols').value
  var torres = document.getElementById('torre').value

  for(x =1;x<=torres;x++){
    if (x==1) {
      makeRua()
      makeTable(row,col)
      makeTorre()
      makeTable(row,col)
      makeRua()
    }
    else{
      
      makeTable(row,col)
      makeTorre()
      makeTable(row,col)
      makeRua()
    }
    
    
  }
  
  var altura = 70*row
  var divsRua = document.querySelectorAll('div.rua')
  for(x=0;x<divsRua.length;x++){
    
    divsRua[x].style.height=parseInt(altura)+"px"
  }
  var divsTable = document.querySelectorAll('table')
  for(x=0;x<divsTable.length;x++){
    
    divsTable[x].style.height=parseInt(altura)+"px"
  }
  var divsTorre = document.querySelectorAll('div.torre')
  for(x=0;x<divsTorre.length;x++){
    
    divsTorre[x].style.height=parseInt(altura)+"px"
  }
}



/*
  function alturaRua(numFilas) {
    
    var altura = 70*numFilas
    document.getElementById('rua').style.height=parseInt(altura)+"px"
    document.getElementById('tab').style.height=parseInt(altura)+"px"

  }*/

  function popup(cell) {
   
    var x=cell.parentElement.parentElement.rows[cell.parentElement.rowIndex].cells;   
    x[cell.cellIndex].querySelector('div').style.transform = "translateY(70%) scale(1)"
  }

  function popuput(cell){

    var x=cell.parentElement.parentElement.rows[cell.parentElement.rowIndex].cells;  

    if (x[cell.cellIndex].querySelector('div').classList.contains('show')){
      
    }
    else{
      x[cell.cellIndex].querySelector('div').style.transform = "translateY(70%) scale(0)" 
    }
    
    //console.log(x[cell.cellIndex].querySelector('div').classList.contains('show')) 
    
  }

  function popupClick(cell) {
      
    var x=cell.parentElement.parentElement.rows[cell.parentElement.rowIndex].cells;   
    x[cell.cellIndex].querySelector('div').classList.toggle("show")
    
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

document.getElementById('make').addEventListener('click',mapa)
document.getElementById('btnGet').addEventListener('click',getData)
