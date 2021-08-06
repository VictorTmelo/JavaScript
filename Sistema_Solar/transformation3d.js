class Transformation3d{

    reflexaoX(vetor){

        var vetorAux; 

        var matrix = new Matrix(4,4,[1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1])

        var mul = new Linalg()

    
        for(var i = 0; i < vetor.length;i++){
          
            vetorAux =  new Vector(4,[vetor[i].elements[0],vetor[i].elements[1],vetor[i].elements[2],1])
            
            vetor[i] = mul.mulMatrix(matrix,vetorAux)

        }

    }

    reflexaoY(vetor){

        var vetorAux; 

        var matrix = new Matrix(4,4,[-1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])

        var mul = new Linalg()

    
        for(var i = 0; i < vetor.length;i++){
          
            vetorAux =  new Vector(4,[vetor[i].elements[0],vetor[i].elements[1],vetor[i].elements[2],1])
            
            vetor[i] = mul.mulMatrix(matrix,vetorAux)

        }
        
    }

    reflexaoZ(vetor){

      
        var vetorAux; 

        var matrix = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1])

        var mul = new Linalg()

    
        for(var i = 0; i < vetor.length;i++){
          
            vetorAux =  new Vector(4,[vetor[i].elements[0],vetor[i].elements[1],vetor[i].elements[2],1])
            
            vetor[i] = mul.mulMatrix(matrix,vetorAux)

        }
        
    }

    rotacaoX(vetor,angulo){

        const converte = Math.PI/180
  
        var vetorAux; 

        var matrix = new Matrix(4,4,[1,0,0,0,0,Math.cos(angulo * converte),-Math.sin(angulo * converte),
            0,0,Math.sin(angulo * converte),Math.cos(angulo * converte),0,0,0,0,1])

        var mul = new Linalg()

    
        for(var i = 0; i < vetor.length;i++){
          
            vetorAux =  new Vector(4,[vetor[i].elements[0],vetor[i].elements[1],vetor[i].elements[2],1])
            
            vetor[i] = mul.mulMatrix(matrix,vetorAux)

        }
    }



    rotacaoY(vetor,angulo){

      
        const converte = Math.PI/180
  
        var vetorAux; 

        var matrix = new Matrix(4,4,[Math.cos(angulo * converte),0,Math.sin(angulo * converte),0,0,1,0,0,
            -Math.sin(angulo * converte),0,Math.cos(angulo * converte),0,0,0,0,1])

        var mul = new Linalg()

    
        for(var i = 0; i < vetor.length;i++){
          
            vetorAux =  new Vector(4,[vetor[i].elements[0],vetor[i].elements[1],vetor[i].elements[2],1])
            
            vetor[i] = mul.mulMatrix(matrix,vetorAux)

        }
    }



    rotacaoZ(vetor,angulo){

        
        const converte = Math.PI/180
  
        var vetorAux; 

        var matrix = new Matrix(4,4,[Math.cos(angulo* converte),-Math.sin(angulo* converte),
            0,0,Math.sin(angulo* converte),Math.cos(angulo* converte),0,0,0,0,1,0,0,0,0,1])

        var mul = new Linalg()

    
        for(var i = 0; i < vetor.length;i++){
          
            vetorAux =  new Vector(4,[vetor[i].elements[0],vetor[i].elements[1],vetor[i].elements[2],1])
            
            vetor[i] = mul.mulMatrix(matrix,vetorAux)

        }
    }

    projecaoXY(vetor){

        var vetorAux; 

        var matrix = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1])

        var mul = new Linalg()

    
        for(var i = 0; i < vetor.length;i++){
          
            vetorAux =  new Vector(4,[vetor[i].elements[0],vetor[i].elements[1],vetor[i].elements[2],1])
            
            vetor[i] = mul.mulMatrix(matrix,vetorAux)

        }
    }

    projecaoXZ(vetor){

       
        var vetorAux; 

        var matrix = new Matrix(4,4,[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1])

        var mul = new Linalg()

    
        for(var i = 0; i < vetor.length;i++){
          
            vetorAux =  new Vector(4,[vetor[i].elements[0],vetor[i].elements[1],vetor[i].elements[2],1])
            
            vetor[i] = mul.mulMatrix(matrix,vetorAux)

        }
    }

    projecaoYZ(vetor){

       
        var vetorAux; 

        var matrix = new Matrix(4,4,[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])

        var mul = new Linalg()

    
        for(var i = 0; i < vetor.length;i++){
          
            vetorAux =  new Vector(4,[vetor[i].elements[0],vetor[i].elements[1],vetor[i].elements[2],1])
            
            vetor[i] = mul.mulMatrix(matrix,vetorAux)

        }
    }

    cisalhamento(vetor,SHzx,SHzy,Zref){

        var vetorAux; 

        var matrix = new Matrix(4,4,[1,0,SHzx,-SHzx * Zref,0,1,SHzy,-SHzy * Zref,0,0,1,0,0,0,0,1])

        var mul = new Linalg()

    
        for(var i = 0; i < vetor.length;i++){
          
            vetorAux =  new Vector(4,[vetor[i].elements[0],vetor[i].elements[1],vetor[i].elements[2],1])
            
            vetor[i] = mul.mulMatrix(matrix,vetorAux)

        }
    }

    translacao(vetor,dx,dy,dz){

       
        var vetorAux; 

        var matrix = new Matrix(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1])

        var mul = new Linalg()

    
        for(var i = 0; i < vetor.length;i++){
          
            vetorAux =  new Vector(4,[vetor[i].elements[0],vetor[i].elements[1],vetor[i].elements[2],1])
            
            vetor[i] = mul.mulMatrix(matrix,vetorAux)

        }
    }
}