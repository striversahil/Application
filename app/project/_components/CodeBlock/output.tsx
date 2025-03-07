import ProjectAction from "@/actions/project";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { BatteryCharging, CheckCircle, Dot } from "lucide-react";
import React from "react";

type Props = {
  value: any;
};

const Output = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState("output");
  const { data, isLoading } = ProjectAction.getStep(props.value._id);

  return (
    <div className="border-t border-blue-500  w-full h-full">
      <Tabs defaultValue="output" className="flex flex-col h-full w-full">
        <div className="flex  w-full">
          <TabsList className="relative flex px-3 py-1 gap-2 bg-white/20 rounded-full w-fit mt-2">
            <TabsTrigger
              value="output"
              className={cn(
                "text-sm font-bold px-2  rounded-full hover:bg-white/30",
                activeTab === "output" && "bg-white/20"
              )}
              onClick={() => setActiveTab("output")}
            >
              {/* <BatteryCharging size={20} className="text-blue-400" /> */}
              <span>Output</span>
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className={cn(
                "text-sm font-bold px-2  rounded-full hover:bg-white/30",
                activeTab === "code" && "bg-white/20"
              )}
              onClick={() => setActiveTab("code")}
            >
              Executed Code
            </TabsTrigger>
            <TabsTrigger
              value="stdout"
              className={cn(
                "text-sm font-bold px-2  rounded-full hover:bg-white/30",
                activeTab === "stdout" && "bg-white/20"
              )}
              onClick={() => setActiveTab("stdout")}
            >
              Console
            </TabsTrigger>
          </TabsList>
          <div className="flex-1 flex justify-end">
            <div className="flex items-center gap-2 mr-3">
              <CheckCircle size={20} className="text-green-500" />
              <div className="flex items-center">
                <span className="text-sm font-bold text-green-500">
                  Success
                </span>{" "}
                <Dot size={15} className="text-green-500" />
                <div className="text-sm  ">10ms</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 h-fit overflow-auto ">
          <div className="absolute inset-2 rounded-md  bg-white/10">
            <div className="absolute inset-2 flex items-center rounded-md bg-[#1e293b]">
              <TabsContent value="output">{data.payload.output}</TabsContent>
              <TabsContent value="code">{data.payload.code}</TabsContent>
              <TabsContent value="stdout">{data.payload.stdout}</TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Output;
