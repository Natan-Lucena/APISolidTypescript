# Cadastro carro

**RF**
Deve ser possivel cadastrar um novo carro.


**RN**
Apenas administradores podem cadastrar carros.
Não deve ser possivel cadastrar um carro com uma placa já existente.
* O carro deve ser cadastrado como disponivel por padrão.

# Listagem de Carros

**RF**
Deve ser possivel listar os carros disponiveis.
Deve ser possivel listar o carro pelo nome da categoria.
Deve ser possivel listar o carro pelo nome da marca.
Deve ser possivel listar o carro pelo nome do carro.

**RN**
Não é preciso que o usuario esteja logado no sistema.


# Cadastro de especificação do carro

**RF**
Deve ser possivel cadastrar uma especificação para um carro


**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro.

# Cadastro de imagem do carro

**RF**
Deve ser possivel cadastrar a imagem do carro.
Deve ser possivel listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
Apenas administradores podem cadastrar imagens.
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro.

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel.

**RN**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possivel cadastrar um novo aluguel, caso já existe um aberto para o mesmo usuario.
Não deve ser possivel cadastrar um novo aluguel, caso já existe um aberto para o mesmo carro.