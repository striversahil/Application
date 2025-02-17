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
  const { mutate } = useMutationData(
    ["CodeBlockAction.nameChange"],
    CodeBlockAction.nameChange,
    "CodeBlockAction.getall"
  );

  const Mutation = () => {
    mutate({ _id: props.value._id, name: value });
  };
  const { mount, setMount, ref, EnterClick, ValueChange, value } =
    useClickOutsideEnter(Mutation, props.value.name);

  return (
    <div>
      {!mount && <h1 onClick={() => setMount(true)}>{value}</h1>}
      {mount && (
        <Input
          type="text"
          ref={ref}
          value={value}
          autoFocus
          onKeyDown={EnterClick}
          onChange={(e) => ValueChange(e)}
          className="bg-transparent border-none text-blue-400"
        />
      )}
    </div>
  );
};

export default HeaderChange;
