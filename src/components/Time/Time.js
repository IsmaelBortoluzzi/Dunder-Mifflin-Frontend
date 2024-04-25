import './Time.css';
import Colaborador from '../Colaborador';


const Time = (props) => {

    const section_styles = {
        backgroundColor: props.corSecundaria
    }
    const h3_styles = {
        borderColor: props.corPrimaria
    }

    return (
        <section className="time" style={ section_styles }>
            <h3 style={ h3_styles }>{ props.nome }</h3>

            <div className="colaboradores">
                { props.colaboradores.map(c => <Colaborador corDeFundo={ props.corPrimaria } key={ c.nome } nome={ c.nome } cargo={ c.cargo } imagem={ c.imagem }/>) }
            </div>
        </section>
    );
}

export default Time;