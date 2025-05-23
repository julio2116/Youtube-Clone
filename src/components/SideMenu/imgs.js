import inicio from"../../assets/inicio.svg";
import short from"../../assets/short.svg";
import inscricoes from"../../assets/inscricoes.svg";
import voce from"../../assets/voce.svg";
import historico from"../../assets/historico.svg";
import emAlta from"../../assets/emAlta.svg";
import musica from"../../assets/musica.svg";
import filmes from"../../assets/filmes.svg";
import aoVivo from"../../assets/aoVivo.svg";
import jogos from"../../assets/jogos.svg";
import noticias from"../../assets/noticias.svg";
import esportes from"../../assets/esportes.svg";
import cursos from"../../assets/cursos.svg";
import podcasts from"../../assets/podcasts.svg";
import YTPremium from"../../assets/YTpremium.svg";
import YTmusic from"../../assets/YTmusic.svg";
import YTkids from"../../assets/YTkids.svg";
import configuracoes from"../../assets/configuracoes.svg";
import histDenunc from"../../assets/histDenunc.svg";
import ajuda from"../../assets/ajuda.svg";
import enviarFeedback from"../../assets/enviarFeedback.svg";


const items = [
  [
    { icon: inicio, title: "Home", link: "/" },
    { icon: short, title: "Shorts" },
    { icon: inscricoes, title: "Subscriptions" },
  ],
  [
    { icon: voce, title: "You" },
    { icon: historico, title: "History" },
  ],
  [
    { header: "Explore" },
    { icon: emAlta, title: "Trending" },
    { icon: musica, title: "Musics" },
    { icon: filmes, title: "Movies" },
    { icon: aoVivo, title: "Live" },
    { icon: jogos, title: "Gaming" },
    { icon: noticias, title: "News" },
    { icon: esportes, title: "Sports" },
    { icon: cursos, title: "Courses" },
    { icon: podcasts, title: "Podcasts" },
  ],
  [
    { header: "More from YouTube" },
    { icon: YTPremium, title: "YouTube Premium" },
    { icon: YTmusic, title: "YouTube Music" },
    { icon: YTkids, title: "YouTube Kids" },
  ],
  [
    { icon: configuracoes, title: "Settings" },
    { icon: histDenunc, title: "Report History" },
    { icon: ajuda, title: "Help" },
    { icon: enviarFeedback, title: "Send Feedback" },
  ],
];
export {
    items
}