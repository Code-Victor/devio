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
      outline:
        "border border-blue-500 text-blue-500",
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
}

export const Button = (props: ButtonProps & polyMorph) => {
  const Component = props.as || "button";
  return (
    <Component href={props.href} className={button(props)}>
      {props.children}
    </Component>
  );
};

export default Button;
