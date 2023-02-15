import '../form-top/form.css';
import '../form-top/formTop-queries.css';

const Form = () => {
    return(
        <>
            <div className="form-top">
                <form>
                    <div>
                        <label>Onde?</label>
                        <input type="text" placeholder="Lugar"/>
                    </div>         
                    <div>
                        <label>Quando?</label>
                        <input type="date" class="custom-input"/>
                    </div>    
                    <div>
                        <label>Quantas pessoas?</label>
                        <input type="number" placeholder="Quantas pessoas?"/>
                    </div> 
                    <div className='form-button'>
                        <label>1</label>
                        <button>Encontrar agora</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;