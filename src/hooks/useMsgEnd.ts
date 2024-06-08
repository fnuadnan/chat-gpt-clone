import { useEffect, useRef } from "react";
import { Message } from "../entities/entities";

const useMsgEnd = (messages: Message[]) => {
  const msgEnd = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return msgEnd;
};

export default useMsgEnd;
