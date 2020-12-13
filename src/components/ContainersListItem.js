function ContainersListItem(props) {
  const name = props.container.Names[0].slice(1).replace(('-','_'), ' ');
  const url = window.location.protocol + '//' + window.location.hostname;
  let uris;

  if (props.container.Ports.length > 0)
    uris = props.container.Ports.map(e => `${url}:${e.PublicPort}`);

  return (
    <tr className="hover:bg-gray-900">
      <td className="p-3">
        <p className="capitalize">{name}</p>
        <div className="text-sm text-gray-400">
          {props.container.Image}
        </div>
      </td>
      <td>
        {typeof(uris) == undefined ?
          <p>Not available</p>
        :
          uris.sort().map(u => <a className="block" href={u}>{u}</a>)
        }
      </td>
      <td>{props.container.State}</td>
    </tr>
  );
}

export default ContainersListItem;
