
const Filtru = ({
    filtruCina, filtruMicDejun, filtruPranz,
    setFiltruCina, setFiltruMicDejun, setFiltruPranz,
    search, setSearch
}) => {

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
                <li>
                    <input 
                        type="text" 
                        className="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cauta retete"
                    />
                </li>
            </ul>
        </div>
    )
}

export default Filtru;