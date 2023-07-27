

const Retete = ({retete, titlu, handleDelete}) => {

    return (
        <div>
            <h2>{titlu}</h2>
            {
                retete.map((reteta, index) => (
                    <div className="reteta" key={index}>
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
                        <button className="stergeReteta" onClick={() => handleDelete(reteta.imgSrc)}>Sterge</button>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Retete;