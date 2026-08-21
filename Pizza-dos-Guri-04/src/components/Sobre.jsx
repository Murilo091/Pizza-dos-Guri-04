import pizza from '../assets/pizza.png'

export default function Sobre(){
    return(
        <section className="sobre" id="sobre">
            <h2>sobre os Guri</h2>
            <p className="texto-topo">
                Os guri gosta de pizza e quer todos felizes :)
            </p>
            <div className="conteudo">
                <div className="image">
                    <img src={pizza} alt="Pizza e Forno" />
                </div>
                <div className="texto-lateral">
                    Nossa pizza é feito com amor e carinho, porque os guri gosta de pizza :)
                </div>
            </div>
        </section>
    )
}