import Cartao from '../components/Cartao'
import styles from '../styles/Formulario.module.css'
import Link from 'next/link'
import EntradaNumerica from '../components/EntradaNumerica'
import { useState } from 'react'

export default function Formulario() {
  const [qtdPortas, setQtdPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade de Portas" value={qtdPortas}
            onChange={novaQtd => setQtdPortas(novaQtd)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Presente na Porta" value={comPresente}
            onChange={novaPorta => setComPresente(novaPorta)} />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdPortas}/${comPresente}`} passHref className={styles.link}
            style={{ textDecoration: "none", color: "#FFF" }}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}