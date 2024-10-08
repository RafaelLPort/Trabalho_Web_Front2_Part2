# Rick and Morty API

![Logo do Projeto](src/assets/imgs/ImagemBanner.png)

## Project

This project is a React application that consumes the public **Rick and Morty** API to display characters from the show in the form of cards. The page allows filtering characters by name and exploring an infinite list, which loads more characters as the user scrolls down.

## Features

- **Character Listing**: Displays characters from the Rick and Morty series with their name, image, and other relevant information.
- **Search Filter**: Allows searching for characters by name, dynamically updating the list as the user types.
- **Infinite Scrolling**: More characters are automatically loaded as the user scrolls down the page.
- **Detailed Modal**: Clicking on a character card opens a modal with additional details about the character.
- **Loading Spinner**: A green spinner (#7FFF00) is displayed while the data is loading.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Axios**: Used to make HTTP requests to the Rick and Morty API.
- **CSS/Styled-components**: Used for styling the components.
- **React Infinite Scroller**: For implementing infinite scrolling for the character list.
- **React Modal**: To display character details in a modal window.

## Installation

### Prerequisites

- Node.js installed on your machine.
- **npm** or **yarn** package manager.

### Installation Steps

Follow the steps below to set up the project on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RafaelLPort/Trabalho_Web_Front2_Part2
   ```

2. **Install dependencies**:
   ```bash
   npm install axios styled-components
   ```

3. **Start the application**:
   ```bash
   npm run start
   ```

   The project will be available at `http://localhost:3000`.

## Usage

1. When accessing the homepage, characters will be loaded and displayed in card form.
2. Use the search bar to filter characters by name.
3. Scroll down the page to load more characters automatically.
4. Click on any card to view additional character details in a modal.

## Project Structure

The basic project structure is:

```bash
/src
    /assets
        # Folder for images
    /Components
        Banner.js               # Banner component
        BarraPesquisa.js        # Search bar component for character search
        Body.js                 # Main body component of the page
        CharacterList.js        # Character list with infinite scrolling
        Header.js               # Page header
        Modal.js                # Modal to display character details
    /Styles
        BodyStyles.js           # Styles for Body.js
        CharacterListStyles.js  # Styles for the character list
        HeaderStyles.js         # Styles for the header
        InputStyles.js          # Styles for the search bar
        ModalStyles.js          # Styles for the modal
        SpinnerStyles.js        # Styles for the loading spinner
    /App.css
    /App.js
```

## API

We are using the [Rick and Morty API](https://rickandmortyapi.com/), which provides data about the characters, such as name, image, status, species, and origin.

## Contributions

Contributions are welcome! To contribute to the project, follow these steps:

1. Fork the repository.
2. Create a branch for your feature (`git checkout -b feature/new-feature`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the remote repository (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

The MIT License (MIT)
Copyright © 2024 <copyright holders> <Rafael Portugal, Lucas Picanço e Marco Decco>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact

For questions or comments, please contact [marcodecco80@gmail.com ; rafaelportugald.e@gmail.com ; lucasferreira3254@outlook.com].
