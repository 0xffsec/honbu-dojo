import { useState, useEffect } from "react";
import socketClient from "socket.io-client";
import ContainersList from './ContainersList'

const url = window.location.protocol + '//' + window.location.hostname;
const socket = socketClient(url+':8080')

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
