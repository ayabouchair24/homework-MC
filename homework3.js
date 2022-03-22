/*Exercice 1:
Write a JavaScript program that compare two objects 
to determine if the first one contains equivalent 
property values to the second one.*/
 

var p1 = {
    nom: "Aya",
    age: 19,
    specialite: "info"
}

let p2 = {
    age: 19,
    specialite: "info"
}


function cmp(p1, p2) {

    for (key in p2) {
        
        if (p1[key] !== p2[key]) {
            return false;
        }
    }
    return true
}


console.log(cmp(p1, p2))

/*Exercice 2:
Write a JavaScript function to find the common elements from two arrays
console.log(common([1, 2, 3], [100, 2, 1, 10]));
["1", "2"] */


function common(arr1, arr2) {
    var tmp = [];                   // tableau pour les elm communs
    for(var i=0 ; i<arr1.length ; ++i) {
      for(var j=0 ; j<arr2.length ; ++j) {
        if(arr1[i] == arr2[j]) {       // si  l'element est dans les 2 tableaux push it to tmp
          tmp.push(arr1[i]);        
        }
      }
    }
    
    return tmp;                    
  }

  
var arr1 = [1, 2, 3],
arr2 = [100, 2, 1, 10];
console.log(common(arr1, arr2)) 
