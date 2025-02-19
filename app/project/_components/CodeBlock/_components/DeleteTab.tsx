import TabBlockAction from "@/actions/project/tabBlock";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
      _id: id,
    });
  };
  return (
    <div className="w-full h-full  bg-red-600 rounded-md cursor-pointer p-[px]  hover:bg-red-600/50">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <span className="">
            <Trash className="size-4" />
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
            <Button variant={"secondary"} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => handleClose(props.item._id)}
              className="bg-red-600 rounded-md cursor-pointer hover:bg-red-600/50"
              variant={"destructive"}
            >
              Delete
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DeleteTab;
