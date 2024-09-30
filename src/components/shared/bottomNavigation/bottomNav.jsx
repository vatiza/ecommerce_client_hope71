import { Tab, Tabs } from "@nextui-org/react";
import { GalleryIcon } from "../../../assets/icons/GalleryIcon";
import { MusicIcon } from "../../../assets/icons/MusicIcon";
import { VideoIcon } from "../../../assets/icons/VideoIcon";

const BottomNavigation = () => {
  return (
    <div className="flex w-full flex-col ">
    <Tabs aria-label="Options" color="primary" variant="bordered">
      <Tab
        key="photos"
        title={
          <div className="flex items-center space-x-2">
            <GalleryIcon />
            <span>Photos</span>
          </div>
        }
      />
      <Tab
        key="music"
        title={
          <div className="flex items-center space-x-2">
            <MusicIcon />
            <span>Music</span>
          </div>
        }
      />
      <Tab
        key="videos"
        title={
          <div className="flex items-center space-x-2">
            <VideoIcon />
            <span>Videos</span>
          </div>
        }
      />
    </Tabs>
  </div>
  
  );
};

export default BottomNavigation;
