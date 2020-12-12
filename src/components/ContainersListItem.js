import ContainerStateButton from './ContainerStateButton'

function ContainersListItem(props) {
  let url;

  if (props.container.Ports[0] && props.container.Ports[0].PublicPort !== undefined) {
    const port = props.container.Ports[0].PublicPort;
    url = window.location.protocol + '//' + window.location.hostname + ':' + port;
  }

  return (
    <tr className="hover:bg-gray-900">
      <td>
        {props.container.Names[0]}
        <div className="text-sm text-gray-400">
          {props.container.Image}
        </div>
      </td>
      <td>
        {url ? <a href={url}>{url}</a> : <p>Not available</p>}
      </td>
      <td>{props.container.State}</td>
      <td>
        <ContainerStateButton />
      </td>
    </tr>
  );
}

export default ContainersListItem;
