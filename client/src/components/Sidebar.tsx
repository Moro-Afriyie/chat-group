import * as React from "react";
import { Icon } from "@iconify/react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  return (
    <aside className="bg-sidebar-bg h-full flex flex-col  basis-[20.25rem] w-[20.25rem] flex-shrink-0">
      <div className="h-[3.75rem] w-full shadow-header text-lg font-bold px-8 py-4 text-white justify-between flex items-center">
        <h1>Channels</h1>
        <div className="w-8 h-8 bg-chat-bg rounded-lg flex items-center justify-center text-2xl cursor-pointer">
          <Icon icon="material-symbols:add" className="" />
        </div>
      </div>
      <div className="h-full flex-grow border border-white">
        users or channel section
      </div>
      <div className="h-[4.75rem] px-8 py-2  w-full bg-user-bg">hello</div>
    </aside>
  );
};

export default Sidebar;
