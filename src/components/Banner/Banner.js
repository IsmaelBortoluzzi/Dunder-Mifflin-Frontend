import './Banner.css';

const Banner = (props) => {
  return (
    <header className="banner">
      <img src="/images/imagens/banner.png" height={props.height} alt="Banner principal da página" />
    </header>
  );
}

export default Banner;