import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacao, Negociacoes } from "../models/index";
import { domInject, throttle } from "../helpers/decorators/index"
import { NegociacaoService } from "../services/index";
import { imprime } from "../helpers/index";

export class NegociacaoController {

    @domInject("#data")
    private _inputData: JQuery;

    @domInject("#quantidade")
    private _inputQuantidade: JQuery;

    @domInject("#valor")
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView", true);
    private _mensagemView = new MensagemView("#mensagemView", true);

    private _service = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona(event: Event) {

        event.preventDefault();

        let data = new Date((this._inputData.val() as string).replace(/-/g, ","));


        if (!this._eDiaUtil(data)) {

            this._mensagemView.update("Somente negociacões em dias úteis são permitidas")
            return;
        }


        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val() as string),
            parseFloat(this._inputValor.val() as string)
        );


        this._negociacoes.adiciona(negociacao);

        imprime(negociacao, this._negociacoes);

        this._negociacoesView.update(this._negociacoes)

        this._mensagemView.update("Negociação adicionada com sucesso!");

    }

    private _eDiaUtil(data: Date) {

        return data.getDay() != DiasDaSemana.Domingo && data.getDay() != DiasDaSemana.Sabado;
    }

    @throttle()
    async importaDados() {


        try {

            const negociacoesParaImportar = await this._service
                .obterNegociacoes(res => {

                    if (res.ok) {
                        return res;
                    } else {
                        throw new Error(res.statusText);

                    }
                });


            const negociacoesJaImportadas = this._negociacoes.paraArray();

            negociacoesParaImportar
                .filter(negociacao => !negociacoesJaImportadas.some(jaImportada =>
                    negociacao.ehIgual(jaImportada)))
                .forEach(negociacao => this._negociacoes.adiciona(negociacao))

            this._negociacoesView.update(this._negociacoes);
        } catch (err) {

            this._mensagemView.update(err.message)
        }
    }


}

enum DiasDaSemana {

    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}