import Header from "@/modules/workspaces/components/header";
import React from "react";

const WorkspaceLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default WorkspaceLayout;
