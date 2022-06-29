import {MdDelete} from 'react-icons/md';

export const ContactList = ({contacts, deleteContact})=>{
    return(
        <ul>
            {contacts.map(({id, name, number }) => (
                <li key={id}>
                {name}: {number}
                <button 
                type='button'
                name='delete'
                onClick={()=>{deleteContact(id)}}
                >
                    <MdDelete size='16'/>
                </button>
                </li>
            ))}
        </ul>
    )
}