import '../servicos/servicos.css';
import { FaHotel, FaUtensils, FaRegClock, FaDollarSign, FaTheaterMasks, FaGlobe, FaHeadphones } from 'react-icons/fa';

const Servicos = () => {
    return (
        <div className='conteudo-servicos'>
            <div className='text'>
                <p>Serviços</p>
                <h2>Incontáveis experiências</h2>
            </div>

            <div className='options-servicos'>
                <div className='option-servicos'>
                    <FaHotel />
                    <div className='text-servicos'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                    </div>
                </div>
                <div className='option-servicos'>
                    <FaUtensils />
                    <div className='text-servicos'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                    </div>
                </div>
                <div className='option-servicos'>
                    <FaRegClock />
                    <div className='text-servicos'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                    </div>
                </div>
                <div className='option-servicos'>
                    <FaDollarSign />
                    <div className='text-servicos'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                    </div>
                </div>
                <div className='option-servicos'>
                    <FaTheaterMasks />
                    <div className='text-servicos'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                    </div>
                </div>
                <div className='option-servicos'>
                    <FaGlobe />
                    <div className='text-servicos'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                    </div>
                </div>
                <div className='option-servicos'>
                    <FaHeadphones />
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