import React from "react";
// import styles from "./Button.module.css";

import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: "px-6 py-2  bg-primaryColor rounded-full w-fit  text-white",
  variants: {
    full: {
      true: "w-full",
    },
    radii: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      pill: "rounded-full",
    },
    size: {
      sm: "text-sm px-4 py-1",
      md: "text-md px-6 py-2",
      lg: "text-lg px-8 py-3",
    },
    variant: {
      primary: "bg-gradient-to-tr from-gradientStart to-gradientEnd ",
      outline: "border border-blue-500 text-blue-500",
    },
  },
  defaultVariants: {
    full: false,
    radii: "pill",
    size: "md",
    variant: "primary",
  },
});

type ButtonVariants = VariantProps<typeof button>;

type polyMorph =
  | {
      as?: "button";
      href?: never;
    }
  | {
      as?: "a";
      href: string;
    };
interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  as,
  full,
  size,
  radii,
  variant,
  children,
  className,
  ...others
}: ButtonProps & polyMorph) => {
  const Component = as || "button";
  return (
    <Component
      {...others}
      className={button({ full, size, radii, variant }) + " " + className}
    >
      {children}
    </Component>
  );
};

export default Button;
