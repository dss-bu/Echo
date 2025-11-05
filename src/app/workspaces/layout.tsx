import { requireAuth } from "@/modules/auth/lib/auth.utils";
import Header from "@/modules/workspace/components/header";
import React from "react";

const WorkspaceLayout = async ({ children }: { children: React.ReactNode }) => {
  await requireAuth();
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default WorkspaceLayout;
