import React from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

const TextConfigPanel = ({
  selectedItem,
  updateItem,
}: {
  selectedItem: any | null; // It will Get the Selected Item
  updateItem: (newData: any) => void; // It will Update the Selected Item Each time i will call it using the on change event
}) => {
  if (!selectedItem) return null;

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
            type="text"
            value={selectedItem.content}
            onChange={(e) =>
              updateItem({
                ...selectedItem,
                content: e.target.value,
              })
            }
          />
        </div>
        <div>
          <Label>Alignment</Label>
          <Input
            type="text"
            value={selectedItem.alignment}
            onChange={(e) =>
              updateItem({
                ...selectedItem,
                alignment: e.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default TextConfigPanel;
