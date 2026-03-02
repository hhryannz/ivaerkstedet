"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Globe, ArrowLeft, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Language = "da" | "en" | "de"

const translations = {
  da: {
    back: "Tilbage til forsiden",
    title: "Støtte",
    subtitle: "Vi er taknemmelige for den støtte, der gør iVærkstedet muligt",
    lagTitle: "LAG Fanø Varde",
    lagDescription:
      "iVÆRKstedet Fanø fik i 2025 støtte fra LAG Fanø Varde. Støtten gik til, at vi fik bygget to mutebox\u2019 af en lokal tømrer. I de to mutebox\u2019 kan vores lejere afholde møder eller arbejde fokuseret uforstyrret fra resten af kontoret. Støtten til de to mutebox\u2019 har gjort det endnu mere fleksibelt for vores lejere at tilpasse deres arbejdsdag, så de får den perfekte blanding af socialt fællesskab og mulighed for at arbejde fokuseret.",
    euFunded: "Finansieret af Den Europiske Union",
    copyright: "\u00a9 2024 iV\u00e6rkstedet. Alle rettigheder forbeholdes.",
    privacy: "Privatlivspolitik",
    terms: "Handelsbetingelser",
    contact: "Kontakt",
    about: "Om Os",
    facilities: "Faciliteter",
    network: "S\u00f8satterne",
    members: "Medlemmer",
    pricing: "Priser",
    sponsors: "Støtte",
  },
  en: {
    back: "Back to homepage",
    title: "Support",
    subtitle: "We are grateful for the support that makes iV\u00e6rkstedet possible",
    lagTitle: "LAG Fan\u00f8 Varde",
    lagDescription:
      "iV\u00c6RKstedet Fan\u00f8 received funding from LAG Fan\u00f8 Varde in 2025. The support went towards building two mutebox units by a local carpenter. In the two mutebox units, our tenants can hold meetings or work focused without being disturbed by the rest of the office. The funding for the two mutebox units has made it even more flexible for our tenants to adapt their workday, giving them the perfect mix of social community and the ability to work with focus.",
    euFunded: "Funded by the European Union",
    copyright: "\u00a9 2024 iV\u00e6rkstedet. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact",
    about: "About Us",
    facilities: "Facilities",
    network: "Network",
    members: "Members",
    pricing: "Pricing",
    sponsors: "Support",
  },
  de: {
    back: "Zur\u00fcck zur Startseite",
    title: "Unterstützung",
    subtitle: "Wir sind dankbar f\u00fcr die Unterst\u00fctzung, die iV\u00e6rkstedet m\u00f6glich macht",
    lagTitle: "LAG Fan\u00f8 Varde",
    lagDescription:
      "iV\u00c6RKstedet Fan\u00f8 erhielt 2025 F\u00f6rdermittel von LAG Fan\u00f8 Varde. Die Unterst\u00fctzung floss in den Bau von zwei Mutebox-Einheiten durch einen lokalen Tischler. In den beiden Mutebox-Einheiten k\u00f6nnen unsere Mieter Besprechungen abhalten oder konzentriert arbeiten, ohne vom Rest des B\u00fcros gest\u00f6rt zu werden. Die F\u00f6rderung der beiden Mutebox-Einheiten hat es unseren Mietern noch flexibler gemacht, ihren Arbeitstag anzupassen \u2013 f\u00fcr die perfekte Mischung aus sozialer Gemeinschaft und konzentriertem Arbeiten.",
    euFunded: "Finanziert von der Europ\u00e4ischen Union",
    copyright: "\u00a9 2024 iV\u00e6rkstedet. Alle Rechte vorbehalten.",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    contact: "Kontakt",
    about: "\u00dcber uns",
    facilities: "Ausstattung",
    network: "Netzwerk",
    members: "Mitglieder",
    pricing: "Preise",
    sponsors: "Unterstützung",
  },
}

export default function SponsorerPage() {
  const [language, setLanguage] = useState<Language>("da")
  const [isOpen, setIsOpen] = useState(false)
  const t = translations[language]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/images/logo.jpg" width={40} height={40} alt="iVærkstedet logo" className="mr-2" />
          <span className="text-xl font-bold text-gray-900">iVærkstedet</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
          <Link href="/#about" className="text-sm font-medium hover:text-teal-600 transition-colors">
            {t.about}
          </Link>
          <Link href="/#facilities" className="text-sm font-medium hover:text-teal-600 transition-colors">
            {t.facilities}
          </Link>
          <Link href="/#network" className="text-sm font-medium hover:text-teal-600 transition-colors">
            {t.network}
          </Link>
          <Link href="/#members" className="text-sm font-medium hover:text-teal-600 transition-colors">
            {t.members}
          </Link>
          <Link href="/#pricing" className="text-sm font-medium hover:text-teal-600 transition-colors">
            {t.pricing}
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
            {t.contact}
          </Link>
          <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
            <SelectTrigger className="w-[100px]">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="da">Dansk</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
            </SelectContent>
          </Select>
        </nav>

        {/* Mobile Navigation */}
        <div className="ml-auto flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-6">
                <Link
                  href="/#about"
                  className="text-lg font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.about}
                </Link>
                <Link
                  href="/#facilities"
                  className="text-lg font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.facilities}
                </Link>
                <Link
                  href="/#network"
                  className="text-lg font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.network}
                </Link>
                <Link
                  href="/#members"
                  className="text-lg font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.members}
                </Link>
                <Link
                  href="/#pricing"
                  className="text-lg font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.pricing}
                </Link>
                <Link
                  href="/#contact"
                  className="text-lg font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.contact}
                </Link>

                {/* Language Selector in Mobile Menu */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-3">Language / Sprog / Sprache</p>
                  <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
                    <SelectTrigger className="w-full">
                      <Globe className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="da">Dansk</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {/* Back Link */}
        <div className="container px-4 md:px-6 mx-auto pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Link>
        </div>

        {/* Page Header */}
        <section className="w-full py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-[700px] mx-auto text-gray-600 text-base md:text-lg">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* LAG Fanø Varde Sponsor */}
        <section className="w-full pb-12 md:pb-16 lg:pb-24">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <Card className="border-teal-100 overflow-hidden">
              <CardContent className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8">
                  <Image
                    src="/images/lag-logo.jpg"
                    width={200}
                    height={120}
                    alt="LAG Lokale Aktions Grupper logo"
                    className="object-contain"
                  />
                </div>

                <h2 className="text-xl font-bold md:text-2xl mb-4">{t.lagTitle}</h2>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  {t.lagDescription}
                </p>

                {/* EU Funding Badge */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Image
                      src="/images/eu-flag.jpg"
                      width={300}
                      height={80}
                      alt={t.euFunded}
                      className="object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-teal-100">
        <p className="text-xs text-gray-600 text-center sm:text-left">{t.copyright}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-teal-600">
            {t.privacy}
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-teal-600">
            {t.terms}
          </Link>
          <Link href="/sponsorer" className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-teal-600">
            {t.sponsors}
          </Link>
        </nav>
      </footer>
    </div>
  )
}
