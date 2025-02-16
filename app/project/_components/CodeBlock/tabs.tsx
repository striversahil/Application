import { cn } from "@/lib/utils";
import CodeBlockAction from "@actions/project/codeBlock";
import ProjectAction from "@actions/project/project";
import { Skeleton } from "@components/ui/skeleton";
import { useMutationData } from "@hooks/useMutation";
import { useQueryData } from "@hooks/useQueryData";
import { CirclePlus, PanelBottomClose, PanelBottomOpen } from "lucide-react";
import React from "react";

type Props = {
  handleOpen: () => void;
  Open?: boolean;
  BlockData: (data: any) => void;
};

const Tabs = (props: Props) => {
  const [codeBlock, setCodeBlock] = React.useState<Array<any>>([]);

  const { isLoading, data } = useQueryData("project", ProjectAction.getOne);
  const { isPending, mutate } = useMutationData(
    ["addCodeBlock"],
    CodeBlockAction.new,
    "project"
  );

  React.useEffect(() => {
    if (data) {
      setCodeBlock(data.payload.codeBlocks);
    }
  }, [data]);

  // Todo : Move them to a separate component with React Context API
  const handleOpen = (item: any) => {
    if (props.Open === false) {
      props.handleOpen();
    }
    props.BlockData(item);
  };

  const HandleOpenIcon = (): React.JSX.Element => {
    return (
      <div
        className="absolute z-50 top-0 right-0 p-1 bg-red-500 rounded-md cursor-pointer hover:bg-red-500/50"
        onClick={props.handleOpen}
      >
        {props.Open === false ? <PanelBottomOpen /> : <PanelBottomClose />}
      </div>
    );
  };

  const handleAdd = () => {
    const random = Math.floor(Math.random() * 1000000);
    mutate({ name: `Tab ${random}` });
  };

  return (
    <div className="relative w-full h-[40px] bg-black">
      <HandleOpenIcon />
      <div className="flex items-center justify-start gap-2 flex-wrap overflow-auto">
        {isLoading && <Skeleton className="w-[500px] h-[40px] rounded-md" />}
        {codeBlock.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 p-1 rounded-md border border-white/20 select-none cursor-pointer"
            onClick={() => handleOpen(item)}
          >
            {item.name}
          </div>
        ))}
        <div
          className="bg-white/10 p-1 rounded-md border border-white/20 cursor-pointer inline-flex items-center gap-2"
          onClick={handleAdd}
        >
          Add Tab <CirclePlus />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
