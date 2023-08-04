
import { useState } from "react";
import Popup from "./Popup";

const FromReteta = ({retete, setRetete}) => {

    const [nume, setNume] = useState('Lasagna');
    const [imgSrc, setImgSrc] = useState('data:image/jpeg;base64,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');
    const [ingrediente, setIngrediente] = useState({
        "sare": false,
        "oua": false,
        "piper": false,
        "faina": false,
        "lapte": false,
        "rosii": false,
        "cascaval": false,
    });
    const [timpPreparare, setTimpPreparare] = useState('45');
    const [favorit, setFavorit] = useState(false);
    const [micDejun, setMicDejun] = useState(false);
    const [pranz, setPranz] = useState(false);
    const [cina, setCina] = useState(false);
    const [descriere, setDescriere] = useState("");
    const [adaugaIngredient, setAdaugaIngredient] = useState(false);

    const handleSubmit = (e) => { 
        e.preventDefault();
        const reteta = {nume, imgSrc, timpPreparare, favorit};
        
        reteta.id = nrRetete(retete).toString();
        reteta.micDejun = micDejun;
        reteta.pranz = pranz;
        reteta.cina = cina;
        reteta.descriere = descriere;

        reteta.ingrediente = keyIng.filter((k, index) => valIng[index])
        console.log(reteta.ingrediente);

        // console.log(retete);

        let newRetete = retete;
        newRetete.push(reteta);
        setRetete(newRetete);

        alert(`${reteta.nume} a fost adaugata la lista de retete!`);

        resetForm();    
    }

    const handleAddRemIng = (index, e) => {
        console.log(ingrediente);
        setIngrediente((prevIngrediente) => ({
            ...prevIngrediente,
            [keyIng[index]]: !valIng[index]
        }))
    }

    const keyIng = Object.keys(ingrediente);
    const valIng = Object.values(ingrediente);
    //console.log(keyIng, valIng);

    return (
        <div>
            <form className="formReteta" id="formReteta" onSubmit={handleSubmit}>
                <h2>Creeaza reteta proprie</h2>
                <label htmlFor="nume">Denumire reteta</label>
                <input 
                    type="text" 
                    id="nume" 
                    value={nume} 
                    onChange={(e) => setNume(e.target.value)}
                />
                <hr />
                <label htmlFor="link-imagine">Link cu o poza</label>
                <input 
                    type="text" 
                    id="link-imagine"
                    value={imgSrc}
                    onChange={(e) => setImgSrc(e.target.value)}
                />
                <hr />
                <label htmlFor="ingrediente">Ingrediente</label>
                
                <div className="ingredienteForm">
                    {
                        valIng.map((val, i) => {
                            return  <div key={i}>
                                        <label htmlFor={keyIng[i]}>{keyIng[i]}</label>
                                        <input onChange={(e) => handleAddRemIng(i, e)} type="checkbox" value={val} name={keyIng[i]} />
                                    </div>
                        })
                    }
                </div>
                <br />
                <button type="button" onClick={() => setAdaugaIngredient(!adaugaIngredient)}>Adauga ingredient</button>

                <hr />
                <label htmlFor="timp">Timp de preparare (minute)</label>
                <input 
                    type="number" 
                    value={timpPreparare}
                    min={0} 
                    id="timp"
                    onChange={(e) => setTimpPreparare(e.target.value)}
                />
                <hr />
                <textarea 
                    name="descriere"   
                    id="descriere"
                    placeholder="Mod de preparare: " 
                    cols="30" 
                    rows="5" 
                    value={descriere} 
                    onChange={(e) => setDescriere(e.target.value)}>
                </textarea>
                <hr />
                <label htmlFor="favorit">Vreti sa adaugati la favorite?</label>
                <input 
                    type="checkbox" 
                    id="favorit"
                    onChange={() => setFavorit(!favorit)}
                    value={favorit}
                />
                <hr />
                <div className="momentulZilei">
                    <label htmlFor="micDejun">Mic Dejun</label>
                    <input 
                        type="checkbox" 
                        id="micDejun"
                        onChange={() => setMicDejun(!micDejun)}
                        value={micDejun}
                    />
                    <label htmlFor="pranz">Pranz</label>
                    <input 
                        type="checkbox" 
                        id="pranz"
                        onChange={() => setPranz(!pranz)}
                        value={pranz}
                    />
                    <label htmlFor="cina">Cina</label>
                    <input 
                        type="checkbox" 
                        id="cina"
                        onChange={() => setCina(!cina)}
                        value={cina}
                    />
                </div>
                <button type="submit">Adauga reteta</button>
            </form>
            <div className="popup">
                <Popup 
                    adaugaIngredient={adaugaIngredient}
                    setAdaugaIngredient={setAdaugaIngredient}
                    ingrediente={ingrediente}
                    setIngrediente={setIngrediente}
                />
            </div>
        </div>
    );
}

const nrRetete = (retete) => {
    let contor = 0;
    retete.forEach((reteta)=>{contor = reteta.id});
    return parseInt(contor) + 1;
}

const resetForm = () => {
    document.getElementById('formReteta').reset();
}
 
export default FromReteta;