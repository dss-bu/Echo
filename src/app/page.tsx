import { ThemeToggle } from "@/components/theme-toggle";
import { requireAuth } from "@/modules/auth/lib/auth.utils";

export default async function Home() {
  await requireAuth();
  return <ThemeToggle />;
}
