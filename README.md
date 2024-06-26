# AdnanGPT Chat Application

This project is a chat application that integrates with OpenAI to simulate a conversational bot named AdnanGPT. The application is built using React, and it leverages custom hooks for state management and side effects.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Components](#components)

## Installation
1. Clone the repository:
2. Install dependencies:
3. Start the application:

## Usage
- Upon launching the application, you will see the chat interface with a predefined greeting message from AdnanGPT.
- Type a message in the input field and hit the send button to interact with AdnanGPT.
- Use the predefined query buttons in the sidebar to quickly send predefined messages to AdnanGPT.

## File Structure
src/
├── assets/
│ ├── add-30.png
│ ├── bookmark.svg
│ ├── chatgpt.svg
│ ├── chatgptLogo.svg
│ ├── home.svg
│ ├── message.svg
│ ├── rocket.svg
│ ├── send.svg
│ └── user-icon.png
├── hooks/
│ └── useChat.ts
├── App.css
├── App.tsx
└── openai.ts

### useChat.ts
This file contains the custom hook `useChat` that manages the chat logic, including state and side effects.

- **useChat**:
  - Manages the chat messages state.
  - Handles sending messages and updating the state with responses from OpenAI.
  - Scrolls to the most recent message automatically.

### App.tsx
This file contains the main component of the application. It integrates the custom hook and includes the JSX for rendering the sidebar, chat messages, and footer.

#### Components
1. **SideBar**: Contains navigation and predefined query buttons.
2. **ChatMessages**: Renders the chat messages.
3. **ChatFooter**: Handles message input and submission.

### openai.ts
This file contains the function to interact with OpenAI's API.

#### Components
**Sidebar**
- **Description**: Contains navigation buttons and predefined queries.
- **Props**: `handleQuery` - a function to handle predefined query button clicks.

**ChatMessages**
- **Description**: Renders the chat messages.
- **Props**: `messages` - an array of message objects, `msgEnd` - a reference to the last message.

**ChatFooter**
- **Description**: Handles the input and submission of new messages.
- **Props**: `handleSend` - a function to handle sending messages.
