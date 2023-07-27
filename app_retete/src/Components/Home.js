import FromReteta from "./FormReteta";
import Retete from "./Retete";
import { useEffect, useState } from "react";

const Home = () => {

    const [retete, setRetete] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = (id) => {
        let newRetete = retete.filter(reteta => reteta.imgSrc !== id)
        setRetete(newRetete);
    }

    useEffect(() => {
        fetch('http://localhost:8000/retete')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setRetete(data);
                setIsLoading(false);
            });
    }, []);

    return ( 
        <div>
            {isLoading ? <h1>Loading...</h1> : null}
            {retete ? 
                <Retete 
                    retete={retete} 
                    titlu={'Toate retetele'} 
                    handleDelete={handleDelete}
                />
                : null
            }
            <FromReteta/>
        </div>
    );
}
 
export default Home;
