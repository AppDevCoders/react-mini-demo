import React, { useMemo } from "react";

type ContainerProps = {
  orientacion?: "vertical" | "horizontal";
  children?: React.ReactNode; // JSX.Element
};

const Container: React.FC<ContainerProps> = ({
  orientacion = "vertical",
  children,
}) => {
  const style = useMemo(() => {
    return orientacion === "vertical"
      ? "flex flex-col w-full p-[32px] bg-white rounded-[15rem] border-4 border-red-500 text-blue-500"
      : "flex flex-row w-full p-[32px] bg-white rounded-[15rem] border-4 border-red-500 text-blue-500";
  }, [orientacion]);

  const x = <div>hola</div>;

  return (
    <div className={style}>
      {children}
      {x}
    </div>
  );
};

export default Container;
