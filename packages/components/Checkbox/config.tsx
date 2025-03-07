import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";

type Props = {
  selectedItem: any;
  updateItem: (newData: any) => void;
};

const CheckboxConfigPanel = ({ selectedItem, updateItem }: Props) => {
  return (
    <>
      <h2 className="text-lg font-bold mb-4">Text Settings</h2>
      <div className="space-y-4">
        {/* I will Create this Config Panel Saparately for each Component */}
        <div>
          <Label>Padding</Label>
          <Input
            type="range"
            min="0"
            max="32"
            value={selectedItem.padding}
            onChange={(e) =>
              updateItem({
                ...selectedItem,
                padding: Number(e.target.value),
              })
            }
          />
        </div>
        <div>
          <Label>Content</Label>
          <Input
            type="checkbox"
            checked={selectedItem.content}
            onChange={(e) =>
              updateItem({
                ...selectedItem,
                content: e.target.checked,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default CheckboxConfigPanel;
