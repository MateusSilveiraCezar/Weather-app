import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim() !== '') {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite o nome da cidade"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}
