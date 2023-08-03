import { Link } from "react-router-dom";

const Retete = ({retete, titlu, handleDelete, handleFavorit}) => {
    // console.log(retete);
    return (
        <div>
            <h2>{titlu}</h2>
            {
                retete.map((reteta) => (
                        <div className="reteta" key={reteta.id}>
                            <Link to={`/retete/${reteta.id}` }>
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
                            </Link>
                            <div className="butoaneFavorit" key={reteta.id}>
                                <button className="stergeReteta" onClick={() => handleDelete(reteta.id)}>Sterge</button>
                                <button className="butonFav" onClick={() => handleFavorit(reteta.id)}> 
                                    {reteta.favorit ? 'Sterge de la favorite' : 'Adauga la favorite'}
                                </button>
                            </div>
                        </div>
                ))
            }
        </div>
    );
}

export default Retete;