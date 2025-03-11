import TabBlockAction from "../../../../../actions/project/tabBlock";
import { Button } from "../../../../../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../../components/ui/popover";
import { Trash } from "lucide-react";
import React from "react";

type Props = {
  item: any;
};

const DeleteTab = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const { mutate: mutateDelete } = TabBlockAction.useDelete();

  const handleClose = (id: any) => {
    mutateDelete({
      metadata: {
        id: id,
      },
    });
    localStorage.removeItem(`currentTab-${id}`);
    setOpen(false);
  };
  return (
    <div className="w-full h-full bg-gray-600  px-1  rounded-md cursor-pointer  hover:bg-red-500/70">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <span className="">
            <Trash size={13} />
          </span>
        </PopoverTrigger>
        <PopoverContent className="w-fit text-sm flex flex-col gap-4 rounded-md">
          <div>
            Are You Sure <br />
            You Want To Delete
            <span className="p-2 text-md  font-bold text-red-500 underline">
              {props.item.name}
            </span>
            Tab ?
          </div>
          <div className="w-full flex justify-between">
            <div
              onClick={() => setOpen(false)}
              className="bg-white/50 p-1 px-2 rounded-md cursor-pointer hover:bg-white/30"
            >
              Cancel
            </div>
            <div
              onClick={() => handleClose(props.item.id)}
              className="bg-red-600 rounded-md p-1 px-2  cursor-pointer hover:bg-red-600/50"
              // variant={"destructive"}
            >
              Delete
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DeleteTab;
