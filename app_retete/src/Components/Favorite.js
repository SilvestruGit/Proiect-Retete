import Retete from "./Retete";

const Favorite = ({
    retete, setRetete,
    filtruCina, filtruMicDejun, filtruPranz,
    search
    }) => {
    
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
    
    const filteredRetete = retete.filter(reteta => reteta.favorit).filter(reteta => {
        return reteta.favorit && 
                (!filtruMicDejun || reteta.micDejun) &&
                (!filtruPranz || reteta.pranz) &&
                (!filtruCina || reteta.cina);
        })

    return ( 
        <div>
            <Retete 
                retete={filteredRetete.filter(r => {return r.nume.toLowerCase().includes(search.toLowerCase())})} 
                titlu={'Retetele favorite'} 
                handleDelete={handleDelete}
                handleFavorit={handleFavorit}
            />
        </div>
    );
}

export default Favorite;