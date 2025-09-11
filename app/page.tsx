"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MapPin, Wifi, Coffee, Users, Calendar, Mail, Clock, Globe, Heart, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Language = "da" | "en" | "de"

const translations = {
  da: {
    // Header
    about: "Om Os",
    facilities: "Faciliteter",
    network: "Søsatterne",
    members: "Medlemmer",
    pricing: "Priser",
    contact: "Kontakt",

    // Hero
    location: "Fanø, Danmark",
    heroTitle: "Dit kreative arbejdsrum ved Vadehavet",
    heroDescription:
      "Oplev det perfekte miljø for produktivitet og kreativitet på den smukke ø Fanø. Vores co-working space kombinerer moderne faciliteter med øens unikke atmosfære.",
    bookVisit: "Book et besøg",

    // About
    aboutTitle: "Arbejd inspireret af naturen",
    aboutText1: "iVærkstedet er mere end bare et kontor - det er et fællesskab af kreative mennesker.",
    aboutText2:
      "Vores space ligger i Nordby, kun få minutter fra stranden og med nem adgang til færgen. Her kan du nyde ro til koncentration, mens du stadig er en del af et levende professionelt netværk.",
    community: "Fællesskab",
    centralLocation: "Central placering",
    fastInternet: "Hurtig internet",
    coffeeAndTea: "Kaffe & te",

    // Facilities
    facilitiesTitle: "Moderne faciliteter i naturskønne omgivelser",
    facilitiesSubtitle: "Alt hvad du behøver for at være produktiv og kreativ",
    highSpeedInternet: "Højhastighedsinternet",
    internetDescription: "Fiber internet med 1GB/s hastighed sikrer, at du altid er forbundet",
    kitchenLounge: "Køkken & lounge",
    kitchenDescription: "Fuldt udstyret køkken og hyggelig lounge-område til pauser og networking",
    flexibleWorkspaces: "Fleksible arbejdspladser",
    workspaceDescription: "Vælg mellem faste pladser, flyverpladser eller private kontorer",

    // Network (Søsatterne)
    networkTitle: "Søsætterne - Vores lokale netværk",
    networkSubtitle: "Et fællesskab for alle iværksættere på Fanø",
    networkDescription1:
      "Søsætterne er vores åbne netværk for alle iværksættere og kreative mennesker på Fanø - uanset om du er medlem af iVærkstedet eller ej.",
    networkDescription2:
      "Vi mødes regelmæssigt til networking events, workshops og sociale sammenkomster. Det er det perfekte sted at møde ligesindede, dele erfaringer og skabe nye samarbejder på øen.",
    monthlyMeetings: "Regelmæssige møder",
    workshops: "Workshops & events",
    openNetwork: "Åbent for alle",
    joinNetwork: "Bliv en del af netværket",

    // Members
    membersTitle: "Mød vores medlemmer",
    membersSubtitle: "En flok af gode og kreative mennesker",
    showMore: "Vis flere medlemmer",
    showLess: "Vis færre medlemmer",

    // Gallery
    galleryTitle: "Se vores inspirerende arbejdsmiljø",
    gallerySubtitle: "Få et indblik i hverdagen på iVærkstedet",

    // Pricing
    pricingTitle: "Priser der passer til dit behov",
    pricingSubtitle: "Vælg den løsning der passer bedst til din arbejdsstil",
    dayPass: "Dagsbillet",
    dayPassDescription: "Perfekt til kortere besøg",
    perDay: "per dag",
    monthlyPass: "Medlemskab",
    monthlyDescription: "For dem der arbejder regelmæssigt - kontakt os for priser",
    perMonth: "per måned",
    privateOffice: "Privat kontor",
    privateDescription: "Dit eget rum med havudsigt",
    mostPopular: "Mest populær",
    bookDayPass: "Book dagsbillet",
    chooseMonthly: "Vælg månedskort",
    contactUs: "Kontakt os",

    // Pricing features
    hotDeskAccess: "• Adgang til hot desk område",
    wifiPower: "• Wifi og strøm",
    coffeeTea: "• Kaffe og te",
    kitchenAccess: "• Adgang til køkken",
    allFromDay: "• Alt fra dagsbillet",
    fixedDesk: "• Fast arbejdsplads",
    access24: "• 24/7 adgang",
    meetingRoom2h: "• Mødelokale (2 timer/dag)",
    mailService: "• Postmodtagelse",
    allFromMonthly: "• Alt fra månedskort",
    privateLockable: "• Privat låsbart kontor",
    meetingRoom5h: "• Mødelokale (5 timer/dag)",
    ownKey: "• Egen nøgle",
    signage: "• Mulighed for skiltning",

    // Contact
    findUs: "Find os på Fanø",
    address: "Adresse",
    openingHours: "Åbningstider",
    mondayFriday: "Mandag - Fredag: 8:00 - 18:00",
    weekend: "Weekend: 24/7 for medlemmer",
    howToGetHere: "Sådan kommer du hertil",
    directions:
      "Tag færgen fra Esbjerg til Nordby (ca. 12 min). Vi ligger kun 10 minutters gang fra færgelejet. Parkering er gratis lige uden for døren.",
    bookVisitCard: "Book et besøg",
    bookDescription: "Kom og se vores faciliteter og mød fællesskabet",
    bookTour: "Book gratis rundvisning",

    // Footer
    copyright: "© 2024 iVærkstedet. Alle rettigheder forbeholdes.",
    privacy: "Privatlivspolitik",
    terms: "Handelsbetingelser",

    // Alt texts
    workspaceAlt: "iVærkstedet grønt arbejdsområde med planter",
    mainWorkspaceAlt: "iVærkstedet hovedarbejdsområde med neon skilt",
    landscapeAlt: "Fanø landskab med klitter og strand",
    modernWorkplaceAlt: "Moderne arbejdsplads med naturligt lys",
    loungeAlt: "Hyggelig lounge område med hund",
    meetingRoomAlt: "Mødelokale med moderne faciliteter",
    memberPhotosAlt: "Væg med billeder af iVærkstedets medlemmer",
    communityAlt: "Fællesskabsøjeblik på iVærkstedet",
    outdoorNetworkingAlt: "Udendørs networking på Fanø",
    ferryAlt: "Fanølinjen færge til Fanø",
    kitchenAlt: "Køkken og spiseplads på iVærkstedet",

    contactForPricing: "Kontakt os for priser",
    flexibleSolutions: "Fleksible løsninger",
    privateOfficeOptions: "• Private kontormuligheder",
    customSolutions: "• Skræddersyede løsninger",
  },
  en: {
    // Header
    about: "About Us",
    facilities: "Facilities",
    network: "Network",
    members: "Members",
    pricing: "Pricing",
    contact: "Contact",

    // Hero
    location: "Fanø, Denmark",
    heroTitle: "Your creative workspace by the Wadden Sea",
    heroDescription:
      "Experience the perfect environment for productivity and creativity on the beautiful island of Fanø. Our co-working space combines modern facilities with the island's unique atmosphere.",
    bookVisit: "Book a visit",

    // About
    aboutTitle: "Work inspired by nature",
    aboutText1: "iVærkstedet is more than just an office - it's a community of creative people.",
    aboutText2:
      "Our space is located in Nordby, just minutes from the beach and with easy access to the ferry. Here you can enjoy peace and focus while still being connected to a vibrant professional network.",
    community: "Community",
    centralLocation: "Central location",
    fastInternet: "Fast internet",
    coffeeAndTea: "Coffee & tea",

    // Facilities
    facilitiesTitle: "Modern facilities in scenic surroundings",
    facilitiesSubtitle: "Everything you need to be productive and creative",
    highSpeedInternet: "High-speed internet",
    internetDescription: "Fiber internet with 1GB/s speed ensures you're always connected",
    kitchenLounge: "Kitchen & lounge",
    kitchenDescription: "Fully equipped kitchen and cozy lounge area for breaks and networking",
    flexibleWorkspaces: "Flexible workspaces",
    workspaceDescription: "Choose between fixed desks, hot desks or private offices",

    // Network
    networkTitle: "Our Local Network - Søsætterne",
    networkSubtitle: "A community for all professionals on Fanø",
    networkDescription1:
      "Søsætterne is our open network for all professionals and creative minds on Fanø - whether you're a member of iVærkstedet or not.",
    networkDescription2:
      "We meet regularly for networking events, workshops and social gatherings. It's the perfect place to meet like-minded people, share experiences and create new connections on the island.",
    monthlyMeetings: "Regular meetings",
    workshops: "Workshops & events",
    openNetwork: "Open to everyone",
    joinNetwork: "Join the network",

    // Members
    membersTitle: "Meet our members",
    membersSubtitle: "A happy bunch of talented people",
    showMore: "Show more members",
    showLess: "Show fewer members",

    // Gallery
    galleryTitle: "See our inspiring work environment",
    gallerySubtitle: "Get a glimpse into daily life at iVærkstedet",

    // Pricing
    pricingTitle: "Prices that fit your needs",
    pricingSubtitle: "Choose the solution that best fits your work style",
    dayPass: "Day pass",
    dayPassDescription: "Perfect for shorter visits",
    perDay: "per day",
    monthlyPass: "Membership",
    monthlyDescription: "For those who work regularly - contact us for pricing",
    perMonth: "per month",
    privateOffice: "Private office",
    privateDescription: "Your own room with sea view",
    mostPopular: "Most popular",
    bookDayPass: "Book day pass",
    chooseMonthly: "Choose monthly",
    contactUs: "Contact us",

    // Pricing features
    hotDeskAccess: "• Access to hot desk area",
    wifiPower: "• Wifi and power",
    coffeeTea: "• Coffee and tea",
    kitchenAccess: "• Kitchen access",
    allFromDay: "• Everything from day pass",
    fixedDesk: "• Fixed workspace",
    access24: "• 24/7 access",
    meetingRoom2h: "• Meeting room (2 hours/day)",
    mailService: "• Mail reception",
    allFromMonthly: "• Everything from monthly pass",
    privateLockable: "• Private lockable office",
    meetingRoom5h: "• Meeting room (5 hours/day)",
    ownKey: "• Own key",
    signage: "• Signage possibility",

    // Contact
    findUs: "Find us on Fanø",
    address: "Address",
    openingHours: "Opening hours",
    mondayFriday: "Monday - Friday: 8:00 - 18:00",
    weekend: "Weekend: 24/7 for members",
    howToGetHere: "How to get here",
    directions:
      "Take the ferry from Esbjerg to Nordby (approx. 12 min). We are only a 10-minute walk from the ferry terminal. Parking is free right outside the door.",
    bookVisitCard: "Book a visit",
    bookDescription: "Come and see our facilities and meet the community",
    bookTour: "Book free tour",

    // Footer
    copyright: "© 2024 iVærkstedet. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",

    // Alt texts
    workspaceAlt: "iVærkstedet green workspace with plants",
    mainWorkspaceAlt: "iVærkstedet main workspace with neon sign",
    landscapeAlt: "Fanø landscape with dunes and beach",
    modernWorkplaceAlt: "Modern workplace with natural light",
    loungeAlt: "Cozy lounge area with dog",
    meetingRoomAlt: "Meeting room with modern facilities",
    memberPhotosAlt: "Wall with photos of iVærkstedet members",
    communityAlt: "Community moment at iVærkstedet",
    outdoorNetworkingAlt: "Outdoor networking on Fanø",
    ferryAlt: "Fanølinjen ferry to Fanø",
    kitchenAlt: "Kitchen and dining area at iVærkstedet",

    contactForPricing: "Contact us for pricing",
    flexibleSolutions: "Flexible solutions",
    privateOfficeOptions: "• Private office options",
    customSolutions: "• Tailored solutions",
  },
  de: {
    // Header
    about: "Über uns",
    facilities: "Ausstattung",
    network: "Netzwerk",
    members: "Mitglieder",
    pricing: "Preise",
    contact: "Kontakt",

    // Hero
    location: "Fanø, Dänemark",
    heroTitle: "Ihr kreativer Arbeitsplatz am Wattenmeer",
    heroDescription:
      "Erleben Sie die perfekte Umgebung für Produktivität und Kreativität auf der wunderschönen Insel Fanø. Unser Co-Working-Space kombiniert moderne Einrichtungen mit der einzigartigen Atmosphäre der Insel.",
    bookVisit: "Besuch buchen",

    // About
    aboutTitle: "Arbeiten inspiriert von der Natur",
    aboutText1: "iVærkstedet ist mehr als nur ein Büro - es ist eine Gemeinschaft kreativer Menschen.",
    aboutText2:
      "Unser Space liegt in Nordby, nur wenige Minuten vom Strand entfernt und mit einfachem Zugang zur Fähre. Hier kannst du Ruhe und Konzentration genießen und bist dennoch mit einem lebendigen professionellen Netzwerk verbunden.",
    community: "Gemeinschaft",
    centralLocation: "Zentrale Lage",
    fastInternet: "Schnelles Internet",
    coffeeAndTea: "Kaffee & Tee",

    // Facilities
    facilitiesTitle: "Moderne Ausstattung in malerischer Umgebung",
    facilitiesSubtitle: "Alles was du brauchst, um produktiv und kreativ zu sein",
    highSpeedInternet: "Hochgeschwindigkeits-Internet",
    internetDescription: "Glasfaser-Internet mit 1GB/s Geschwindigkeit sorgt dafür, dass du immer verbunden bist",
    kitchenLounge: "Küche & Lounge",
    kitchenDescription: "Voll ausgestattete Küche und gemütlicher Lounge-Bereich für Pausen und Networking",
    flexibleWorkspaces: "Flexible Arbeitsplätze",
    workspaceDescription: "Wahl zwischen festen Plätzen, Hot Desks oder privaten Büros",

    // Network
    networkTitle: "Unser lokales Netzwerk - Søsætterne",
    networkSubtitle: "Eine Gemeinschaft für alle Unternehmer auf Fanø",
    networkDescription1:
      "Søsætterne ist unser offenes Netzwerk für alle Unternehmer und kreativen Köpfe auf Fanø - egal ob Sie Mitglied von iVærkstedet sind oder nicht.",
    networkDescription2:
      "Wir treffen uns regelmäßig zu Networking-Events, Workshops und geselligen Zusammenkünften. Es ist der perfekte Ort, um Gleichgesinnte zu treffen, Erfahrungen zu teilen und neue Kooperationen auf der Insel zu schaffen.",
    monthlyMeetings: "Regelmässige Treffen",
    workshops: "Workshops & Events",
    openNetwork: "Offen für alle",
    joinNetwork: "Dem Netzwerk beitreten",

    // Members
    membersTitle: "Lern unsere Mitglieder kennen",
    membersSubtitle: "Eine Gruppe von freundliche und kreative Menschen",
    showMore: "Mehr Mitglieder anzeigen",
    showLess: "Weniger Mitglieder anzeigen",

    // Gallery
    galleryTitle: "Unsere inspirierende Arbeitsumgebung",
    gallerySubtitle: "Einen Einblick in den Alltag bei iVærkstedet",

    // Pricing
    pricingTitle: "Preise die zu deinen Bedürfnissen passen",
    pricingSubtitle: "Wähl die Lösung die am besten zu Deinem Arbeitsstil passt",
    dayPass: "Tageskarte",
    dayPassDescription: "Perfekt für kürzere Besuche",
    perDay: "pro Tag",
    monthlyPass: "Mitgliedschaft",
    monthlyDescription: "Für diejenigen die regelmäßig arbeiten - kontaktieren Sie uns für Preise",
    perMonth: "pro Monat",
    privateOffice: "Privates Büro",
    privateDescription: "Ihr eigener Raum mit Meerblick",
    mostPopular: "Am beliebtesten",
    bookDayPass: "Tageskarte buchen",
    chooseMonthly: "Monatskarte wählen",
    contactUs: "Kontaktieren Sie uns",

    // Pricing features
    hotDeskAccess: "• Zugang zum Hot-Desk-Bereich",
    wifiPower: "• WLAN und Strom",
    coffeeTea: "• Kaffee und Tee",
    kitchenAccess: "• Küchenzugang",
    allFromDay: "• Alles von der Tageskarte",
    fixedDesk: "• Fester Arbeitsplatz",
    access24: "• 24/7 Zugang",
    meetingRoom2h: "• Besprechungsraum (2 Stunden/Tag)",
    mailService: "• Postannahme",
    allFromMonthly: "• Alles von der Monatskarte",
    privateLockable: "• Privates abschließbares Büro",
    meetingRoom5h: "• Besprechungsraum (5 Stunden/Day)",
    ownKey: "• Eigener Schlüssel",
    signage: "• Beschilderungsmöglichkeit",

    // Contact
    findUs: "Finden Sie uns auf Fanø",
    address: "Adresse",
    openingHours: "Öffnungszeiten",
    mondayFriday: "Montag - Freitag: 8:00 - 18:00",
    weekend: "Wochenende: 24/7 für Mitglieder",
    howToGetHere: "So kommen Sie hierher",
    directions:
      "Nehmen Sie die Fähre von Esbjerg nach Nordby (ca. 12 Min). Wir sind nur 5 Gehminuten vom Fährterminal entfernt. Parkplätze sind kostenlos direkt vor der Tür.",
    bookVisitCard: "Besuch buchen",
    bookDescription: "Kommen Sie und sehen Sie unsere Einrichtungen und lernen Sie die Gemeinschaft kennen",
    bookTour: "Kostenlose Führung buchen",

    // Footer
    copyright: "© 2024 iVærkstedet. Alle Rechte vorbehalten.",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",

    // Alt texts
    workspaceAlt: "iVærkstedet grüner Arbeitsbereich mit Pflanzen",
    mainWorkspaceAlt: "iVærkstedet Hauptarbeitsbereich mit Neonschild",
    landscapeAlt: "Fanø Landschaft mit Dünen und Strand",
    modernWorkplaceAlt: "Moderner Arbeitsplatz mit natürlichem Licht",
    loungeAlt: "Gemütlicher Lounge-Bereich mit Hund",
    meetingRoomAlt: "Besprechungsraum mit moderner Ausstattung",
    memberPhotosAlt: "Wand mit Fotos der iVærkstedet-Mitglieder",
    communityAlt: "Gemeinschaftsmoment bei iVærkstedet",
    outdoorNetworkingAlt: "Outdoor-Networking auf Fanø",
    ferryAlt: "Fanølinjen Fähre nach Fanø",
    kitchenAlt: "Küche und Essbereich bei iVærkstedet",

    contactForPricing: "Kontaktieren Sie uns für Preise",
    flexibleSolutions: "Flexible Lösungen",
    privateOfficeOptions: "• Private Büro Optionen",
    customSolutions: "• Maßgeschneiderte Lösungen",
  },
}

export default function HomePage() {
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
          <Link href="#about" className="text-sm font-medium hover:text-teal-600 transition-colors">
            {t.about}
          </Link>
          <Link href="#facilities" className="text-sm font-medium hover:text-teal-600 transition-colors">
            {t.facilities}
          </Link>
          <Link href="#network" className="text-sm font-medium hover:text-teal-600 transition-colors">
            {t.network}
          </Link>
          <Link href="#members" className="text-sm font-medium hover:text-teal-600 transition-colors">
            {t.members}
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-teal-600 transition-colors">
            {t.pricing}
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
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
                  href="#about"
                  className="text-lg font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.about}
                </Link>
                <Link
                  href="#facilities"
                  className="text-lg font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.facilities}
                </Link>
                <Link
                  href="#network"
                  className="text-lg font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.network}
                </Link>
                <Link
                  href="#members"
                  className="text-lg font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.members}
                </Link>
                <Link
                  href="#pricing"
                  className="text-lg font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.pricing}
                </Link>
                <Link
                  href="#contact"
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
        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-rose-50 via-green-50 to-teal-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="w-fit bg-gradient-to-r from-rose-100 to-green-100 text-teal-700 border-teal-200"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    {t.location}
                  </Badge>
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                    {t.heroTitle}
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-base md:text-xl">{t.heroDescription}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-700 hover:to-green-600 text-white"
                  >
                    {t.bookVisit}
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/green-workspace.jpg"
                  width={600}
                  height={400}
                  alt={t.workspaceAlt}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl ring-1 ring-teal-200/50 w-full max-w-[600px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-8 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center space-y-4 max-w-4xl mx-auto text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{t.aboutTitle}</h2>
                <p className="text-gray-600 text-base md:text-lg">{t.aboutText1}</p>
                <p className="text-gray-600 text-base md:text-lg">{t.aboutText2}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="flex flex-col items-center gap-2">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
                  <span className="text-xs md:text-sm font-medium text-center">{t.community}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  <span className="text-xs md:text-sm font-medium text-center">{t.centralLocation}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Wifi className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />
                  <span className="text-xs md:text-sm font-medium text-center">{t.fastInternet}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Coffee className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                  <span className="text-xs md:text-sm font-medium text-center">{t.coffeeAndTea}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section
          id="facilities"
          className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-b from-slate-50 to-rose-50/30"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{t.facilitiesTitle}</h2>
                <p className="max-w-[900px] text-gray-600 text-base md:text-xl">{t.facilitiesSubtitle}</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-8 md:py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-teal-100 hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-300">
                <CardHeader>
                  <Wifi className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
                  <CardTitle className="text-lg md:text-xl">{t.highSpeedInternet}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{t.internetDescription}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-green-100 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300">
                <CardHeader>
                  <Coffee className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  <CardTitle className="text-lg md:text-xl">{t.kitchenLounge}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{t.kitchenDescription}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-rose-100 hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300">
                <CardHeader>
                  <Calendar className="w-6 h-6 md:w-8 md:h-8 text-rose-600" />
                  <CardTitle className="text-lg md:text-xl">{t.flexibleWorkspaces}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{t.workspaceDescription}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Network Section (Søsatterne) */}
        <section id="network" className="w-full py-8 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{t.networkTitle}</h2>
                  <p className="text-lg md:text-xl text-gray-600">{t.networkSubtitle}</p>
                  <p className="text-gray-600 text-base md:text-lg">{t.networkDescription1}</p>
                  <p className="text-gray-600 text-base md:text-lg">{t.networkDescription2}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium">{t.monthlyMeetings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium">{t.workshops}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 md:w-5 md:h-5 text-rose-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium">{t.openNetwork}</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                  >
                    <a href="mailto:hej@ivaerkstedet.dk">{t.joinNetwork}</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/lounge-with-pug.jpg"
                  width={600}
                  height={400}
                  alt={t.loungeAlt}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover ring-1 ring-green-200/50 w-full max-w-[600px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Members Section */}
        <section
          id="members"
          className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-b from-green-50/30 to-teal-50/50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{t.membersTitle}</h2>
                <p className="max-w-[900px] text-gray-600 text-base md:text-xl">{t.membersSubtitle}</p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-8 md:py-12">
              <Image
                src="/images/member-photos-wall.jpg"
                width={800}
                height={600}
                alt={t.memberPhotosAlt}
                className="mx-auto rounded-xl object-cover shadow-lg ring-1 ring-teal-200/50 w-full"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{t.galleryTitle}</h2>
                <p className="max-w-[900px] text-gray-600 text-base md:text-xl">{t.gallerySubtitle}</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-4 sm:gap-6 py-8 md:py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Image
                src="/images/main-workspace.jpg"
                width={600}
                height={400}
                alt={t.mainWorkspaceAlt}
                className="aspect-video overflow-hidden rounded-xl object-cover ring-1 ring-teal-200/50 hover:ring-teal-300/70 transition-all duration-300 w-full"
              />
              <Image
                src="/images/kitchen-dining.jpg"
                width={600}
                height={400}
                alt={t.kitchenAlt}
                className="aspect-video overflow-hidden rounded-xl object-cover ring-1 ring-green-200/50 hover:ring-green-300/70 transition-all duration-300 w-full"
              />
              <Image
                src="/images/private-office-booth.jpg"
                width={600}
                height={400}
                alt="Private workspace booth"
                className="aspect-video overflow-hidden rounded-xl object-cover ring-1 ring-rose-200/50 hover:ring-rose-300/70 transition-all duration-300 w-full"
              />
              <Image
                src="/images/outdoor-networking.jpg"
                width={600}
                height={400}
                alt={t.outdoorNetworkingAlt}
                className="aspect-video overflow-hidden rounded-xl object-cover ring-1 ring-teal-200/50 hover:ring-teal-300/70 transition-all duration-300 w-full sm:col-span-2 lg:col-span-1"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-b from-rose-50/30 to-green-50/50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{t.pricingTitle}</h2>
                <p className="max-w-[900px] text-gray-600 text-base md:text-xl">{t.pricingSubtitle}</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-6 sm:gap-8 py-8 md:py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="border-teal-200 hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">{t.dayPass}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{t.dayPassDescription}</CardDescription>
                  <div className="text-2xl md:text-3xl font-bold">150 kr</div>
                  <div className="text-sm text-gray-600">{t.perDay}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>{t.hotDeskAccess}</li>
                    <li>{t.wifiPower}</li>
                    <li>{t.coffeeTea}</li>
                    <li>{t.kitchenAccess}</li>
                  </ul>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    {t.bookDayPass}
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-gradient-to-br from-green-50 to-teal-50 shadow-lg shadow-green-100/50">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-gradient-to-r from-green-600 to-teal-600 text-white">
                    {t.mostPopular}
                  </Badge>
                  <CardTitle className="text-lg md:text-xl">{t.monthlyPass}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{t.monthlyDescription}</CardDescription>
                  <div className="text-xl md:text-2xl font-bold text-gray-700">{t.contactForPricing}</div>
                  <div className="text-sm text-gray-600">{t.flexibleSolutions}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>{t.allFromDay}</li>
                    <li>{t.fixedDesk}</li>
                    <li>{t.access24}</li>
                    <li>{t.meetingRoom2h}</li>
                    <li>{t.mailService}</li>
                    <li>{t.privateOfficeOptions}</li>
                    <li>{t.customSolutions}</li>
                  </ul>
                  <Button
                    asChild
                    className="w-full mt-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                  >
                    <a href="mailto:hej@ivaerkstedet.dk">{t.contactUs}</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location & Contact Section */}
        <section
          id="contact"
          className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-slate-50 to-green-50/30"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{t.findUs}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{t.address}</p>
                      <p className="text-gray-600 text-sm md:text-base">Vangled 32, 6720 Nordby</p>
                      <p className="text-gray-600 text-sm md:text-base">Fanø, Danmark</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{t.openingHours}</p>
                      <p className="text-gray-600 text-sm md:text-base">{t.mondayFriday}</p>
                      <p className="text-gray-600 text-sm md:text-base">{t.weekend}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-base md:text-lg font-semibold mb-3">{t.howToGetHere}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.directions}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl h-64 sm:h-80 lg:h-64 overflow-hidden ring-1 ring-teal-200/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2262.4640601790875!2d8.396656276979797!3d55.45457637297529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b270a7496d3c9%3A0xefe93388c76519b7!2zaVbDplJLc3RlZGV0IEZhbsO4!5e0!3m2!1sen!2sdk!4v1750840218697!5m2!1sen!2sdk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="iVærkstedet location on Fanø"
                  />
                </div>
                <Card className="border-teal-200 bg-gradient-to-br from-teal-50/50 to-green-50/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base md:text-lg">{t.bookVisitCard}</CardTitle>
                    <CardDescription className="text-sm">{t.bookDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-teal-700"
                    >
                      <a href="mailto:hej@ivaerkstedet.dk">{t.bookTour}</a>
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-gray-600 justify-center">
                      <Mail className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span className="break-all">hej@ivaerkstedet.dk</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-teal-600">
            {t.contact}
          </Link>
        </nav>
      </footer>
    </div>
  )
}
