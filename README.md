# YouTube Clone

Este é um projeto clone do YouTube desenvolvido com React, focando em replicar as principais funcionalidades da plataforma de vídeos mais popular do mundo.

🔗 **Deploy:** [Clique aqui para acessar](https://youtube-clone-murex-chi.vercel.app/)

## 🚀 Funcionalidades Atuais

- Visualização de vídeos
- Informações do canal
- Contagem de visualizações, likes e inscritos
- Interface similar ao YouTube
- Formatação de números para melhor legibilidade

## 🛠️ Tecnologias Utilizadas

- React
- React Router
- YouTube Data API v3
- CSS Modules

## 🔄 Melhorias Planejadas

### Refatoração Necessária

1. **Camada de Serviços**
   - Criar um serviço dedicado para chamadas à API do YouTube
   - Implementar melhor tratamento de erros nas requisições
   - Centralizar a lógica de fetch em um único lugar

2. **Gerenciamento de Estado**
   - Implementar um gerenciador de estado global (Redux/Context API)
   - Melhorar o cache de dados para evitar requisições desnecessárias

3. **Performance**
   - Otimizar as chamadas à API
   - Implementar lazy loading para componentes
   - Melhorar a performance de renderização

4. **Segurança**
   - Mover a chave da API para variáveis de ambiente
   - Implementar rate limiting para chamadas à API

### Novas Funcionalidades Futuras

- Playlists
- Histórico de visualização

## 🚨 Pontos de Atenção

- O código atual de fetch nos componentes VideoInfo e UseSearchResult precisa ser refatorado para seguir melhores práticas
- Alguns componentes precisam de melhor tratamento de estados de loading e erro
- A chave da API está exposta no código e precisa ser movida para um ambiente seguro

## 🔧 Instalação e Uso

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

## ⚠️ Requisitos

- Node.js
- NPM ou Yarn
- Chave de API do YouTube Data API v3

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⚡ Desenvolvido com esforço e dedicação!
