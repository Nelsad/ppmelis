import { LocaleProvider } from "@/components/LocaleProvider";
import HomePage from "@/components/HomePage";

export default function Page() {
  return (
    <LocaleProvider>
      <HomePage />
    </LocaleProvider>
  );
}
