/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Star, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

const IMAGES = [
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/494136743_621973640842122_3278495651025944738_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Ji520_km6SMQ7kNvwHEqLQp&_nc_oc=AdrLLQzPo6cPhKuNLx7tOHbDUsfLHm7Qp4I2leTOeoGkTXXzhanhvLMvqqFZVq5cw9o&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=8ukNwWmQ-GZDcoCKhuLuAQ&_nc_ss=7a3a8&oh=00_Af0xVRtOcLhbJwjcBk0hKP-AXYq4GPlQQllLj3tEuOpS0w&oe=69EEA94A",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/637078476_852308434475307_4050317762559953161_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=T_RYbPZTIVIQ7kNvwGiA0nG&_nc_oc=AdqREkHhk0pnwCIPdtlgUJxAmHbvhBJOCprjuPBkveAIe6t2s-zyAlAFBKfcjrBjYDM&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=9GLf-toL4t5CaVM65mU4_w&_nc_ss=7a3a8&oh=00_Af2K3LtkgqbIWJMCK--KV7_kmB1N3ffERT-zXZj1QXzjMA&oe=69EEA4FA",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/493076802_621976534175166_7761421150961697926_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=l1dZFVw9ygQQ7kNvwGZZQZT&_nc_oc=Adp-CfoBVx5HH6opxDwZkfVhui69QG7OBD7wIl-ifJlxUPN9XI6gCF080yBLaGGTXqc&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=8dfxmMltD0UNCxe5jgYmvQ&_nc_ss=7a3a8&oh=00_Af0Esj_Qu31ve4DCyuVPIC2jtCn4FnFHy_Hy2V-CYWNQig&oe=69EEA567",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/494202284_621973770842109_4989919419556611748_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XERa6p3AEvUQ7kNvwF1dLXd&_nc_oc=AdoyDvciNO4ABxfEFK_9eh96FFQcrj0l7tUgsxwMk3xway9ayrq8IB4b2uToiJyB6ps&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=q9jS08ZPk4AbOUANh6fkLw&_nc_ss=7a3a8&oh=00_Af3hF8lfQCQu2xbIJ4f48F6L9M6UHklnar60eqi35d2Hsw&oe=69EE81F1",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/493820693_621973744175445_2170979950224708322_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=tF8OwTRFkW4Q7kNvwGgXG1N&_nc_oc=AdqtZ8eA9gIBovb20ssOEdMM-2D5FfCGZvx10zX1JDxPtIbf0YPcuRPcno0yIqZssPw&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=TjCKuI_VZTvEBbCcdEJFBA&_nc_ss=7a3a8&oh=00_Af0GllSKJN0wKkOhr9ov2kZpfYJxg_LTj_GGkhgzxLqmSg&oe=69EE7A6D",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/635179469_852308574475293_6705536889309328878_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=DY4IF7JKOy4Q7kNvwEHccTQ&_nc_oc=Ado0e8XjAY4iBURjyx55RbEoLe-9BLc5es-6woJXEuUuWDPI2iucPGesS5DRPH3w6Vw&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Ni8xQ9hF6y_TNzwuTIRf2Q&_nc_ss=7a3a8&oh=00_Af3yijcZFlwI-fwCzTBjFkzeMziIWFPkFAz3A0MHb2On7A&oe=69EE9CED",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/494098843_621973607508792_4651908378675348302_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=bxur3tcCwOUQ7kNvwF7dU3w&_nc_oc=AdraLEoLPdmjnAl2Ty03ZkghRCzXPSCZ4lSiWU0mEhKwaI_NI7EYMB35--i8kOlT29E&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=PO7JuR1wq4XQ-nZI8LGS1Q&_nc_ss=7a3a8&oh=00_Af2RRj41mCMnL-ZFsVFSDHE_1uqsDBSlms6mLpD3Eg6a8g&oe=69EE9FFB",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/494097927_621973800842106_206023349656075296_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=P5F7d7yEMzQQ7kNvwHWkDXg&_nc_oc=AdqY0fFbcUK__43-aDmv910nQr45nCdMF46vZrj_JFPfvjpjlc_vTMvhwEexqYQwnLA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=OdooCgAKdHpF600d-XkFvQ&_nc_ss=7a3a8&oh=00_Af2sBkahNuJRHkkL1VGLOCnhNCve-VEEWcndJaqccvUrdg&oe=69EE77B4",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/494543566_621976520841834_2402834722110929149_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=rbK9FbwcHMQQ7kNvwHqWmPD&_nc_oc=Adq5_rDSZyYaWBdaboWJpwvmVsvf8ZqInGKrIxR_6CMXN5zeggn0G1lBzxAuL7Z7Npg&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=GWlp8QtYu_3gte7Pen46Vw&_nc_ss=7a3a8&oh=00_Af2C4M12aTbsOJ9wjXCfR6J1L97Dtmp7pULFvD8vBe-G4w&oe=69EEAACB",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/494070403_621976320841854_761004534844916444_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=lrwYAbo9Od8Q7kNvwGB9yhg&_nc_oc=Adp9XstYjaaHCQrqsL68HkM_nZpM-bNzl3e9jowaZW87DEb-HM-BFxQ8dDEerY0qhlQ&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=Tl65D8U4aAYbnOZ-3zqFWA&_nc_ss=7a3a8&oh=00_Af0QfK27PryppSEHJBKsH3Mk2u6D4kgXoLkQ2jrmg4gopw&oe=69EEA77F",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/494039896_621976247508528_2013855588148308463_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kh14ZER1OQcQ7kNvwEIdN0t&_nc_oc=AdquUAuguwoNSIa9R5Q5xgtdjOPWcsDnYHYSIgBP51lM0NELtnapCRaxDnUqEoPdmDc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=TxL1gyQMJlnDOU9wCeIaBA&_nc_ss=7a3a8&oh=00_Af3KueVUCMIZF47VrcCobt03nksfxweu5jU02bQTrDMqvw&oe=69EE81E0",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/475272177_554606317578855_8075404951519627294_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=j8EFVZwHaU8Q7kNvwF3NH2M&_nc_oc=AdqKKJ40wUBl7thxUGLEtmok6HADKlpD0nSVTHgtK3q2qIYNHIeTHVX5K_WF2YwkrVk&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=bvOza-yYKDKqflhpR7P8kA&_nc_ss=7a3a8&oh=00_Af3hID8NQkBBNFH31535DdFUN6hyd3SLIpvaiEaadXmpTA&oe=69EEA54E"
];

const REELS = [
  "286890340532737",
  "1589360808604324"
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-soft-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl md:text-2xl font-serif text-dark font-bold tracking-tight">
              SALA BANKIETOWA DEPTUŁA
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#o-nas" className="text-body hover:text-primary transition-colors text-sm font-medium">O nas</a>
            <a href="#galeria" className="text-body hover:text-primary transition-colors text-sm font-medium">Galeria</a>
            <a href="#video" className="text-body hover:text-primary transition-colors text-sm font-medium">Video</a>
            <a href="#opinie" className="text-body hover:text-primary transition-colors text-sm font-medium">Opinie</a>
            <a href="tel:519863508" className="bg-primary text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity text-xs font-bold tracking-wider">REZERWUJ: 519 863 508</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-soft-border px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#o-nas" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-body font-medium">O nas</a>
          <a href="#galeria" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-body font-medium">Galeria</a>
          <a href="#video" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-body font-medium">Video</a>
          <a href="#opinie" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-body font-medium">Opinie</a>
          <a href="tel:519863508" onClick={() => setIsOpen(false)} className="block px-3 py-2 bg-primary text-white text-center rounded-full text-xs font-bold tracking-wider">Zadzwoń: 519 863 508</a>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/30 z-10" />
        <img 
          src={IMAGES[0]} 
          alt="Sala Bankietowa Deptuła" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 text-center max-w-4xl px-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white uppercase tracking-[0.2em] text-sm mb-6 block font-medium"
        >
          Wyjątkowe Chwile w Kadzidle
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white text-4xl md:text-6xl font-serif mb-8 leading-tight italic"
        >
          Twój Dzień w Eleganckim Stylu
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#kontakt" className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all shadow-xl shadow-black/20">
            Zarezerwuj Termin
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="o-nas" className="py-24 bg-white/50 border-y border-soft-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block font-bold">Poznaj nas lepiej</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-dark leading-tight italic">Nasza pasja do tworzenia wspomnień</h3>
            </div>
            
            <div className="space-y-6 text-body leading-relaxed text-lg italic">
              <p>
                Sala Bankietowa Deptuła to miejsce z duszą, zlokalizowane w sercu Kurpiowszczyzny. Nasza historia rozpoczęła się od marzenia o stworzeniu przestrzeni, w której elegancja spotyka się z domowym ciepłem, a każde przyjęcie staje się niezapomnianą opowieścią.
              </p>
              <p>
                Od lat z dumą towarzyszymy Państwu w najważniejszych momentach życia – od bajkowych wesel, przez radosne chrzciny, aż po jubileusze pełne wzruszeń. Każde wydarzenie traktujemy indywidualnie, dbając o to, by odzwierciedlało Państwa marzenia i osobowość.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="space-y-3">
                <h4 className="font-serif text-xl text-dark border-b border-primary/30 inline-block pb-1">Nasza Misja</h4>
                <p className="text-sm opacity-80 leading-relaxed italic">
                  Zapewnienie najwyższego standardu gościnności, gdzie wykwintna kuchnia kurpiowska łączy się z profesjonalną obsługą i dbałością o każdy detal.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-serif text-xl text-dark border-b border-primary/30 inline-block pb-1">Nasz Zespół</h4>
                <p className="text-sm opacity-80 leading-relaxed italic">
                  To rodzina pasjonatów – od kucharzy strzegących tradycyjnych receptur, po zespół kelnerski, który dba o Państwa komfort z uśmiechem i dyskrecją.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              <img 
                src={IMAGES[2]} 
                alt="Wnętrze Sali Deptuła" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl z-20 border border-soft-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif text-primary">5.0</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-60">Najwyższa<br />Jakość Obsługi</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-soft-border pt-16">
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <Star size={32} />
            </div>
            <div>
              <p className="font-bold text-dark text-lg italic">Tradycja</p>
              <p className="text-sm opacity-70">Wieloletnie doświadczenie</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <MapPin size={32} />
            </div>
            <div>
              <p className="font-bold text-dark text-lg italic">Serce Kurpi</p>
              <p className="text-sm opacity-70">Wyjątkowa lokalizacja</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <Phone size={32} />
            </div>
            <div>
              <p className="font-bold text-dark text-lg italic">Elastyczność</p>
              <p className="text-sm opacity-70">Indywidualne podejście</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-dark border-b-2 border-primary inline-block pb-2">Eleganckie Wnętrza</h2>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {IMAGES.slice(1).map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid mb-6 relative overflow-hidden rounded-xl shadow-md group border border-soft-border"
            >
              <img 
                src={img} 
                alt={`Zdjęcie ${idx}`} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white italic text-sm">Nasza Sala Bankietowa</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section id="video" className="py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">Nasze Momenty</h2>
          <p className="opacity-70 italic">Zapraszamy do obejrzenia filmów z naszych wydarzeń</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {REELS.map((id, idx) => (
            <div key={idx} className="w-full max-w-[320px] bg-stone-800 rounded-lg overflow-hidden shadow-2xl border border-white/10 p-1">
              <iframe 
                src={`https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${id}%2F&show_text=false&width=267&t=0`} 
                width="100%" 
                height="500" 
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="opinie" className="py-24 border-b border-soft-border">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-dark mb-8 border-b-2 border-primary inline-block pb-2">Opinie Gości</h2>
        <div className="flex justify-center gap-1 mb-8 text-primary">
          {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
        </div>
        <p className="text-xl text-body mb-10 italic max-w-2xl mx-auto leading-relaxed">
          "Zadowolenie naszych gości to dla nas najwyższy priorytet. Zachęcamy do przeczytania opinii na naszym profilu."
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.facebook.com/profile.php?id=100090884738750&sk=reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            <Facebook size={20} /> Zobacz wszystkie opinie
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white/30">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 bg-white/40 p-10 rounded-2xl border border-soft-border shadow-sm">
          <h2 className="text-3xl font-serif text-dark border-b-2 border-primary inline-block pb-1">Zapraszamy do kontaktu</h2>
          <p className="text-body text-lg italic leading-relaxed">
            Planujesz wesele, chrzciny lub inną uroczystość? Chętnie odpowiemy na wszystkie pytania i pomożemy zaplanować ten wyjątkowy dzień.
          </p>
          
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-6">
              <span className="text-3xl">📞</span>
              <div>
                <p className="font-bold text-dark uppercase text-xs tracking-widest opacity-60">Zadzwoń</p>
                <p className="text-2xl font-serif text-primary">519 863 508</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-3xl">📍</span>
              <div>
                <p className="font-bold text-dark uppercase text-xs tracking-widest opacity-60">Lokalizacja</p>
                <p className="text-body font-medium italic">Trasa Mazurska 56, Kadzidło</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl h-[400px] border border-soft-border bg-stone-200 flex items-center justify-center relative">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.2295075828797!2d21.450222999999998!3d53.249586799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e135f7a31f0f1%3A0x2024bdad3fdffea9!2sSala%20bankietowa%20Deptu%C5%82a!5e0!3m2!1spl!2spl!4v1776861232709!5m2!1spl!2spl" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-serif text-white">Deptuła</h3>
        </div>
        
        <p className="text-stone-400 text-sm italic">© 2024 Sala Bankietowa Deptuła | Zapraszamy do kontaktu</p>
        
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100090884738750" className="opacity-60 hover:opacity-100 transition-opacity">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Nav />
      <main>
        <Hero />
        <AboutUs />
        <Gallery />
        <VideoSection />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

