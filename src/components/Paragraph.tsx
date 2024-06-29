import React from "react";

type ParagraphProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "xl";
  bold?: boolean;
  color?: string;
};

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size = "medium",
  bold = false,
  color = "text-white",
}) => {
  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
    xl: "text-xl",
  };

  const weightClass = bold ? "font-bold" : "font-normal";

  return (
    <p className={`${sizeClasses[size]} ${weightClass} ${color}`}>{children}</p>
  );
};

export default Paragraph;
