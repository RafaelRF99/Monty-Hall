export default class IPorta {
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    // MOSTRA OS ITENS PRIVADOS
    constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    // PARA ACESSAR OS VALORES PRIVADOS
    get numero() {
        return this.#numero
    }

    get temPresente() {
        return this.#temPresente
    }

    get selecionada() {
        return this.#selecionada
    }

    get aberta() {
        return this.#aberta
    }

    get fechada() {
        return !this.#aberta
    }

    // DESMARCA TODAS AS PORTAS
    desmarcar() {
        const selecionada = false
        return new IPorta(this.numero, this.temPresente, selecionada, this.aberta)
    }

    // SE A PORTA ESTA SELECIONADA OU NAO
    alternarSelecao() {
        const selecionada = !this.selecionada
        return new IPorta(this.numero, this.temPresente, selecionada, this.aberta)
    }

    // ABRE A PORTA
    abrir() {
        const aberta = true;
        return new IPorta(this.numero, this.temPresente, this.selecionada, aberta)
    }

}