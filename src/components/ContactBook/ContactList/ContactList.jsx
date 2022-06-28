export const ContactList = ({contacts})=>{
    return(
        <ul>
            {contacts.map(({name, id}) => (
                <li key={id}>{name}</li>
            ))}
        </ul>
    )
}