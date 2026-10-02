import type { ReactNode } from "react";
import Image from "next/image";
import { BrandLockup, BOOK_URL } from "@/components/brand";
import { ScrollScrubHero } from "@/components/scroll-scrub-hero";
import { SiteHeader } from "@/components/site-header";

const MARQUEE = [
  "Precision Cuts",
  "Beard Sculpting",
  "Hot Towel Shaves",
  "The C.E.O Treatment",
  "Walk Ins Welcome",
  "Complimentary Beverage",
  "New York",
  "Los Angeles",
];

const SERVICES = [
  {
    name: "V.I.P",
    price: "$170",
    duration: "1 hr 30 min",
    blurb:
      "The ultimate STYLES experience: consultation, precision haircut and styling, beard sculpting, and a rejuvenating facial with scrub, black mask, and steamer.",
  },
  {
    name: "Haircut",
    price: "$45",
    duration: "20 min",
    blurb: "Comes with a consultation, free beverage, and optional shampoo.",
  },
  {
    name: "Haircut and Beard",
    price: "$60",
    duration: "30 min",
    blurb: "Styled to your liking.",
  },
  {
    name: "Beard Trim",
    price: "$15",
    duration: "20 min",
    blurb: "Shape, line up and condition. Sharp and clean.",
  },
  {
    name: "Facial Scrub X Black Mask",
    price: "$30",
    duration: "30 min",
    blurb:
      "Hot facial steamer, exfoliation, hot towel, facial scrub and black mask.",
  },
  {
    name: "Hot Towel Shave",
    price: "$30",
    duration: "20 min",
    blurb: "Classic straight razor shave with hot towels.",
  },
  {
    name: "Kids Cut",
    price: "$35",
    duration: "20 min",
    blurb: "Cut and styled to their liking. Ages 12 & under.",
  },
  {
    name: "Haircut & Beard with Full Enhancements",
    price: "$80",
    duration: "1 hr",
    blurb: "Temporary hair fiber or dye to fill in the hair. Sharper look guaranteed.",
  },
];

const ADDONS = [
  { name: "Shape Up", price: "$15", duration: "15 min" },
  { name: "Full Enhancements", price: "$20", duration: "15 min" },
  { name: "Eyebrows", price: "$10", duration: "10 min" },
  { name: "Nose Wax", price: "$10", duration: "15 min" },
  { name: "Shampoo Scalp Treatment Massage", price: "$10", duration: "10 min" },
  { name: "Small Design", price: "$15", duration: "10 min" },
  { name: "Large Design", price: "$25", duration: "15 min" },
];

const SPACE = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80",
];

const REVIEWS = [
  {
    quote:
      "Real New York City cut experience! Best fade in LA. They had me in and out under 20 minutes with the best cut I've ever had.",
    name: "Max Retallick",
  },
  {
    quote:
      "Warrior is one of the best. He takes his time. 0 mistakes. Fully professional. Amazing beard trim.",
    name: "LJ Stoll",
  },
  {
    quote:
      "You will get the best haircut of your life here. They always go above and beyond. 10/10.",
    name: "Axan",
  },
];

const FAQS = [
  {
    q: "Is STYLES Barber Lounge open on Sundays in Los Angeles?",
    a: "Yes. Open Sundays from 8am to 8pm at 111 East 11th Street. All services run on Sundays. Book online through Squire.",
  },
  {
    q: "Are you open on Saturdays?",
    a: "No. Closed on Saturdays at both locations. Open Sunday through Friday, 8am to 8pm.",
  },
  {
    q: "How much is a haircut?",
    a: "A haircut is $45 and includes a consultation, free beverage and optional shampoo. Haircut and beard is $60. The C.E.O Treatment is $100 and The V.I.P is $170.",
  },
  {
    q: "Do you take walk ins?",
    a: "Walk ins are welcome whenever a chair is open. Booking guarantees your time.",
  },
  {
    q: "Is the shop near Crypto.com Arena and LA Live?",
    a: "Yes. 111 East 11th Street, Los Angeles, CA 90015 — a short ride from Crypto.com Arena and LA Live.",
  },
];

function BookButton({
  children = "Book Your Chair",
  variant = "primary",
  className = "",
}: {
  children?: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-royal text-snow hover:brightness-110"
      : "border border-snow/80 text-snow hover:bg-snow/10";

  return (
    <a
      href={BOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const marqueeItems = [...MARQUEE, ...MARQUEE];

  return (
    <>
      <SiteHeader />

      <main>
        <ScrollScrubHero />

        {/* Marquee */}
        <div
          id="experience"
          className="overflow-hidden border-y border-snow/10 bg-void py-4"
          aria-hidden
        >
          <div className="marquee-track flex gap-10 whitespace-nowrap px-4">
            {marqueeItems.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="font-display inline-flex items-center gap-10 text-sm tracking-[0.18em] text-snow/85"
              >
                {item}
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-royal" />
              </span>
            ))}
          </div>
        </div>

        {/* Why */}
        <section className="border-t border-snow/10 bg-ink py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
            <div>
              <p className="text-xs tracking-[0.22em] text-mute uppercase">Why We Do It</p>
              <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] text-snow">
                More than a haircut.
                <br />
                It&apos;s an experience.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-mute">
                A great cut changes more than your hair. It changes how you carry
                yourself. We chase precision harder than anyone and cut every
                trend the moment it lands, sharper and cleaner than the shop
                down the street. Every chair is set up around your comfort, and
                you leave with a finish you can feel walking out the door.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mute">
                Founded in 2018 by Shalom Styles who opened his first shop at
                just twenty. Since then, STYLES has become a name celebrities and
                tastemakers trust, with shops in New York and Los Angeles that
                hold the same standard.
              </p>
              <p className="font-display mt-8 text-2xl text-snow">
                We STYLE. You SMILE!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 self-end sm:grid-cols-3 md:grid-cols-1">
              {[
                { value: "15 years", label: "Behind the chair" },
                { value: "2 Cities", label: "New York & Los Angeles" },
                { value: "1,000+", label: "Google reviews" },
              ].map((stat) => (
                <div key={stat.value} className="border-t border-snow/15 pt-4">
                  <p className="font-display text-3xl text-royal md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-mute">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CEO */}
        <section className="bg-void py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:grid-cols-2 md:px-8">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80"
                alt="Barber finishing a precision cut"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.22em] text-mute uppercase">The Signature</p>
              <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] text-snow">
                The C.E.O
                <br />
                Treatment
              </h2>
              <p className="mt-4 max-w-md text-mute">
                The complete head to finish treatment our regulars come back for.
                One hour, every detail, zero compromise.
              </p>
              <p className="font-data mt-6 text-3xl text-snow">
                $100{" "}
                <span className="text-base text-mute">one hour, complete</span>
              </p>
              <ul className="mt-6 space-y-2 text-snow/90">
                {[
                  "Facial Scrub x Black Mask",
                  "Nose Wax",
                  "Haircut & Beard",
                  "Eyebrows",
                  "Complimentary beverages",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-royal" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <BookButton>Book The C.E.O Treatment</BookButton>
              </div>
              <div className="mt-8 border border-snow/12 bg-ink p-5">
                <p className="text-xs tracking-[0.18em] text-royal uppercase">
                  Go further: The V.I.P
                </p>
                <p className="font-data mt-2 text-2xl text-snow">$170</p>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  The ultimate STYLES experience — consultation, precision cut,
                  beard sculpting, and a full facial with steamer, scrub, and
                  black mask. 1 hr 30 min.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="services" className="border-t border-snow/10 bg-ink py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <p className="text-xs tracking-[0.22em] text-mute uppercase">The Menu</p>
            <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,3rem)] text-snow">
              Craft, priced fair.
            </h2>
            <p className="mt-4 max-w-2xl text-mute">
              Every visit starts with a consultation. Walk-ins are welcome, but
              booking guarantees your chair.
            </p>

            <div className="mt-12 divide-y divide-snow/10 border-y border-snow/10">
              {SERVICES.map((service) => (
                <div
                  key={service.name}
                  className="flex flex-col gap-4 py-6 md:flex-row md:items-start md:justify-between"
                >
                  <div className="max-w-xl">
                    <h3 className="font-display text-2xl text-snow">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{service.blurb}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 md:flex-col md:items-end md:gap-2">
                    <p className="font-data text-xl text-snow">{service.price}</p>
                    <p className="text-sm text-mute">{service.duration}</p>
                    <BookButton variant="ghost" className="!px-4 !py-2 text-xs">
                      Book this
                    </BookButton>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <h3 className="font-display text-xl text-snow">Quick add ons</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {ADDONS.map((addon) => (
                  <div
                    key={addon.name}
                    className="flex items-baseline justify-between gap-3 border border-snow/10 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm text-snow">{addon.name}</p>
                      <p className="text-xs text-mute">{addon.duration}</p>
                    </div>
                    <p className="font-data text-sm text-snow">{addon.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Space */}
        <section id="space" className="bg-void py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <p className="text-xs tracking-[0.22em] text-mute uppercase">The Space</p>
            <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,3rem)] text-snow">
              Marble, leather, light.
            </h2>
            <p className="mt-4 max-w-xl text-mute">
              Black leather chairs, white marble floors and the signature
              geometric glow. A space built to make the cut feel like a moment.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {SPACE.map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden ${i === 0 ? "col-span-2 aspect-[16/10] md:col-span-2" : "aspect-square"}`}
                >
                  <Image
                    src={src}
                    alt={`Styles Barber Lounge space ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="border-t border-snow/10 bg-ink py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-snow">
              Loved in two cities.
            </h2>
            <p className="mt-3 text-mute">
              Five star cuts across more than a thousand Google reviews.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-mute">
              <span>5★ Google rating</span>
              <span>·</span>
              <span>1,000+ reviews</span>
              <span>·</span>
              <span>2 Cities · NY + LA</span>
              <span>·</span>
              <span>Est. 2018</span>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {REVIEWS.map((review) => (
                <blockquote
                  key={review.name}
                  className="border border-snow/10 bg-void p-6"
                >
                  <p className="text-sm leading-relaxed text-snow/90">
                    “{review.quote}”
                  </p>
                  <footer className="mt-5 text-sm text-mute">
                    <span className="text-snow">{review.name}</span>
                    <span> · Los Angeles · Google</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Location + FAQ */}
        <section id="location" className="bg-void py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-5 md:grid-cols-2 md:px-8">
            <div>
              <p className="text-xs tracking-[0.22em] text-mute uppercase">
                The Neighborhood
              </p>
              <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] text-snow">
                Your barbershop in Los Angeles.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-mute">
                STYLES Barber Lounge sits at 111 East 11th Street, Los Angeles,
                CA 90015 — a short ride from Crypto.com Arena and LA Live. With 5
                stars across 1000+ Google reviews, it is one of the highest rated
                barbershops in Los Angeles.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <h3 className="text-xs tracking-[0.18em] text-mute uppercase">Address</h3>
                  <p className="mt-2 text-sm text-snow">
                    111 East 11th Street
                    <br />
                    Los Angeles, CA 90015
                  </p>
                  <a
                    href="https://maps.google.com/?q=111+East+11th+Street+Los+Angeles+CA+90015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-royal hover:underline"
                  >
                    Directions
                  </a>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.18em] text-mute uppercase">Hours</h3>
                  <p className="mt-2 text-sm text-snow">
                    Sunday to Friday
                    <br />
                    8AM to 8PM
                  </p>
                  <p className="mt-1 text-sm text-mute">Closed Saturdays</p>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.18em] text-mute uppercase">Call or book</h3>
                  <a
                    href="tel:+12132058906"
                    className="mt-2 block text-sm text-snow hover:text-royal"
                  >
                    (213) 205-8906
                  </a>
                  <a
                    href={BOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-royal hover:underline"
                  >
                    Book on Squire
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.22em] text-mute uppercase">Good to know</p>
              <h2 className="font-display mt-3 text-[clamp(1.5rem,3vw,2.25rem)] text-snow">
                Questions, answered.
              </h2>
              <div className="mt-6 divide-y divide-snow/10 border-y border-snow/10">
                {FAQS.map((faq) => (
                  <details key={faq.q} className="group py-4">
                    <summary className="cursor-pointer list-none pr-8 text-left text-snow marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start justify-between gap-4">
                        <span className="font-medium">{faq.q}</span>
                        <span className="text-mute transition group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-mute">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Two coasts */}
        <section className="border-t border-snow/10 bg-ink py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <p className="text-xs tracking-[0.22em] text-mute uppercase">Find Us</p>
            <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,3rem)] text-snow">
              Two coasts. One standard.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  city: "New York",
                  address: "2234 Victory Boulevard\nStaten Island, NY 10314",
                  phone: "(718) 524-6011",
                  tel: "+17185246011",
                },
                {
                  city: "Los Angeles",
                  address: "111 East 11th Street\nLos Angeles, CA 90015",
                  phone: "(213) 205-8906",
                  tel: "+12132058906",
                },
              ].map((loc) => (
                <div key={loc.city} className="border border-snow/10 bg-void p-6 md:p-8">
                  <h3 className="font-display text-2xl text-snow">{loc.city}</h3>
                  <p className="mt-4 whitespace-pre-line text-sm text-mute">{loc.address}</p>
                  <p className="mt-3 text-sm text-mute">
                    Sun to Fri · 8AM to 8PM · Closed Saturdays
                  </p>
                  <a
                    href={`tel:${loc.tel}`}
                    className="mt-4 inline-block text-sm text-snow hover:text-royal"
                  >
                    {loc.phone}
                  </a>
                  <div className="mt-6">
                    <BookButton>Book {loc.city}</BookButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <Image
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-void/70" />
          <div className="relative mx-auto max-w-[1200px] px-5 text-center md:px-8">
            <p className="text-xs tracking-[0.22em] text-royal uppercase">
              Your chair is waiting
            </p>
            <h2 className="font-display mt-4 text-[clamp(2rem,5vw,4rem)] text-snow">
              Walk out sharper.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-mute">
              Book in under a minute. New York or Los Angeles, same craft, same
              standard.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <BookButton>Book Now</BookButton>
              <a
                href="tel:+12132058906"
                className="inline-flex items-center justify-center rounded-full border border-snow/80 px-6 py-3 text-sm font-medium text-snow transition hover:bg-snow/10"
              >
                Call LA
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-snow/10 bg-ink py-14">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
          <div>
            <BrandLockup />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
              Stylists for the Stars. Premium barbershop in New York and Los
              Angeles since 2018.
            </p>
            <p className="font-display mt-6 text-lg text-snow">We STYLE. You SMILE!</p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.18em] text-mute uppercase">New York</h3>
            <p className="mt-3 text-sm text-snow">
              2234 Victory Boulevard
              <br />
              Staten Island, NY 10314
            </p>
            <a href="tel:+17185246011" className="mt-2 block text-sm text-mute hover:text-royal">
              (718) 524-6011
            </a>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.18em] text-mute uppercase">Los Angeles</h3>
            <p className="mt-3 text-sm text-snow">
              111 East 11th Street
              <br />
              Los Angeles, CA 90015
            </p>
            <a href="tel:+12132058906" className="mt-2 block text-sm text-mute hover:text-royal">
              (213) 205-8906
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1200px] flex-col gap-3 px-5 text-xs text-mute md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} STYLES Barber Lounge. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://www.instagram.com/designby.abhay/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-snow transition hover:text-royal"
            >
              design by abhay
            </a>
            {" and "}
            <a
              href="https://www.engazedigital.com/questionnaire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-snow transition hover:text-royal"
            >
              Engaze Digital
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
