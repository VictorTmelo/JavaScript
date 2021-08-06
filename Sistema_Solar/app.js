

var terra;
var lua;



function setup(){

   
    createCanvas(1920,900,WEBGL);

    createEasyCam()
 
  sol = new Sphere(0,0,0,10,50,50)

  mercurio = new Sphere(0,0,0,0.035,10,10)

  venus = new Sphere(0,0,0,0.085,50,50)

  terra = new Sphere(0,0,0,0.092,10,10)

  lua = new Sphere(0,0,0,0.025,10,10)

  marte = new Sphere(0,0,0,0.048,10,10)

  fobos = new Sphere(0,0,0,0.16,10,10)

  deimos = new Sphere(0,0,0,0.01,10,10)

  jupiter = new Sphere(0,0,0,1.03,50,50)

  europa = new Sphere(0,0,0,0.24,10,10)

  io = new Sphere(0,0,0,0.3,10,10)

  ganymede = new Sphere(0,0,0,0.4,10,10)
  
  saturno = new Sphere(0,0,0,0.87,10,10)

  tetis = new Sphere(0,0,0,0.0092,10,10)

  dione = new Sphere(0,0,0,0.01,10,10)

  titã = new Sphere(0,0,0,0.38,10,10)

  urano = new Sphere(0,0,0,0.36,10,10)

  titania = new Sphere(0,0,0,0.001,10,10)

  oberon = new Sphere(0,0,0,0.009,10,10)

  umbriel = new Sphere(0,0,0,0.007,10,10)



  netuno = new Sphere(0,0,0,0.34,10,10)

  tritao = new Sphere(0,0,0,0.02,10,10)

  nereida = new Sphere(0,0,0,0.001,10,10)

  proteu  =  new Sphere(0,0,0,0.0015,10,10)



  plutao = new Sphere(0,0,0,0.002,10,10)

  caronte = new Sphere(0,0,0,0.001,10,10)

  hidra = new Sphere(0,0,0,0.0004,10,10)

  nix = new Sphere(0,0,0,0.0004,10,10)

  
mercurio.translacao(13,0,0)

venus.translacao(19,0,0)



terra.translacao(33,0,0)

lua.translacao(38,0,0)



marte.translacao(50,0,0)

fobos.translacao(57,0,0)

deimos.translacao(60,0,0)



jupiter.translacao(172,0,0)

europa.translacao(184,0,0)

io.translacao(182,0,0)

ganymede.translacao(187,0,0)



saturno.translacao(316,0,0)

tetis.translacao(325,0,0)

dione.translacao(330,0,0)

titã.translacao(336,0,0)



urano.translacao(635,0,0)

titania.translacao(648,0,0)

oberon.translacao(652,0,0)

umbriel.translacao(646,0,0)





netuno.translacao(991,0,0)

tritao.translacao(10011,0,0)

nereida.translacao(1017,0,0)

proteu.translacao(1007,0,0)





plutao.translacao(1302,0,0)

caronte.translacao(1312,0,0)

hidra.translacao(1330,0,0)

nix.translacao(1309,0,0)



}


function draw(){

  background(0);



mercurio.setColor(79,79,79)
mercurio.rotacaoZ(1.5)
mercurio.draw()


venus.setColor(235,192,52)
venus.rotacaoZ(1.15)
venus.draw()




terra.setColor(0,55,255)
terra.rotacaoZ(1)
terra.draw()


lua.setColor(107,117,110) 
lua.translacao(-terra.points[0][0][0].elements[0],-terra.points[0][0][0].elements[1],-terra.points[0][0][0].elements[2])
lua.rotacaoZ(40)
lua.translacao(terra.points[0][0][0].elements[0],terra.points[0][0][0].elements[1],terra.points[0][0][0].elements[2])
lua.draw()






marte.setColor(235,88,52)
marte.rotacaoZ(0.8)
marte.draw()


fobos.setColor(100,100,100)
fobos.translacao(-marte.points[0][0][0].elements[0],-marte.points[0][0][0].elements[1],-marte.points[0][0][0].elements[2])
fobos.rotacaoZ(35)
fobos.translacao(marte.points[0][0][0].elements[0],marte.points[0][0][0].elements[1],marte.points[0][0][0].elements[2])
fobos.draw()

deimos.setColor(215,229,224)
deimos.translacao(-marte.points[0][0][0].elements[0],-marte.points[0][0][0].elements[1],-marte.points[0][0][0].elements[2])
deimos.rotacaoZ(40)
deimos.translacao(marte.points[0][0][0].elements[0],marte.points[0][0][0].elements[1],marte.points[0][0][0].elements[2])
deimos.draw()





jupiter.setColor(212,171,83)
jupiter.rotacaoZ(0.44)
jupiter.draw()


europa.setColor(128,116,28)
europa.translacao(-jupiter.points[0][0][0].elements[0],-jupiter.points[0][0][0].elements[1],-jupiter.points[0][0][0].elements[2])
europa.rotacaoZ(30)
europa.translacao(jupiter.points[0][0][0].elements[0],jupiter.points[0][0][0].elements[1],jupiter.points[0][0][0].elements[2])
europa.draw()

io.setColor(201,100,12)
io.translacao(-jupiter.points[0][0][0].elements[0],-jupiter.points[0][0][0].elements[1],-jupiter.points[0][0][0].elements[2])
io.rotacaoZ(42)
io.translacao(jupiter.points[0][0][0].elements[0],jupiter.points[0][0][0].elements[1],jupiter.points[0][0][0].elements[2])
io.draw()

ganymede.setColor(199,155,117)
ganymede.translacao(-jupiter.points[0][0][0].elements[0],-jupiter.points[0][0][0].elements[1],-jupiter.points[0][0][0].elements[2])
ganymede.rotacaoZ(25)
ganymede.translacao(jupiter.points[0][0][0].elements[0],jupiter.points[0][0][0].elements[1],jupiter.points[0][0][0].elements[2])
ganymede.draw()





saturno.setColor(226,230,197)
saturno.rotacaoZ(0.325)
saturno.draw()

tetis.setColor(194,185,167)
tetis.translacao(-saturno.points[0][0][0].elements[0],-saturno.points[0][0][0].elements[1],-saturno.points[0][0][0].elements[2])
tetis.rotacaoZ(60)
tetis.translacao(saturno.points[0][0][0].elements[0],saturno.points[0][0][0].elements[1],saturno.points[0][0][0].elements[2])
tetis.draw()

dione.setColor(125,122,117)
dione.translacao(-saturno.points[0][0][0].elements[0],-saturno.points[0][0][0].elements[1],-saturno.points[0][0][0].elements[2])
dione.rotacaoZ(45)
dione.translacao(saturno.points[0][0][0].elements[0],saturno.points[0][0][0].elements[1],saturno.points[0][0][0].elements[2])
dione.draw()


titã.setColor(179, 179, 82)
titã.translacao(-saturno.points[0][0][0].elements[0],-saturno.points[0][0][0].elements[1],-saturno.points[0][0][0].elements[2])
titã.rotacaoZ(30)
titã.translacao(saturno.points[0][0][0].elements[0],saturno.points[0][0][0].elements[1],saturno.points[0][0][0].elements[2])
titã.draw()




urano.setColor(10,234,242)
urano.rotacaoZ(0.228)
urano.draw()

titania.setColor(249, 252, 248)
titania.translacao(-urano.points[0][0][0].elements[0],-urano.points[0][0][0].elements[1],-urano.points[0][0][0].elements[2])
titania.rotacaoZ(37)
titania.translacao(urano.points[0][0][0].elements[0],urano.points[0][0][0].elements[1],urano.points[0][0][0].elements[2])
titania.draw()

oberon.setColor(247, 249, 245)
oberon.translacao(-urano.points[0][0][0].elements[0],-urano.points[0][0][0].elements[1],-urano.points[0][0][0].elements[2])
oberon.rotacaoZ(35)
oberon.translacao(urano.points[0][0][0].elements[0],urano.points[0][0][0].elements[1],urano.points[0][0][0].elements[2])
oberon.draw()

umbriel.setColor(243, 247, 242)
umbriel.translacao(-urano.points[0][0][0].elements[0],-urano.points[0][0][0].elements[1],-urano.points[0][0][0].elements[2])
umbriel.rotacaoZ(43)
umbriel.translacao(urano.points[0][0][0].elements[0],urano.points[0][0][0].elements[1],urano.points[0][0][0].elements[2])
umbriel.draw()




netuno.setColor(31,155,196)
netuno.rotacaoZ(0.182)
netuno.draw()

tritao.setColor(115, 115, 85)
tritao.translacao(-netuno.points[0][0][0].elements[0],-netuno.points[0][0][0].elements[1],-netuno.points[0][0][0].elements[2])
tritao.rotacaoZ(35)
tritao.translacao(netuno.points[0][0][0].elements[0],netuno.points[0][0][0].elements[1],netuno.points[0][0][0].elements[2])
tritao.draw()

nereida.setColor(224, 224, 218)
nereida.translacao(-netuno.points[0][0][0].elements[0],-netuno.points[0][0][0].elements[1],-netuno.points[0][0][0].elements[2])
nereida.rotacaoZ(25)
nereida.translacao(netuno.points[0][0][0].elements[0],netuno.points[0][0][0].elements[1],netuno.points[0][0][0].elements[2])
nereida.draw()


proteu.setColor(204, 204, 192)
proteu.translacao(-netuno.points[0][0][0].elements[0],-netuno.points[0][0][0].elements[1],-netuno.points[0][0][0].elements[2])
proteu.rotacaoZ(42)
proteu.translacao(netuno.points[0][0][0].elements[0],netuno.points[0][0][0].elements[1],netuno.points[0][0][0].elements[2])
proteu.draw()




plutao.setColor(204, 204, 186)
plutao.rotacaoZ(0.16)
plutao.draw()

caronte.setColor(242, 242, 203)
caronte.translacao(-plutao.points[0][0][0].elements[0],-plutao.points[0][0][0].elements[1],-plutao.points[0][0][0].elements[2])
caronte.rotacaoZ(30) 
caronte.translacao(plutao.points[0][0][0].elements[0],plutao.points[0][0][0].elements[1],plutao.points[0][0][0].elements[2])
caronte.draw()

hidra.setColor(250, 250, 247)
hidra.setFillColor(250, 250, 247)
hidra.translacao(-plutao.points[0][0][0].elements[0],-plutao.points[0][0][0].elements[1],-plutao.points[0][0][0].elements[2])
hidra.rotacaoZ(65)
hidra.translacao(plutao.points[0][0][0].elements[0],plutao.points[0][0][0].elements[1],plutao.points[0][0][0].elements[2])
hidra.draw()

nix.setColor(222, 222, 220)
nix.setFillColor(222, 222, 220)
nix.translacao(-plutao.points[0][0][0].elements[0],-plutao.points[0][0][0].elements[1],-plutao.points[0][0][0].elements[2])
nix.rotacaoZ(42)
nix.translacao(plutao.points[0][0][0].elements[0],plutao.points[0][0][0].elements[1],plutao.points[0][0][0].elements[2])
nix.draw()





sol.setColor(255,150,0)
sol.setFillColor(255,150,0)
sol.draw()


}