import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return <header className="h-[3.75rem] shadow-header">Header</header>;
};

export default Header;
