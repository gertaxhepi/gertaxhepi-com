import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import resumePdf from "@/assets/gerta-xhepi-product-manager-resume.pdf.asset.json";

interface DownloadResumeButtonProps {
  className?: string;
}

export function DownloadResumeButton({ className }: DownloadResumeButtonProps) {
  return (
    <a
      href={resumePdf.url}
      download="Gerta_Xhepi_Product_Manager_Resume.pdf"
      className={cn(
        "inline-flex min-h-[52px] w-fit items-center justify-center gap-3 rounded-[8px]",
        "bg-foreground px-6 text-base font-semibold text-background",
        "transition-colors duration-200",
        "hover:bg-terracotta hover:text-background",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label="Download Gerta Xhepi's resume"
    >
      <Download className="size-5 shrink-0" aria-hidden="true" />
      Download Resume
    </a>
  );
}
