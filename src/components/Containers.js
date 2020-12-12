import { useState, useEffect } from "react";
import socketClient from "socket.io-client";
import ContainersList from './ContainersList'

const socket = socketClient('http://127.0.0.1:8080')

function Containers() {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    socket.on('connect', () => { socket.emit('list'); });
    socket.on('containers', (data) => { setContainers(data); });
  }, []);

  if (containers && containers.length > 0)
    return <ContainersList containers={containers} />;

  return <p>No containers available.</p>
}

export default Containers;
