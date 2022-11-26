import React from "react";
import "./Box.scss";
import classnames from "classnames";

type Units =
  | "cm"
  | "mm"
  | "in"
  | "px"
  | "pt"
  | "pc"
  | "em"
  | "ex"
  | "ch"
  | "rem"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "%";
type NumericValue = `${number}${Units}`;

export interface BoxProps {
  vertical?: boolean;
  component?: string;
  children: React.ReactNode;
  gap?: NumericValue;
  padding?: NumericValue;
  radius?: NumericValue;
  border?: string;
  background?: string;
}

export function Box({
  gap,
  border,
  radius,
  padding,
  children,
  vertical,
  background,
}: BoxProps) {
  const classes = classnames("base", {
    ["vertical"]: vertical,
    ["horizontal"]: !vertical,
  });

  const styles = {
    "--gap": gap,
    "--radius": radius,
    "--padding": padding,
    "--border": border,
    "--background": background,
  } as React.HTMLAttributes<HTMLDivElement>;

  return (
    <div style={styles} className={classes}>
      {children}
    </div>
  );
}
