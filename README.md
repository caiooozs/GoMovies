# 🎬 GoMovies

## 🔧 Como rodar o projeto localmente

### 1. Clone o repositório
git clone https://github.com/caiooozs/GoMovies.git
cd seu-repositorio

### 2. Instale as dependências
npm install

### 3. Crie um arquivo .env.local e adicione:
NEXT_PUBLIC_API_URL=https://api.themoviedb.org/3/movie/popular
API_KEY=sua_chave_aqui

### 4. Rode o projeto
npm run dev

#### 🚀 Funcionalidades
- 🔎 Listagem dos filmes mais populares
- 🖼️ Visualização dos pôsteres em cards
- 🧾 Drawer com informações detalhadas (sinopse, nota, data, duração, etc.)
- 📱 Responsivo (funciona em desktop e mobile)


#### 🧰 Tecnologias Utilizadas
- Next.js 14
- TypeScript
- ShadCN/UI (com Tailwind CSS)
- TMDB API (The Movie Database)
- Fetch (pra requisições)
- dotenv (para variáveis de ambiente)



#### 📸 Screenshots
![Macbook Exemple](./gomovies/public/macbookExemple.png)
![Drawer Macbook Exemple](./gomovies/public/macbookDrawerExemple.png)
![iPhone 14 Exemple](./gomovies/public/iphone14PlusExemple.png)
![Drawer iPhone 14 Exemple](./gomovies/public/iphone14PlusDrawerExemple.png)
