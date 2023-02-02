import * as React from "react";
interface IHeaderProps {
  channelName: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ channelName }) => {
  return (
    <header className="h-[3.75rem] px-16 flex items-center font-bold text-white uppercase text-lg shadow-header">
      <h1>{channelName}</h1>
    </header>
  );
};

export default Header;
