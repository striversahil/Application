import ComponentAction from "@/actions/project/component";

import React, { useEffect } from "react";
import DraggableComponent from "./DraggableComponent";

type Props = {
  id: string;
};

const Component = (props: Props) => {
  const [component, setComponent] = React.useState<any>(null);
  const { data } = ComponentAction.getOne(props.id);

  useEffect(() => {
    if (data) {
      setComponent(data.payload);
    }
  }, [data]);

  return (
    <div className="w-full h-full">
      <DraggableComponent {...component} />
    </div>
  );
};

export default Component;
