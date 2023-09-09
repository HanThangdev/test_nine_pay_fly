import classNames from 'classnames';

interface LoaderCustomerProps {
  className?: string;
}

const Loader: React.FC<LoaderCustomerProps> = ({className}) => {
  return (
    <div className={classNames(`flex h-screen items-center justify-center bg-white ${className}`)}>
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default Loader;
