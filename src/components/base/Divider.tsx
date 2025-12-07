type DividerPropsType = {
  width: string | number;
  height?: number;
  className?: string;
};
const Divider = ({ width, height = 1, className }: DividerPropsType) => (
  <div style={{ width, height }} className={`bg-white ${className}`}></div>
);

export default Divider;
