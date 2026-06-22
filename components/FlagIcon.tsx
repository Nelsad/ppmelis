import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const flagSources: Record<Locale, string> = {
  en: "/flags/en.png",
  sq: "/flags/sq.png",
  bs: "/flags/bs.png",
};

type FlagIconProps = {
  locale: Locale;
  className?: string;
};

export default function FlagIcon({
  locale,
  className = "h-4 w-6 shrink-0 rounded-sm object-cover shadow-sm",
}: FlagIconProps) {
  return (
    <Image
      src={flagSources[locale]}
      alt=""
      width={28}
      height={20}
      className={className}
      aria-hidden
    />
  );
}
