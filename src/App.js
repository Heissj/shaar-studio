import { useState } from 'react';

const portfolioImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800', title: 'Tokyo Drift', camera: 'X-Pro3', lens: '23mm f/1.4', location: 'Shibuya', category: 'street' },
  { id: 2, src: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600', title: 'Morning Commute', camera: 'X-T5', lens: '56mm f/1.2', location: 'Shinjuku', category: 'street' },
  { id: 3, src: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=800', title: 'The Wait', camera: 'GR IIIx', lens: '40mm f/2.8', location: 'Kyoto', category: 'street' },
  { id: 4, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', title: 'First Dance', camera: 'X-T5', lens: '56mm f/1.2', location: 'Tokyo', category: 'event' },
  { id: 5, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', title: 'Conference', camera: 'X-Pro3', lens: '23mm f/1.4', location: 'Osaka', category: 'event' },
  { id: 6, src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600', title: 'Celebration', camera: 'X-T5', lens: '35mm f/1.4', location: 'Kyoto', category: 'event' },
  { id: 7, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600', title: 'Natural Light', camera: 'X-T5', lens: '56mm f/1.2', location: 'Studio', category: 'portrait' },
  { id: 8, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600', title: 'The Artist', camera: 'X-Pro3', lens: '90mm f/2', location: 'Tokyo', category: 'portrait' },
  { id: 9, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600', title: 'Golden Hour', camera: 'X-T5', lens: '56mm f/1.2', location: 'Shibuya', category: 'portrait' },
  { id: 10, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: 'Alpine Dawn', camera: 'X-T5', lens: '16mm f/1.4', location: 'Swiss Alps', category: 'landscape' },
  { id: 11, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800', title: 'Mountain Peak', camera: 'X-Pro3', lens: '10-24mm', location: 'Patagonia', category: 'landscape' },
  { id: 12, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800', title: 'Lake Reflection', camera: 'X-T5', lens: '16mm f/1.4', location: 'New Zealand', category: 'landscape' },
];

const clients = [
  { id: 1, name: 'Vogue Japan', email: 'editor@vogue.jp', status: 'active', project: 'Tokyo Editorial' },
  { id: 2, name: 'National Geographic', email: 'photo@natgeo.com', status: 'active', project: 'Urban Flow' },
  { id: 3, name: 'The New York Times', email: 'photo@nytimes.com', status: 'pending', project: 'Street Series' },
];

const workspace = [
  { id: 1, name: 'Tokyo Nights - Selects', type: 'folder', count: 24, date: '2025-01-15' },
  { id: 2, name: 'Vogue Delivery', type: 'folder', count: 12, date: '2025-01-14' },
  { id: 3, name: 'January RAWs', type: 'folder', count: 847, date: '2025-01-13' },
];

export default function App() {
  const [page, setPage] = useState('work');
  const [lightbox, setLightbox] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminTab, setAdminTab] = useState('dashboard');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'street', label: 'Street' },
    { id: 'event', label: 'Event' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'landscape', label: 'Landscape' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  const bg = darkMode ? '#1a1a1a' : '#f5f5f5';
  const bgAlt = darkMode ? '#111' : '#fff';
  const text = darkMode ? '#fff' : '#111';
  const textMuted = darkMode ? '#888' : '#666';
  const border = darkMode ? '#333' : '#ddd';
  const accent = '#e53935';
  const fontMono = "'Roboto Mono', monospace";

  return (
    <div style={{ minHeight: '100vh', backgroundColor: bg, color: text, fontFamily: "'Inter', sans-serif", transition: 'all 0.3s' }}>
      
      {/* HEADER */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: bg, zIndex: 100, padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => { setPage('work'); setIsAdmin(false); }} style={{ background: 'none', border: 'none', color: text, fontSize: '13px', letterSpacing: '4px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: accent }}></span>
          SHAAR STUDIO
        </button>
        
        <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {['work', 'about', 'contact'].map(item => (
            <button key={item} onClick={() => { setPage(item); setIsAdmin(false); }} style={{ background: 'none', border: 'none', color: page === item && !isAdmin ? text : textMuted, fontSize: '12px', letterSpacing: '2px', cursor: 'pointer', textTransform: 'uppercase' }}>
              {item}
            </button>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'none', border: `1px solid ${text}`, color: text, fontSize: '11px', letterSpacing: '2px', padding: '8px 16px', cursor: 'pointer' }}>
            {darkMode ? 'LIGHT' : 'DARK'}
          </button>
          <button onClick={() => setIsAdmin(!isAdmin)} style={{ background: 'none', border: 'none', color: textMuted, fontSize: '11px', cursor: 'pointer' }}>
            {isAdmin ? '← SITE' : 'ADMIN'}
          </button>
        </nav>
      </header>

      {/* LIGHTBOX */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', cursor: 'zoom-out' }}>
          <img src={lightbox.src} alt={lightbox.title} style={{ maxHeight: '75vh', maxWidth: '90%', objectFit: 'contain' }} />
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 400 }}>{lightbox.title}</h3>
            <p style={{ margin: '8px 0 0', fontSize: '11px', color: '#666', fontFamily: fontMono }}>{lightbox.camera} · {lightbox.lens} · {lightbox.location}</p>
          </div>
        </div>
      )}

      {/* MAIN */}
      <main style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '40px', paddingRight: '40px', maxWidth: '1400px', margin: '0 auto' }}>
        
        {isAdmin ? (
          /* ADMIN PANEL */
          <div>
            <div style={{ marginBottom: '60px' }}>
              <p style={{ fontSize: '11px', color: textMuted, letterSpacing: '3px', marginBottom: '16px', fontFamily: fontMono }}>ADMIN PANEL</p>
              <h1 style={{ fontSize: '42px', fontWeight: 300, margin: 0 }}>Dashboard</h1>
            </div>

            <div style={{ display: 'flex', gap: '32px', borderBottom: `1px solid ${border}`, marginBottom: '48px' }}>
              {['dashboard', 'clients', 'workspace'].map(tab => (
                <button key={tab} onClick={() => setAdminTab(tab)} style={{ background: 'none', border: 'none', borderBottom: adminTab === tab ? `2px solid ${accent}` : '2px solid transparent', color: adminTab === tab ? text : textMuted, padding: '16px 0', cursor: 'pointer', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '2px', marginBottom: '-1px' }}>
                  {tab}
                </button>
              ))}
            </div>

            {adminTab === 'dashboard' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                {[{ label: 'IMAGES', value: portfolioImages.length }, { label: 'CLIENTS', value: clients.filter(c => c.status === 'active').length }, { label: 'CATEGORIES', value: 4 }].map((stat, i) => (
                  <div key={i} style={{ backgroundColor: bgAlt, padding: '32px', border: `1px solid ${border}` }}>
                    <p style={{ fontSize: '10px', color: textMuted, letterSpacing: '3px', margin: 0, fontFamily: fontMono }}>{stat.label}</p>
                    <p style={{ fontSize: '48px', fontWeight: 300, margin: '12px 0 0' }}>{stat.value}</p>
                  </div>
                ))}
              </div>
            )}

            {adminTab === 'clients' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 400, margin: 0 }}>Client Management</h2>
                  <button style={{ backgroundColor: accent, color: '#fff', border: 'none', padding: '10px 20px', fontSize: '11px', cursor: 'pointer' }}>+ NEW CLIENT</button>
                </div>
                {clients.map(c => (
                  <div key={c.id} style={{ backgroundColor: bgAlt, padding: '20px 24px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${border}` }}>
                    <div>
                      <p style={{ margin: 0, fontWeight: 500, fontSize: '14px' }}>{c.name}</p>
                      <p style={{ margin: '4px 0 0', fontSize: '11px', color: textMuted, fontFamily: fontMono }}>{c.email}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '10px', padding: '4px 10px', backgroundColor: c.status === 'active' ? 'rgba(76,175,80,0.2)' : 'rgba(255,193,7,0.2)', color: c.status === 'active' ? '#4caf50' : '#ffc107' }}>{c.status}</span>
                      <p style={{ margin: '8px 0 0', fontSize: '11px', color: textMuted, fontFamily: fontMono }}>{c.project}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {adminTab === 'workspace' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 400, margin: 0 }}>File Workspace</h2>
                  <button style={{ backgroundColor: accent, color: '#fff', border: 'none', padding: '10px 20px', fontSize: '11px', cursor: 'pointer' }}>+ NEW FOLDER</button>
                </div>
                {workspace.map(item => (
                  <div key={item.id} style={{ backgroundColor: bgAlt, padding: '20px 24px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${border}`, cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '20px' }}>📁</span>
                      <div>
                        <p style={{ margin: 0, fontSize: '14px' }}>{item.name}</p>
                        <p style={{ margin: '4px 0 0', fontSize: '11px', color: textMuted, fontFamily: fontMono }}>{item.count} items</p>
                      </div>
                    </div>
                    <p style={{ fontSize: '11px', color: textMuted, fontFamily: fontMono, margin: 0 }}>{item.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* WORK PAGE */}
            {page === 'work' && (
              <div>
                <div style={{ marginBottom: '80px' }}>
                  <p style={{ fontSize: '11px', color: textMuted, letterSpacing: '3px', marginBottom: '20px', fontFamily: fontMono }}>STREET · EVENT · PORTRAIT · LANDSCAPE</p>
                  <h1 style={{ fontSize: '52px', fontWeight: 300, margin: 0, lineHeight: 1.1 }}>Capturing the decisive moment</h1>
                </div>

                <div style={{ marginBottom: '48px' }}>
                  <div style={{ display: 'flex', gap: '32px', borderBottom: `1px solid ${border}`, paddingBottom: '16px' }}>
                    {categories.map(cat => (
                      <button key={cat.id} onClick={() => setActiveCategory(cat.id)} style={{ background: 'none', border: 'none', color: activeCategory === cat.id ? text : textMuted, fontSize: '12px', letterSpacing: '2px', cursor: 'pointer', textTransform: 'uppercase', paddingBottom: '16px', marginBottom: '-17px', borderBottom: activeCategory === cat.id ? `2px solid ${accent}` : '2px solid transparent' }}>
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                  {filteredImages.map(img => (
                    <div key={img.id} onClick={() => setLightbox(img)} style={{ cursor: 'zoom-in' }}>
                      <div style={{ aspectRatio: '3/2', backgroundImage: `url(${img.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                      <div style={{ marginTop: '12px' }}>
                        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 400 }}>{img.title}</h4>
                        <p style={{ margin: '4px 0 0', fontSize: '10px', color: textMuted, fontFamily: fontMono }}>{img.camera} · {img.lens}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ABOUT PAGE */}
            {page === 'about' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', maxWidth: '1000px' }}>
                <div style={{ aspectRatio: '4/5', backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}></div>
                <div style={{ paddingTop: '40px' }}>
                  <p style={{ fontSize: '11px', color: textMuted, letterSpacing: '3px', marginBottom: '24px', fontFamily: fontMono }}>BIOGRAPHY</p>
                  <p style={{ fontSize: '15px', lineHeight: 1.8, color: text, marginBottom: '48px', fontWeight: 300 }}>
                    Professional photographer specializing in street, event, portrait, and landscape photography. Based in Tokyo, capturing moments that tell stories.
                  </p>
                  <p style={{ fontSize: '11px', color: textMuted, letterSpacing: '3px', marginBottom: '20px', fontFamily: fontMono }}>THE KIT</p>
                  <div style={{ fontSize: '13px', color: text, fontFamily: fontMono, lineHeight: 2.2, fontWeight: 300 }}>
                    <p style={{ margin: 0 }}>Fujifilm X-T5</p>
                    <p style={{ margin: 0 }}>Fujifilm X-Pro3</p>
                    <p style={{ margin: 0 }}>XF 23mm f/1.4 R LM WR</p>
                    <p style={{ margin: 0 }}>XF 56mm f/1.2 R WR</p>
                  </div>
                </div>
              </div>
            )}

            {/* CONTACT PAGE */}
            {page === 'contact' && (
              <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '600px' }}>
                <p style={{ fontSize: '11px', color: textMuted, letterSpacing: '3px', marginBottom: '24px', fontFamily: fontMono }}>GET IN TOUCH</p>
                <h1 style={{ fontSize: '42px', fontWeight: 300, margin: '0 0 24px', lineHeight: 1.3 }}>Available for assignments worldwide</h1>
                <a href="mailto:hello@shaarstudio.com" style={{ fontSize: '18px', color: text, textDecoration: 'none', fontFamily: fontMono, marginBottom: '48px', borderBottom: `1px solid ${border}`, paddingBottom: '4px', display: 'inline-block' }}>
                  hello@shaarstudio.com
                </a>
                <div style={{ display: 'flex', gap: '32px', fontSize: '11px', fontFamily: fontMono, letterSpacing: '2px' }}>
                  <a href="#" style={{ color: textMuted, textDecoration: 'none' }}>INSTAGRAM</a>
                  <a href="#" style={{ color: textMuted, textDecoration: 'none' }}>TWITTER</a>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer style={{ padding: '40px', borderTop: `1px solid ${border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '10px', color: textMuted, letterSpacing: '2px', margin: 0, fontFamily: fontMono }}>© 2025 SHAAR STUDIO</p>
        <p style={{ fontSize: '10px', color: textMuted, letterSpacing: '2px', margin: 0, fontFamily: fontMono }}>STREET · EVENT · PORTRAIT · LANDSCAPE</p>
      </footer>
    </div>
  );
}