# 🖤🤍 Furia Chat

**Furia Chat** é um projeto minimalista e moderno focado na comunicação entre fãs da equipe **Furia** no cenário de **CS2**.  
O site permite que usuários conversem em tempo real e acompanhem informações atualizadas sobre os próximos jogos da Furia.

## 📋 Funcionalidades

- Cadastro e login de usuários
- Chat público em tempo real (WebSocket)
- Avatar padrão exibido ao lado das mensagens
- Área dedicada para mostrar os próximos jogos da Furia
- Botão para ver todos os jogos da Furia (redirecionando para HLTV)
- Layout responsivo (mobile e desktop)
- Interface minimalista e elegante (preto e branco)

## 🎨 Tecnologias utilizadas

**Frontend:**
- [React.js](https://reactjs.org/) ou [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Socket.io Client](https://socket.io/)

**Backend:**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Socket.io Server](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)

**Hospedagem sugerida:**
- Frontend: [Vercel](https://vercel.com/)
- Backend: [Railway](https://railway.app/), [Render](https://render.com/) ou [Fly.io](https://fly.io/)

## 📂 Estrutura de Pastas

```bash
furia-chat/
├── frontend/
│   ├── components/
│   │   ├── ChatBox.jsx
│   │   ├── Message.jsx
│   │   ├── Header.jsx
│   │   └── MatchInfo.jsx
│   ├── pages/
│   │   ├── index.jsx
│   │   ├── login.jsx
│   │   └── register.jsx
│   ├── services/
│   │   ├── api.js
│   │   └── socket.js
│   ├── assets/
│   │   └── default-avatar.png
│   ├── styles/
│   │   └── globals.css
│   └── package.json
├── backend/
│   ├── controllers/
│   │   └── chatController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── server.js
│   └── package.json
└── README.md

git clone https://github.com/seu-usuario/furia-chat.git

🌐 Link para ver todos os jogos da Furia
Se não for possível integrar via API, o botão "Todos os Jogos" redirecionará para:

🔗 https://www.hltv.org/team/8297/furia#tab-matchesBox

✨ Futuras melhorias
Implementação de chats privados

Notificações push antes dos jogos

Integração com login social (Google/Discord)

Sistema de reputação para usuários ativos

🖤 Projeto dedicado à comunidade da Furia no CS2
Vamos juntos construir uma comunidade ainda mais forte!
#Furia #CS2 #FuriaChat
