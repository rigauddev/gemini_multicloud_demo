# Gemini Multicloud Web Demo

Este é um demo de integração multicloud utilizando a API do **Gemini** (Google AI) em um **app React** hospedado no **Azure** com uma função para proxy seguro.

## Funcionalidades

- Interface React leve e responsiva
- Envio de prompt para o Gemini API via função proxy
- Deploy fácil no **Azure Static Web Apps** ou **App Service**

## Tecnologias Utilizadas

- React.js
- Azure Functions (Node.js)
- Gemini API (Google AI)

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Execute o app React localmente:

```bash
npm run dev
```

3. Configure a Azure Function (consulte o código no diretório `/api/gemini-proxy`).

## Deploy no Azure

1. Crie um **Static Web App** ou **App Service** no Azure.
2. Crie uma **Function App** com Node.js 18+.
3. Configure a variável de ambiente `GEMINI_API_KEY` com sua chave da Google AI.

## Sugestões de Extensão

- Suporte a múltiplos modelos de IA (Gemini, GPT, Claude)
- Modo de chat com histórico de mensagens
- Entrada multimodal (voz/imagens)

## ✅ Testes Pós-Deploy

Após publicar o backend (Azure Function) e o frontend (App Service), siga os passos abaixo para validar se tudo está funcionando corretamente:

---

### 🔹 1. Testar a Azure Function (API)

**URL pública esperada:**

```
https://<nome-da-function>.azurewebsites.net/api/chatFunction
```

#### 🔸 Testar com `curl`:
```bash
curl -X POST https://<NOME_DA_FUNCTION>.azurewebsites.net/api/chatFunction \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Olá, Gemini!"}'
```

#### 🔸 Testar com Postman ou Insomnia:
- Método: `POST`
- URL: igual à de cima
- Body (raw / JSON):
```json
{
  "prompt": "Conte uma curiosidade sobre IA"
}
```

#### ✅ Esperado:
Uma resposta com conteúdo gerado pela API do Gemini, como:
```json
{
  "response": "Você sabia que os primeiros modelos de IA foram criados nos anos 1950?"
}
```

---

### 🔹 2. Testar o Frontend (App Web)

**URL pública esperada:**

```
https://<nome-do-app>.azurewebsites.net
```

#### 🔸 Acesse pelo navegador:
- Verifique se a interface está carregando corretamente
- Insira um prompt e envie
- Verifique se a resposta do Gemini aparece

#### 🔸 Verifique as chamadas da API:
- Abra o DevTools do navegador (F12)
- Aba "Network" → veja a chamada POST para a Azure Function
- Status esperado: `200 OK`

---

### 🔹 3. Monitoramento de Logs

#### 🔸 Azure Portal:
- Vá para sua Function App
- Clique em **Monitoramento → Application Insights** para ver métricas e logs

#### 🔸 Linha de comando (streaming de logs):
```bash
func azure functionapp logstream gemini-multicloud-demo
```

---

### 🛠️ Possíveis problemas e soluções

| Problema                                     | Solução                                                                 |
|----------------------------------------------|-------------------------------------------------------------------------|
| Erro 401 Unauthorized na função              | Verifique se o `authLevel` da function está como `"anonymous"`         |
| Erro 500 na função                           | Veja os logs da função (logstream ou Application Insights)             |
| Chamada da função bloqueada no frontend      | Verifique CORS nas configurações da Function App                       |
| Chave da API inválida                        | Confira a variável `GEMINI_API_KEY` nas configurações do Azure         |
| Resposta vazia ou lenta                      | Verifique os logs para erros na chamada da API Gemini                  |

---