System.register(["./Negociacao", "./Negociacoes", "./NegociacaoParcial", "./imprimivel", "./Igualavel", "./MeuObjeto"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (Negociacao_1_1) {
                exportStar_1(Negociacao_1_1);
            },
            function (Negociacoes_1_1) {
                exportStar_1(Negociacoes_1_1);
            },
            function (NegociacaoParcial_1_1) {
                exportStar_1(NegociacaoParcial_1_1);
            },
            function (imprimivel_1_1) {
                exportStar_1(imprimivel_1_1);
            },
            function (Igualavel_1_1) {
                exportStar_1(Igualavel_1_1);
            },
            function (MeuObjeto_1_1) {
                exportStar_1(MeuObjeto_1_1);
            }
        ],
        execute: function () {
        }
    };
});
