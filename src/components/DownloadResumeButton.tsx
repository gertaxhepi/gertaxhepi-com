import { ArrowUpRight } from "lucide-react";
import { PortfolioButton } from "@/components/PortfolioButton";

const RESUME_URL =
  "https://drive.google.com/file/d/1RmzwnRPgSmUVwWYCW3AcDCTxqlXU82lC/view?usp=sharing";

interface DownloadResumeButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function DownloadResumeButton({ className, ...props }: DownloadResumeButtonProps) {
  return (
    <PortfolioButton
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      variant="secondary"
      className={className}
      ariaLabel="View Gerta Xhepi's resume in a new tab"
      {...props}
    >
      <span>View Resume</span>
      <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
    </PortfolioButton>
  );
}
