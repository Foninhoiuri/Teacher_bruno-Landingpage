const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/instagram-data', async (req, res) => {
    try {
        const targetUrl = 'https://www.instagram.com/teacher.brunofernandes/?hl=pt-br';

        // 1. Faz a requisição simulando um navegador real (User-Agent é essencial)
        const { data: html } = await axios.get(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
            }
        });

        // 2. Carrega o HTML no Cheerio
        const $ = cheerio.load(html);

        // 3. Extração via Meta Tags (Método Estável)
        const profilePic = $('meta[property="og:image"]').attr('content');
        const desc = $('meta[name="description"]').attr('content'); // Ex: "1,596 seguidores, 342 seguindo..."

        let followers = "0";
        let posts = "0";

        if (desc) {
            // Regex para capturar apenas os números
            const followersMatch = desc.match(/([0-9.,kKmM]+)\s+seguidores/);
            // Ajuste para pegar posts corretamente se a string mudar, mas seguindo o padrão
            const postsMatch = desc.match(/([0-9.,kKmM]+)\s+publicações/) || desc.match(/([0-9.,kKmM]+)\s+posts/);

            if (followersMatch) followers = followersMatch[1];
            if (postsMatch) posts = postsMatch[1];
        }

        // 4. Retorna o JSON limpo para o React
        res.json({
            username: "@teacher.brunofernandes",
            name: "Teacher Bruno Fernandes",
            followers: followers !== "0" ? followers : undefined, // Send undefined to keep fallback if fail
            posts: posts !== "0" ? posts : undefined,
            img: profilePic,
            link: targetUrl
        });

    } catch (error) {
        console.error("Erro ao buscar Instagram:", error.message);
        // Não retornar 500 para não quebrar o front, apenas JSON vazio ou erro
        res.status(500).json({ error: "Falha ao carregar dados" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
