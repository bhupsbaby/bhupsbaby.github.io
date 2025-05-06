import React from "react";

const Section = ({
  className,
  children,
  linebreak = true
}: {
  className?: string;
  children: React.ReactNode;
  linebreak?: boolean
}) => {
  return (
    <div className={`flex flex-col gap-3 mb-12 md:mb-20 w-full ${className}`}>
      {linebreak && <span className="border-t border-lightbrown w-full pb-2" />}
      {children}
    </div>
  );
};

export default Section;
