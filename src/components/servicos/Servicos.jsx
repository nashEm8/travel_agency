import '../servicos/servicos.css';
import { FaHotel, FaUtensils, FaRegClock, FaDollarSign, FaTheaterMasks, FaGlobe, FaHeadphones } from 'react-icons/fa';

const Servicos = () => {
    return(
        <div className='conteudo-servicos'>
        <div className='text'>
            <p>Serviços</p>
            <h2>Incontáveis experiências</h2>
        </div>

        <div className='options-servicos'>
            <div className='option-servicos'>
                <FaHotel/>
                <div className='text-servicos'>
                    <p>Passeios & viagens</p>
                    <span>Lorem Ipsum is simply dummy text of the printing.</span>
                </div>
            </div>
            <div className='option-servicos' style={{marginLeft : '20px'}}>
                <FaUtensils/>
                <div className='text-servicos'>
                    <p>Passeios & viagens</p>
                    <span>Lorem Ipsum is simply dummy text of the printing.</span>
                </div>
            </div>
            <div className='option-servicos' style={{marginLeft : '20px'}}>
                <FaRegClock/>
                <div className='text-servicos'>
                    <p>Passeios & viagens</p>
                    <span>Lorem Ipsum is simply dummy text of the printing.</span>
                </div>
            </div>
            <div className='option-servicos' style={{marginLeft : '20px'}}>
                <FaDollarSign/>
                <div className='text-servicos'>
                    <p>Passeios & viagens</p>
                    <span>Lorem Ipsum is simply dummy text of the printing.</span>
                </div>
            </div>
            <div className='option-servicos' style={{margin : '20px 0 0 0'}}>
                <FaTheaterMasks/>
                <div className='text-servicos'>
                    <p>Passeios & viagens</p>
                    <span>Lorem Ipsum is simply dummy text of the printing.</span>
                </div>
            </div>
            <div className='option-servicos' style={{margin : '20px 0 0 20px'}}>
                <FaGlobe/>
                <div className='text-servicos'>
                    <p>Passeios & viagens</p>
                    <span>Lorem Ipsum is simply dummy text of the printing.</span>
                </div>
            </div>
            <div className='option-servicos' style={{margin : '20px 0 0 20px'}}>
                <FaHeadphones/>
                <div className='text-servicos'>
                    <p>Passeios & viagens</p>
                    <span>Lorem Ipsum is simply dummy text of the printing.</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Servicos; 