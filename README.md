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
