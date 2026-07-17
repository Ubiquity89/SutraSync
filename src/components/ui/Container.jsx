export default function Container({ children, className = "" }) {
  return (
    <div
      className={`
        max-w-[1200px]
        mx-auto
        px-6
        lg:px-10
        xl:px-14
        ${className}
      `}
    >
      {children}
    </div>
  );
}