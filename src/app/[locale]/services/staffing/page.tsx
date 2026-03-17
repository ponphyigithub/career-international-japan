import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.staffing' });
  return { title: t('title') };
}

export default async function StaffingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations('services.staffing');
  return (
    <div className="px-4 py-(--spacing-section) sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-text-primary text-3xl font-bold">{t('title')}</h1>
        <p className="text-text-secondary mt-6">{t('description')}</p>
      </div>
    </div>
  );
}
