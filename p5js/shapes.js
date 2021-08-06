class Line2d{

constructor(x1,y1,x2,y2){

    this.points = [
        new Vector(3,[x1,y1,1]),
        new Vector(3,[x2,y2,1])
    ]

    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.w = 1;
}

setColor(r,g,b){

    this.r = r;
    this.g = g;
    this.b = b;

}

setWeight(w){

    this.w  = w;

}

reflexaoX(){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.reflexaoX(this.points[x]);

    }

}

reflexaoY(){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.reflexaoY(this.points[x]);

    }

}

projecaoX(){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.projecaoX(this.points[x]);

    }

}

projecaoY(){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.projecaoY(this.points[x]);

    }

}

rotacao(b){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.rotacao(this.points[x],b);

    }


}

cisalhamento(kx,ky){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.cisalhamento(this.points[x],kx,ky);

    }

}

translacao(deltaX,deltaY){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.translacao(this.points[x],deltaX,deltaY);

    }


}


draw(){


    stroke(this.r,this.g,this.b);
    strokeWeight(this.w)

    beginShape(LINES);

    vertex(this.points[0].elements[0], this.points[0].elements[1]);
    vertex(this.points[1].elements[0], this.points[1].elements[1]);

    endShape();



}


}


class Rect2d{

constructor(x,y,width,heigth){

    this.points = [

        new Vector(3,[x,y,1]),
        new Vector(3,[x+width, y,1]),
        new Vector(3,[x+width, y+heigth,1]),
        new Vector(3,[x,y+heigth,1])

    ]

    //COR DA BORDA 

    this.sR = 0;
    this.sG = 0;
    this.sb = 0;

    //COR DE DENTRO

    this.fR = 0;
    this.fG = 0;
    this.fG = 0;

    //GROSSURA DA BORDA 

    this.w = 1;

}


setColor(r,g,b){

    this.sR = r;
    this.sG = g;
    this.sB = b;

}

setFillColor(r,g,b){

    this.fR = r;
    this.fG = g;
    this.fB = b;


}

setWeight(w){

    this.w  = w;

}


reflexaoX(){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.reflexaoX(this.points[x]);

    }

}

reflexaoY(){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.reflexaoY(this.points[x]);

    }

}

projecaoX(){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.projecaoX(this.points[x]);

    }

}

projecaoY(){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.projecaoY(this.points[x]);

    }

}

rotacao(b){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.rotacao(this.points[x],b);

    }


}

cisalhamento(kx,ky){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.cisalhamento(this.points[x],kx,ky);

    }

}

translacao(deltaX,deltaY){

    var transforma = new Transformation2d();

    for(var x = 0; x < this.points.length; x++){

        this.points[x] = transforma.translacao(this.points[x],deltaX,deltaY);

    }


}


draw(){

    stroke(this.sR,this.sG,this.sB);
    fill(this.fR,this.fG,this.fB);
    strokeWeight(this.w)

    beginShape(TRIANGLES);

    vertex(this.points[0].elements[0], this.points[0].elements[1]);
    vertex(this.points[1].elements[0], this.points[1].elements[1]);
    vertex(this.points[2].elements[0], this.points[2].elements[1]);

    vertex(this.points[0].elements[0], this.points[0].elements[1]);
    vertex(this.points[2].elements[0], this.points[2].elements[1]);
    vertex(this.points[3].elements[0], this.points[3].elements[1]);

    endShape();

}


}


class Triangle{


    constructor(x1,y1,x2,y2,x3,y3){

        this.points = [
    
            new Vector(3,[x1,y1,1]),
            new Vector(3,[x2, y2,1]),
            new Vector(3,[x3, y3,1])
            
        ]
    
        //COR DA BORDA 
    
        this.sR = 0;
        this.sG = 0;
        this.sb = 0;
    
        //COR DE DENTRO
    
        this.fR = 0;
        this.fG = 0;
        this.fG = 0;
    
        //GROSSURA DA BORDA 
    
        this.w = 1;
    
    }
    
    
    setColor(r,g,b){
    
        this.sR = r;
        this.sG = g;
        this.sB = b;
    
    }
    
    setFillColor(r,g,b){
    
        this.fR = r;
        this.fG = g;
        this.fB = b;
    
    
    }
    
    setWeight(w){
    
        this.w  = w;
    
    }
    
    reflexaoX(){

        var transforma = new Transformation2d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.reflexaoX(this.points[x]);
    
        }
    
    }
    
    reflexaoY(){
    
        var transforma = new Transformation2d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.reflexaoY(this.points[x]);
    
        }
    
    }
    
    projecaoX(){
    
        var transforma = new Transformation2d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.projecaoX(this.points[x]);
    
        }
    
    }
    
    projecaoY(){
    
        var transforma = new Transformation2d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.projecaoY(this.points[x]);
    
        }
    
    }
    
    rotacao(b){

        var transforma = new Transformation2d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.rotacao(this.points[x],b);
    
        }
    
    
    }
    
    cisalhamento(kx,ky){
    
        var transforma = new Transformation2d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.cisalhamento(this.points[x],kx,ky);
    
        }
    
    }
    
    translacao(deltaX,deltaY){
    
        var transforma = new Transformation2d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.translacao(this.points[x],deltaX,deltaY);
    
        }
    
    
    }
    
    draw(){
    
        stroke(this.sR,this.sG,this.sB);
        fill(this.fR,this.fG,this.fB);
        strokeWeight(this.w)
    
        beginShape(TRIANGLES);
    
        vertex(this.points[0].elements[0], this.points[0].elements[1]);
        vertex(this.points[1].elements[0], this.points[1].elements[1]);
        vertex(this.points[2].elements[0], this.points[2].elements[1]);

        endShape();
    
    }


}


class Circle2d{

    constructor(x,y,raio,k){

        this.points = [
    
            new Vector(2,[x,y]),
            new Vector(2,[raio,k])
            
        ]
    
        //COR DA BORDA 
    
        this.sR = 0;
        this.sG = 0;
        this.sb = 0;
    
        //COR DE DENTRO
    
        this.fR = 0;
        this.fG = 0;
        this.fG = 0;
    
        //GROSSURA DA BORDA 
    
        this.w = 1;
    
    }
    
    
    setColor(r,g,b){
    
        this.sR = r;
        this.sG = g;
        this.sB = b;
    
    }
    
    setFillColor(r,g,b){
    
        this.fR = r;
        this.fG = g;
        this.fB = b;
    
    
    }
    
    setWeight(w){
    
        this.w  = w;
    
    }
    
    
    draw(){
    
        stroke(this.sR,this.sG,this.sB);
        fill(this.fR,this.fG,this.fB);
        strokeWeight(this.w)

        const razao = 360/this.points[1].elements[1];

        for(var i = 0; i < this.points[1].elements[1]; i++){

        beginShape(TRIANGLES);
    
        vertex(this.points[0].elements[0], this.points[0].elements[1]);
        vertex(this.points[0].elements[0] + this.points[1].elements[0] * Math.cos(razao * i) * Math.PI / 180, this.points[0].elements[1] + this.points[1].elements[0] * Math.sin(razao * i) * Math.PI / 180 );
        vertex(this.points[0].elements[0] + this.points[1].elements[0] * Math.cos(razao * (i + 1)) * Math.PI / 180, this.points[0].elements[1] + this.points[1].elements[0] * Math.sin(razao * (i + 1)) * Math.PI / 180);

        endShape();

        }
    
    }

}


class Line3d{

    constructor(x1,y1,z1,x2,y2,z2){
    
        this.points = [

            new Vector(4,[x1,y1,z1,1]),
            new Vector(4,[x2,y2,z2,1])
            
        ]
    
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.w = 1;
    }
    
    setColor(r,g,b){
    
        this.r = r;
        this.g = g;
        this.b = b;
    
    }
    
    setWeight(w){
    
        this.w  = w;
    
    }


    reflexaoX(){

        var transforma = new Transformation3d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.reflexaoX(this.points[x]);
    
        }
    
    }
    
    reflexaoY(){
    
        var transforma = new Transformation3d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.reflexaoY(this.points[x]);
    
        }
    
    }

    reflexaoZ(){
    
        var transforma = new Transformation3d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.reflexaoZ(this.points[x]);
    
        }
    
    }
    
    projecaoXY(){
    
        var transforma = new Transformation3d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.projecaoXY(this.points[x]);
    
        }
    
    }
    
    projecaoXZ(){
    
        var transforma = new Transformation3d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.projecaoXZ(this.points[x]);
    
        }
    
    }

    projecaoYZ(){
    
        var transforma = new Transformation3d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.projecaoYZ(this.points[x]);
    
        }
    
    }
    
    rotacaoX(b){
    
        var transforma = new Transformation3d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.rotacaoX(this.points[x],b);
    
        }
    
    
    }

    rotacaoY(b){
    
        var transforma = new Transformation3d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.rotacaoY(this.points[x],b);
    
        }
    
    
    }

    rotacaoZ(b){
    
        var transforma = new Transformation3d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.rotacaoZ(this.points[x],b);
    
        }
    
    
    }
    
    cisalhamento(kx,ky,kz){
    
        var transforma = new Transformation3d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.cisalhamento(this.points[x],kx,ky,kz);
    
        }
    
    }
    
    translacao(deltaX,deltaY,deltaZ){
    
        var transforma = new Transformation3d();
    
        for(var x = 0; x < this.points.length; x++){
    
            this.points[x] = transforma.translacao(this.points[x],deltaX,deltaY,deltaZ);
    
        }
    
    
    }
    
    
    draw(){
    
    
        stroke(this.r,this.g,this.b);
        strokeWeight(this.w)
    
        beginShape(LINES);
    
        vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]);
        vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2]);
        
    
        endShape();
    
    
    
    }
    
    
    }

    class Rect3d{

        constructor(x,y,z,width,heigth,length){
        
            this.points = [
        
                new Vector(4,[x,y,z,1]),
                new Vector(4,[x+width, y,z,1]),
                new Vector(4,[x+width, y+heigth,z,1]),
                new Vector(4,[x,y+heigth,z,1]),
                new Vector(4,[x,y,z-length,1]),
                new Vector(4,[x+width, y,z-length,1]),
                new Vector(4,[x+width, y+heigth,z-length,1]),
                new Vector(4,[x,y+heigth,z-length,1])
               
        
            ]
        
            //COR DA BORDA 
        
            this.sR = 0;
            this.sG = 0;
            this.sb = 0;
        
            //COR DE DENTRO
        
            this.fR = 0;
            this.fG = 0;
            this.fG = 0;
        
            //GROSSURA DA BORDA 
        
            this.w = 1;
        
        }
        
        
        setColor(r,g,b){
        
            this.sR = r;
            this.sG = g;
            this.sB = b;
        
        }
        
        setFillColor(r,g,b){
        
            this.fR = r;
            this.fG = g;
            this.fB = b;
        
        
        }
        
        setWeight(w){
        
            this.w  = w;
        
        }


        reflexaoX(){

            var transforma = new Transformation3d();
        
            for(var x = 0; x < this.points.length; x++){
        
                this.points[x] = transforma.reflexaoX(this.points[x]);
        
            }
        
        }
        
        reflexaoY(){
        
            var transforma = new Transformation3d();
        
            for(var x = 0; x < this.points.length; x++){
        
                this.points[x] = transforma.reflexaoY(this.points[x]);
        
            }
        
        }
    
        reflexaoZ(){
        
            var transforma = new Transformation3d();
        
            for(var x = 0; x < this.points.length; x++){
        
                this.points[x] = transforma.reflexaoZ(this.points[x]);
        
            }
        
        }
        
        projecaoXY(){
        
            var transforma = new Transformation3d();
        
            for(var x = 0; x < this.points.length; x++){
        
                this.points[x] = transforma.projecaoXY(this.points[x]);
        
            }
        
        }
        
        projecaoXZ(){
        
            var transforma = new Transformation3d();
        
            for(var x = 0; x < this.points.length; x++){
        
                this.points[x] = transforma.projecaoXZ(this.points[x]);
        
            }
        
        }
    
        projecaoYZ(){
        
            var transforma = new Transformation3d();
        
            for(var x = 0; x < this.points.length; x++){
        
                this.points[x] = transforma.projecaoYZ(this.points[x]);
        
            }
        
        }
        
        rotacaoX(b){
    
            var transforma = new Transformation3d();
        
            for(var x = 0; x < this.points.length; x++){
        
                this.points[x] = transforma.rotacaoX(this.points[x],b);
        
            }
        
        
        }
    
        rotacaoY(b){
        
            var transforma = new Transformation3d();
        
            for(var x = 0; x < this.points.length; x++){
        
                this.points[x] = transforma.rotacaoY(this.points[x],b);
        
            }
        
        
        }
    
        rotacaoZ(b){
        
            var transforma = new Transformation3d();
        
            for(var x = 0; x < this.points.length; x++){
        
                this.points[x] = transforma.rotacaoZ(this.points[x],b);
        
            }
        
        
        }
        
        cisalhamento(kx,ky,kz){
        
            var transforma = new Transformation3d();
        
            for(var x = 0; x < this.points.length; x++){
        
                this.points[x] = transforma.cisalhamento(this.points[x],kx,ky,kz);
        
            }
        
        }
        
        translacao(deltaX,deltaY,deltaZ){
        
            var transforma = new Transformation3d();
        
            for(var x = 0; x < this.points.length; x++){
        
                this.points[x] = transforma.translacao(this.points[x],deltaX,deltaY,deltaZ);
        
            }
        
        
        }
        
        
        draw(){
        
            stroke(this.sR,this.sG,this.sB);
            fill(this.fR,this.fG,this.fB);
            strokeWeight(this.w)
        
            beginShape(TRIANGLES);
        
            //PRIMEIRA FACE

            vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]);
            vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2]);
            vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2]);
        
            vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]);
            vertex(this.points[3].elements[0], this.points[3].elements[1], this.points[3].elements[2]);
            vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2]);

            //SEGUNDA FACE
            
            vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]);
            vertex(this.points[3].elements[0], this.points[3].elements[1], this.points[3].elements[2]);
            vertex(this.points[7].elements[0], this.points[7].elements[1], this.points[7].elements[2]);
        
            vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]);
            vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2]);
            vertex(this.points[7].elements[0], this.points[7].elements[1], this.points[7].elements[2]);

            //TERCEIRA FACE

            vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2]);
            vertex(this.points[7].elements[0], this.points[7].elements[1], this.points[7].elements[2]);
            vertex(this.points[6].elements[0], this.points[6].elements[1], this.points[6].elements[2]);
        
            vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2]);
            vertex(this.points[5].elements[0], this.points[5].elements[1], this.points[5].elements[2]);
            vertex(this.points[6].elements[0], this.points[6].elements[1], this.points[6].elements[2]);

            //QUARTA FACE

            vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2]);
            vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2]);
            vertex(this.points[6].elements[0], this.points[6].elements[1], this.points[6].elements[2]);
        
            vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2]);
            vertex(this.points[5].elements[0], this.points[5].elements[1], this.points[5].elements[2]);
            vertex(this.points[6].elements[0], this.points[6].elements[1], this.points[6].elements[2]);

            //QUINTA FACE

            vertex(this.points[3].elements[0], this.points[3].elements[1], this.points[3].elements[2]);
            vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2]);
            vertex(this.points[7].elements[0], this.points[7].elements[1], this.points[7].elements[2]);
        
            vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2]);
            vertex(this.points[6].elements[0], this.points[6].elements[1], this.points[6].elements[2]);
            vertex(this.points[7].elements[0], this.points[7].elements[1], this.points[7].elements[2]);

            //SEXTA FACE

            vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]);
            vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2]);
            vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2]);
        
            vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2]);
            vertex(this.points[5].elements[0], this.points[5].elements[1], this.points[5].elements[2]);
            vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2]);
        
            endShape();
        
        }
        
        
        }

        class Piramide{

            constructor(x,y,z, b_width, b_heigth, p_heigth){
        
                this.points = [
            
                    new Vector(4,[x,y,z,1]),
                    new Vector(4,[x-(b_heigth/2), y, z+(b_width/2), 1]),
                    new Vector(4,[x+(b_heigth/2), y, z+(b_width/2), 1]),
                    new Vector(4,[x-(b_heigth/2), y, z-(b_width/2), 1]),
                    new Vector(4,[x+(b_heigth/2), y, z-(b_width/2), 1]),
                    new Vector(4,[x, y-p_heigth, z, 1])
                  
                ]
            
                //COR DA BORDA 
            
                this.sR = 0;
                this.sG = 0;
                this.sb = 0;
            
                //COR DE DENTRO
            
                this.fR = 0;
                this.fG = 0;
                this.fG = 0;
            
                //GROSSURA DA BORDA 
            
                this.w = 1;
            
            }
            
            
            setColor(r,g,b){
            
                this.sR = r;
                this.sG = g;
                this.sB = b;
            
            }
            
            setFillColor(r,g,b){
            
                this.fR = r;
                this.fG = g;
                this.fB = b;
            
            
            }
            
            setWeight(w){
            
                this.w  = w;
            
            }


            reflexaoX(){

                var transforma = new Transformation3d();
            
                for(var x = 0; x < this.points.length; x++){
            
                    this.points[x] = transforma.reflexaoX(this.points[x]);
            
                }
            
            }
            
            reflexaoY(){
            
                var transforma = new Transformation3d();
            
                for(var x = 0; x < this.points.length; x++){
            
                    this.points[x] = transforma.reflexaoY(this.points[x]);
            
                }
            
            }
        
            reflexaoZ(){
            
                var transforma = new Transformation3d();
            
                for(var x = 0; x < this.points.length; x++){
            
                    this.points[x] = transforma.reflexaoZ(this.points[x]);
            
                }
            
            }
            
            projecaoXY(){
            
                var transforma = new Transformation3d();
            
                for(var x = 0; x < this.points.length; x++){
            
                    this.points[x] = transforma.projecaoXY(this.points[x]);
            
                }
            
            }
            
            projecaoXZ(){
            
                var transforma = new Transformation3d();
            
                for(var x = 0; x < this.points.length; x++){
            
                    this.points[x] = transforma.projecaoXZ(this.points[x]);
            
                }
            
            }
        
            projecaoYZ(){
            
                var transforma = new Transformation3d();
            
                for(var x = 0; x < this.points.length; x++){
            
                    this.points[x] = transforma.projecaoYZ(this.points[x]);
            
                }
            
            }
            
            rotacaoX(b){
    
                var transforma = new Transformation3d();
            
                for(var x = 0; x < this.points.length; x++){
            
                    this.points[x] = transforma.rotacaoX(this.points[x],b);
            
                }
            
            
            }
        
            rotacaoY(b){
            
                var transforma = new Transformation3d();
            
                for(var x = 0; x < this.points.length; x++){
            
                    this.points[x] = transforma.rotacaoY(this.points[x],b);
            
                }
            
            
            }
        
            rotacaoZ(b){
            
                var transforma = new Transformation3d();
            
                for(var x = 0; x < this.points.length; x++){
            
                    this.points[x] = transforma.rotacaoZ(this.points[x],b);
            
                }
            
            
            }
            
            cisalhamento(kx,ky,kz){
            
                var transforma = new Transformation3d();
            
                for(var x = 0; x < this.points.length; x++){
            
                    this.points[x] = transforma.cisalhamento(this.points[x],kx,ky,kz);
            
                }
            
            }
            
            translacao(deltaX,deltaY,deltaZ){
            
                var transforma = new Transformation3d();
            
                for(var x = 0; x < this.points.length; x++){
            
                    this.points[x] = transforma.translacao(this.points[x],deltaX,deltaY,deltaZ);
            
                }
            
            
            }
            
            
            draw(){
            
                stroke(this.sR,this.sG,this.sB);
                fill(this.fR,this.fG,this.fB);
                strokeWeight(this.w)
            
                beginShape(TRIANGLES);
            
                //BASE
    
                vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]);
                vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2]);
                vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2]);
            
                vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]);
                vertex(this.points[3].elements[0], this.points[3].elements[1], this.points[3].elements[2]);
                vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2]);

                //

                vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]);
                vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2]);
                vertex(this.points[3].elements[0], this.points[3].elements[1], this.points[3].elements[2]);
    
                vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]);
                vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2]);
                vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2]);
                
                //PIRAMIDE

                vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2]);
                vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2]);
                vertex(this.points[5].elements[0], this.points[5].elements[1], this.points[5].elements[2]);
            
                vertex(this.points[3].elements[0], this.points[3].elements[1], this.points[3].elements[2]);
                vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2]);
                vertex(this.points[5].elements[0], this.points[5].elements[1], this.points[5].elements[2]);

                //

                vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2]);
                vertex(this.points[3].elements[0], this.points[3].elements[1], this.points[3].elements[2]);
                vertex(this.points[5].elements[0], this.points[5].elements[1], this.points[5].elements[2]);
    
                vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2]);
                vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2]);
                vertex(this.points[5].elements[0], this.points[5].elements[1], this.points[5].elements[2]);
    
                endShape();
            
            }
            
            
            }


            class Sphere{

                constructor(x,y,z,r,t,p){
            
                    this.points = [
                
                        new Vector(4,[x,y,z,1]),
                        new Vector(4,[r,t,p,1]),
                       
                    ]
                
                    //COR DA BORDA 
                
                    this.sR = 0;
                    this.sG = 0;
                    this.sb = 0;
                
                    //COR DE DENTRO
                
                    this.fR = 0;
                    this.fG = 0;
                    this.fG = 0;
                
                    //GROSSURA DA BORDA 
                
                    this.w = 1;
                
                }
                
                
                setColor(r,g,b){
                
                    this.sR = r;
                    this.sG = g;
                    this.sB = b;
                
                }
                
                setFillColor(r,g,b){
                
                    this.fR = r;
                    this.fG = g;
                    this.fB = b;
                
                
                }
                
                setWeight(w){
                
                    this.w  = w;
                
                }
                

                draw(){
                
                    stroke(this.sR,this.sG,this.sB);
                    fill(this.fR,this.fG,this.fB);
                    strokeWeight(this.w)
            
                    var sectorStep = 2 * Math.PI / this.points[1].elements[2]; 
                    var stackStep = Math.PI / this.points[1].elements[1];
                    var sectorAngle, stackAngle;

                    //stack = longitude

                    //sector = latitude

                    var vetor = [];

                    for(var i = 0; i <= this.points[1].elements[1]; i++){
                                                            
                    stackAngle = Math.PI / 2 - i * stackStep;
                    
                    vetor[i] = []
    
                    for(var j = 0; j <= this.points[1].elements[2]; j++){
    
                    sectorAngle = j * sectorStep;

                    this.points[0].elements[0] = this.points[1].elements[0] * Math.cos(stackAngle) * Math.cos(sectorAngle)

                    this.points[0].elements[1] = this.points[1].elements[0] * Math.cos(stackAngle) * Math.sin(sectorAngle)

                    this.points[0].elements[2] = this.points[1].elements[0] * Math.sin(stackAngle)

                    vetor[i][j] = [this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]]

                        }

                    }

                    for(var i = 0; i < this.points[1].elements[1]; i++){

                        beginShape(TRIANGLE_STRIP);

                    for(var j = 0; j < this.points[1].elements[2] + 1; j++){

                        vertex(vetor[i][j][0], vetor[i][j][1], vetor[i][j][2])
                        vertex(vetor[i+1][j][0], vetor[i+1][j][1], vetor[i+1][j][2])

                    }

                    endShape();
                }

                
                }
                
                
                }