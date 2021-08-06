


class Line2d extends Transformation2d {


    constructor(x1, y1, x2, y2) {
        super()
        this.points = [
            new Vector(2, [x1, y1]),
            new Vector(2, [x2, y2])]

        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.w = 1;
      

    }

   

    setColor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    setWeight(w) {
        this.w = w;
    }

    reflexaoX(){      
        super.reflexaoX(this.points)
    }

    reflexaoY(){
        super.reflexaoY(this.points)
    }
    
    rotacao(angulo){
        super.rotacao(this.points,angulo)
    }

    projecaoX(){
        super.projecaoX(this.points)
    }

    projecaoY(){
        super.projecaoY(this.points)
    
        }

    cisalhamento(kx,ky){
        super.cisalhamento(this.points,kx,ky)
        }   

    translacao(dx,dy){
        super.translacao(this.points,dx,dy)
        
            }

    draw() {

        stroke(this.r, this.g, this.b)
        strokeWeight(this.w)
        beginShape(LINES)

        vertex(this.points[0].elements[0],
            this.points[0].elements[1])

        vertex(this.points[1].elements[0],
            this.points[1].elements[1])

        endShape()
    }
}

class Line3d extends Transformation3d {

    constructor(x1, y1, z1, x2, y2, z2) {

        super()
        this.points = [
            new Vector(3, [x1, y1, z1]),
            new Vector(3, [x2, y2, z2])]

        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.w = 1;

    }

    setColor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    setWeight(w) {
        this.w = w;
    }

    reflexaoX(){

        super.reflexaoX(this.points)
      }
  
  
      reflexaoY(){
  
        super.reflexaoY(this.points)
      }
  
      reflexaoZ(){
    
        super.reflexaoZ(this.points)
      }
  
      rotacaoX(angulo){
     
        super.rotacaoX(this.points,angulo)
      }
  
  
      rotacaoY(angulo){
  
      
          super.rotacaoY(this.points,angulo)
      }
  
      rotacaoZ(angulo){
  
      
          super.rotacaoZ(this.points,angulo)
      }
  
      projecaoXY(){
  
          super.projecaoXY(this.points)
      }
  
      projecaoXZ(){
  
          super.projecaoXZ(this.points)
      }
  
      projecaoYZ(){
  
          super.projecaoYZ(this.points)
      }
  
      cisalhamento(SHzx,SHzy,Zref){
  
          super.cisalhamento(this.points,SHzx,SHzy,Zref)
  
      }
  
      translacao(dx,dy,dz){
  
          super.translacao(this.points,dx,dy,dz)
      
          }
       

    draw() {

        stroke(this.r, this.g, this.b)
        strokeWeight(this.w)
        beginShape(LINES)



        vertex(this.points[0].elements[0],
            this.points[0].elements[1],
            this.points[0].elements[2])


        vertex(this.points[1].elements[0],
            this.points[1].elements[1],
            this.points[1].elements[2])

        endShape()
    }
}

class Rect2d extends Transformation2d {

    constructor(x, y, w, h) {

        super()
        //Array de pontos
        this.points = [
            new Vector(2, [x, y]),
            new Vector(2, [x + w, y]),
            new Vector(2, [x + w, y + h]),
            new Vector(2, [x, y + h])
        ];


        //Cor da borda em RGB
        this.sR = 0;
        this.sG = 0;
        this.sB = 0;

        //Preenchimento da figura em RGB
        this.fR = 255;
        this.fG = 255;
        this.fB = 255;

        //Grossura da borda
        this.w = 1;
    }

    setColor(r, g, b) {
        this.sR = r
        this.sG = g
        this.sB = b
    }

    setFillColor(r, g, b) {
        this.fR = r
        this.fG = g
        this.fB = b
    }

    setWeight(w) {
        this.w = w;
    }

    reflexaoX(){      
        super.reflexaoX(this.points)
    }

    reflexaoY(){
        super.reflexaoY(this.points)
    }
    
    rotacao(angulo){
        super.rotacao(this.points,angulo)
    }

    projecaoX(){
        super.projecaoX(this.points)
    }

    projecaoY(){
        super.projecaoY(this.points)
    
        }

    cisalhamento(kx,ky){
        super.cisalhamento(this.points,kx,ky)
        }   

    translacao(dx,dy){
        super.translacao(this.points,dx,dy)
        
            }

    draw() {

        stroke(this.sR, this.sG, this.sB)
        fill(this.fR, this.fG, this.fB)
        strokeWeight(this.w)

        beginShape(TRIANGLES)
        vertex(this.points[0].elements[0],
            this.points[0].elements[1])

        vertex(this.points[1].elements[0],
            this.points[1].elements[1])

        vertex(this.points[2].elements[0],
            this.points[2].elements[1])

        vertex(this.points[0].elements[0],
            this.points[0].elements[1])

        vertex(this.points[2].elements[0],
            this.points[2].elements[1])

        vertex(this.points[3].elements[0],
            this.points[3].elements[1])
        endShape()
    }
}
class Rect3d extends Transformation3d{

    constructor(x, y, z, w, h, l) {

        super()
        //Array de pontos
        
        this.points = [
            new Vector(3, [x, y,z]),
            new Vector(3, [x , y+h,z]),
            new Vector(3, [x+w, y+h,z]),
            new Vector(3, [x+w, y,z]),

            new Vector(3, [x,y,z-l]),
            new Vector(3, [x,y+h,z-l]),
            new Vector(3, [x+w,y+h,z-l]),
            new Vector(3, [x+w,y,z-l])
            
        ];

        //Cor da borda em RGB
        this.sR = 0;
        this.sG = 0;
        this.sB = 0;

        //Preenchimento da figura em RGB
        this.fR = 255;
        this.fG = 255;
        this.fB = 255;

        //Grossura da borda
        this.w = 1;
    }

    setColor(r, g, b) {
        this.sR = r
        this.sG = g
        this.sB = b
    }

    setFillColor(r, g, b) {
        this.fR = r
        this.fG = g
        this.fB = b
    }

    setWeight(w) {
        this.w = w;
    }

    reflexaoX(){

        super.reflexaoX(this.points)
      }
  
  
      reflexaoY(){
  
        super.reflexaoY(this.points)
      }
  
      reflexaoZ(){
    
        super.reflexaoZ(this.points)
      }
  
      rotacaoX(angulo){
     
        super.rotacaoX(this.points,angulo)
      }
  
  
      rotacaoY(angulo){
     
        super.rotacaoY(this.points,angulo)
      }
  
      rotacaoZ(angulo){
  
        super.rotacaoZ(this.points,angulo)
      }
  
      projecaoXY(){
  
        super.projecaoXY(this.points)
      }
  
      projecaoXZ(){
  
        super.projecaoXZ(this.points)
      }
  
      projecaoYZ(){
  
        super.projecaoYZ(this.points)
      }
  
      cisalhamento(SHzx,SHzy,Zref){
  
        super.cisalhamento(this.points,SHzx,SHzy,Zref)
  
      }
  
      translacao(dx,dy,dz){
  
        super.translacao(this.points,dx,dy,dz)
      
      }
  
    draw() {
        
        stroke(this.sR, this.sG, this.sB)
        fill(this.fR, this.fG, this.fB)
        strokeWeight(this.w)

        beginShape(TRIANGLES)

       


        // Face da frente
        vertex(this.points[0].elements[0],
            this.points[0].elements[1],
            this.points[0].elements[2])

        vertex(this.points[1].elements[0],
            this.points[1].elements[1],
            this.points[1].elements[2])

        vertex(this.points[2].elements[0],
            this.points[2].elements[1],
            this.points[2].elements[2])

        vertex(this.points[0].elements[0],
            this.points[0].elements[1],
            this.points[0].elements[2])

        vertex(this.points[2].elements[0],
            this.points[2].elements[1],
            this.points[2].elements[2])

        vertex(this.points[3].elements[0],
            this.points[3].elements[1],
            this.points[3].elements[2])

        //Face da direita
        vertex(this.points[3].elements[0],
            this.points[3].elements[1],
            this.points[3].elements[2])

        vertex(this.points[2].elements[0],
            this.points[2].elements[1],
            this.points[2].elements[2])

        vertex(this.points[6].elements[0],
            this.points[6].elements[1],
            this.points[6].elements[2])

        vertex(this.points[3].elements[0],
            this.points[3].elements[1],
            this.points[3].elements[2])

        vertex(this.points[6].elements[0],
            this.points[6].elements[1],
            this.points[6].elements[2])

        vertex(this.points[7].elements[0],
            this.points[7].elements[1],
            this.points[7].elements[2])

        //Face de cima
        vertex(this.points[0].elements[0],
            this.points[0].elements[1],
            this.points[0].elements[2])

        vertex(this.points[4].elements[0],
            this.points[4].elements[1],
            this.points[4].elements[2])

        vertex(this.points[3].elements[0],
            this.points[3].elements[1],
            this.points[3].elements[2])

        vertex(this.points[3].elements[0],
            this.points[3].elements[1],
            this.points[3].elements[2])

        vertex(this.points[7].elements[0],
            this.points[7].elements[1],
            this.points[7].elements[2])

        vertex(this.points[4].elements[0],
            this.points[4].elements[1],
            this.points[4].elements[2])

        // Face da esquerda
        vertex(this.points[0].elements[0],
            this.points[0].elements[1],
            this.points[0].elements[2])

        vertex(this.points[1].elements[0],
            this.points[1].elements[1],
            this.points[1].elements[2])

        vertex(this.points[5].elements[0],
            this.points[5].elements[1],
            this.points[5].elements[2])

        vertex(this.points[0].elements[0],
            this.points[0].elements[1],
            this.points[0].elements[2])

        vertex(this.points[4].elements[0],
            this.points[4].elements[1],
            this.points[4].elements[2])

        vertex(this.points[5].elements[0],
            this.points[5].elements[1],
            this.points[5].elements[2])


        // Face debaixo

        vertex(this.points[1].elements[0],
            this.points[1].elements[1],
            this.points[1].elements[2])

        vertex(this.points[2].elements[0],
            this.points[2].elements[1],
            this.points[2].elements[2])

        vertex(this.points[5].elements[0],
            this.points[5].elements[1],
            this.points[5].elements[2])

        vertex(this.points[2].elements[0],
            this.points[2].elements[1],
            this.points[2].elements[2])

        vertex(this.points[5].elements[0],
            this.points[5].elements[1],
            this.points[5].elements[2])

        vertex(this.points[6].elements[0],
            this.points[6].elements[1],
            this.points[6].elements[2])

        // Face de tras

        vertex(this.points[6].elements[0],
            this.points[6].elements[1],
            this.points[6].elements[2])

        vertex(this.points[7].elements[0],
            this.points[7].elements[1],
            this.points[7].elements[2])

        vertex(this.points[5].elements[0],
            this.points[5].elements[1],
            this.points[5].elements[2])

        vertex(this.points[4].elements[0],
            this.points[4].elements[1],
            this.points[4].elements[2])

        vertex(this.points[5].elements[0],
            this.points[5].elements[1],
            this.points[5].elements[2])

        vertex(this.points[7].elements[0],
            this.points[7].elements[1],
            this.points[7].elements[2])

        endShape()
    }
}


class Triangle2d extends Transformation2d{

    constructor(x1, y1, x2, y2, x3, y3) {

        super()
        this.points = [
            new Vector(2, [x1, y1]),
            new Vector(2, [x2, y2]),
            new Vector(2, [x3, y3])
        ]

  
        //Cor da borda
        this.sR = 0;
        this.sG = 0;
        this.sB = 0;

        //Cor da figura, caso cor não seja definida sera preto por padrão
        this.fR = 255;
        this.fG = 255;
        this.fB = 255;

        //Grossura da borda
        this.w = 1;

    }

    setColor(r, g, b) {

        this.sR = r
        this.sG = g
        this.sB = b
    }

    setFillColor(r, g, b) {

        this.fR = r
        this.fG = g
        this.fB = b
    }

    setWeight(w) {

        this.w = w;
    }

    reflexaoX(){      
        super.reflexaoX(this.points)
    }

    reflexaoY(){
        super.reflexaoY(this.points)
    }
    
    rotacao(angulo){
        super.rotacao(this.points,angulo)
    }

    projecaoX(){
        super.projecaoX(this.points)
    }

    projecaoY(){
        super.projecaoY(this.points)
    
        }

    cisalhamento(kx,ky){
        super.cisalhamento(this.points,kx,ky)
        }   

    translacao(dx,dy){
        super.translacao(this.points,dx,dy)
        
            }

    draw() {
        stroke(this.sR, this.sG, this.sB)
        fill(this.fR, this.fG, this.fB)
        strokeWeight(this.w)

        beginShape(TRIANGLES)
        vertex(this.points[0].elements[0], this.points[0].elements[1])
        vertex(this.points[1].elements[0], this.points[1].elements[1])
        vertex(this.points[2].elements[0], this.points[2].elements[1])
        endShape()
    }
}

class Pyramid extends Transformation3d {

    constructor(x, y, z, wb, hb, h) {

        super()
        this.points = [

          
            new Vector(3, [x, y, z]),
            new Vector(3, [x - hb / 2, y , (z+hb)/2]),
            new Vector(3, [x - hb / 2, y, (z-hb)/2]),
            new Vector(3, [x - (hb / 2) + wb, y, (z+hb)/2]),
            new Vector(3, [x - (hb / 2) + wb, y, (z-hb)/2]),
            new Vector(3, [x,y-h,z])

           
        ]


        //Cor da borda
        this.bR = 0;
        this.bG = 0;
        this.bB = 0;

        //Cor da figura, caso cor não seja definida sera preto por padrão
        this.fR = 255;
        this.fG = 255;
        this.fB = 255;

        //Grossura da borda
        this.w = 1;

    }

    setColor(r, g, b) {

        this.bR = r
        this.bG = g
        this.bB = b
    }

    setFillColor(r, g, b) {

        this.fR = r
        this.fG = g
        this.fB = b
    }

    setWeight(w) {

        this.w = w;
    }

    reflexaoX(){

      super.reflexaoX(this.points)
    }


    reflexaoY(){

      super.reflexaoY(this.points)
    }

    reflexaoZ(){
  
        super.reflexaoZ(this.points)
    }

    rotacaoX(angulo){
   
        super.rotacaoX(this.points,angulo)
    }


    rotacaoY(angulo){

    
        super.rotacaoY(this.points,angulo)
    }

    rotacaoZ(angulo){

    
        super.rotacaoZ(this.points,angulo)
    }

    projecaoXY(){

        super.projecaoXY(this.points)
    }

    projecaoXZ(){

        super.projecaoXZ(this.points)
    }

    projecaoYZ(){

        super.projecaoYZ(this.points)
    }

    cisalhamento(SHzx,SHzy,Zref){

        super.cisalhamento(this.points,SHzx,SHzy,Zref)

    }

    translacao(dx,dy,dz){

        super.translacao(this.points,dx,dy,dz)
    
        }

   
    draw() {
        stroke(this.bR, this.bG, this.bB)
        fill(this.fR, this.fG, this.fB)
        strokeWeight(this.w)

        beginShape(TRIANGLES)

        //TRIANGULO 1 DA BASE
        vertex(this.points[0].elements[0],
            this.points[0].elements[1],
            this.points[0].elements[2])

        vertex(this.points[1].elements[0],
            this.points[1].elements[1],
            this.points[1].elements[2])

        vertex(this.points[2].elements[0],
            this.points[2].elements[1],
            this.points[2].elements[2])

        //TRIANGULO 2 DA BASE
        vertex(this.points[0].elements[0],
            this.points[0].elements[1],
            this.points[0].elements[2])

        vertex(this.points[1].elements[0],
            this.points[1].elements[1],
            this.points[1].elements[2])

        vertex(this.points[3].elements[0],
            this.points[3].elements[1],
            this.points[3].elements[2])

        //TRIANGULO 3 DA BASE
        vertex(this.points[0].elements[0],
            this.points[0].elements[1],
            this.points[0].elements[2])

        vertex(this.points[3].elements[0],
            this.points[3].elements[1],
            this.points[3].elements[2])

        vertex(this.points[4].elements[0],
            this.points[4].elements[1],
            this.points[4].elements[2])


        //TRIANGULO 4 DA BASE
        vertex(this.points[0].elements[0],
            this.points[0].elements[1],
            this.points[0].elements[2])

        vertex(this.points[2].elements[0],
            this.points[2].elements[1],
            this.points[2].elements[2])

        vertex(this.points[4].elements[0],
            this.points[4].elements[1],
            this.points[4].elements[2])

        //Triangulo Frente

        vertex(this.points[1].elements[0],
            this.points[1].elements[1],
            this.points[1].elements[2])

        vertex(this.points[3].elements[0],
            this.points[3].elements[1],
            this.points[3].elements[2])

        vertex(this.points[5].elements[0],
            this.points[5].elements[1],
            this.points[5].elements[2])

        //Triangulo de tras
        vertex(this.points[2].elements[0],
            this.points[2].elements[1],
            this.points[2].elements[2])

        vertex(this.points[4].elements[0],
            this.points[4].elements[1],
            this.points[4].elements[2])

        vertex(this.points[5].elements[0],
            this.points[5].elements[1],
            this.points[5].elements[2])

        //Triangulo direita     
        vertex(this.points[3].elements[0],
            this.points[3].elements[1],
            this.points[3].elements[2])

        vertex(this.points[4].elements[0],
            this.points[4].elements[1],
            this.points[4].elements[2])

        vertex(this.points[5].elements[0],
            this.points[5].elements[1],
            this.points[5].elements[2])

        //Triangulo de tras

        vertex(this.points[1].elements[0],
            this.points[1].elements[1],
            this.points[1].elements[2])

        vertex(this.points[2].elements[0],
            this.points[2].elements[1],
            this.points[2].elements[2])

        vertex(this.points[5].elements[0],
            this.points[5].elements[1],
            this.points[5].elements[2])


        endShape()
    }

}

class Circle2d extends Transformation2d{

 

    constructor(x, y, r, k) {

        super()
        const razao = 360 / k

        const converter = Math.PI/180

        this.points = []
            
        for (var i = 0; i < k; i++) {

           
            this.points[i] = [

                new Vector(2,[x,y]),
                new Vector(2,[x+(r*Math.cos((razao * i) * converter)),y + (r* Math.sin((razao * i) * converter))]),
                new Vector(2,[x+(r*Math.cos((razao * (i+1)) * converter)),y + (r* Math.sin((razao * (i+1)) * converter))])
            ]   
            
        
        }

       this.k = k
      

        this.r = 255;
        this.g = 255;
        this.b = 255;

        this.br = 0;
        this.bg = 0;
        this.bb = 0;
        this.w = 1;

    

    }

 
    setColor(r, g, b) {
        this.br = r;
        this.bg = g;
        this.bb = b;
    }

    setFillColor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }



    setWeight(w) {
        this.w = w;
        
    }

    reflexaoX(){
  
        for(var i = 0;i<this.k;i++){

            super.reflexaoX(this.points[i])          
       }
    }

    reflexaoY(){
        for(var i = 0;i<this.k;i++){

            super.reflexaoY(this.points[i])          
       }
    }
    
    rotacao(angulo){
   
       for(var i = 0; i < this.k;i++){

           super.rotacao(this.points[i],angulo)
  
       }
    }

    projecaoX(){
        for(var i = 0;i<this.k;i++){

            super.projecaoX(this.points[i])          
       }
    }

    projecaoY(){
        for(var i = 0;i<this.k;i++){

            super.projecaoY(this.points[i])          
       }
    
    }

    cisalhamento(kx,ky){
        for(var i = 0;i<this.k;i++){

            super.cisalhamento(this.points[i],kx,ky)          
       }
    }

    translacao(dx,dy){
        for(var i = 0;i<this.k;i++){

            super.translacao(this.points[i],dx,dy)          
       }
        
    }

    draw() {

        stroke(this.br, this.bg, this.bb)
        fill(this.r,this.g,this.b)
        strokeWeight(this.w)

        for (var i = 0; i < this.k; i++) {
         
         
            beginShape(TRIANGLES)
            vertex(this.points[i][0].elements[0],this.points[i][0].elements[1])
            vertex(this.points[i][1].elements[0],this.points[i][1].elements[1])
            vertex(this.points[i][2].elements[0],this.points[i][2].elements[1])
            endShape()

  
            }
        
        }
 
    }

    class Sphere extends Transformation3d{

        constructor(x,y,z,r,t,p){
        super()
     
        var sectorStep = 2 * Math.PI/p
        var stackStep = Math.PI/t
        var stackAngle,sectorAngle
        this.points = []

    
    
        for(var i = 0; i <= t;i++){


           stackAngle = Math.PI/2 - (i * stackStep)

           this.points[i] = []

            for(var j = 0; j <= p ;j++){
                
                sectorAngle = j * sectorStep

                x = (r * Math.cos(stackAngle)) * Math.cos(sectorAngle)
                y = (r * Math.cos(stackAngle)) * Math.sin(sectorAngle)
                z = r * Math.sin(stackAngle)

               
               this.points[i][j] = [

                new Vector (3,[x,y,z])
               ]

             
            }

        
         
        }

        this.t = t
        this.p = p
            
        this.fr = 255;
        this.fg = 255;
        this.fb = 255;

        this.sr = 0;
        this.sg = 0;
        this.sb = 0;

        this.w = 1;

        this.rotacaoX(90)
      
        
    }

    setColor(r, g, b) {
        this.sr = r;
        this.sg = g;
        this.sb = b;

    }

    setFillColor(r, g, b) {
        this.fr = r;
        this.fg = g;
        this.fb = b;
    }



    setWeight(w) {
        this.w = w;
        
    }

    reflexaoX(){

        for(var i = 0; i <this.t+1;i++){

            for(var j = 0; j <this.p+1;j++){

                   super.reflexaoX(this.points[i][j])
            }
        }
    }

    reflexaoY(){

        for(var i = 0; i <this.t+1;i++){

            for(var j = 0; j <this.p+1;j++){

                   super.reflexaoY(this.points[i][j])
            }
        }
    }

    reflexaoZ(){

        for(var i = 0; i <this.t+1;i++){

            for(var j = 0; j <this.p+1;j++){

                   super.reflexaoZ(this.points[i][j])
            }
        }
    }

    
    rotacaoX(angulo){

        for(var i = 0; i <this.t+1;i++){

            for(var j = 0; j <this.p+1;j++){

                   super.rotacaoX(this.points[i][j],angulo)
            }
        }
    }

    rotacaoY(angulo){

        for(var i = 0; i <this.t+1;i++){

            for(var j = 0; j <this.p+1;j++){

                   super.rotacaoY(this.points[i][j],angulo)
            }
        }
    }

   
    rotacaoZ(angulo){

        for(var i = 0; i <this.t+1;i++){

            for(var j = 0; j <this.p+1;j++){

                   super.rotacaoZ(this.points[i][j],angulo)
            }
        }
    }

    projecaoXY(){

        for(var i = 0; i <this.t+1;i++){

            for(var j = 0; j <this.p+1;j++){

                   super.projecaoXY(this.points[i][j])
            }
        }
    }

    projecaoXZ(){
        for(var i = 0; i <this.t+1;i++){

            for(var j = 0; j <this.p+1;j++){

                   super.projecaoXZ(this.points[i][j])
            }
        }
    }

    projecaoYZ(){

        for(var i = 0; i <this.t+1;i++){

            for(var j = 0; j <this.p+1;j++){

                   super.projecaoYZ(this.points[i][j])
            }
        }
    }

    cisalhamento(SHzx,SHzy,Zref){

        for(var i = 0; i <this.t+1;i++){

            for(var j = 0; j <this.p+1;j++){

                   super.cisalhamento(this.points[i][j],SHzx,SHzy,Zref)
            }
        }
    }


    translacao(dx,dy,dz){

        for(var i = 0; i <this.t+1;i++){

            for(var j = 0; j <this.p+1;j++){

                   super.translacao(this.points[i][j],dx,dy,dz)
            }
        }
    }

  
    draw(){

        stroke(this.sr,this.sg,this.sb)
        fill(this.fr,this.fg,this.fb)
        strokeWeight(this.w)
        

        for(var i = 0; i <this.t;i++){

            beginShape(TRIANGLES)

            for(var j = 0; j <this.p;j++){

    
           
                    vertex(this.points[i][j][0].elements[0],this.points[i][j][0].elements[1],this.points[i][j][0].elements[2])
                    vertex(this.points[i+1][j][0].elements[0],this.points[i+1][j][0].elements[1],this.points[i+1][j][0].elements[2])
                    vertex(this.points[i][j+1][0].elements[0],this.points[i][j+1][0].elements[1],this.points[i][j+1][0].elements[2])

   

                    vertex(this.points[i][j+1][0].elements[0],this.points[i][j+1][0].elements[1],this.points[i][j+1][0].elements[2])
                    vertex(this.points[i+1][j][0].elements[0],this.points[i+1][j][0].elements[1],this.points[i+1][j][0].elements[2])
                    vertex(this.points[i+1][j+1][0].elements[0],this.points[i+1][j+1][0].elements[1],this.points[i+1][j+1][0].elements[2])
        
            }


            endShape()
           
        }

     
    }

    
    }
