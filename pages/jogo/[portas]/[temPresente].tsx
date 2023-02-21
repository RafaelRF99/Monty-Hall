import styles from '../../../styles/Jogo.module.css'
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import { useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Jogo() {
    const router: any = useRouter()
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState<any[]>([])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        const portaValidas = portas >= 3 && portas <=100
        const presenteValido = temPresente >= 1 && temPresente <= portas
        setValido(portaValidas && presenteValido)
    },[portas, router.query.portas, router.query.temPresente])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    },[router?.query])

    function renderizarPortas() {
        return valido && portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderizarPortas() : <h2>Valores inválidos</h2>}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}