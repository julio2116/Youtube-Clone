import Submenu from "./Submenu";
import styles from "./SideMenu.module.css";

const items = [
  [
    { icon: "src/assets/inicio.svg", title: "Home", link: "/" },
    { icon: "src/assets/short.svg", title: "Shorts" },
    { icon: "src/assets/inscricoes.svg", title: "Subscriptions" },
  ],
  [
    { icon: "src/assets/voce.svg", title: "You" },
    { icon: "src/assets/historico.svg", title: "History" },
  ],
  [
    { header: "Explore" },
    { icon: "src/assets/emAlta.svg", title: "Trending" },
    { icon: "src/assets/musica.svg", title: "Musics" },
    { icon: "src/assets/filmes.svg", title: "Movies" },
    { icon: "src/assets/aoVivo.svg", title: "Live" },
    { icon: "src/assets/jogos.svg", title: "Gaming" },
    { icon: "src/assets/noticias.svg", title: "News" },
    { icon: "src/assets/esportes.svg", title: "Sports" },
    { icon: "src/assets/cursos.svg", title: "Courses" },
    { icon: "src/assets/podcasts.svg", title: "Podcasts" },
  ],
  [
    { header: "More from YouTube" },
    { icon: "src/assets/YTPremium.svg", title: "YouTube Premium" },
    { icon: "src/assets/YTmusic.svg", title: "YouTube Music" },
    { icon: "src/assets/YTkids.svg", title: "YouTube Kids" },
  ],
  [
    { icon: "src/assets/configuracoes.svg", title: "Settings" },
    { icon: "src/assets/histDenunc.svg", title: "Report History" },
    { icon: "src/assets/ajuda.svg", title: "Help" },
    { icon: "src/assets/enviarFeedback.svg", title: "Send Feedback" },
  ],
];

const SideMenu = () => {
  return (
    <>
      <aside>
        <nav className={styles.sideMenu}>
          {items.map((item) => (
            <Submenu items={item} key={item[0].title} />
          ))}
        </nav>
      </aside>
    </>
  );
};
export default SideMenu;
