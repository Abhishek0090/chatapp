import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState(null);

  const fetchChats = async () => {
    const { data } = await axios.get("http://localhost:5000/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  console.log(chats);

  return <div>Heloo</div>;
};

export default Chat;
