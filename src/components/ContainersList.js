import ContainersListItem from './ContainersListItem'

function ContainersList(props) {
  return (
    <div className="bg-gray-800 shadow-2xl overflow-hidden p-5 rounded">
    <table className="min-w-full">
    <thead className="text-xs uppercase tracking-wider text-gray-400 font-bold">
      <tr>
        <td>Application</td>
        <td>URL</td>
        <td>State</td>
        <td>Actions</td>
      </tr>
    </thead>
    <tbody className="text-sm">
      {props.containers.map((container, i) => (
        <ContainersListItem container={container} key={i}/>
      ))}
    </tbody>
    </table>
    </div>
  );
}

export default ContainersList;
