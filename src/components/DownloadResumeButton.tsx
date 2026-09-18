import { Download } from "lucide-react";
import resumePdf from "@/assets/gerta-xhepi-product-manager-resume.pdf.asset.json";
import { PortfolioButton } from "@/components/PortfolioButton";

interface DownloadResumeButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function DownloadResumeButton({ className, ...props }: DownloadResumeButtonProps) {
  return (
    <PortfolioButton
      href={resumePdf.url}
      download="Gerta_Xhepi_Product_Manager_Resume.pdf"
      variant="secondary"
      className={className}
      ariaLabel="Download Gerta Xhepi's resume"
      {...props}
    >
      <span>Download Resume</span>
      <Download className="size-5 shrink-0 transition-transform duration-200 ease-out group-hover:translate-y-[2px]" aria-hidden="true" />
    </PortfolioButton>
  );
}
