export const Button = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => {
  return <div className={`ui:text-amber-300 ${className}`}>{children}</div>;
};
