import { useEffect } from 'react';

import ErrorBoundary from './ErrorBoundary';

import GlareHover from './GlareHover';

import Hyperspeed from './Hyperspeed';

import { hyperspeedPresets } from './hyperspeedPresets';

import './App.css';



const EFFECT_OPTIONS = {
  ...hyperspeedPresets.one,
  timeScale: 0.45,
  movingAwaySpeed: [27, 36],
  movingCloserSpeed: [-54, -72],
  speedUp: 1,
  colors: {
    ...hyperspeedPresets.one.colors,
    background: 0x12161c,
    roadColor: 0x101318,
    islandColor: 0x12161c,
  },
};



const GLARE_CARD = {

  width: '100%',

  height: '100%',

  background: 'rgba(8, 12, 18, 0.42)',

  borderRadius: '4px',

  borderColor: 'rgba(255, 255, 255, 0.1)',

  glareColor: '#03b3c3',

  glareOpacity: 0.35,

  glareAngle: -30,

  glareSize: 300,

  transitionDuration: 800,

  playOnce: false,

};



const GLARE_BTN = {

  width: 'auto',

  height: 'auto',

  background: 'transparent',

  borderRadius: '2px',

  borderColor: 'transparent',

  glareColor: '#ffffff',

  glareOpacity: 0.3,

  glareAngle: -30,

  glareSize: 300,

  transitionDuration: 800,

  playOnce: false,

};



const GLARE_CONTACT = {

  ...GLARE_CARD,

  glareColor: '#d856bf',

  glareOpacity: 0.28,

  glareAngle: -35,

};



export default function App() {

  useEffect(() => {

    const onMove = (e) => {

      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);

      document.documentElement.style.setProperty('--my', `${e.clientY}px`);

    };

    window.addEventListener('pointermove', onMove, { passive: true });

    return () => window.removeEventListener('pointermove', onMove);

  }, []);



  return (

    <div className="app">

      <div className="fx-grain" aria-hidden="true" />

      <div className="fx-vignette" aria-hidden="true" />

      <div className="fx-scan" aria-hidden="true" />

      <div className="cursor-glow" aria-hidden="true" />



      <div className="page">

        <header className="hero">

          <div className="backdrop" aria-hidden="true">

            <div className="hero-photo">

              <img

                src="/lidia-hero.png"

                alt=""

                className="hero-photo-img"

                width={900}

                height={1200}

                decoding="async"

              />

              <div className="hero-photo-shade" />

            </div>



            <div className="hyperspeed-stage">

              <ErrorBoundary>

                <Hyperspeed effectOptions={EFFECT_OPTIONS} />

              </ErrorBoundary>

            </div>

            <div className="hyperspeed-veil" />

          </div>



          <div className="hero-copy">

            <p className="role reveal" style={{ '--d': '0ms' }}>

              Вайб‑кодер · ИИ‑проекты

            </p>

            <h1 className="reveal glitch-title" style={{ '--d': '80ms' }} data-text="Титова Лидия">

              Титова Лидия

            </h1>

            <span className="name-line reveal" style={{ '--d': '160ms' }} aria-hidden="true" />

            <p className="tagline reveal" style={{ '--d': '220ms' }}>

              Вайб‑кодер: ставлю задачу, получаю решение. Оптимизирую промпты, ускоряю разработку.

            </p>

            <p className="lede reveal" style={{ '--d': '300ms' }}>

              Выпускник школы Нейросетей и СММ Ксении Барановой. Создаю сайты, ботов и digital‑проекты

              с помощью ИИ.

            </p>

            <div className="cta-row reveal" style={{ '--d': '380ms' }}>

              <GlareHover className="glare-btn-wrap" {...GLARE_BTN}>

                <a className="btn" href="#contacts">

                  Связаться

                </a>

              </GlareHover>

              <GlareHover

                className="glare-btn-wrap"

                {...GLARE_BTN}

                glareColor="#03b3c3"

                glareOpacity={0.35}

              >

                <a className="btn btn-ghost" href="#projects">

                  Проекты

                </a>

              </GlareHover>

            </div>

            <p className="hint reveal" style={{ '--d': '460ms' }}>

              Зажмите мышь или тап — ускорение

            </p>

          </div>

        </header>



        <section id="about" aria-labelledby="about-title">

          <p className="section-label">// для кого</p>

          <h2 id="about-title">Бизнесу и экспертам</h2>

          <p className="section-lead">

            Помогаю запускать сайты, ботов и автоматизации — от идеи до рабочего digital‑продукта.

          </p>

        </section>



        <section id="skills" aria-labelledby="skills-title">

          <p className="section-label">// навыки</p>

          <h2 id="skills-title">Что умею</h2>

          <p className="section-lead">Интерфейсы, логика и ИИ — в одном контуре разработки.</p>

          <div className="skills">

            <GlareHover className="glare-card glare-skill" {...GLARE_CARD}>

              <article className="skill">

                <svg className="skill-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">

                  <rect x="4" y="6" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />

                  <path d="M10 14h8M10 19h14M10 24h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />

                  <path d="M28 30v4M16 34h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />

                </svg>

                <div>

                  <h3>Сайты</h3>

                  <p>Одностраничники и магазины под задачи бизнеса</p>

                </div>

              </article>

            </GlareHover>

            <GlareHover className="glare-card glare-skill" {...GLARE_CARD}>

              <article className="skill">

                <svg className="skill-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">

                  <path d="M20 6 L34 30 H6 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />

                  <path d="M20 16v8M16 22h8" stroke="currentColor" strokeWidth="1.5" />

                </svg>

                <div>

                  <h3>Боты</h3>

                  <p>Telegram / VK / МАКС — консультации и сценарии</p>

                </div>

              </article>

            </GlareHover>

            <GlareHover className="glare-card glare-skill" {...GLARE_CARD}>

              <article className="skill">

                <svg className="skill-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">

                  <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />

                  <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />

                  <path

                    d="M20 8v3M20 29v3M8 20h3M29 20h3M11.5 11.5l2.1 2.1M26.4 26.4l2.1 2.1M11.5 28.5l2.1-2.1M26.4 13.6l2.1-2.1"

                    stroke="currentColor"

                    strokeWidth="1.5"

                    strokeLinecap="round"

                  />

                </svg>

                <div>

                  <h3>Автоматизация</h3>

                  <p>Интеграции и логика, которая снимает рутину</p>

                </div>

              </article>

            </GlareHover>

            <GlareHover className="glare-card glare-skill" {...GLARE_CARD}>

              <article className="skill">

                <svg className="skill-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">

                  <path d="M12 28c0-6 3.5-10 8-12 4.5 2 8 6 8 12" stroke="currentColor" strokeWidth="1.5" />

                  <circle cx="20" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />

                  <path d="M14 22h12M16 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

                  <path

                    d="M8 18c2-1 3 0 4 2M32 18c-2-1-3 0-4 2"

                    stroke="currentColor"

                    strokeWidth="1.5"

                    strokeLinecap="round"

                  />

                </svg>

                <div>

                  <h3>Промпт‑инжиниринг</h3>

                  <p>ИИ в интерфейсах и ускорение разработки</p>

                </div>

              </article>

            </GlareHover>

          </div>

        </section>



        <section id="projects" aria-labelledby="projects-title">

          <p className="section-label">// кейсы</p>

          <h2 id="projects-title">Реализованные проекты</h2>

          <p className="section-lead">От лендинга до бота — продукты, которые ведут к действию.</p>

          <div className="projects">

            <GlareHover className="glare-card glare-project" {...GLARE_CARD}>

              <article className="project">

                <span className="project-num">01</span>

                <div>

                  <h3>Одностраничный сайт услуг</h3>

                  <p>

                    Знакомит с услугами и даёт записаться онлайн — короткий путь от интереса к заявке.

                  </p>

                </div>

              </article>

            </GlareHover>

            <GlareHover className="glare-card glare-project" {...GLARE_CARD}>

              <article className="project">

                <span className="project-num">02</span>

                <div>

                  <h3>Сайт‑магазин</h3>

                  <p>Помогает выбрать товар и быстро связаться с менеджером без лишних шагов.</p>

                </div>

              </article>

            </GlareHover>

            <GlareHover

              className="glare-card glare-project"

              {...GLARE_CARD}

              glareColor="#d856bf"

              glareOpacity={0.3}

            >

              <article className="project">

                <span className="project-num">03</span>

                <div>

                  <h3>Бот‑консультант Telegram и МАКС</h3>

                  <p>Отвечает на типовые вопросы и ведёт диалог в мессенджерах, где уже есть клиенты.</p>

                </div>

              </article>

            </GlareHover>

          </div>

        </section>



        <section id="contacts" className="contacts-block" aria-labelledby="contacts-title">

          <p className="section-label">// связь</p>

          <h2 id="contacts-title">Контакты</h2>

          <p className="section-lead">Напишите — обсудим задачу и формат запуска.</p>

          <div className="contacts">

            <GlareHover className="glare-card glare-contact" {...GLARE_CONTACT}>

              <a className="contact" href="mailto:tit.lidiya@gmail.com">

                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">

                  <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />

                  <path

                    d="M3.5 7.5 L12 13 L20.5 7.5"

                    stroke="currentColor"

                    strokeWidth="1.5"

                    strokeLinejoin="round"

                  />

                </svg>

                tit.lidiya@gmail.com

              </a>

            </GlareHover>

            <GlareHover className="glare-card glare-contact" {...GLARE_CONTACT}>

              <a

                className="contact"

                href="https://vk.ru/id47018858"

                target="_blank"

                rel="noopener noreferrer"

              >

                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">

                  <path

                    d="M3.5 7.5h2.2c.3 0 .5.2.6.5 0 0 .9 2.6 2.4 4.3.3.3.7.3.9 0 .4-.5.4-4.3.4-4.3 0-.4.2-.5.6-.5H14c.3 0 .5.2.5.5v.8c0 .3.2.5.5.5.4 0 .9-.1 1.5-.7.9-.9 1.6-2.1 1.9-2.5.1-.2.3-.3.5-.3h2.1c.5 0 .7.4.5.8-.5 1.1-2.1 3.3-2.1 3.3-.2.3-.2.5 0 .8 0 0 1.9 2.4 2.5 3.2.3.4.1.8-.4.8h-2.2c-.3 0-.5-.1-.7-.4-.4-.5-1.5-1.9-1.6-2-.2-.3-.4-.3-.7 0-.3.3-1.1 1.2-1.7 1.9-.3.3-.6.5-1 .5H9.6c-1.8 0-3.7-1.7-5.4-4.7C2.7 9.6 3 7.5 3.5 7.5Z"

                    stroke="currentColor"

                    strokeWidth="1.2"

                    strokeLinejoin="round"

                  />

                </svg>

                vk.ru/id47018858

              </a>

            </GlareHover>

          </div>

        </section>



        <footer>

          <p>Титова Лидия · код как арт · 2026</p>

        </footer>

      </div>

    </div>

  );

}


