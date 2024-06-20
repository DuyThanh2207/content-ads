# Node Version: 18.15.0 or higher

# Content ADS

This is a simple web application built with React.js for creating and displaying ads using a drag-and-drop interface.

## Features

- Admin page to create ads with drag-and-drop interface.
- Three components: Paragraph, Button and Image Upload.
- Editable text for Paragraph, editable label and alert message for Button and editable image for Image Upload.
- Consumer page to display the created ads.
- Inline text editing for components.
- Implement undo and redo functionality.
- Export and import functionality for saving and loading the page layout.

## Setup and Run

1. Clone the repository:

   ```sh
   git clone https://github.com/DuyThanh2207/content-ads.git
   cd content-ads
   ```

2. Install dependencies:

   ```sh
   pnpm install / yarn install
   ```

3. Run the development server:

   ```sh
   pnpm dev / yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

## File Structure

- `components/`: Contains reusable React components.
- `pages/`: Contains pages.
- `contexts/`: Contains contexts.
- `hooks/`: Contains custom hooks.
- `routers/`: Contains router config.
- `types/`: Contains types.
- `utils/`: Contains utils.
- `README.md`: Project documentation.

## License

MIT License.
