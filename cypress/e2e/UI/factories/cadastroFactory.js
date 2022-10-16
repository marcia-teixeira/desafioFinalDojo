var faker = require('faker-br')

export default {

    cadastroUsuario: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        let data = {

            name: `${firstName} ${lastName}`,
            email: faker.internet.email(firstName),
            password: '123456@1',
            message:
            {
                successmessage: 'Bem-vindo',
                emptyPassword: 'Senha é obrigatória',
                divergentpassword: 'Senhas precisam ser idênticas',
                invalidemail: 'Digite um email válido'
            }

        }
        return data

    }

}



