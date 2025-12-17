"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Phone, Mail, X, Info, PenLine as Engine, Fuel, Calendar, Facebook, Instagram } from "lucide-react"
import { FooterNav } from "@/components/footer-nav"

interface Car {
  id: number
  title: string
  price: string
  year: number
  mileage: string
  fuel: string
  transmission: string
  engine: string
  power: string
  features: string[]
  description: string
}

const cars: Car[] = [
  {
    id: 1,
    title: "BMW 3 Series 320i",
    price: "45,000 PLN",
    year: 2020,
    mileage: "65,000 km",
    fuel: "Benzyna",
    transmission: "Automatyczna",
    engine: "2.0L",
    power: "184 KM",
    features: ["Ksenon", "Panoramiczny dach", "Nawigacja", "Automatyczna skrzynia"],
    description:
      "Piękny egzemplarz BMW 3 Series w doskonałym stanie technicznym. Pełna historia serwisowa, bezwypadkowy.",
  },
  {
    id: 2,
    title: "Audi A4 B9",
    price: "48,500 PLN",
    year: 2019,
    mileage: "72,000 km",
    fuel: "Diesel",
    transmission: "Automatyczna",
    engine: "2.0L TDI",
    power: "190 KM",
    features: ["LED", "Virtual Cockpit", "Quattro", "Czujniki parkowania"],
    description:
      "Eleganckia Audi A4 z napędem Quattro. Zadbany pojazd z pełnym wyposażeniem. Idealny do jazdy biznesowej.",
  },
  {
    id: 3,
    title: "Mercedes C-Class",
    price: "52,000 PLN",
    year: 2018,
    mileage: "85,000 km",
    fuel: "Benzyna",
    transmission: "Automatyczna",
    engine: "2.0L",
    power: "205 KM",
    features: ["Skóra", "Panorama", "Tempomat adaptacyjny", "Kamera cofania"],
    description: "Luksusowa Mercedes C-Class. Cały kompas opcji, bardzo komfortowy pojazd. Świeża rejestracja.",
  },
  {
    id: 4,
    title: "Volkswagen Passat",
    price: "38,000 PLN",
    year: 2019,
    mileage: "68,000 km",
    fuel: "Diesel",
    transmission: "Manualna",
    engine: "2.0L TDI",
    power: "150 KM",
    features: ["Kliala", "Podgrzewane fotele", "Bluetooth", "Tempomat"],
    description: "Praktyczny Passat do codziennego użytku. Niezawodny silnik diesla. Ekonomiczny i spacerny.",
  },
  {
    id: 5,
    title: "Skoda Octavia",
    price: "32,000 PLN",
    year: 2020,
    mileage: "55,000 km",
    fuel: "Benzyna",
    transmission: "Automatyczna",
    engine: "1.5L TSI",
    power: "150 KM",
    features: ["Dach otwierany", "Tempomat", "ABS", "Wielofunkcyjna kierownica"],
    description: "Solidna Skoda Octavia z pełnym wyposażeniem. Oszczędna w paliwie, spacerna i solidna.",
  },
  {
    id: 6,
    title: "Hyundai Santa Fe",
    price: "44,000 PLN",
    year: 2021,
    mileage: "42,000 km",
    fuel: "Benzyna",
    transmission: "Automatyczna",
    engine: "2.0L",
    power: "165 KM",
    features: ["7-osobowy", "Panorama", "Kamera 360", "Asystent parkowania"],
    description: "Nowoczesny SUV z 7 miejscami. Idealna do przewozu rodziny. Parapetowy stan techniczny.",
  },
  {
    id: 7,
    title: "Ford Focus",
    price: "28,500 PLN",
    year: 2019,
    mileage: "78,000 km",
    fuel: "Benzyna",
    transmission: "Manualna",
    engine: "1.5L",
    power: "120 KM",
    features: ["Elektryczne szyby", "Zaciski", "ABS", "Podusz powietrzne"],
    description: "Ekonomiczny Ford Focus na co dzień. Niezawodny japońskiego producenta. Świeża kontrola techniczna.",
  },
  {
    id: 8,
    title: "Toyota Corolla",
    price: "35,000 PLN",
    year: 2020,
    mileage: "60,000 km",
    fuel: "Benzyna",
    transmission: "Automatyczna",
    engine: "1.6L",
    power: "122 KM",
    features: ["Niezawodny", "Oszczędny", "Czujniki parkowania", "Bluetooth"],
    description: "Klasyczna Toyota Corolla znana z niezawodności. Mały przebieg, idealny stan. Świetny do jazdy.",
  },
]

export default function AutoHandelPage() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Powrót</span>
          </Link>
          <img
            src="/images/chatgpt-20image-204-20gru-202025-2c-2016-33-11.png"
            alt="LXT Logo"
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-primary">Auto Handel</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Bogata oferta samochodów osobowych i dostawczych. Wszystkie pojazdy sprawdzone i w doskonałym stanie
              technicznym
            </p>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car) => (
              <button
                key={car.id}
                onClick={() => setSelectedCar(car)}
                className="group text-left p-4 rounded-xl border border-border hover:border-accent bg-card hover:bg-secondary transition-all duration-300 cursor-pointer"
              >
                {/* Car Image Placeholder */}
                <div className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-border/50 mb-4 flex items-center justify-center group-hover:border-accent/50 transition-colors overflow-hidden relative">
                  <Engine className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-all group-hover:scale-110" />
                </div>

                {/* Car Info */}
                <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                  {car.title}
                </h3>
                <p className="text-2xl font-bold text-green-600 mb-3">{car.price}</p>

                {/* Quick Stats */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {car.year} | {car.mileage}
                  </p>
                  <p className="flex items-center gap-2">
                    <Fuel className="w-4 h-4" />
                    {car.fuel} | {car.transmission}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">Więcej informacji</span>
                  <Info className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setSelectedCar(null)}
        >
          <div
            className="bg-background rounded-xl border border-border w-full max-w-2xl p-8 relative my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 p-2 hover:bg-accent/20 rounded-lg transition-colors z-10 bg-background border border-border shadow-lg"
            >
              <X className="w-6 h-6 text-primary" />
            </button>

            {/* Car Image */}
            <div className="w-full h-80 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border mb-6 flex items-center justify-center">
              <Engine className="w-32 h-32 text-primary/30" />
            </div>

            {/* Car Title and Price */}
            <h2 className="text-3xl font-bold text-primary mb-2">{selectedCar.title}</h2>
            <p className="text-3xl font-bold text-green-600 mb-6">{selectedCar.price}</p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-border">
              <div>
                <p className="text-xs text-muted-foreground mb-1">ROK PRODUKCJI</p>
                <p className="font-bold text-primary">{selectedCar.year}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">PRZEBIEG</p>
                <p className="font-bold text-primary">{selectedCar.mileage}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">PALIWO</p>
                <p className="font-bold text-primary">{selectedCar.fuel}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">SKRZYNIA</p>
                <p className="font-bold text-primary">{selectedCar.transmission}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">SILNIK</p>
                <p className="font-bold text-primary">{selectedCar.engine}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">MOC</p>
                <p className="font-bold text-primary">{selectedCar.power}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6">{selectedCar.description}</p>

            {/* Features */}
            <div className="mb-6">
              <p className="font-bold text-primary mb-3">Wyposażenie:</p>
              <div className="flex flex-wrap gap-2">
                {selectedCar.features.map((feature, idx) => (
                  <span key={idx} className="px-3 py-1 bg-secondary text-primary rounded-full text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-3 pt-6 border-t border-border">
              <p className="font-bold text-primary mb-3">Zainteresowany?</p>
              <a
                href="tel:+48123456789"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-secondary transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Zadzwoń</p>
                  <p className="font-semibold text-primary">+48 123 456 789</p>
                </div>
              </a>
              <a
                href="mailto:biuro@lxt.pl"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-secondary transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Wiadomość</p>
                  <p className="font-semibold text-primary">biuro@lxt.pl</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <FooterNav currentPage="auto-handel" />
    </main>
  )
}
