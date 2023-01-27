import '../form-top/form.css';

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
                        <input type="date"/>
                    </div>     
                    <input type="number" placeholder="Quantas pessoas?"/>
                    <button>Encontrar agora</button>
                </form>
            </div>
        </>
    );
}

export default Form;