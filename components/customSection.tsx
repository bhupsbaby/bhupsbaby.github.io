import React from "react";

const Section = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`flex flex-col gap-3 mb-20 w-full ${className}`}>
      <span className="border-t border-lightbrown w-full pb-2" />
      {children}
    </div>
  );
};

export default Section;
