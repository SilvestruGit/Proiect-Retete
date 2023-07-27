const FromReteta = () => {
    return ( 
        <form className="formReteta">
            <h2>Creeaza reteta proprie</h2>
            <label htmlFor="nume">Denumire reteta</label>
            <input type="text" id="nume" />
            <hr />
            <label htmlFor="link-imagine">Link cu o poza</label>
            <input type="text" id="link-imagine" />
            <hr />
            <label htmlFor="ingrediente">Ingrediente</label>
            <input type="text" id="ingrediente" />
            <hr />
            <label htmlFor="timp">Timp de preparare (minute)</label>
            <input type="number" defaultValue={10} min={0} id="timp" />
            <hr />
            <label htmlFor="favorit">Vreti sa adaugati la favorite?</label>
            <input type="checkbox" id="favorit"/>
            <hr />
            <button>Adauga reteta</button>
        </form>
    );
}
 
export default FromReteta;