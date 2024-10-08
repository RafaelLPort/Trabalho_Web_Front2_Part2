import React from "react";
import axios from "axios";
import { Name, CharacterCard, Cards, Info, Circle, Status, ImgPerfil } from "../styles/CharacterListStyles";
import Modal from "./Modal";
import BarraDePesquisa from "./BarraPesquisa";
import { AreaPesquisa } from "../styles/InputStyles";
import { SpinnerWrapper, Spinner } from "../styles/SpinnerStyles";

class CharacterList extends React.Component {
  state = {
    characters: [], // Armazena os personagens da API
    pesquisa: "", // Armazena o valor da pesquisa feita na Barra de Pesquisa
    currentPage: 1, // Armazena o número da página atual
    hasMorePages: true, // Controla se há mais páginas a serem carregadas
    isLoading: false, // Controla se os personagens estão sendo carregados
  };

  componentDidMount() {
    this.loadCharacters();
    window.addEventListener("scroll", this.handleScroll); // Aciona a função de rolagem quando a janela é rolada
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll); // Remove a função de rolagem da janela
  }

  // Função para carregar os personagens de uma página específica
  loadCharacters = () => {
    const { currentPage, characters } = this.state;

    this.setState({ isLoading: true });

    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => {
        const newCharacters = res.data.results;
        this.setState({
          characters: [...characters, ...newCharacters], // Adiciona os novos personagens aos que já foram carregados
          hasMorePages: res.data.info.next !== null, // Verifica se tem páginas para serem carregadas
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar os personagens:", error);
        this.setState({ isLoading: false });
      });
  };

  // Função para carregar a próxima página automaticamente
  loadNextPage = () => {
    const { currentPage, hasMorePages } = this.state;

    if (hasMorePages) {
      this.setState({ isLoading: true }); // Ativa o spinner quando for carregar mais itens

      // Define um delay de 5 milisegundos antes de carregar mais itens
      setTimeout(() => {
        this.setState(
          { currentPage: currentPage + 1 },
          this.loadCharacters // Carrega mais itens
        );
      }, 500); // Delay de 5 milisegundos para o spinner ficar aparecendo
    }
  };

  // Função que verifica se o usuário chegou ao final da página
  handleScroll = () => {
    const { isLoading, hasMorePages } = this.state;

    if (isLoading || !hasMorePages) return;

    // Verifica se o usuário chegou ao final da página
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      this.loadNextPage(); //  e Carrega a próxima página
    }
  };

  // Atualiza o state 'pesquisa' com o valor digitado na Barra de Pesquisa
  handleSearch = (value) => {
    this.setState({ pesquisa: value });
  };

  render() {
    const { characters, pesquisa, isLoading } = this.state;

    // Filtra os personagens com base no que foi digitado na Barra de Pesquisa
    const pesquisaCharacters = pesquisa
      ? characters.filter((character) =>
          character.name.toLowerCase().includes(pesquisa.toLowerCase())
        )
      : characters;

    const renderedCharacters = pesquisaCharacters.map((character) => {
      // Define a cor do circulo de status com base no status do personagem 'VERDE = ALIVE, VERMELHO = DEAD, BRANCO = UNKNOWN'
      const circleColor =
        character.status === "Alive"
          ? "#7FFF00"
          : character.status === "Dead"
          ? "#B22222"
          : character.status === "unknown"
          ? "#A9A9A9"
          : "#FFFFFF";

      return (
        <CharacterCard key={character.id}>
          <ImgPerfil src={character.image} alt={character.name} />
          <Name>
            <h2>
              {character.name.length > 21
                ? character.name.slice(0, 21) + "..."
                : character.name}
            </h2>
          </Name>

          <Info>
            <Circle style={{ backgroundColor: circleColor }} />
            <Status>
              {character.status} - {character.species}
            </Status>
          </Info>
          <Modal character={character} />
        </CharacterCard>
      );
    });

    return (
      <>
        {/* Componente da barra de pesquisa, passa os valores e funções como props */}
        <AreaPesquisa>
          <BarraDePesquisa
            pesquisa={this.state.pesquisa}
            onSearch={this.handleSearch}
          />
        </AreaPesquisa>

        {/* Exibe os cards dos personagens */}
        <Cards>{renderedCharacters}</Cards>

        {/* Exibe o spinner de carregamento enquanto estiver carregando mais personagens */}
        {isLoading && (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        )}
      </>
    );
  }
}

export default CharacterList;
