export interface Message {
  text: string;
  isBot: boolean;
}

export interface FormValues {
  message: string;
}

// interface of the api response: what we get from the backend api
export interface ApiResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}