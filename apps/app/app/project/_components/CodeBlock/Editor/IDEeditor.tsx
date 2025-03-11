import React from "react";
import { CodeiumEditor as IDE } from "@codeium/react-code-editor";
import { useClickOutside } from "@mantine/hooks";
import StepsBlockAction from "../../../../../actions/project/stepsBlock";

type Props = {
  value: any;
};

const IDEeditor = (props: Props) => {
  const [code, setCode] = React.useState<string | undefined>(props.value.code);
  const { mutate } = StepsBlockAction.useCode(props.value._id);

  const MutateFunction = () => {
    if (code === undefined || code === props.value.code) return;

    if (code !== props.value.code) {
      mutate({
        metadata: { _id: props.value._id },
        payload: {
          code: code,
        },
      });
    }
  };

  const ref = useClickOutside(() => {
    MutateFunction();
  });

  React.useEffect(() => {
    setCode(props.value.code);
  }, [props.value.code]);

  return (
    <div className="relative  w-full h-full px-2" ref={ref}>
      <IDE
        language={props.value.language}
        theme="vs-dark"
        path="/editor.ts"
        defaultValue={code}
        height={"100%"}
        loading="Loading..."
        onChange={(code) => setCode(code)}
        className=""
      />
      <div className="absolute w-14 h-full z-10 top-3  right-2 bg-[#1e1e1e]"></div>
    </div>
  );
};

export default IDEeditor;
