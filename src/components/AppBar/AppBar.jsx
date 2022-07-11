import { AppBarLogo } from './AppBarLogo';
import { AppBarSearchBox } from './AppBarSearchBox/';
import { AppBarUserMenu } from './AppBarUserMenu/';
import { VideoInfo } from './VideoInfo';
import { VideoPlayer } from './VideoPlayer';
import { Box } from '../Box';

export const AppBar = ({ onToggleModal }) => {
  return (
    <div>
      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        // position = 'fixed'
        px="3"
        py="3"
        bg="background"
        color="white"
      >
        <AppBarLogo text="YouTube" />
        <AppBarSearchBox />
        <AppBarUserMenu avatar="" onToggleModal={onToggleModal} />
      </Box>
      <Box
        as="section"
        display="flex"
        alignItems="center"
        justifyContent="center"
        pt="3"
        bg="black"
      >
        <VideoPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </Box>
      <Box pl="190px" bg="background">
        <VideoInfo
          title="You are the best"
          views="777"
          uploadDate="May 17, 2022"
        />
      </Box>
    </div>
  );
};
