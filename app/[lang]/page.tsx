import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import HomePage from './HomePage'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  return <HomePage dict={dict} lang={lang} />
}
