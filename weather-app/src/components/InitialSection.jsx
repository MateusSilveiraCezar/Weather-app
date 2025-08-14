import { useState } from 'react';
import styles from '../styles/InitialSection.module.css';

export default function InitialSection({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim() !== '') {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Weather Sense</h1>
        <p className={styles.subtitle}>Veja a previsão do tempo em qualquer cidade</p>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite o nome da cidade"
            className={styles.input}
          />
          <button onClick={handleSearch} className={styles.button}>Buscar</button>
        </div>
      </div>
    </section>
  );
}
