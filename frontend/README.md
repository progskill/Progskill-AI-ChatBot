# Progskill AI Chat Frontend

The frontend application for the Progskill AI Chat Assistant, built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and responsive UI design
- 💅 Styled with Tailwind CSS
- 🔄 Real-time chat interface
- 📱 Mobile-friendly layout
- ⚡ Fast development with Vite
- 🎭 Beautiful animations and transitions
- 🎯 Auto-focusing input field
- 📜 Automatic message scrolling
- 🔵 Loading indicators
- 🎪 Empty state handling

## Tech Stack

- **React 18** - Modern UI development
- **Vite** - Next Generation Frontend Tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful hand-crafted SVG icons
- **Headless UI** - Completely unstyled, fully accessible UI components

## Component Structure

### `Chat.jsx`
The main chat component that handles:
- Message state management
- API communication
- Input handling
- Auto-scrolling
- Loading states

### `ChatMessage.jsx`
Individual message component featuring:
- User/AI message differentiation
- Message bubbles
- Icons for each participant
- Formatted text display

## Getting Started

1. Install dependencies:
```bash
cd frontend
yarn
```

2. Start the development server:
```bash
yarn dev
```

3. Build for production:
```bash
yarn build
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier

## Environment Setup

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3000
```

## Styling

The project uses Tailwind CSS with custom configuration:

- Custom animations
- Extended color palette
- Typography plugin
- Custom component classes

### Key UI Features

1. **Chat Container**
   - Full-height layout
   - Gradient background
   - Centered content

2. **Message Bubbles**
   - Different colors for user/AI
   - Rounded corners
   - Smooth animations
   - Icon indicators

3. **Input Area**
   - Large, centered input field
   - Floating send button
   - Focus states
   - Loading states

4. **Header**
   - Centered title
   - Shadow effect
   - Branded colors

## Development Guidelines

1. **Component Organization**
   - Keep components in `src/components`
   - Use meaningful component names
   - Split large components into smaller ones

2. **State Management**
   - Use React hooks for state
   - Keep state close to where it's used
   - Implement proper error handling

3. **Styling**
   - Use Tailwind utility classes
   - Follow mobile-first approach
   - Maintain consistent spacing

4. **Performance**
   - Implement proper memo-ization
   - Use lazy loading where appropriate
   - Optimize re-renders

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the existing code style
2. Write meaningful commit messages
3. Test your changes thoroughly
4. Update documentation as needed

## Related

- [Main Project Repository](https://github.com/progskill/Progskill-AI-ChatBot)
- [Backend Repository](../backend)

## Support

For support, please open an issue in the main repository or contact the maintainers.
