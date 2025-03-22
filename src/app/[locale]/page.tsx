import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  console.log("I'm params ", await params);
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");
  return (
    <div className="h-[200vh]">
      <h1 className="text-white">{t("title")}</h1>
    </div>
  );
}
