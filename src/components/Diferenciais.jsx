import tomateImg from '../assets/tomate.png';
import fogoImg from '../assets/fogo.png';
import queijoImg from '../assets/queijo.png';
import relampagoImg from '../assets/relampago.png';

const listaDiferenciais = [
    {
        id: 1,
        Imagem: tomateImg,
        alt: "tomate",
        texto: "Igrendientes",
    },
    {
        id: 2,
        Imagem: fogoImg,
        alt: "fogo",
        texto: "forno a lenha",
    },
    {
        id: 3,
        Imagem: queijoImg,
        alt: "queijo",
        texto: "igredientes",
    },
    {
        id: 4,
        Imagem: relampagoImg,
        alt: "relampago",
        texto: "entrega rapida",
    }

];

export default function Diferenciais(){
    return(
        <section className='diferenciais' id='diferenciais'>
            <h2>nossos diferenciais</h2>

            <div className='cards'>
                {listaDiferenciais.map((item)=>(
                    <div className="card" key={item.id}>
                        <img src={item.image} alt={item.alt} />
                        <p>{item.texto}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}
