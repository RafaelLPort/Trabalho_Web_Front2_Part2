import React from "react";
import { Pesquisa } from "../styles/InputStyles";

class BarraDePesquisa extends React.Component {
  handleChange = (event) => {
    const value = event.target.value;
    this.props.onSearch(value);
  };

  render() {
    return (
      <Pesquisa
        type="text"
        placeholder="Digite o conteúdo..."
        value={this.props.pesquisa}
        onChange={this.handleChange}
      />
    );
  }
}

export default BarraDePesquisa;
