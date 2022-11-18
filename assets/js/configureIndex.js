var url = 'https://pageconfigure.000webhostapp.com/pageAplication/Main.php';
//var url = 'http://localhost/pageAplication/Main.php';

var configuracionBar1 = [];
var configuracionBar2 = [];

async function inicio() {

    let formData = new FormData();
    formData.append("codigoClienteToSearch", "BibliotecaBrisas");
 
    let dataInfo = {
       method: 'POST', // or 'PUT'
       body: formData
    };
 
   await fetch(url, dataInfo)
       .then(res => res.json())
       .then(jsonConfigure => {
          configuracionBar1 = jsonConfigure.banner1;
          configuracionBar2 = jsonConfigure.banner2;
          loadConfiguration("containerBanner","estructureCard",configuracionBar1);
          
         loadConfiguration("containerBanner2","estructureCard-2",configuracionBar2);
       })
       .catch(error => console.error('Error:', error));
 
 }

 function loadConfiguration(contenedor, estructuraElemento, configuracion) {
    let container = document.getElementById(contenedor);
    let estructure = document.getElementById(estructuraElemento);

    container.innerHTML = '';
    
    configuracion.forEach((config, iterator) => {
     
       let newEstructure = estructure.cloneNode(true);
       let titulo = newEstructure.querySelector('#titulo');
       let descripcion = newEstructure.querySelector('#descripcion');
       let imagen = newEstructure.querySelector('#imagen');
     
 
       titulo.innerText = config.title;
       descripcion.innerText = config.description;
       imagen.src = config.img;
       if (iterator !== 0) {
          newEstructure.id = newEstructure.id + iterator;
          titulo.id = titulo.id + iterator;
          descripcion.id = descripcion.id + iterator;
          imagen.id = imagen.id + iterator;
          
       }
      

       container.append(newEstructure);
      
    });
   
 
 }