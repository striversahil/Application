import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";

type Props = {
  value: any;
};

const Output = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState("output");

  return (
    <div className="border-t border-pink-500  w-full h-full">
      <Tabs defaultValue="output" className="flex flex-col h-full w-full">
        <TabsList className="relative flex px-3 py-1 gap-2 bg-white/20 rounded-full w-fit mt-2">
          <TabsTrigger
            value="output"
            className={cn(
              "text-sm font-bold px-2  rounded-full hover:bg-white/30",
              activeTab === "output" && "bg-white/20"
            )}
            onClick={() => setActiveTab("output")}
          >
            Output
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
        <div className="relative flex-1 h-fit overflow-auto ">
          <div className="absolute inset-2 rounded-md  bg-white/10">
            <div className="absolute inset-2 flex items-center rounded-md bg-[#1e293b]">
              <TabsContent value="output">{props.value.output}</TabsContent>
              <TabsContent value="code">{props.value.code}</TabsContent>
              <TabsContent value="stdout">{props.value.stdout}</TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Output;
