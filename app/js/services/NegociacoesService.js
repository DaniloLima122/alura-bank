System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, NegociacoesService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacoesService = class NegociacoesService {
                obterNegociacoes(handler) {
                    return fetch("http://localhost:8080/dados")
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((dados) => dados
                        .forEach(dado => new index_1.Negociacao(new Date(), dado.vezes, dado.montante)))
                        .catch(err => console.log(err));
                }
            };
            exports_1("NegociacoesService", NegociacoesService);
        }
    };
});
