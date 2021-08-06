
var a = new Matriz(2,2,[1,2,3,4]);

var b = new Matriz(5,3,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

var t = new Matriz(2,4,[1,2,3,4,5,6,7,8]);

var c = new Matriz(2,2,[5,5,5,5])

var x = new Vector(3,[1,2,3]);

var y = new Matriz(3,2,[1,2,3,4,5,6])

var z = new Matriz(2,4,[1,2,3,4,5,6,7,8])

var la = new Linalg();

var soma = la.add(a,c)

var soma2 = la.add(2,a)

var sub = la.sub(a,c)

var mul = la.mul(a,c)

var mul2 = la.mul(2,a)

var div = la.div(a,c)

var trans = la.trans(t)

var multi = la.multi(y,z)

var teste = new Matriz(3,4, [3,9,2,5,5,7,6,8,4,3,1,2]);

var teste2 = new Matriz(4,5, [7,5,9,2,12,3,4,1,7,10,1,8,2,7,8,9,8,6,9,4]);

var teste3 = new Matriz(5,6,[20,86,-31,58,84,3653,6,-18,-34,-29,58,6770,-17,-54,75,-8,-1,799,-55,-98,11,-68,-60,-898,94,-82,-10,-26,-93,-1607])

var gauss = la.gauss(teste)

var gauss2 = la.gauss(teste2)

var gauss3 = la.gauss(teste3)

var det = la.determinante(a)


document.getElementById('loadDatabase').addEventListener('change', function(){

var fr = new FileReader()

fr.onload = function(){


    var lines = this.result.split('\n')

    var isFirst = true

    var matrix;

    for(var k = 0; k < lines.length; k++){


        if(!lines[k].startsWith('%') && lines[k] != ""){

            var aux = lines[k].split(' ')

            if(isFirst == true){

                matrix = new Matriz(parseInt(aux[0]), parseInt(aux[1]))
                isFirst = false

            }else{

                matrix.set(parseInt(aux[0]), parseInt(aux[1]), parseInt(aux[2]))


            }

        }



    }


    var start = Date.now()

    var g = la.gauss(matrix)

    console.log(g)

    var stop = Date.now()

    var time = (stop - start) / 1000

    console.log(time)
   
}
fr.readAsText(this.files[0])



})

