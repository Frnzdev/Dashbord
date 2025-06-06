import DesktopSideBar from "./DesktopSideBar";
import MobileSideBar from "./MobileSidebar";

export default function SideBar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <DesktopSideBar />
      <MobileSideBar />
    </div>
  );
}
