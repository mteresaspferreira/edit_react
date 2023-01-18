/**
 * Exercicio 07 Extra: Movie app
 *
 * Cria o design presente no ficheiro do Figma em React:
 *  - Exercicio Movies App.fig
 *  - Online: https://www.figma.com/file/bhA7BXARgzvakuhIGSI19f/Exercicio---Movies-App?node-id=0%3A1&t=EdPH48zjAFdDNNHX-1
 *
 * Recursos:
 *  - Aplicações: Figma (https://www.figma.com)
 *  - Fonts: Poppins - https://fonts.google.com/specimen/Poppins?query=Poppins#styles
 */

import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

//user name
const userName = "Teresa";

function App() {
  return (
    <div className="App">
      <Header userName={userName} />
      <Search />
    </div>
  );
}

export default App;
