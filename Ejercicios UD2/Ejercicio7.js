let arrayMinas =[
      [0,0,-1,0], 
      [0,-1,-1,0]
   ];
//arriba es -1 y abajo +1, a la derecha +1 y a la izquierda -1
// por ejemplo arriba izquierda i -1 j -1, arriba a la derecha i- 1 j +1 
let resultado = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
const buscaMinas = (arrayMinas) =>{

 for(let i=0;i<arrayMinas.length;i++){

    for(let j=0;j<arrayMinas[i].length;j++){

      if (arrayMinas[i][j] === -1) {
         resultado[i][j] = -1;
     }else { 
         // miramos arriba
         if (i>0 && arrayMinas[i-1][j] === -1) {
             resultado[i][j] += 1;
         }
         // miramos abajo
         if (i<arrayMinas.length-1 && arrayMinas[i+1][j] === -1) {
             resultado[i][j] += 1;
         }
         // miramos a la derecha
         if (j<arrayMinas[i].length-1 && arrayMinas[i][j+1] === -1) {
             resultado[i][j] += 1;
         }
         //miramos a la izquierda
         if (j>0 && arrayMinas[i][j-1] === -1) {
         resultado[i][j] += 1;
         }
         // miramos a laiagonal superior izquierda
         if (i>0 && j>0 && arrayMinas[i-1][j-1] === -1) {
             resultado[i][j] += 1;
         }
         // miramos a la diagonal superior derecha

         if (i>0 && j<arrayMinas[i].length-1 && arrayMinas[i-1][j+1] === -1) {
             resultado[i][j] += 1;
         }
         // miramos a la diagonal inferior izquierda
         if (i<arrayMinas.length-1 && j>0 && arrayMinas[i+1][j-1] === -1) {
             resultado[i][j] += 1;
         }
         // miramos a la diagonal inferior derecha
         if (i<arrayMinas.length-1 && j<arrayMinas[i].length-1 && arrayMinas[i+1][j+1] === -1) {
          resultado[i][j] += 1;
         }
     }
 }
 
}
return resultado;

}


console.log(buscaMinas(arrayMinas));
