import Retete from "./Retete";
import { useEffect } from "react";

const Home = ({
    retete, setRetete,
    filtruCina, filtruMicDejun, filtruPranz,
    search,
    }) => {

    const handleDelete = (id) => {
        const newRetete = retete.filter(reteta => reteta.id !== id)
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

    useEffect(() => {
        setRetete(retete);
    }, [retete, setRetete]);

    const filteredRetete = retete.filter(reteta => {
        return (!filtruMicDejun || reteta.micDejun) &&
               (!filtruPranz || reteta.pranz) &&
               (!filtruCina || reteta.cina);
        })

    return ( 
        <div>
            {retete.filter(reteta => {
                return reteta.micDejun === filtruMicDejun  || 
                    reteta.pranz === filtruPranz  || 
                    reteta.cina === filtruCina
            }) ? 
                <Retete 
                    retete={filteredRetete.filter(r => {return r.nume.toLowerCase().includes(search.toLowerCase())})} 
                    titlu={'Toate retetele'} 
                    handleDelete={handleDelete}
                    handleFavorit={handleFavorit}
                />
                : null
            }
        </div>
    );
}

export default Home;
