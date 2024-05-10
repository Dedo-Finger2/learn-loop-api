### Coming soon...

1. Requisitos funcionais

- [ ] Deve ser possível se cadastrar no sistema
- [ ] Deve ser possível se autenticar no sistema
- [ ] Deve ser possível escolher o método de criação de um ciclo de estudos
- [ ] Deve ser possível criar um novo ciclo de estudos
- [ ] Deve ser possível adicionar matérias no ciclo de estudos
- [ ] Deve ser possível escolher a modalidade de computação de horas para as matérias
- [ ] Deve ser possível visualizar detalhes do ciclo de estudos
- [ ] Deve ser possível listar as matérias do ciclo de estudos
- [ ] Deve ser possível iniciar um timer para uma matéria do ciclo de estudos
- [ ] Deve ser possível registrar as horas estudadas ao fim do timer setado para uma matéria
- [ ] Deve ser possível atualizar a quantidade de horas estudadas da matéria através do timer
- [ ] Deve ser possível atualizar a quantidade de horas estudadas da matéria adicionando mais uma hora
- [ ] Deve ser possível atualizar o nível de importância / dificuldade das matérias do ciclo de estudos atual
- [ ] Deve ser possível deletar um ciclo de estudos
- [ ] Deve ser possível selecionar um ciclo de estudos criado pelo usuário para utilizar
- [ ] Deve ser possível cadastrar matérias que podem ser usadas em ciclos de estudos
- [ ] Deve ser possível mudar minha senha
- [ ] Deve ser possível diminuir em 1 as horas estudadas de uma matéria (checkbox desmarcada)
- [ ] Deve ser possível verificar meu email
- [ ] Deve ser possível ativar ou desativar o refresh automático semanal das matérias
- [ ] Deve ser possível visualizar um log dos ciclos que já passaram de cada ciclo de estudos, podendo ver quantas horas foram estudadas de cada matéria em cada dia. Isso sendo um LOG individual de cada ciclo de estudos
- [ ] Deve ser possível setar um valor ou desativar as notificações de ajustes de pesos as matérias
- [ ] Deve ser possível atualizar os pesos das matérias (dificuldade e ou importância)
- [ ] Deve ser possível atualizar a quantidade de horas estudas diariamente na hora de ajustar os pesos das matérias
- [ ] Deve ser possível visualizar detalhes das matérias:
    1. Presente em quantos ciclos de estudos?
    2. Quantas horas já estudadas (geral) ?
    3. Quantas horas já estudadas (essa semana) ?
    4. Data de adição da matéria.

2. Regras de negócio

- [ ] Não deve ser possível existir dois usuários com o mesmo email cadastrado
- [ ] Não deve ser possível existir duas matérias com o mesmo nome no mesmo ciclo de estudos
- [ ] O timer para as matérias não pode ultrapassar o limite de horas de estudo semanal da matéria
- [ ] Não deve ser possível criar timers para matérias que já atingiram o limite semanal de estudos
- [ ] Matérias adicionadas no ciclo de estudos que não estão cadastradas no nome do usuário serão criadas automaticamente na criação do ciclo de estudos
- [ ] Não deve ser possível usar as rotas reservadas para a modalidade de checkbox de ciclo de estudos se o usuário configurar para usar os timers e vice-versa
- [ ] Usuários não autenticados não podem criar ciclos de estudos
- [ ] Usuários que não possuem email verificado só podem ter um ciclo de estudos com no máximo 5 matérias
- [ ] Usuários com o email verificado podem ter até 3 ciclos de estudos com um limite de até 15 matérias por ciclo de estudos.
- [ ] Usuários que comprarem o plano PRO podem criar quantos ciclos de estudos quiserem com quantas matérias quiserem.
- [ ] Uma matéria não pode estar abaixo de 2 horas semanais de estudo
- [ ] Ao reiniciar o ciclo de estudos no inicio da semana o sistema vai gerar um log para esse ciclo de estudos antes de atualizar os dados
- [ ] Não deve ser possível ajustar os pesos e horários das matérias enquanto o usuário estiver no meio de um ciclo de estudos (se alguma matéria já possui ao menos 1 hora de estudo registrada no ciclo atual)

3. Requisitos não-funcionais

- [ ] O cadastro será feito com o padrão senha e email
- [ ] As matérias vão possuir um slug que seriá usado para identificação das mesmas
- [ ] O nome das matérias será normalizado durante buscas no sistema