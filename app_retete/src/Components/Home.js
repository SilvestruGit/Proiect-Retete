import Retete from "./Retete";
import { useEffect } from "react";

const Home = ({retete, setRetete}) => {

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

    useEffect(() => {
        setRetete(retete);
    }, [retete, setRetete]);

    return ( 
        <div>
            {retete ? 
                <Retete 
                    retete={retete} 
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
