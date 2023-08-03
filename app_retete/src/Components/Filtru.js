
const Filtru = ({
    filtruCina, filtruMicDejun, filtruPranz,
    setFiltruCina, setFiltruMicDejun, setFiltruPranz}) => {

    return (
        <div className="filtru">
            <ul>
                <li>Mic dejun</li>
                <input 
                    type="checkbox"
                    id="filtruMicDejunCB"
                    value={filtruMicDejun}
                    onChange={() => setFiltruMicDejun(!filtruMicDejun)}
                />
                <li>Pranz</li>
                <input 
                    type="checkbox"
                    id="filtruPranz"
                    value={filtruPranz}
                    onChange={() => setFiltruPranz(!filtruPranz)}
                />
                <li>Cina</li>
                <input 
                    type="checkbox"
                    id="filtruCina"
                    value={filtruCina}
                    onChange={() => setFiltruCina(!filtruCina)}
                />
            </ul>
        </div>
    )
}

export default Filtru;