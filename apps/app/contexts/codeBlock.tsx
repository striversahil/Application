import { createContext, ReactNode, useContext, useState } from "react";

interface CodeBlockContext {
  codeBlock: any | null;
  setCodeBlock: React.Dispatch<React.SetStateAction<any>>;
}

const CodeBlockContext = createContext<CodeBlockContext | null>(null);

export const CodeBlockProvider = ({ children }: { children: ReactNode }) => {
  const [codeBlock, setCodeBlock] = useState(null);
  return (
    <CodeBlockContext.Provider value={{ codeBlock, setCodeBlock }}>
      {children}
    </CodeBlockContext.Provider>
  );
};

export const useCodeBlock = () => useContext(CodeBlockContext);
