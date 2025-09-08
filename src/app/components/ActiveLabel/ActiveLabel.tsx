import * as React from "react";
import s from "./ActiveLabel.module.css";

interface IActiveLabelProps {
  children: React.ReactNode;
}

const ActiveLabel: React.FunctionComponent<IActiveLabelProps> = ({
  children,
}) => {
  return <span className={s.label}>{children}</span>;
};

export default ActiveLabel;
