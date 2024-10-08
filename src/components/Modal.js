import React, { Component } from "react";
import { DescButton, ModalS, CloseButton, ModalItems, DescCompleta, DivModal, TitleModal } from "../styles/ModalStyles";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  ModalOpen = () => {
    this.setState({ isOpen: true });
  };

  ModalClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <DivModal>
        <DescButton onClick={this.ModalOpen}>Read More</DescButton>
        {this.state.isOpen && (
          <ModalS>
            <ModalItems>
              <CloseButton onClick={this.ModalClose}>X</CloseButton>
              <TitleModal>{this.props.character.name} - Description</TitleModal>
            </ModalItems>

            <DescCompleta>
              <img
                src={this.props.character.image}
                alt={this.props.character.name}
              />
              <p>Name: {this.props.character.name}</p>
              <p>Status: {this.props.character.status}</p>
              <p>Species: {this.props.character.species}</p>
              <p>Gender: {this.props.character.gender}</p>
              <p>Origin: {this.props.character.origin.name}</p>
              <p>Location: {this.props.character.location.name}</p>
            </DescCompleta>
          </ModalS>
        )}
      </DivModal>
    );
  }
}

export default Modal;
