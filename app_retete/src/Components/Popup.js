import React, { useState } from 'react';

export default function Popup({adaugaIngredient, setAdaugaIngredient, ingrediente, setIngrediente}) {
    
    const [nume, setNume] = useState("");

    const handleOnClick = () => {
        setIngrediente((prevIng) => ({
            ...prevIng,
            [nume.toString()]: false,
        }));

        console.log(ingrediente);

        setAdaugaIngredient(false);
    }

    if (adaugaIngredient === true) {
        return (
            <div className="popup">
                <form>
                    <label htmlFor="addIng">Denumire ingredient</label>
                    <input type="text" id="addIng" 
                        value={nume}
                        onChange={(e) => {setNume(e.target.value)}} 
                    />
                    <button type="button" onClick={handleOnClick}>Adauga la lista de ingrediente</button>
                </form>
            </div>
        )
    }
    else return null;
}
