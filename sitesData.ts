
export const SITES_DATA = [
  { name: "DewaQQ", slug: "dewaqq", category: "PKV Games", rating: 4.9 },
  { name: "Lapak303", slug: "lapak303", category: "Slot", rating: 4.8 },
  { name: "SundulQQ", slug: "sundulqq", category: "PKV Games", rating: 4.7 },
  { name: "SaktiQQ", slug: "saktiqq", category: "PKV Games", rating: 4.9 },
  { name: "WargaQQ", slug: "wargaqq", category: "PKV Games", rating: 4.8 },
  { name: "LigaQQ", slug: "ligaqq", category: "PKV Games", rating: 4.6 },
  { name: "QQEmas", slug: "qqemas", category: "Slot", rating: 5.0 },
  { name: "DewaTogel", slug: "dewatogel", category: "Togel", rating: 4.9 },
  { name: "IdnPlay88", slug: "idnplay88", category: "IDN Play", rating: 4.8 },
  { name: "JakartaQQ", slug: "jakartaqq", category: "PKV Games", rating: 4.7 },
  { name: "HokiQQ", slug: "hokiqq", category: "PKV Games", rating: 4.8 },
  { name: "MainDomino", slug: "maindomino", category: "PKV Games", rating: 4.5 },
  { name: "MasterQQ", slug: "masterqq", category: "PKV Games", rating: 4.9 },
  { name: "ChampionQQ", slug: "championqq", category: "PKV Games", rating: 4.8 },
  { name: "QQFull", slug: "qqfull", category: "Slot", rating: 4.7 },
  { name: "MuliaQQ", slug: "muliaqq", category: "PKV Games", rating: 4.9 },
  { name: "PandaQQ", slug: "pandaqq", category: "PKV Games", rating: 4.8 },
  { name: "BerjayaQQ", slug: "berjayaqq", category: "PKV Games", rating: 4.7 },
  { name: "PasangTogel", slug: "pasangtogel", category: "Togel", rating: 4.8 },
  { name: "IndoSitus", slug: "indositus", category: "Slot", rating: 4.9 },
  // ... Generating more up to 130 sites effectively for the demo structure
  ...Array.from({ length: 110 }, (_, i) => ({
    name: `Situs ${i + 1}`,
    slug: `situs-${i + 1}`,
    category: ["PKV Games", "Togel", "Slot", "IDN Play"][i % 4],
    rating: (3.5 + Math.random() * 1.5).toFixed(1)
  }))
].map(site => ({
  ...site,
  image_url: `https://gamespkv51.online/${site.slug}.png`
}));

export const CATEGORIES = ["Semua", "PKV Games", "Togel", "Slot", "IDN Play"];
