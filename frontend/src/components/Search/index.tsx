import { useEffect, useState } from 'react';
import { CityDTO } from '../../models/CityDTO';
import * as geocodeService from '../../services/geocode-service';
import './styles.css';

interface SearchProps {
  onCitySelect: (city: CityDTO) => void;
}

export default function Search({ onCitySelect }: SearchProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<CityDTO[]>([]);
  const [, setLoading] = useState(false);
  // Estado para indicar que uma sugestão foi selecionada
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    // Se o usuário já selecionou uma sugestão, não busca novamente
    if (!isSelected && query.length >= 3) {
      const timeoutId = setTimeout(() => {
        setLoading(true);
        geocodeService
          .query(query)
          .then(response => {
            setSuggestions(response.data.results);
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
            setLoading(false);
          });
      }, 100);

      return () => clearTimeout(timeoutId);
    } else {
      setSuggestions([]);
    }
  }, [query, isSelected]);

  const handleSelectCity = (city: CityDTO) => {
    // Atualiza o input com o nome da cidade e limpa as sugestões
    setQuery(city.formatted);
    setSuggestions([]);
    // Indica que o usuário já selecionou uma sugestão, evitando refetch
    setIsSelected(true);
    // Chama a função do pai com o objeto completo da cidade
    onCitySelect(city);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Local de pesquisa..."
        className="search-input"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          // Toda vez que o usuário digitar, considera que não foi selecionado ainda
          setIsSelected(false);
        }}
      />
      <button className="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((city, index) => (
            <li key={index} onClick={() => handleSelectCity(city)}>
              {city.formatted}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
