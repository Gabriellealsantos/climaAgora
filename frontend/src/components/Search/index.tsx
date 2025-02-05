import './styles.css';

export default function Search() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Local de pesquisa..." className="search-input" />
            <button className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </button>
        </div>
    )
}
