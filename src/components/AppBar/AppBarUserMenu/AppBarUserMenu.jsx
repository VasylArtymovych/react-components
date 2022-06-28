import {Box} from '../../Box';
import {FaUserCircle, FaRegBell} from 'react-icons/fa';
import {CgMenuGridR} from 'react-icons/cg';
import { Button } from '../../Button/Button';

export const AppBarUserMenu = (props)=>{
    return (
        <Box>
            <Button color='white'>
                <CgMenuGridR size='24'/>
            </Button>
            <Button color='white'>
                <FaRegBell size='24'/>
            </Button>
            <Button color='white'>
                <FaUserCircle size='24'/>
            </Button>
            
        </Box>
    );
};