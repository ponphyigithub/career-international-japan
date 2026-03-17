import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="from-primary-700 via-primary-600 to-primary-800 bg-gradient-to-br px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-3xl text-3xl leading-tight font-bold whitespace-pre-line sm:text-4xl lg:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="text-primary-100 mt-6 max-w-2xl text-lg">{t('hero.subtitle')}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="text-primary-700 hover:bg-primary-50 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold transition-colors"
            >
              {t('hero.cta')}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-4 py-(--spacing-section) sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-text-primary text-2xl font-bold sm:text-3xl">
              {t('services.title')}
            </h2>
            <p className="text-text-secondary mt-3">{t('services.subtitle')}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(['recruitment', 'rpo', 'staffing', 'headhunting', 'techOutsourcing'] as const).map(
              (key) => (
                <div
                  key={key}
                  className="border-border rounded-xl border bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <h3 className="text-text-primary text-lg font-semibold">
                    {t(`services.${key}.title`)}
                  </h3>
                  <p className="text-text-secondary mt-2 text-sm leading-relaxed">
                    {t(`services.${key}.description`)}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 px-4 py-(--spacing-section) sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-text-primary text-2xl font-bold sm:text-3xl">
            {t('contact.subtitle')}
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-primary-500 hover:bg-primary-600 inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold text-white transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
