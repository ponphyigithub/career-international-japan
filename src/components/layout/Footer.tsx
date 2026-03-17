import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { NAV_ITEMS } from '@/lib/constants';

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="text-primary-700 text-lg font-bold">科鋭国際</h3>
            <p className="text-text-secondary mt-2 text-sm">{t('footer.company')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-text-primary text-sm font-semibold">Navigation</h4>
            <ul className="mt-3 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-primary-500 text-sm transition-colors"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-text-primary text-sm font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-text-secondary hover:text-primary-500 text-sm transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border mt-8 border-t pt-8 text-center">
          <p className="text-text-muted text-xs">{t('footer.copyright', { year: String(year) })}</p>
        </div>
      </div>
    </footer>
  );
}
