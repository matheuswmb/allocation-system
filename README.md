# Sistema de Alocação de Salas
### Douglas C. de Araújo, Matheus W. M. de Barros

_Departamento de Ciência da Computação -
Universidade Federal Rural do Rio de Janeiro (UFRRJ)
R. Governador Roberto Silveira S/N - Nova iguaçu - 
Rio de Janeiro - RJ - Brasil_

### 1. Descrição do problema enfrentado
A utilização de salas universitárias possui ampla concorrência ao longo do dia a dia das atividades do Instituto Multidisciplinar da Universidade Federal Rural de Nova Iguaçu, tendo em vista o grande número de disciplinas ofertadas em uma larga escala de cursos existentes para diversos alunos em diferentes turnos disponíveis da universidade. 
Por se tratarem de espaços públicos, as salas universitárias do campus podem ser utilizadas por todos docentes e discentes matriculados, entretanto, é necessário que a mesma não esteja sendo utilizada por ninguém, de maneira formal, no momento requisitado. 
Além disso, para a realização de uma alocação formal de sala, há necessidade de presencialmente ir ao setor responsável
Tendo em vista os aspectos citados anteriormente, repete-se rotineiramente casos onde se encontram choques de horário na utilização de salas, onde determinadas disciplinas se planejam para utilizar as salas de aula em determinados dias e turnos e, ao tentarem utilizá-las de fato, se deparam com as mesmas já sendo utilizadas. Tal problema se deve pela falta de administração tecnológica na alocação das salas, que permite a existência de brechas na dupla alocação de uma mesma sala em um mesmo momento, inviabilizando planejamentos concisos e otimizados na utilização das mesmas.
### 2. Objetivos
O sistema gerenciador de alocação de salas (SGSalas) possui como propósito permitir o gerenciamento da alocação das salas existentes no Instituto Multidisciplinar, de maneira não automatizada, permitindo que o responsável pela gestão de salas da universidade tenha um melhor controle sobre as salas existentes na universidade e seus respectivos intervalos de utilização, podendo visualizar de forma intuitiva se determinada sala já se encontra em uso, durante quais intervalos de tempo, por quem e quais ferramentas educacionais disponíveis possui. Além disso, é importante citar que os discentes e docentes da universidade poderão consultar a alocação das salas existentes na universidade.
Cabe ressaltar que o SGSalas não realizará, em um primeiro momento, a alocação automatizada de salas para o período mediante disciplinas ofertadas, em contraste, permitirá a alocação manual das salas existentes no sistema, as quais serão adicionadas manualmente ao sistema pelo gestor de salas da universidade.
As afirmações tratadas anteriormente se apresentam como o Produto Mínimo Viável (MVP) do sistema, tendo como projetos futuros melhorias nas suas funcionalidades como por exemplo a alocação automatizada das salas existentes e maior controle sobre as características das salas da universidade.
## Descrição de entidades existentes
### 3.1. Sala
As salas se dividem em salas teóricas, auditório ou laboratórios e serão utilizadas nas alocações.
Uma sala teórica possui um código numérico, um bloco limitado entre as opções biblioteca, administração, informática ou multimídia, um andar (obtido automaticamente pelo sistema através do primeiro dígito do código da mesma), uma capacidade de cadeiras/alunos, quantidade de lousa branca, quantidade de quadro negro e quantidade de projetor. 
Um laboratório possui todas as informações já elencadas em uma sala teórica com a adição do total de computadores existentes no mesmo.
Um auditório possui um código numérico, total de cadeiras disponíveis, quantidade de projetores, quantidade de caixas de som.
É necessário que se possa realizar a inclusão de novas salas no sistema com suas respectivas informações de forma opcional, exceto pelo seu código que deverá ser obrigatório e único, além de realizar alterações de informações das salas já cadastradas no sistema ou excluí-las. Além disso, é importante que seja permitida a listagem das salas cadastradas, com seus respectivos códigos, bloco e capacidade de alunos, enquanto permite a visualização das demais informações em um detalhamento da sala. 
Por fim, deve ser possível visualizar quais alocações futuras existem para uma determinada sala, de modo que se torne viável obter maiores informações da utilização de uma sala em específico caso seja da necessidade do usuário.
### 3.2. Reserva
Uma reserva poderá ser feita por qualquer usuário cadastrado no sistema e indicará o desejo de alocar uma sala. A realização de uma reserva deverá ser aprovada por um gestor de sistema para que se torne uma alocação de sala. Para a realização da reserva as seguintes informações deverão ser explicitadas: Tipo de cada sala a qual se deseja reservar, estimativa de pessoas para a sala reservada e o motivo da reserva, data hora do intervalo de utilização da sala, sendo este explicitado em blocos de uma hora nos dias da semana de segunda a sábado. Caso o usuário queira reservar mais de uma sala, novas reservas deverão ser abertas pelo mesmo
Visando um feedback do andamento da reserva, deverá ser possível que o usuário liste suas reservas em andamento, visualizando as situações de suas respectivas reservas. As quais poderão ser: Em aberto, alocado, negado.
Para situações de reserva, as seguintes regras serão consideradas.

#### Em aberto
	A reserva ainda não foi analisada por nenhum gestor do sistema

#### Alocado
        Todas as salas requisitadas na reserva foram aprovadas para alocação após uma análise de um gestor

#### Negado
        Todas as salas requisitadas na reserva foram negadas pelo gestor do sistema.

Para a situação negado, uma justificativa será inserida pelo gestor e apresentada ao requisitante.
É necessário também que seja possível que o usuário exclua a reserva em todo e qualquer status.
### 3.3. Alocação
Uma alocação é a representação da utilização da sala em um intervalo de tempo em uma data específica por determinado docente e seus respectivos discentes.
Uma alocação será criada a partir da aprovação, por um gestor, de uma reserva em aberto no sistema. Cabe ressaltar que uma reserva poderá gerar diversas alocações tendo em vista o número de salas requisitadas na mesma.
Uma alocação possuirá uma sala, uma ou mais datas de alocação as quais deverão ser em um dia da semana de segunda à sábado, um ou mais intervalos de tempo que serão separados em lacunas de 1 (uma) hora sempre em horários fechados (13:00 às 14:00 por exemplo), um usuário cadastrado no sistema responsável pela requisição da alocação, um gestor responsável por aprovar a reserva gerando a alocação, a estimativa de alunos que se pretende levar à sala e o motivo da alocação.
Uma sala não poderá estar alocada mais de uma vez em um mesmo intervalo de tempo em uma mesma data.
Além disso, o sistema deverá permitir que o gestor altere as informações de uma alocação ou exclua uma alocação, onde em ambos os casos é necessário que o mesmo tenha sido o responsável pela aprovação da alocação no sistema. 
Por fim, deve ser possível que o Gestor visualize as alocações existentes ao longo dos dias, podendo realizar filtros na exibição de alocações por código de salas, blocos da sala, tipo da sala (Teórica, Auditório ou laboratório) e horário.
### 3.4. Usuário
Um usuário poderá ser um gestor ou um usuário comum do sistema. O usuário poderá realizar aberturas de reservas de sala no sistema, além de visualizar suas reservas já em aberto com suas respectivas situações e justificativas. O usuário do sistema possuirá um nome, uma matrícula, um e-mail e uma senha alfanumérica de no mínimo 8 caracteres que será utilizada em conjunto com a matrícula para realizar a autenticação no sistema. É importante que o usuário consiga recuperar sua senha por e-mail em caso de esquecimento.
### 3.5. Gestor
O Gestor será um tipo de usuário e mediante a isso terá todas as informações e atribuições que um usuário possui no sistema. Além disso, o gestor será o responsável pela realização da manutenção de salas e aprovação de reservas, pois irá validar as informações relevantes. Tendo em vista o controle do sistema e seus usuários, um Gestor poderá cadastrar, remover e alterar informações de outros usuários no sistema. 
