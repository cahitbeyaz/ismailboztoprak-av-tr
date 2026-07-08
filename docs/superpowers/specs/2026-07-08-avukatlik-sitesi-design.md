# Av. İsmail Boztoprak — Avukatlık Sitesi Tasarımı

Tarih: 2026-07-08 · Durum: Onaylandı

## Amaç

Av. İsmail Boztoprak için Türkçe, tek sayfalık, statik bir tanıtım sitesi.
Netlify ücretsiz planında yayınlanacak. Hedef: potansiyel müvekkillerin
büroyu tanıması ve kolayca iletişime geçmesi.

## Teknoloji

- Saf HTML + CSS + minimum JavaScript. Framework ve build adımı yok.
- Dosyalar: `index.html`, `css/style.css`, `js/main.js`, `favicon.svg`.
- Deploy: Netlify (git bağlantısı veya sürükle-bırak). `netlify.toml` gerekmez;
  kök dizin doğrudan yayınlanır.

## Sayfa Yapısı (tek sayfa)

1. **Üst menü** — Sol: "Av. İsmail Boztoprak". Sağ: Hakkında, Çalışma
   Alanları, İletişim (bölüme yumuşak kaydırma). Mobilde hamburger menü
   (tek JS davranışı: aç/kapa + bağlantıya tıklayınca kapan).
2. **Hero** — Büyük başlık, 1-2 cümlelik güven veren tanıtım, "İletişime
   Geçin" birincil buton + "Çalışma Alanları" ikincil bağlantı.
3. **Hakkında** — Kısa özgeçmiş metni (yer tutucu), fotoğraf alanı
   (yer tutucu; gri kutu + baş harfler).
4. **Çalışma Alanları** — 4 kart: Ceza Hukuku, Aile Hukuku, İş Hukuku,
   Gayrimenkul ve Miras Hukuku. Her kartta inline SVG ikon + 2-3 cümle
   genel tanıtım metni.
5. **İletişim** — İki sütun (mobilde alt alta):
   - Netlify Forms formu: ad soyad, telefon, e-posta, mesaj; `data-netlify`,
     honeypot alanı (`netlify-honeypot`), gönderim sonrası teşekkür durumu.
   - Bilgiler: adres **Hacıhalil Mahallesi Ali Rıza Efendi Caddesi Yağız
     Apartmanı No:37/1 Gebze/Kocaeli** (gerçek), telefon ve e-posta YER
     TUTUCU. Google Maps iframe (adres araması gömülü).
6. **Alt bilgi** — Telif satırı + "Bu sitedeki bilgiler hukuki tavsiye
   niteliği taşımaz; bilgilendirme amaçlıdır." uyarısı.

## Görsel Stil (modern, açık)

- Beyaz/açık gri zemin, koyu lacivert (`#1b2a4a` civarı) vurgu, tek vurgu rengi.
- Başlıklarda serif (sistem: Georgia/'Times New Roman' yığını veya self-host),
  gövdede modern sans-serif sistem yığını. Harici font/CDN bağımlılığı yok.
- Bol boşluk, yumuşak gölgeli kartlar, 8px köşe yarıçapı, mobil öncelikli
  responsive tasarım.

## SEO / Teknik

- `lang="tr"`, UTF-8, meta description, Open Graph etiketleri.
- JSON-LD: `Attorney` (schema.org) — ad, adres (Gebze/Kocaeli), çalışma alanları.
- Semantik HTML (header/main/section/footer), erişilebilir form etiketleri.
- Favicon: terazi temalı basit SVG.

## Kapsam Dışı

- Blog/makale, çoklu dil, CMS, analytics. İhtiyaç olursa sonra eklenir.

## Başarı Ölçütü

- Site tek sayfada tüm bölümleri gösterir, mobil ve masaüstünde düzgün görünür.
- Form Netlify'da algılanır (deploy sonrası panelde "form" görünür).
- Lighthouse temel skorları yüksek (statik, bağımlılıksız yapı gereği).
