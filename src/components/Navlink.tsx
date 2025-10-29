import { Link } from "react-router-dom";

interface NavlinkProps {
  to: string;
  children: React.ReactNode;
}

export const Navlink: React.FC<NavlinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className="font-semibold text-lg block hover:text-cyan-600">
      {children}
    </Link>
  );
};
