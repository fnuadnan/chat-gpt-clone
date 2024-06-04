export interface Message {
  text: string;
  isBot: boolean;
}

export interface FormValues {
  message: string;
}

export interface Choice {
  message: {
    content: string;
  };
}

export interface ApiResponse {
  choices: Choice[];
}
