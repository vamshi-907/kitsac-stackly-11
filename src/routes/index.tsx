import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StreetFlame — Mobile Food Truck HTML Template" },
      {
        name: "description",
        content:
          "Premium ThemeForest-ready HTML5 template for mobile food trucks, street food vendors, catering vans, and pop-up restaurants. 17 pages, dark/RTL support, Bootstrap 5.",
      },
      { property: "og:title", content: "StreetFlame — Mobile Food Truck HTML Template" },
      { property: "og:description", content: "Bold, vibrant, festival-energy HTML template for street food brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const pages: Array<{ href: string; label: string; desc: string; icon: string }> = [
    { href: "/template/pages/index.html", label: "Home", desc: "Hero, specials, weekly route", icon: "🏠" },
    { href: "/template/pages/menu.html", label: "Menu", desc: "Full menu grid + filters", icon: "🍔" },
    { href: "/template/pages/menu-details.html", label: "Menu Details", desc: "Single dish deep-dive", icon: "🌶️" },
    { href: "/template/pages/locations.html", label: "Locations", desc: "Weekly schedule + live map", icon: "📍" },
    { href: "/template/pages/catering.html", label: "Catering", desc: "Packages + event types", icon: "🎉" },
    { href: "/template/pages/catering-details.html", label: "Catering Details", desc: "Premium package page", icon: "📋" },
    { href: "/template/pages/booking.html", label: "Booking", desc: "Full catering form", icon: "📅" },
    { href: "/template/pages/gallery.html", label: "Gallery", desc: "Masonry + lightbox", icon: "📸" },
    { href: "/template/pages/testimonials.html", label: "Testimonials", desc: "Customers, brands, festivals", icon: "⭐" },
    { href: "/template/pages/blog.html", label: "Blog", desc: "Story grid + pagination", icon: "✍️" },
    { href: "/template/pages/blog-details.html", label: "Blog Details", desc: "Article + comments", icon: "📖" },
    { href: "/template/pages/about.html", label: "About", desc: "Story, timeline, team", icon: "👥" },
    { href: "/template/pages/contact.html", label: "Contact", desc: "Form + map + channels", icon: "✉️" },
    { href: "/template/pages/faq.html", label: "FAQ", desc: "Grouped accordions", icon: "❓" },
    { href: "/template/pages/merch-preview.html", label: "Merch", desc: "Product grid preview", icon: "👕" },
    { href: "/template/pages/404.html", label: "404", desc: "Custom not-found page", icon: "🚚" },
    { href: "/template/pages/coming-soon.html", label: "Coming Soon", desc: "Countdown + subscribe", icon: "⏳" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#FFFDF7", fontFamily: "system-ui, sans-serif", color: "#2F2A2A" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(232,62,140,.12)",
              color: "#E83E8C",
              padding: "8px 18px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            🔥 StreetFlame · Premium HTML Template
          </div>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 16px",
              background: "linear-gradient(135deg,#E83E8C 0%,#FFA8B6 55%,#27D3C3 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Street Food Worth Chasing.
          </h1>
          <p style={{ maxWidth: 620, margin: "0 auto 28px", color: "#6b6363", fontSize: "1.05rem" }}>
            A production-ready ThemeForest HTML template for mobile food trucks, street food vendors, catering vans,
            and pop-up restaurants. 17 pages · dark mode · RTL · WCAG 2.1 AA · Bootstrap 5.
          </p>
          <a
            href="/template/pages/index.html"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 28px",
              background: "linear-gradient(135deg,#E83E8C 0%,#FFA8B6 55%,#27D3C3 100%)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              borderRadius: 999,
              boxShadow: "0 10px 24px rgba(232,62,140,.35)",
            }}
          >
            View Live Demo →
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {pages.map((p) => (
            <a
              key={p.href}
              href={p.href}
              style={{
                display: "block",
                background: "#fff",
                border: "1px solid rgba(47,42,42,.08)",
                borderRadius: 20,
                padding: 22,
                textDecoration: "none",
                color: "#2F2A2A",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(47,42,42,.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "1.8rem" }}>{p.icon}</div>
              <div style={{ fontWeight: 800, fontSize: "1.05rem", marginTop: 8 }}>{p.label}</div>
              <div style={{ fontSize: ".85rem", color: "#6b6363", marginTop: 4 }}>{p.desc}</div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 56, color: "#6b6363", fontSize: ".9rem" }}>
          Documentation: <a href="/template/documentation/README.md" style={{ color: "#E83E8C" }}>README.md</a>
          &nbsp;·&nbsp; Source in <code style={{ background: "#F4F1EC", padding: "2px 8px", borderRadius: 6 }}>public/template/</code>
        </div>
      </div>
    </div>
  );
}
