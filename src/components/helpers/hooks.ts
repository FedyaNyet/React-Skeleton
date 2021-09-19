import * as React from "react";

export const useToggle = (initialState:any) => {
  const [value, setValue] = React.useState(initialState);
  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
};
