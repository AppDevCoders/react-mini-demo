import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export enum Orientations {
  vertical = "vertical",
  horizontal = "horizontal",
}

type ContainerProps = {
  label: string;
  orientation?: Orientations;
  children?: React.ReactNode; // JSX.Element
};

export const Container: React.FC<ContainerProps> = ({
  label = "Title",
  orientation = Orientations.vertical,
  children,
}) => {
  const labelElement = useMemo(() => {
    return (
      <div className="flex flex-row w-full justify-center text-xl">{label}</div>
    );
  }, [label]);

  return (
    <div
      className={
        "flex flex-col w-full p-[32px] gap-2 bg-white rounded-[2rem] border-4 border-red-500 text-blue-500"
      }
    >
      {labelElement}
      <div
        className={twMerge(
          "flex w-full gap-2",
          orientation === "vertical" ? "flex-col" : "flex-row"
        )}
      >
        {children}
      </div>
    </div>
  );
};
