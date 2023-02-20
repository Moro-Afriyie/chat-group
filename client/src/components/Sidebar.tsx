import * as React from "react";
import { Icon } from "@iconify/react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  return (
    <aside className="bg-sidebar-bg overflow-y-auto text-white h-full flex flex-col  basis-[20.25rem] w-[20.25rem] flex-shrink-0">
      <div className="h-[3.75rem] w-full shadow-header text-lg font-bold px-[1.25rem] py-4 text-white justify-between flex items-center">
        <h1>Channels</h1>
        <div className="w-8 h-8 bg-chat-bg rounded-lg flex items-center justify-center text-2xl cursor-pointer">
          <Icon icon="material-symbols:add" className="" />
        </div>
      </div>
      <div className="h-full px-[1.25rem] py-4 flex-grow">
        <div className="relative mt-2 mb-8">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon icon="ic:outline-search" className="text-2xl" />
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 h-12 pl-10 text-sm text-light-grey text-white border-none bg-input-bg rounded-lg focus:border-none focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search"
            required
          />
        </div>
        {/**channel names */}
        <div className="flex flex-col gap-5">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="uppercase flex gap-4 cursor-pointer text-lg font-bold items-center"
            >
              <div className="avatar bg-chat-bg rounded-lg w-[2.625rem] h-[2.625rem] flex items-center justify-center">
                FE
              </div>
              <p>Front-end developers</p>
            </div>
          ))}
        </div>
        {/*End channel names **/}
      </div>
      <div className="h-[4.75rem] px-[1.25rem] py-2 flex items-center justify-between  w-full bg-user-bg">
        <div></div>
        <Icon
          icon="ic:sharp-keyboard-arrow-down"
          className="text-3xl cursor-pointer"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
