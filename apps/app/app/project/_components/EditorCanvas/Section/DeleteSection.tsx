import SectionAction from "../../../../../actions/project/section";
import { Trash2 } from "lucide-react";
import React from "react";

type Props = {
  id: string;
};

const DeleteSection = (props: Props) => {
  const { mutate } = SectionAction.delete();
  return (
    <div
      className="absolute top-2 right-2 p-1 bg-white/50 rounded-md cursor-pointer hover:bg-white/10 "
      onClick={() => mutate({ metadata: { section_id: props.id } })}
    >
      <Trash2 size={20} />
    </div>
  );
};

export default DeleteSection;
