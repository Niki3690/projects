function selectGrade(row1){
    if(grade==="AA"){
        return 85-100 * grade;
    }else if(grade==="AB"){
        return 75-84 * grade;
    }else if(grade==="BB"){
        return 65-74 * grade;
    }else if(grade==="BC"){
      return 55-64 * grade;
    }else if(grade==="CC"){
      return 45-54 * grade;
    }else if(grade==="CD"){
      return 40-44 * grade;
    }else if(grade==="DD"){
      return 35-39 * grade;
    }else if(grade==="FF"){
        return lessThan-35 * grade;
    }
    
}









    function addSubject(){ 
        var table = document.getElementById('tbl');
        var rowCount = table.rows.length;
        var cellCount = table.rows[0].cells.length; 
        var row = table.insertRow(rowCount);
        for(var i =0; i <= cellCount; i++){
            var cell = 'cell'+i;
            cell = row.insertCell(i);
            var copycel = document.getElementById('col'+i).innerHTML;
            cell.innerHTML=copycel;
            if(i == 3){ 
                var radioinput = document.getElementById('col3').
              getElementsByTagName('input'); 
                for(var j = 0; j <= radioinput.length; j++) { 
                    if(radioinput[j].type == 'radio') { 
                        var rownum = rowCount;
                        radioinput[j].name = 'gender['+rownum+']';
                    }
                }
              }
            }
          }


      
      
      
      
      
      
            
          function removeAllSubject(){
        var table = document.getElementById('tbl');
        var rowCount = table.rows.length;
        if(rowCount > '5'){
            var row = table.deleteRow(rowCount-1);
            rowCount--;
        }
        else{
            alert('There should be atleast one row');
        }
    }










   
        


    
    
    
    

















































































 

   

    



    

    

    
    
    
    
    
    
    
    


   
   
   
   
   
   
   
   
   
   













    

























