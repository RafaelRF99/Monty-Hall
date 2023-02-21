import IPorta from "../model/IPorta";

export function criarPortas(qtd: number, comPresente: number): IPorta[] {
    return Array.from({ length: qtd }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === comPresente
        return new IPorta(numero, temPresente)
    })
}

export function atualizarPortas(portas: IPorta[], modificada: IPorta): IPorta[] {
    return portas.map(portaAtual => {
        const igualModificada = portaAtual.numero === modificada.numero

        if (igualModificada) {
            return modificada
        } else {
            return modificada.aberta ? portaAtual : portaAtual.desmarcar()
        }
    })
}