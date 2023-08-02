
import { useState } from "react";

const FromReteta = ({retete, setRetete}) => {

    const [nume, setNume] = useState('Lasagna');
    const [link, setLink] = useState('');
    const [ingrediente, setIngrediente] = useState([
        '500 g faina tip 650',
        '325 ml apa calduta',
        '7 g drojdie uscata sau 25 g proaspata',
        '1 lingurita sare',
        'inca 20 g faina pentru framantat',
        'o mana de gris'
    ]);
    const [timpPreparare, setTimpPreparare] = useState('45');
    const [favorit, setFavorit] = useState(false);
    const [micDejun, setMicDejun] = useState(false);
    const [pranz, setPranz] = useState(false);
    const [cina, setCina] = useState(false);
    const [descriere, setDescriere] = useState("");

    const handleSubmit = (e) => { 
        e.preventDefault();
        const reteta = {nume, link, ingrediente, timpPreparare, favorit};
        
        reteta.id = nrRetete(retete);
        reteta.micDejun = micDejun;
        reteta.pranz = pranz;
        reteta.cina = cina;
        reteta.descriere = descriere;

        console.log(retete);

        let newRetete = retete;
        newRetete.push(reteta);
        setRetete(newRetete);

        alert(`${reteta.nume} a fost adaugata la lista de retete!`);

        // fetch('http://localhost:8000/retete', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(reteta)
        //     })
        //     .then(console.log('new reteta added'));
    }

    return ( 
        <form className="formReteta" onSubmit={handleSubmit}>
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
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <hr />
            <label htmlFor="ingrediente">Ingrediente</label>
            <input 
                type="text" 
                id="ingrediente"
                value={ingrediente}
                onChange={(e) => setIngrediente(e.target)}
            />
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
            <button>Adauga reteta</button>
        </form>
    );
}

const nrRetete = (retete) => {
    let contor = 0;
    retete.forEach((reteta)=>{contor = reteta.id});
    return parseInt(contor) + 1;
}
 
export default FromReteta;