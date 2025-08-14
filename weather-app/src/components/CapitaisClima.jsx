import { useEffect, useState } from "react";
import { getCurrentWeather } from "../services/weatherAPI";
import styles from "../styles/CapitaisClima.module.css";

export default function CapitaisList() {
  const [capitais, setCapitais] = useState([]);

    useEffect(() => {
    const listaCapitais = [
        "Rio Branco",
        "Maceió",
        "Macapá",
        "Manaus",
        "Salvador",
        "Fortaleza",
        "Brasília",
        "Vitória",
        "Goiânia",
        "São Luís",
        "Cuiabá",
        "Campo Grande",
        "Belo Horizonte",
        "Belém",
        "João Pessoa",
        "Curitiba",
        "Recife",
        "Teresina",
        "Rio de Janeiro",
        "Natal",
        "Porto Alegre",
        "Porto Velho",
        "Boa Vista",
        "Florianópolis",
        "São Paulo",
        "Aracaju",
        "Palmas"
    ];

    async function carregarClima() {
      const resultados = await Promise.all(
        listaCapitais.map(async (cidade) => {
          try {
            const dados = await getCurrentWeather(cidade);
            return {
              cidade,
              temp: Math.round(dados.main.temp),
              condicao: dados.weather[0].description
            };
          } catch {
            return { cidade, temp: null, condicao: "Erro ao carregar" };
          }
        })
      );

      setCapitais(resultados);
    }

    carregarClima();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Clima nas Capitais</h2>
      <ul className={styles.lista}>
        {capitais.map((c, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.cidade}>{c.cidade}</span>
            <span className={styles.temp}>
              {c.temp !== null ? `${c.temp}°C` : "--"}
            </span>
            <span className={styles.condicao}>{c.condicao}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
