export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'es' }]
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
