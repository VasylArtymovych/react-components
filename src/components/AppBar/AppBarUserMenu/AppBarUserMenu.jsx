import {Box} from '../../Box';
import {FaUserCircle, FaRegBell} from 'react-icons/fa';
import {CgMenuGridR} from 'react-icons/cg';
import { Button } from '../../Button/Button';

export const AppBarUserMenu = ({onToggleModal})=>{
    return (
        <Box display='flex'>
            <Button color='white'>
                <CgMenuGridR size='24'/>
            </Button>
            <Button color='white'>
                <FaRegBell size='24'/>
            </Button>
            <Button color='white' onClick={onToggleModal}>
                <FaUserCircle size='24'/>
            </Button>
        </Box>
    );
};