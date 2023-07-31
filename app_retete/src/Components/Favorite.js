import Retete from "./Retete";

const Favorite = ({retete, setRetete}) => {
    
    const handleDelete = (id) => {
        let newRetete = retete.filter(reteta => reteta.id !== id)
        setRetete(newRetete);
    }

    const handleFavorit = (id) => {
        setRetete((prevRetete) => 
            prevRetete.map(reteta =>     
                reteta.id === id ? {
                    ...reteta,
                    favorit: !reteta.favorit
                } : reteta
            )
        )
    };
    
    return ( 
        <div>
            <Retete 
                retete={retete.filter(reteta => reteta.favorit)} 
                titlu={'Retetele favorite'} 
                handleDelete={handleDelete}
                handleFavorit={handleFavorit}
            />
        </div>
    );
}

export default Favorite;