import {AiOutlineDownload} from 'react-icons/ai';
import {BiLike} from 'react-icons/bi';
import {BiDislike} from 'react-icons/bi';
import {MdOutlineContentCut} from 'react-icons/md';
import { ActionButton } from '../ActionButton';
import { Box } from '../../Box';

export const ActionBar = (props)=>{
    return(
        <Box bg='background'  
        width='250px' 
        display='flex'>
            <ActionButton>
                <AiOutlineDownload size='24'/>
                Download
            </ActionButton>
            <ActionButton>
                <BiLike size='24'/>
                Like
            </ActionButton>
            <ActionButton>
                <BiDislike size='24'/>
                Dislike
            </ActionButton>
            <ActionButton>
                <MdOutlineContentCut size='24'/>
                Clip
            </ActionButton>
        </Box>
    )
}