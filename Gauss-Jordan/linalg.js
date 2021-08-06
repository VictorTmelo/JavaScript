class Linalg {

    add(a, b) {

        //Somando um numero (a) para cada elemento da Matriz (b)

        if (typeof (a) == "number") {

            if (!(b instanceof Matriz)) throw "O parametro b deve ser um objeto matriz"

            var res = new Matriz(b.rows, b.cols)

            for (var i = 1; i <= b.rows; i++) {

                for (var j = 1; j <= b.cols; j++) {

                    res.set(i, j, a + b.get(i, j));
                }

            }

            return res

        }

        //Somando cada elemento da Matriz (a) com cada elemento da Matriz (b)

        else if (typeof (a) == "object") {


            if (!(a instanceof Matriz)) throw "O parametro a deve ser um objeto matriz"
            if (!(b instanceof Matriz)) throw "O parametro b deve ser um objeto matriz"

            if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."

            var res = new Matriz(a.rows, a.cols)

            for (var i = 1; i <= a.rows; i++) {

                for (var j = 1; j <= a.cols; j++) {

                    res.set(i, j, a.get(i, j) + b.get(i, j))

                }



            }

            return res

        }

    }


    sub(a, b) {


        //Subtraindo cada elemento da Matriz (a) com cada elemento da Matriz (b)

        if (!(a instanceof Matriz)) throw "O parametro a deve ser um objeto matriz"
        if (!(b instanceof Matriz)) throw "O parametro b deve ser um objeto matriz"

        if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."

        var res = new Matriz(a.rows, a.cols)

        for (var i = 1; i <= a.rows; i++) {

            for (var j = 1; j <= a.cols; j++) {

                res.set(i, j, a.get(i, j) - b.get(i, j))

            }



        }

        return res

    }


    mul(a, b) {

        //Multiplicando numero (a) para cada elemento da Matriz (b)

        if (typeof (a) == "number") {

            if (!(b instanceof Matriz)) throw "O parametro b deve ser um objeto matriz"

            var res = new Matriz(b.rows, b.cols)

            for (var i = 1; i <= b.rows; i++) {

                for (var j = 1; j <= b.cols; j++) {

                    res.set(i, j, a * b.get(i, j));
                }

            }

            return res

        }

        //Multiplicando cada elemento da Matriz (a) com cada elemento da Matriz (b)

        else if (typeof (a) == "object") {


            if (!(a instanceof Matriz)) throw "O parametro a deve ser um objeto matriz"
            if (!(b instanceof Matriz)) throw "O parametro b deve ser um objeto matriz"

            if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."

            var res = new Matriz(a.rows, a.cols)

            for (var i = 1; i <= a.rows; i++) {

                for (var j = 1; j <= a.cols; j++) {

                    res.set(i, j, a.get(i, j) * b.get(i, j))

                }



            }

            return res

        }

    }

    div(a, b) {

        //Dividindo cada elemento da Matriz (a) com cada elemento da Matriz (b)

        if (!(a instanceof Matriz)) throw "O parametro a deve ser um objeto matriz"
        if (!(b instanceof Matriz)) throw "O parametro b deve ser um objeto matriz"

        if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."

        var res = new Matriz(a.rows, a.cols)

        for (var i = 1; i <= a.rows; i++) {

            for (var j = 1; j <= a.cols; j++) {

                if (b.get(i, j) == 0) throw "Não pode fazer a divisão pois a matriz B tem um elemento 0"

                res.set(i, j, a.get(i, j) / b.get(i, j))

            }



        }

        return res

    }

    trans(a) {

        // Transposta da Matriz

        if (!(a instanceof Matriz)) throw "O parametro a deve ser um objeto matriz"

        var res = new Matriz(a.cols, a.rows)


        for (var i = 1; i <= a.cols; i++) {

            for (var j = 1; j <= a.rows; j++) {

                res.set(i, j, a.get(j, i))

            }



        }



        return res
    }

    multi(a, b) {

        // Multiplicando 2 Matrizes

        if (!(a instanceof Matriz)) throw "O parametro a deve ser um objeto matriz"
        if (!(b instanceof Matriz)) throw "O parametro b deve ser um objeto matriz"

        if (!(a.cols == b.rows)) throw "Quantidade de colunas de A é diferente da quantidade de linhas de B"

        var res = new Matriz(a.rows, b.cols)

        for (var i = 1; i <= a.rows; i++) {

            for (var j = 1; j <= b.cols; j++) {

                for (var k = 1; k <= b.rows; k++) {

                    res.set(i, j, a.get(i, k) * b.get(k, j) + res.get(i, j))

                }
            }

        }

        return res

    }


    gauss(a) {

        // Metodo Gaus-Jordan

        if (!(a instanceof Matriz)) throw "O parametro a deve ser um objeto matriz"
        if (a.cols != a.rows + 1) throw "Essa Matriz não se aplica ao metodo de Gaus-Jordan"

        // IDA - Triangulo de baixo


        for (var j = 1; j < a.cols; j++) {

            var max = 0;
            var index = j;

            //Pega o maior da Coluna

            for (var i = j; i <= a.rows; i++) {

                if (a.get(i, j) != 0 && a.get(i, j) > max) {

                    max = a.get(i, j)
                    index = i

                }

            }

            // Troca a Linha caso precise

            if (index != j) {

                this.trocalinha(a, j, index)

            }

            // Zera os elementos da Coluna

            for (var k = j + 1; k <= a.rows; k++) {

                if (a.get(k, j) != 0) {

                    this.multsoma(a, j, k, -a.get(k, j) / a.get(j, j))

                }


            }


        }


        // VOLTA - Triangulo de cima


        for (var j = a.cols - 1; j >= 1; j--) {


            for (var i = j - 1; i >= 1; i--) {

                if (a.get(i, j) != 0) {

                    this.multsoma(a, j, i, -a.get(i, j) / a.get(j, j))

                }

            }


        }


        // IDENTIDADE

        for (var i = 1; i <= a.rows; i++) {

            if (!(a.get(i, i) == 1)) {

                this.multconst(a, i, 1 / a.get(i, i))

            }

        }

        // ARREDONDANDO

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


        return a;



    }


    determinante(a) {

        if (!(a instanceof Matriz)) throw "O parametro a deve ser um objeto matriz"
        if (a.cols != a.rows) throw "Essa Matriz deve ser uma matriz quadrada"

        var det = 1

        for (var j = 1; j < a.cols; j++) {

            var max = 0;
            var index = j;

            //Pega o maior da Coluna

            for (var i = j; i <= a.rows; i++) {

                if (a.get(i, j) != 0 && a.get(i, j) > max) {

                    max = a.get(i, j)
                    index = i

                }

            }

            // Troca a Linha caso precise

            if (index != j) {

                this.trocalinha(a, j, index)

                det = det * -1

            }

            // Zera os elementos da Coluna

            for (var k = j + 1; k <= a.rows; k++) {

                if (a.get(k, j) != 0) {

                    this.multsoma(a, j, k, -a.get(k, j) / a.get(j, j))

                }


            }


        }


        // Pega o determinante da matriz

        var x = 1

        for (var i = 1; i <= a.cols; i++) {

            x = x * a.get(i, i);

        }

        //Determinante

        var d = x * det

        return d


    }



    inversa(a) {

        if (!(a instanceof Matriz)) throw "O parametro a deve ser um objeto matriz"
        if (this.determinante(a) == 0) throw "A Matriz a não possui inversa"
        if (a.cols != a.rows) throw "A Martriz inserida não é quadrada"

        var aux = new Matriz(a.rows, a.cols * 2);

        for (var i = 1; i <= a.rows; i++) {

            for (var j = 1; j <= a.cols; j++) {

                aux.set(i, j, a.get(i, j));

            }

        }


        for (var i = a.cols + 1; i <= aux.cols; i++) {


        }








    }




    trocalinha(a, l1, l2) {

        // Troca duas linhas

        var aux;

        for (var j = 1; j <= a.cols; j++) {

            aux = a.get(l1, j)
            a.set(l1, j, a.get(l2, j))
            a.set(l2, j, aux)
        }


    }


    multconst(a, l, c) {

        // Multiplica a linha à uma constante não nula.

        for (var j = 1; j <= a.cols; j++) {

            a.set(l, j, a.get(l, j) * c)

        }



    }


    multsoma(a, l1, l2, c) {

        // Multiplica a constante, soma e substitui na linha.

        for (var j = 1; j <= a.cols; j++) {

            a.set(l2, j, a.get(l1, j) * c + a.get(l2, j))

        }

    }


    subs(a) {

        if (!(a instanceof Matriz)) throw "O parametro a deve ser um objeto matriz"

        var aux = 1;

        for (var i = 1; i <= a.rows; i++) {

            if (a.get(aux, 1) < a.get(i, 1)) {

                aux = i;

            }

        }

        for (var j = 1; j <= a.cols; j++) {

            var aux2 = a.get(1, j);

            a.set(1, j, a.get(aux, j))
            a.set(aux, j, aux2)

        }



    }


    somamult(a) {

        if (!(a instanceof Matriz)) throw "O parametro a deve ser um objeto matriz"

        for (var i = 2; i <= a.rows; i++) {

            // var x = (a.get(1,1) * x)  + a.get(2,1) == 0;

            var x = -a.get(i, 1) / a.get(1, 1)

            for (var j = 1; j <= a.cols; j++) {

                var y = (a.get(1, j) * x) + a.get(i, j)

                a.set(i, j, y);

            }

        }

    }


}

