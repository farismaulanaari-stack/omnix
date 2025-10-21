import Image from "next/image";
import IconPolygon from "../../../public/images/icons/icon-polygon.svg";
import IconStar from "../../../public/images/icons/icon-star.svg";
import IconOmnixLogo from "../../../public/images/icons/icon-omnix-logo.svg";

import { PricingIconProps } from "@/types/types";

export function PricingIcon({ variant = "starter" }: PricingIconProps) {
  return (
    <>
      {variant === "starter" && <StarterPricingIcon />}
      {variant === "professional" && <ProfessionalPricingIcon />}
      {variant === "enterprise" && <EnterprisePricingIcon />}
    </>
  );
}

function EnterprisePricingIcon() {
  return (
    <div className="bg-indigo-400 w-[90px] h-[90px] rounded-[30px] p-3 flex items-center justify-center">
      <div className="bg-indigo-300 w-[60px] h-[60px] rounded-[16px] p-3 pricing-icon-shadow flex items-center justify-center">
        <Image src={IconOmnixLogo} alt="icon-image" width={100} height={100} />
      </div>
    </div>
  );
}

function ProfessionalPricingIcon() {
  return (
    <div className="bg-blue-400 w-[90px] h-[90px] rounded-[30px] p-3 flex items-center justify-center">
      <div className="bg-blue-300 w-[60px] h-[60px] rounded-[16px] p-3 pricing-icon-shadow flex items-center justify-center">
        <Image src={IconStar} alt="icon-image" width={30} height={30} />
      </div>
    </div>
  );
}

function StarterPricingIcon() {
  return (
    <div className="bg-green-400 w-[90px] h-[90px] rounded-[30px] p-3 flex items-center justify-center">
      <div className="bg-green-300 w-[60px] h-[60px] rounded-[16px] p-3 pricing-icon-shadow flex items-center justify-center">
        <Image src={IconPolygon} alt="icon-image" width={30} height={30} />
      </div>
    </div>
  );
}
