export default function SortSelector({ options, value, onChange }) {
  return (
    <select
      name="sort"
      value={value}
      onChange={e => {
        onChange(e.target.value);
      }}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
