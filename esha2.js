
var c=[];
function friend(a)
{
  if(a.length==0){
    return 'Empty array found . invalid inputs ..'
    
}
        
  else {
    for(let i=0;i<a.length;i++){
        if(a[i].length >5 || a[i].length<5){

          return 'you have no friends'
    }
   else if (a[i].length==5){
    return a[i] 
}

    }
  }
}




const output=friend(c)
console.log(output)
