import { Download } from "lucide-react";
import resumePdf from "@/assets/gerta-xhepi-product-manager-resume.pdf.asset.json";
import { PrimaryActionButton } from "@/components/PrimaryActionButton";

interface DownloadResumeButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function DownloadResumeButton({ className, ...props }: DownloadResumeButtonProps) {
  return (
    <PrimaryActionButton
      href={resumePdf.url}
      download="Gerta_Xhepi_Product_Manager_Resume.pdf"
      className={className}
      ariaLabel="Download Gerta Xhepi's resume"
      {...props}
    >
      <Download className="size-5 shrink-0" aria-hidden="true" />
      Download Resume
    </PrimaryActionButton>
  );
}
