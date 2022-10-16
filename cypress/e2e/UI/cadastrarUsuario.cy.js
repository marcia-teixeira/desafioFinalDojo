/// <reference types="cypress" />

import CadastrarUsuario from "../../support/pages/ContaUsuario.page"

describe('Funcionalidade: Criar conta', () => {

    beforeEach(() => {

        CadastrarUsuario.LoginPage()

    });

    it('Cadastrar usuário', () => {

        CadastrarUsuario.CriarConta()

    });


});