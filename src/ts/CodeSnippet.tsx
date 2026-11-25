import type { ReactNode } from "react";

const CodeSnippet = ({ snippet }: { snippet: ReactNode }) => {
  return <pre className="code-snippet">{snippet}</pre>;
};

export default CodeSnippet;
