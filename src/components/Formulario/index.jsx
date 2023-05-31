import { useState } from "react";

const Formulario = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);



    function gerarIMC() {
        const imc = (peso / (altura * altura)).toFixed(2)

        if (peso && altura !== 0) {
            if (imc < 18.5 && imc > 0) {
                return <span>O seu IMC é <b>{imc}</b> e esta dentro da categoria de <b>Abaixo do peso</b></span>
            } else if (imc >= 18.5 && imc <= 24.9) {
                return <span>O seu IMC é <b>{imc}</b> e esta dentro da categoria de <b>Peso normal</b></span>
            }else if (imc >= 25 && imc <= 29.9) {
                return <span>O seu IMC é <b>{imc}</b> e esta dentro da categoria de <b>Sobrepeso</b></span>
            }else if (imc >= 30 && imc <= 34.9) {
                return <span>O seu IMC é <b>{imc}</b> e esta dentro da categoria de <b>Obesidade grau 1</b></span>
            }else if (imc >= 35 && imc <= 39.9) {
                return <span>O seu IMC é <b>{imc}</b> e esta dentro da categoria de <b>Obesidade grau 2</b></span>
            }else if (imc >= 40) {
                return <span>O seu IMC é <b>{imc}</b> e esta dentro da categoria de <b>Obesidade grau 3</b></span>
            } else {
                return <span>O seu IMC é <b>0 ou negativo</b> por favor entre com os números corretamente</span>
            }
        }
    }

    return (
        <>
        <form className="form-inline pb-4" onSubmit={(evento) => evento.preventDefault()} >
            <div className="form-group d-flex gap-2">
                <input
                    onChange={(evento) => setAltura(parseFloat(evento.target.value))}
                    className="form-control text-center"
                    type="number"
                    placeholder="Entre com a sua Altura"
                    required
                />
                <input
                    onChange={(evento) => setPeso(parseFloat(evento.target.value))}
                    className="form-control text-center"
                    type="number"
                    placeholder="Entre com o seu peso"
                    required
                />
                <button onClick={(evento) => gerarIMC()} type="submit" className="btn btn-primary w-50">
                    Gerar IMC
                </button>
            </div>
        </form>
        { gerarIMC() }
        </>
    );
};


export default Formulario;