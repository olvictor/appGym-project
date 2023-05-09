import { useState } from "react";

const UseForm = () => {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return {
    value,
    setValue,
    handleChange,
  };
};

export default UseForm;
