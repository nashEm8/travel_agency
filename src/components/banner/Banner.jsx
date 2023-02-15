import '../banner/banner.css';
import '../banner/banner-queries.css';

const Banner = () => {
    return(
        <>
            <div className='banner'>
                <div className='text-banner'>
                    <h2>Siga-nos</h2>
                    <h1>Para o desconhecido</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <div className='button-menu'>
                        <a href='#'>Agencie agora</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;