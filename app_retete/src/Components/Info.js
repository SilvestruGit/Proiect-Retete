import { useParams } from "react-router-dom";

let Info = ({retete}) => {
    const { id } = useParams();
    const reteta = retete.find(r => r.id === id);
    return (
        <div className="reteta" key={reteta.id}>
            <img src={reteta.imgSrc} alt="img not loading" />
            <h2>{reteta.nume}</h2>
            <p>Timp de preparare: {reteta.timpPreparare} minute</p>
            <div className="ingrediente">
                <h3>Ingrediente</h3>
                <ul>
                    {reteta.ingrediente.map((ingredient, index) => (
                        <li key={index}>{ingredient.toLocaleUpperCase()}</li>
                    ))}
                </ul>
            </div>
            <p>{reteta.descriere}</p>
            {/* <div className="butoaneFavorit" key={reteta.id}>
                <button className="stergeReteta" onClick={() => handleDelete(reteta.id)}>Sterge</button>
                <button className="butonFav" onClick={() => handleFavorit(reteta.id)}> 
                    {reteta.favorit ? 'Sterge de la favorite' : 'Adauga la favorite'}
                </button>
            </div> */}
        </div>
    );
}

export default Info;