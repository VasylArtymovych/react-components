export default function Table({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, value }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
