class Transformation2d{

    reflexaoX(a){

        var matX = new Matriz(3,3,[1,0,0,0,-1,0,0,0,1]);

        var l = new Linalg();

        return l.multi(matX,a);


    }

    reflexaoY(a){

        var matY = new Matriz(3,3,[-1,0,0,0,1,0,0,0,1]);

        var l = new Linalg();

        return l.multi(matY,a);

    }

    projecaoX(a){

        var matX = new Matriz(3,3,[1,0,0,0,0,0,0,0,0]);

        var l = new Linalg();

        return l.multi(matX,a);

    }

    projecaoY(a){

        var matY = new Matriz(3,3,[0,0,0,0,1,0,0,0,0]);

        var l = new Linalg();

        return l.multi(matY,a);

    }

    rotacao(a,b){

        var mat = new Matriz(3,3,[Math.cos(-b * Math.PI/180), -Math.sin(-b * Math.PI/180), 0, Math.sin(-b * Math.PI/180),
             Math.cos(-b * Math.PI/180), 0, 0, 0, 1])

        var l = new Linalg();

        return l.multi(mat,a);

    }


    cisalhamento(a,kx,ky){

        var mat = new Matriz(3,3,[1,kx,0,ky,1,0,0,0,1]);

        var l = new Linalg();

        return l.multi(mat,a);

    }
    
    translacao(a,deltaX,deltaY){

        var mat = new Matriz(3,3,[1,0,deltaX,0,1,deltaY,0,0,1]);

        var l = new Linalg();

        return l.multi(mat,a);

    }



}


class Transformation3d{

    reflexaoX(a){

        var matX = new Matriz(4,4,[1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1])

        var l = new Linalg();

        return l.multi(matX,a);

    }

    reflexaoY(a){

        var matY = new Matriz(4,4,[-1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])

        var l = new Linalg();

        return l.multi(matY,a);

    }

    reflexaoZ(a){

        var matZ = new Matriz(4,4,[1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1])

        var l = new Linalg();

        return l.multi(matZ,a);

    }

    projecaoXY(a){

        var mat = new Matriz(4,4,[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1])

        var l = new Linalg();

        return l.multi(mat,a);

    }

    projecaoXZ(a){

        var mat = new Matriz(4,4,[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1])

        var l = new Linalg();

        return l.multi(mat,a);

    }

    projecaoYZ(a){

        var mat = new Matriz(4,4,[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])

        var l = new Linalg();

        return l.multi(mat,a);

    }

    rotacaoX(a,b){

        var matX = new Matriz(4,4,[1,0,0,0,0,Math.cos(b * Math.PI/180), -Math.sin(b * Math.PI/180),0,0, Math.sin(b * Math.PI/180),
        Math.cos(b * Math.PI/180),0,0,0,0,1]);

         var l = new Linalg();

         return l.multi(matX,a);   

    }

    rotacaoY(a,b){

        var matY = new Matriz(4,4,[Math.cos(b * Math.PI/180),0, Math.sin(b * Math.PI/180),0,0,1,0,0, -Math.sin(b * Math.PI/180),0,
        Math.cos(b * Math.PI/180),0,0,0,0,1]);

         var l = new Linalg();

         return l.multi(matY,a);   

    }

    rotacaoZ(a,b){

        var matZ = new Matriz(4,4,[Math.cos(b * Math.PI/180), -Math.sin(b * Math.PI/180),0,0, Math.sin(b * Math.PI/180),
             Math.cos(b * Math.PI/180),0,0,0,0,1,0,0,0,0,1]);

         var l = new Linalg();

         return l.multi(matZ,a);   

    }


    cisalhamento(a,kx,ky,kz){

        var mat = new Matriz(4,4,[1,0,kx,-kx * kz,0,1,ky,-ky *kz,0,0,1,0,0,0,0,1])

        var l = new Linalg();

        return l.multi(mat,a);

    }
    
    translacao(a,deltaX,deltaY,deltaZ){

        var mat = new Matriz(4,4,[1,0,0,deltaX,0,1,0,deltaY,0,0,1,deltaZ,0,0,0,1])

        var l = new Linalg();

        return l.multi(mat,a);

    }

}