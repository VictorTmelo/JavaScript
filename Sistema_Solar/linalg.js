class Linalg {

    add(a, b) {

        if (typeof (a) == "number") {

            if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo matrix";

            var res = new Matrix(b.rows, b.cols);

            for (var i = 1; i <= b.rows; i++) {
                for (var j = 1; j <= b.cols; j++) {
                    res.set(i, j, a + b.get(i, j))
                }
            }

            return res

        } else if (typeof (a) == "object") {

            if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
            if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

            if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."


            var res = new Matrix(a.rows, a.cols)

            for (var i = 1; i <= a.rows; i++) {
                for (var j = 1; j <= a.cols; j++) {
                    res.set(i, j, a.get(i, j) + b.get(i, j))
                }
            }

            return res
        }

    }

    sub(a, b) {


        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
        if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

        if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."


        var res = new Matrix(a.rows, a.cols)

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= a.cols; j++) {
                res.set(i, j, a.get(i, j) - b.get(i, j))
            }
        }

        return res
    }

    mul(a, b) {

        if (typeof (a) == "number") {

            if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto"

            var res = new Matrix(b.rols, b.cols)

            for (var i = 1; i <= b.rows; i++) {
                for (var j = 1; j <= b.cols; j++) {
                    res.set(i, j, a * b.get(i, j))
                }
            }

            return res

        } else if (typeof (a) == "object") {

            if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
            if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

            if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."


            var res = new Matrix(a.rows, a.cols)

            for (var i = 1; i <= a.rows; i++) {
                for (var j = 1; j <= a.cols; j++) {
                    res.set(i, j, a.get(i, j) * b.get(i, j))
                }
            }

            return res
        }

    }

    div(a, b) {


        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
        if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

        if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."




        var res = new Matrix(a.rows, a.cols)

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= a.cols; j++) {

                if (b.get(i, j) == 0) throw "A matriz possui um ou mais elementos iguais a 0"; else res.set(i, j, a.get(i, j) / b.get(i, j))

            }
        }

        return res
    }

    transposta(a) {

        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
        if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

        var res = new Matrix(a.cols, a.rows)

        for (var i = 1; i <= a.cols; i++) {
            for (var j = 1; j <= a.rows; j++) {


                res.set(i, j, a.get(j, i))
            }
        }

        return res
    }

    mulMatrix(a, b) {

        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
        if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

        if (!(a.cols == b.rows)) throw "O numero de colunas da matriz a não é igual ao numero de linhas da matrix b."

        var res = new Matrix(a.rows, b.cols)

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= b.cols; j++) {
                for (var k = 1; k <= b.rows; k++) {

                    res.set(i, j, (a.get(i, k) * b.get(k, j) + res.get(i, j)))
                }
            }
        }
        return res

    }


    mulSoma(a, linha, k, coluna) {

        for (var j = 1; j <= a.cols; j++) {


            a.set(linha, j, (k * a.get(coluna, j)) + a.get(linha, j))

        }


    }

    mulLine_constant(a, l, k) {

        for (var j = 1; j <= a.cols; j++) {

            a.set(l, j, a.get(l, j) * k)
        }

    }


    swapLines(a, l1, l2) {

        for (var j = 1; j <= a.cols; j++) {

            var aux = a.get(l1, j)

            a.set(l1, j, a.get(l2, j))
            a.set(l2, j, aux)
        }

    }



    gauss_jordan(a) {

        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix"


        for (var j = 1; j <= a.cols - 1; j++) {

            var index = j

            for (var i = j + 1; i <= a.rows; i++) {

                if (a.get(index, j) < a.get(i, j)) {

                    index = i
                }

            }
            if (index != j) {

                this.swapLines(a, j, index)

            }


            for (var i = j + 1; i <= a.rows; i++) {
                if (a.get(j, j) != 0) {
                    this.mulSoma(a, i, -a.get(i, j) / a.get(j, j), j)
                } else {
                    this.swapLines(a, j, j + 1)
                }
            }
        }

        for (var j = a.cols - 1; j > 1; j--) {
            for (var i = j - 1; i > 0; i--) {
                if (a.get(j, j) != 0) {
                    this.mulSoma(a, i, -a.get(i, j) / a.get(j, j), j)
                } else {
                    this.swapLines(a, j, j + 1)
                }
            }
        }

        for (var i = 1; i <= a.rows; i++) {

            this.mulLine_constant(a, i, 1 / a.get(i, i))
        }

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= a.cols; j++) {
                a.set(i, j, Math.round(a.get(i, j)))
            }
        }

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= a.cols; j++) {
                if (a.get(i, j) == -0) {
                    a.set(i, j, 0)
                }
            }
        }

        return a

      


    }

   
    determinante(a) {
        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix"

        var fator = 1

        for (var j = 1; j <= a.cols - 1; j++) {

            var index = j

            for (var i = j + 1; i <= a.rows; i++) {

                if (a.get(index, j) < a.get(i, j)) {

                    index = i
                }
            }

            if (index != j) {

                this.swapLines(a, j, index)
                fator = fator * -1
            }

            for (var i = j + 1; i <= a.rows; i++) {
                if (a.get(j, j) != 0) {
                    this.mulSoma(a, i, -a.get(i, j) / a.get(j, j), j)
                } else {
                    this.swapLines(a, j, j + 1)
                    fator = fator * -1
                }
            }
        }

        var det = 1

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= a.cols; j++) {

                if (i == j) {

                    det = a.get(i, j) * det

                }
            }
        }

        return det * fator
    }

    inversa(a) {

        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
        // if (this.determinante(a) == 0) throw "A matriz não possui uma inversa"

        var aux = new Matrix(a.rows, a.cols * 2)

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= aux.cols; j++) {
                if (j <= a.cols) {
                    aux.set(i, j, a.get(i, j))
                } else {
                    var auxA = j - a.rows
                    if(auxA == i){
                        aux.set(i,j,1)
                    } else {
                        aux.set(i,j,0)
                    }
                
                }
            }
        }

        //Gauss_jordan

        for (var j = 1; j <= aux.cols; j++) {


            for (var i = j + 1; i <= a.rows; i++) {
                if (aux.get(j, j) != 0) {
                    this.mulSoma(aux, i, -aux.get(i, j) / aux.get(j, j), j)
                } else {
                    this.swapLines(aux, j, j + 1)
                }
            }
        }

        for (var j = a.rows; j > 1; j--) {
            for (var i = j - 1; i > 0; i--) {
                if (aux.get(j, j) != 0) {
                    this.mulSoma(aux, i, -aux.get(i, j) / aux.get(j, j), j)
                } else {
                    this.swapLines(aux, j, j + 1)
                }
            }
        }

        for (var i = 1; i <= a.rows; i++) {

            this.mulLine_constant(aux, i, 1 / aux.get(i, i))
        }

        var inversa = new Matrix(a.rows,a.cols)

        for(var i =1;i<=a.rows;i++){
            for(var j=1;j<=a.cols;j++){
                inversa.set(i,j,aux.get(i,j+a.cols))
            }
        }
        
      
        return inversa
    }

}