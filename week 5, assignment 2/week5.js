/* 
This code calculates the average of the values in each of three rows, using nearly identical code that's repeated in three places. You can improve it by creating a single function, and calling that function once for each row in the table. 

There's more than one way to do this. Your function may  accept an Array of HTMLInputElements and return the average of their values. 

Or it may accept a classname (for the text inputs) and an ID (where to write the output) and write to the page directly (returning nothing). 

There are other ways, too. The important thing about your solution is that it reduce the duplication of code we see here, and consolidate some of that functionality into a function.    
*/

function addRows(row1, row2, row3) {
    //row = [row1, row2, row3];
    rowInputs = [(parseInt(rowOneInputs)), (parseInt(rowTwoInputs)), (parseInt(rowThreeInputs))];
    var sum=0, value=0, count=0;
    if ((rowInputs == "defined") && (rowInputs == 'number')) {
        var rowInputs = document.getElementsByClassName(avg);
        for (var i = 0; i<rowInputs.length; i++) {
                value = parseInt(rowOneInputs[i].value);
                 if (value){ 
            sum += value;
            count++;

        }
}
}

document.getElementById("doIt").onclick = function(){
    var sum=0, value=0, count=0;
    
    var rowOneInputs = document.getElementsByClassName("row1");
      
    for(var i=0; i<rowOneInputs.length; i++){
        
        value = parseInt(rowOneInputs[i].value);
       
        if (value){ 
            sum += value;
            count++;
        }
    }
    
    var rowOneAvg = sum/count;
    document.getElementById("row1Average").innerHTML = rowOneAvg;

    
    sum=0;
    count=0;
    var rowTwoInputs = document.getElementsByClassName("row2");
    for(var i=0; i<rowTwoInputs.length; i++){
        value = parseInt(rowTwoInputs[i].value);
        if (value){
            sum += value;
            count++;
        }
    }
    var rowTwoAvg = sum/count;
    document.getElementById("row2Average").innerHTML = rowTwoAvg;

    // ...and now a third time for the last row
    sum=0;
    count=0;
    var rowThreeInputs = document.getElementsByClassName("row3");
    for(var i=0; i<rowThreeInputs.length; i++){
         value = parseInt(rowThreeInputs[i].value);   
        if (value){
            sum += value;
            count++;
        }
    }
    var rowThreeAvg = sum/count;
    document.getElementById("row3Average").innerHTML = rowThreeAvg;
}

