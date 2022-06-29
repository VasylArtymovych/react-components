export const FilterField = ({value, onChange}) => (
    <label>
        Filter by Name:
        <input type='text' name='filter' value={value} onChange={onChange}/>
    </label>
)