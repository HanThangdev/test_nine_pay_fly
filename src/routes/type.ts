interface IBaseCompProps {
  isAdmin?: boolean;
  children?: React.ReactNode;
}

interface IBaseComp<P> extends React.FC<P> {
  defaultProps?: Partial<P>;
}
