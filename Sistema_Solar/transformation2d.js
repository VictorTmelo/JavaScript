class Transformation2d{


    reflexaoY(vetor){


       var vetorAux; 

       var matrix = new Matrix(3,3,[-1,0,0,0,1,0,0,0,1])

       var mul = new Linalg()

   
       for(var i = 0; i < vetor.length;i++){
         
           vetorAux =  new Vector(3,[vetor[i].elements[0],vetor[i].elements[1],1])
           
           vetor[i] = mul.mulMatrix(matrix,vetorAux)

       }

       
       
   }

   reflexaoX(vetor){

      
       var vetorAux; 

       var matrix = new Matrix(3,3,[1,0,0,0,-1,0,0,0,1])

       var mul = new Linalg()

   
       for(var i = 0; i < vetor.length;i++){
         
           vetorAux =  new Vector(3,[vetor[i].elements[0],vetor[i].elements[1],1])
           
           vetor[i] = mul.mulMatrix(matrix,vetorAux)

       }

      
   }

   rotacao(vetor,angulo){

     const converte = Math.PI/180
      
     var vetorAux; 

     var matrix = new Matrix(3,3,[Math.cos(angulo* converte),-Math.sin(angulo * converte),0,
               Math.sin(angulo* converte),Math.cos(angulo* converte),0,0,0,1])
   
     var mul = new Linalg()
   
       
           for(var i = 0; i < vetor.length;i++){
             
               vetorAux =  new Vector(3,[vetor[i].elements[0],vetor[i].elements[1],1])
               
               vetor[i] = mul.mulMatrix(matrix,vetorAux)
   
           }
   
   }

   projecaoX(vetor){

   
       var vetorAux; 

       var matrix = new Matrix(3,3,[1,0,0,0,0,0,0,0,0])
   
       var mul = new Linalg()
   
       
           for(var i = 0; i < vetor.length;i++){
             
               vetorAux =  new Vector(3,[vetor[i].elements[0],vetor[i].elements[1],1])
               
               vetor[i] = mul.mulMatrix(matrix,vetorAux)
   
           }
   }

   projecaoY(vetor){

      
       var vetorAux; 

       var matrix = new Matrix(3,3,[0,0,0,0,1,0,0,0,0])
   
       var mul = new Linalg()
   
       
           for(var i = 0; i < vetor.length;i++){
             
               vetorAux =  new Vector(3,[vetor[i].elements[0],vetor[i].elements[1],1])
               
               vetor[i] = mul.mulMatrix(matrix,vetorAux)
   
           }
   }

   cisalhamento(vetor,kx,ky){

       var vetorAux; 

       var matrix = new Matrix(3,3,[1,kx,0,ky,1,0,0,0,1])
   
       var mul = new Linalg()
   
       
           for(var i = 0; i < vetor.length;i++){
             
               vetorAux =  new Vector(3,[vetor[i].elements[0],vetor[i].elements[1],1])
               
               vetor[i] = mul.mulMatrix(matrix,vetorAux)
   
           }
   }

   translacao(vetor,dx,dy){
    
       var vetorAux; 

       var matrix = new Matrix(3,3,[1,0,dx,0,1,dy,0,0,1])

       var mul = new Linalg()
   
       
           for(var i = 0; i < vetor.length;i++){
             
               vetorAux =  new Vector(3,[vetor[i].elements[0],vetor[i].elements[1],1])
               
               vetor[i] = mul.mulMatrix(matrix,vetorAux)
   
           }
   }
}