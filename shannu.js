var num=0, i=0;  //number of tasks
let mytasks = [];

var tt = document.getElementById("display");

function taskdeets()
{
    var showdiv = document.getElementById("clickdrop");
    showdiv.style.display = "block";
}

function aftersave()
{
    
    var msg1 = document.getElementById("taskname").value;          
    var msg2 = document.getElementById("taskdesc").value;
    var msg3 = document.getElementById("priority").value;
    var msg4 = 0;

    var newRow = tt.insertRow(num+1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);


    cell1.innerHTML = msg1;
    cell2.innerHTML = msg2;
    cell3.innerHTML = msg3;          


    tt.style.display = "block";
 
    mytasks.push({Name:msg1, Desc:msg2, Color:msg3});
    

    if(msg3=="low")
    {    newRow.style.backgroundColor = "#00FF00";
         mytasks[num].Color = "#00FF00"}

    else if(msg3=="medium")
    {    newRow.style.backgroundColor = "#ffff00";
         mytasks[num].Color =  "#ffff00"  }
    
    else
    {    newRow.style.backgroundColor = "#ff0000"; 
         mytasks[num].Color =  "#ff0000"}

         console.log(mytasks);

    num += 1;
    i = i+1;
    
    // document.getElementById("heading").style.display = "block";
    var showdiv = document.getElementById("clickdrop");
    showdiv.style.display = "none";
}

console.log(mytasks);

function filterlow()
{
    tt.style.display = "none";
    document.getElementById("allfiltermedium").style.display="none";
    document.getElementById("allfilterhigh").style.display="none";
    var filtered = [];

    var total = document.getElementById("display").rows.length;
   
    var size = document.getElementById("allfilterlow").rows.length; 
    var table = document.getElementById("allfilterlow");
for (var i = size-1; i >0; i--) {  
    table.deleteRow(i); 
    }
    var j,k=0;
   for(j=0;j<total;j++)
    {
        if(mytasks[j].Color=="#00FF00")
        {
            console.log(mytasks[j].Color);
            var tt2 = document.getElementById("allfilterlow");
            var newRow = tt2.insertRow(k+1);
            var filcell1 = newRow.insertCell(0);
            var filcell2 = newRow.insertCell(1);

            newRow.style.backgroundColor = mytasks[j].Color;
            filcell1.innerHTML = mytasks[j].Name;
            filcell2.innerHTML = mytasks[j].Desc;
            tt2.style.display="block";
            k++;
        }    
    }
}

function filtermedium()
{
    tt.style.display = "none";
    document.getElementById("allfilterlow").style.display="none";
    document.getElementById("allfilterhigh").style.display="none";
    var filtered = [];

    var total = document.getElementById("display").rows.length;
    
    var size = document.getElementById("allfiltermedium").rows.length; 
    var table = document.getElementById("allfiltermedium");
    for (var i = size-1; i >0; i--) 
    {
        table.deleteRow(i); 
    }

    var j,k=0;
    for(j=0;j<total;j++)
    {
        if(mytasks[j].Color=="#ffff00")
        {
            console.log(mytasks[j].Color);
            var tt2 = document.getElementById("allfiltermedium");
            var newRow = tt2.insertRow(k+1);
            var filcell1 = newRow.insertCell(0);
            var filcell2 = newRow.insertCell(1);

            newRow.style.backgroundColor = mytasks[j].Color;
            filcell1.innerHTML = mytasks[j].Name;
            filcell2.innerHTML = mytasks[j].Desc; 

            tt2.style.display="block";
            k++;
        }    
    }
}

function filterhigh()
{
    tt.style.display = "none";
    document.getElementById("allfiltermedium").style.display="none";
    document.getElementById("allfilterlow").style.display="none";
    var filtered = [];

    var total = document.getElementById("display").rows.length;
    
    var size = document.getElementById("allfilterhigh").rows.length; 
    var table = document.getElementById("allfilterhigh");
    for (var i = size-1; i >0; i--) 
    {  
        table.deleteRow(i); 
    }

    var j,k=0;


    for(j=0;j<total;j++)
    {
        if(mytasks[j].Color=="#ff0000")
        {
            console.log(mytasks[j].Color);
            var tt2 = document.getElementById("allfilterhigh");
            var newRow = tt2.insertRow(k+1);
            var filcell1 = newRow.insertCell(0);
            var filcell2 = newRow.insertCell(1);

            newRow.style.backgroundColor = mytasks[j].Color;
            filcell1.innerHTML = mytasks[j].Name;
            filcell2.innerHTML = mytasks[j].Desc; 

            tt2.style.display="block";
            k++;
        }    
    }
}

function showall()
{
    tt.style.display = "block";
    document.getElementById("allfiltermedium").style.display="none";
    document.getElementById("allfilterlow").style.display="none";
    document.getElementById("allfilterhigh").style.display="none";
}