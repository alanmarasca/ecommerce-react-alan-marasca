import react, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';


function getItem (id) {
    const myPromise = new Promise((resolve, reject) => {
        const productos = [ {id: 0,
            title: "Calendario Big",
            img: "https://www.correomagico.com/otros/premium/imprentamagica/prev_jpg/fotocal2022_multiple.jpg" ,
            price:  590,
            categoria: "Madera",
            stock: 7,
            description:'Calendario personalizado con 13 fotos (una portada y 12 meses).Anillado wire (blanco, plateado o negro según disponibilidad) y con carpeta contenedora para colgarlo en la pared. Empeza con el mes que quieras. Entrega: 10 días hábiles para CABA y 14 para el resto del país.Tamaño cerrado: 21×29,7 cm Tamaño abierto: 42×29.7cm por calendario (Mínimo 13 Copias)'
            } , 
            
            {id: 1,
            title: "Fechas especiales",
            img: "https://fotosprint.s3.us-west-2.amazonaws.com/prod/img/p/3/8/3/1/3831.jpg?v=1651087653",
            price:  1190,
            categoria: "Madera",
            stock: 6,
            description:'Fotolibro para esa persona especial.Fotolibro de tapa dura con 40 fotos en papel ilustración 170 gs. Cargá tus fotos desde tu compu, celular, Instagram o Facebook.Tamaño del fotolibro: 21x21 cm por fotolibroFotolibro para esa persona especial fotolibro de tapa dura con 40 fotos en papel ilustración 170 gs.Tamaño del fotolibro: 21x21 cm '
            },
            
            {id: 2,
            title: "Imanes",
            img: "https://fotosprint.s3.us-west-2.amazonaws.com/prod/img/p/5/0/8/8/5088.jpg?v=1651087653",
            price:  240,
            categoria: "Madera",
            stock: 15,
            description: 'SquareMagnets ¡Ahora podés hacer imanes con tus fotos preferidas! Decorá tu heladera con las fotos más divertidas.Imanes de formato cuadrado. Tamaño del imán: 6x6'
            }
            ,
            
            {id: 3,
            title: "cuadros",
            img: "https://fotosprint.s3.us-west-2.amazonaws.com/prod/img/p/7/2/8/728.jpg?v=1651087653",
            price:  1950,
            categoria: "Madera",
            stock: 7,
            description: 'Tranformá tu foto preferida en un cuadro de primera calidad. Marco de madera sólida y vidrio Float mandamos imágenes de 1 mb a 10 mb. Entrega: 16 días hábiles para CABA y hasta 23 para el resto del país'
            } ,
            
            {id: 4,
            title: "Strips",
            img: "https://fotosprint.s3.us-west-2.amazonaws.com/prod/img/p/2/2/5/7/2257.jpg?v=1651087653",
            price:  500,
            categoria: "Madera",
            stock: 9,
            description: ''
            } ,
            {id: 5,
            title: "Fotos",
            img: 'https://fotosprint.s3.us-west-2.amazonaws.com/prod/img/p/4/2/5/3/4253.jpg?v=1651087653',
            price:  850,
            categoria: "Madera",
            stock: 3,
            description: "Dale a tus fotos preferidas un toque vintage! Imprimilas en estilo Polaroid® (papel brillante). Tamaño de la foto: 8,2x10 cm"
            }
            ];
        const item = productos.filter(item => item.id === parseInt(id));
        console.log(item);
        
              
        
        
        
        
        setTimeout(() => {
            resolve(item [0]);
        }, 2000);
    }) ;
    return myPromise;
}

function ItemDetailContainer () {
    const [item, setItem] = useState ({}) ;
    const { id } = useParams();

    useEffect(() => {
         getItem(id)
        .then(res => {
            setItem(res);
        })
        .catch(err => {
            console.log(err);
            alert('Ocurrio error')
        });

    }, [id]);

    return ( 
        <div >
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer