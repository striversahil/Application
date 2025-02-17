import CodeBlockAction from "@/actions/project/codeBlock";
import { useClickOutsideEnter } from "@/app/project/_hooks/useClickOutsideEnter";
import { Input } from "@/components/ui/input";
import { useMutationData } from "@/hooks/useMutation";
import { useClickOutside } from "@mantine/hooks";
import React from "react";

type Props = {
  value: any;
};

const HeaderChange = (props: Props) => {
  const [header, setHeader] = React.useState<string>(props.value.name);

  const { mutate } = useMutationData(
    ["CodeBlockAction.nameChange"],
    CodeBlockAction.nameChange,
    "CodeBlockAction.getall"
  );

  const Mutation = () => {
    if (header === "") {
      setHeader(props.value.name);
      return;
    }
    if (header !== props.value.name) {
      mutate({ _id: props.value._id, name: header });
    }
  };
  const { mount, setMount, ref, EnterClick } = useClickOutsideEnter(Mutation);

  return (
    <div>
      {!mount && <h1 onClick={() => setMount(true)}>{header}</h1>}
      {mount && (
        <Input
          type="text"
          ref={ref}
          value={header}
          autoFocus
          onKeyDown={EnterClick}
          onChange={(e) => {
            setHeader(e.target.value);
          }}
          className="bg-transparent border-none text-blue-400"
        />
      )}
    </div>
  );
};

export default HeaderChange;
