import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cases' });
  return { title: t('title') };
}

export default async function CasesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CasesContent />;
}

function CasesContent() {
  const t = useTranslations('cases');
  const tc = useTranslations('common');

  return (
    <div className="px-4 py-(--spacing-section) sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-text-primary text-3xl font-bold">{t('title')}</h1>
        <p className="text-text-secondary mt-3">{t('subtitle')}</p>
        <div className="mt-12 text-center">
          <p className="text-text-muted">{tc('comingSoon')}</p>
        </div>
      </div>
    </div>
  );
}
