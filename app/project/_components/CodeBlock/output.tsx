import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";

type Props = {
  value: any;
};

const Output = (props: Props) => {
  console.log(props.value);
  return (
    <div className="border-t border-pink-500  w-full h-full">
      <Tabs defaultValue="output">
        <TabsList className="flex px-3 py-1 bg-white/20 rounded-full w-fit  my-3">
          <TabsTrigger
            value="output"
            className=" px-3  rounded-full hover:bg-white/30"
          >
            Output
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="px-3  rounded-full hover:bg-white/30"
          >
            Executed Code
          </TabsTrigger>
          <TabsTrigger
            value="stdout"
            className="px-3  rounded-full hover:bg-white/30"
          >
            Console
          </TabsTrigger>
        </TabsList>
        <TabsContent value="output">{props.value.output}</TabsContent>
        <TabsContent value="code">{props.value.code}</TabsContent>
        <TabsContent value="stdout">{props.value.stdout}</TabsContent>
      </Tabs>
    </div>
  );
};

export default Output;
