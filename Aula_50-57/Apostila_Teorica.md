# Apostila Teórica: Web Services, REST e JSON (Aulas 57-63)

**Projeto base:** Aetheria Engine & ArenaCraft

Chegamos a um momento crucial da arquitetura de sistemas. Até agora, nossos Guerreiros e Magos batalhavam e guardavam suas informações apenas na memória RAM do servidor local. Mas como um jogador no celular, usando Kotlin ou Swift, consegue ver o ranking (Leaderboard) que nós processamos no nosso servidor Node.js/TypeScript? É aqui que entram os **Web Services**, o protocolo **HTTP**, a arquitetura **REST** e o formato **JSON**.

---

## 1. Web Services e o Ciclo HTTP

### 1.1 O que é um Web Service? (A Metáfora do Garçom)
Imagine um restaurante de alta gastronomia. Você (o **Cliente** ou Front-End) senta na mesa e deseja um prato específico. Você é estritamente proibido de entrar na cozinha para preparar sua própria comida. Em vez disso, você chama o **Garçom**, faz o seu pedido através de um cardápio padronizado, e o Garçom vai até a cozinha (o **Back-End / Banco de Dados**), pega o prato finalizado e o traz até a sua mesa.

Na engenharia de software, um **Web Service** (Serviço Web) ou **API** (Application Programming Interface) é esse Garçom. Trata-se de uma ponte agnóstica de comunicação pela internet.
- **Agnóstico de Plataforma:** O servidor não liga se quem fez o pedido foi uma geladeira inteligente, um aplicativo de iPhone ou um site em React. O Web Service garante que todos se entendam usando uma linguagem neutra.

### 1.2 O Ciclo Requisição e Resposta (Request / Response)
A comunicação na web moderna acontece através do protocolo **HTTP**. Ele é baseado em um modelo estrito de _Request_ e _Response_.

**A Requisição (O Pedido do Cliente):**
Quando o aplicativo móvel do Aetheria quer os dados de um jogador, ele envia um pacote de texto bruto pela rede (Headers):
```http
GET /jogadores/arthas HTTP/1.1
Host: api.aetheria.com
Authorization: Bearer xyz123
Accept: application/json
```
*(Repare que o cliente está dizendo: "Quero pegar (GET) o jogador arthas, este é meu token de segurança, e aceito receber a resposta exclusivamente em formato JSON").*

**A Resposta (A Entrega do Servidor):**
O Node.js processa a regra de negócio e devolve outro pacote de texto:
```http
HTTP/1.1 200 OK
Content-Type: application/json

{ "level": 50, "classe": "Mago" }
```

---

## 2. A Arquitetura REST e a Semântica Web

Para organizar esses pedidos, não podemos criar URLs caóticas. Em 2000, Roy Fielding cunhou o termo **REST** (Representational State Transfer). Não é um código nem uma biblioteca, mas sim um **estilo arquitetural** rigoroso. APIs que seguem essas regras são chamadas de **RESTful**.

### 2.1 Verbos HTTP (A Ação)
No REST, a URL **nunca** deve conter verbos. A ação que queremos executar no Banco de Dados (CRUD) é delegada aos métodos HTTP (Verbos).

| Método HTTP | Ação (CRUD) | Descrição no Aetheria Engine |
| :--- | :--- | :--- |
| **GET** | Read (Ler) | Busca dados sem alterar nada (Ex: Ver o ranking). É uma operação *idempotente* (fazer 1.000 vezes dá o mesmo resultado). |
| **POST** | Create (Criar) | Cria um novo recurso no servidor (Ex: Registrar um novo jogador). Não é idempotente. |
| **PUT** | Update (Atualização Completa) | Substitui um recurso inteiro. Se você enviar um char sem a classe, a classe é apagada. |
| **PATCH** | Update (Atualização Parcial) | Modifica apenas um pedaço do recurso (Ex: Apenas decrementar o HP após sofrer dano). |
| **DELETE** | Delete (Deletar) | Remove um recurso do servidor (Ex: Excluir um item do inventário). |

### 2.2 URLs Semânticas (O Alvo)
A URL deve conter apenas **Substantivos** (geralmente no plural).

- ❌ **Errado (RPC):** `GET /pegarMembrosDaGuilda15` ou `POST /criarNovoJogador`
- ✅ **Correto (REST):** `GET /guildas/15/membros` ou `POST /jogadores`

### 2.3 Status Codes (O Destino do Pedido)
O servidor sempre responde com um número de 3 dígitos (Status Code) para o cliente saber o que aconteceu sem precisar ler o corpo da mensagem:
- **2xx (Sucesso):** Tudo ocorreu bem. (Ex: `200 OK`, `201 Created`).
- **3xx (Redirecionamento):** O recurso mudou de lugar ou deve ser lido do cache.
- **4xx (Erro do Cliente):** O Front-End fez besteira. (Ex: `400 Bad Request` por enviar dados incorretos, `401 Unauthorized` por falta de login, `404 Not Found` por buscar um jogador que não existe).
- **5xx (Erro do Servidor):** O Front-End fez o pedido certo, mas o código do servidor "crashou". (Ex: `500 Internal Server Error`).

---

## 3. O Formato Universal: JSON

O grande problema arquitetural: Como um servidor TypeScript envia uma Guilda inteira pela internet para um celular Kotlin se eles não compartilham a mesma memória?
Eles precisam de um **Idioma Textual Neutro**.

### 3.1 A Guerra dos Formatos (XML vs YAML vs JSON)
- **XML:** Linguagem de marcação cheia de tags (`<jogador><nome>Arthas</nome></jogador>`). Extremamente pesada e verbosa, consumia muita banda de internet.
- **YAML:** Focado em leitura humana usando indentação e quebras de linha. Excelente para arquivos de configuração DevOps (Docker), mas péssimo para consumo veloz no navegador.
- **JSON (JavaScript Object Notation):** Venceu a guerra porque é nativo dos navegadores de internet. Ele uniu o melhor dos dois mundos: leveza extrema no tráfego de rede e leitura humana decente.

### 3.2 As Regras Rígidas do JSON
Apesar do nome sugerir um objeto JavaScript, o JSON é **apenas um texto (string) gigante**. Para garantir que nenhuma máquina se confunda ao ler esse texto, as regras sintáticas não permitem exceções:

1. **Aspas Duplas Obrigatórias:** As chaves devem estar sempre entre aspas duplas (Ex: `"nome": "Arthas"`).
2. **Tipos Primitivos Estritos:** Suporta apenas `String`, `Number`, `Boolean`, `Null`, `Array` e `Object`.
3. **Proibições Fatais:** É terminantemente proibido incluir métodos (funções), `undefined`, aspas simples, comentários, ou deixar "Trailing Commas" (uma vírgula sobrando no último item). Uma mera vírgula a mais corrompe o arquivo inteiro.

### 3.3 Estruturas Avançadas
O JSON suporta aninhamento profundo (Composição). Podemos ter um objeto dentro do outro, ou **Coleções (Arrays)**.

```json
{
  "totalRegistros": 2,
  "paginaAtual": 1,
  "dados": [
    { "nick": "Faker", "status": { "hp": 100, "vivo": true } },
    { "nick": "Jukes", "status": { "hp": 0, "vivo": false } }
  ]
}
```
*(No exemplo acima, envelopamos a resposta em metadados de paginação antes de devolver o Array de dados, uma prática comum em arquiteturas REST).*

---

## 4. Serialização no Node.js e Segurança

### 4.1 O Embarque (Stringify)
Para despachar um Objeto que vive na memória do servidor, nós o serializamos usando a função nativa `JSON.stringify()`. Esse processo extirpa todas as funções e valida as aspas, transformando o dado em uma string pronta para trafegar na rede.

### 4.2 O Desembarque e o Caos (Parse + Try/Catch)
Quando recebemos um texto do cliente (ou lemos de um arquivo `database.json` via módulo `fs`), usamos `JSON.parse()` para reviver a string de volta a um Objeto TypeScript utilizável.

**O Risco de Segurança:** O método `JSON.parse()` é a operação mais perigosa de uma API. Se o cliente enviar um texto malformado (ex: faltando uma chave), o Node.js lançará uma exceção `SyntaxError` fatal que **derrubará todo o servidor** (Crash), desconectando todos os outros jogadores simultâneos.

Por causa disso, é uma lei imutável na engenharia de Back-End: **Toda operação de leitura/conversão de dados externos (JSON) deve, obrigatoriamente, ser blindada dentro de um bloco `try/catch`.** Assim, se o cliente enviar "lixo", o servidor intercepta o erro, não morre, e responde elegantemente com um Status Code `400 Bad Request`.
