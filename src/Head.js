import React, { useEffect } from "react";

function Head(props) {
  useEffect(() => {
    document.title = `YourBody | ${props.title}`;
  }, [props]);

  return <></>;
}

export default Head;
