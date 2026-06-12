import os

css_append = """
/* ---- CUSTOM CURSOR ---- */
.cursor-dot, .cursor-outline {
  position: fixed; top: 0; left: 0; pointer-events: none;
  border-radius: 50%; z-index: 999999;
  transform: translate(-50%, -50%);
}
.cursor-dot { width: 6px; height: 6px; background: var(--primary); }
.cursor-outline {
  width: 40px; height: 40px; border: 1px solid rgba(201,169,110,0.5);
  transition: width 0.2s cubic-bezier(0.25, 1, 0.5, 1), height 0.2s cubic-bezier(0.25, 1, 0.5, 1), background 0.2s;
}
.cursor-outline.hover {
  width: 70px; height: 70px; background: rgba(201,169,110,0.08); border-color: transparent;
}

/* ---- SCROLL PROGRESS ---- */
#scroll-progress {
  position: fixed; top: 0; left: 0;
  height: 3px; width: 0%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  z-index: 9999;
  transition: width 0.1s linear;
}

/* ---- PAGE LOADER ---- */
#page-loader {
  position: fixed; inset: 0;
  background: var(--body-bg);
  display: flex; align-items: center; justify-content: center;
  z-index: 99999;
  transition: opacity 0.4s ease, visibility 0.4s ease;
}
#page-loader.hidden { opacity: 0; visibility: hidden; }
.loader-inner { text-align: center; }
.diorette-brand-loader {
  display: flex; flex-direction: column; align-items: center; gap: 14px;
  color: var(--text); margin-bottom: 24px;
  animation: pulseLogo 2.5s infinite ease-in-out;
}
.d-logo-icon-loader { width: 68px; height: 68px; color: var(--primary); }
.d-logo-text-loader { display: flex; flex-direction: column; align-items: center; line-height: 1; text-align: center; }
.d-logo-text-loader .d-title { font-family: var(--font-sans); font-size: 38px; font-weight: 500; letter-spacing: 7px; color: var(--primary); margin-bottom: 8px; }
.d-logo-text-loader .d-subtitle { font-family: var(--font-sans); font-size: 13px; font-weight: 600; letter-spacing: 12px; color: var(--primary); margin-left: 6px; }

@keyframes pulseLogo {
  0%, 100% { opacity: 0.8; transform: scale(0.98); }
  50% { opacity: 1; transform: scale(1.03); }
}
.loader-bar {
  width: 160px; height: 2px;
  background: var(--border); border-radius: 99px;
  overflow: hidden; margin: 0 auto;
}
.loader-bar span {
  display: block; height: 100%; width: 0%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 99px;
  animation: loaderFill 1.5s cubic-bezier(0.4,0,0.2,1) forwards;
}
@keyframes loaderFill { to { width: 100%; } }

/* ---- UTILITIES ---- */
.gradient-text {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--accent) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #ecdcb4 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
"""

with open('c:/Users/MSI/OneDrive/Desktop/Ganpatijii/ganpatijii/css/style.css', 'a', encoding='utf-8') as f:
    f.write(css_append)

print("CSS appended successfully")
