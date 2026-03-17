import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return { title: 'Privacy Policy' };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyContent />;
}

function PrivacyContent() {
  const t = useTranslations('footer');

  return (
    <div className="px-4 py-(--spacing-section) sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-text-primary text-3xl font-bold">{t('privacy')}</h1>
        <div className="text-text-secondary mt-12">
          <p>Privacy policy content will be added here.</p>
        </div>
      </div>
    </div>
  );
}
