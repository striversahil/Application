import ComponentAction from "../../../../../actions/project/component";

import React, { useEffect } from "react";
import DraggableComponent from "./DraggableComponent";
import ProjectAction from "../../../../../actions/project";

type Props = {
  value: any;
};

const Component = (props: Props) => {
  const [component, setComponent] = React.useState<any>(null);
  const { data } = ProjectAction.getComponent(props.value._id);

  useEffect(() => {
    if (data) {
      setComponent(data.payload);
    }
  }, [data]);

  return <>{component && <DraggableComponent {...component} />}</>;
};

export default Component;
