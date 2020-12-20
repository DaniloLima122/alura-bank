System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, NegociacoesView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends View_1.View {
                template(modelo) {
                    return `
            
            <table class="table table-hover table-bordered">
               <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VOLUME</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
            
                <tbody>
                ${modelo.paraArray().map(negociacao => `<tr>
                        <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()} </td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.valor}</td>
                     </tr>   
                `).join("")}
                </tbody>
                        
                <tfoot>
                </tfoot>
            </table>
            <script>alert('Foi');</script>
           `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
