import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StreetFlame — Mobile Food Truck HTML Template" },
      {
        name: "description",
        content:
          "Premium ThemeForest-ready HTML5 template for mobile food trucks, street food vendors, catering vans, and pop-up restaurants.",
      },
      { "http-equiv": "refresh", content: "0; url=/template/pages/index.html" } as any,
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/template/pages/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "system-ui", background: "#FFFDF7", color: "#2F2A2A" }}>
      <p>Loading StreetFlame… <a href="/template/pages/index.html" style={{ color: "#E83E8C" }}>Enter site →</a></p>
    </div>
  );
}
