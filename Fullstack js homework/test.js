const array=[-3,8,7,6,5,-4,3,2,1];
 for(let i=0; i<9; i++){
    for(let j=i; j<9; j++)
    {
        if(array[i]>array[j])
        {
            let x=array[i];
            array[i]=array[j];
            array[j]=x;
        }
     }
     
}
for(let i=0; i<9; i++){
    console.log(array[i]);
}