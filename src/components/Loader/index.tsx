import { Spinner } from './Loader.styles';
import { LoaderProps } from '../../interfaces';

const Loader = ({ size, loaderWidth, className, margin }: LoaderProps) => (
  <Spinner
    className={className}
    size={size}
    loaderWidth={loaderWidth}
    margin={margin}
  />
);

export default Loader;
