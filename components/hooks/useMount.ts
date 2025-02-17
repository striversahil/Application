import React from "react";

export default function useMount() {
  const [mount, setmount] = React.useState(false);
  React.useEffect(() => {
    setmount(true);
  }, []);
}
