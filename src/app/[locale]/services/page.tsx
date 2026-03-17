import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  return { title: t('title') };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesContent />;
}

function ServicesContent() {
  const t = useTranslations('services');
  const tc = useTranslations('common');

  const services = [
    { key: 'recruitment', href: '/services/recruitment' },
    { key: 'rpo', href: '/services/rpo' },
    { key: 'staffing', href: '/services/staffing' },
    { key: 'headhunting', href: '/services/headhunting' },
    { key: 'techOutsourcing', href: '/services/tech-outsourcing' },
  ] as const;

  return (
    <div className="px-4 py-(--spacing-section) sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-text-primary text-3xl font-bold">{t('title')}</h1>
        <p className="text-text-secondary mt-3">{t('subtitle')}</p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="group border-border hover:border-primary-200 rounded-xl border bg-white p-8 transition-all hover:shadow-lg"
            >
              <h2 className="text-text-primary group-hover:text-primary-600 text-xl font-semibold">
                {t(`${key}.title`)}
              </h2>
              <p className="text-text-secondary mt-3 text-sm leading-relaxed">
                {t(`${key}.description`)}
              </p>
              <span className="text-primary-500 mt-4 inline-block text-sm font-medium">
                {tc('readMore')} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
