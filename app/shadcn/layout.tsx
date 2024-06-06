import { TooltipProvider } from "@/components/ui/tooltip";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
