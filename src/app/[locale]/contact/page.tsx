'use client';

import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="px-4 py-(--spacing-section) sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-text-primary text-3xl font-bold">{t('title')}</h1>
        <p className="text-text-secondary mt-3">{t('subtitle')}</p>

        <form className="mt-12 space-y-6">
          <div>
            <label className="text-text-primary block text-sm font-medium">
              {t('form.company')}
            </label>
            <input
              type="text"
              className="border-border focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border bg-white px-4 py-3 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-text-primary block text-sm font-medium">
              {t('form.name')}
              <span className="text-accent-500 ml-1">{t('form.required')}</span>
            </label>
            <input
              type="text"
              required
              className="border-border focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border bg-white px-4 py-3 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-text-primary block text-sm font-medium">
              {t('form.email')}
              <span className="text-accent-500 ml-1">{t('form.required')}</span>
            </label>
            <input
              type="email"
              required
              className="border-border focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border bg-white px-4 py-3 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-text-primary block text-sm font-medium">{t('form.phone')}</label>
            <input
              type="tel"
              className="border-border focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border bg-white px-4 py-3 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-text-primary block text-sm font-medium">
              {t('form.subject')}
              <span className="text-accent-500 ml-1">{t('form.required')}</span>
            </label>
            <input
              type="text"
              required
              className="border-border focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border bg-white px-4 py-3 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-text-primary block text-sm font-medium">
              {t('form.message')}
              <span className="text-accent-500 ml-1">{t('form.required')}</span>
            </label>
            <textarea
              required
              rows={6}
              className="border-border focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border bg-white px-4 py-3 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 w-full rounded-lg px-8 py-3 text-sm font-semibold text-white transition-colors sm:w-auto"
            >
              {t('form.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
