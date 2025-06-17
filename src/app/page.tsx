
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza Tus Ventas Hoy" subheadline="Para dueños de pequeños negocios, WebGo ofrece una web de ventas en menos de 24 horas. ¡No se requiere experiencia previa ni mucho tiempo!" cta1="Empieza Ahora" />
<How step1Title="Comparte tu visión" step1Desc="Nos cuentas cómo ves tu negocio digital." step2Title="Nosotros hacemos la magia" step2Desc="Desarrollamos tu web de ventas en 24 horas." step3Title="Comienza a vender online" step3Desc="Con soporte 24/7, tu negocio nunca duerme." />
<Aboutus headline="WebGo: Digitalizando Negocios Locales" subheadline="En WebGo generamos ventas online para pequeños negocios, ahorrándote tiempo y esfuerzo frente a la competencia" beneficiotitulo1="Aumento de Ventas" beneficio1="Maximizamos tus ventas a través de la digitalización" beneficiotitulo2="Tiempo y Esfuerzo Ahorrado" beneficio2="Gestionamos tu sitio web, tú enfócate en tu negocio" />
<Services heading="Digitaliza tus recomendaciones para aumentar tus ventas" description="Con WebGo, llevamos tu negocio al siguiente nivel, ofreciendo un sitio web de ventas rápido y efectivo por solo 123123. Olvídate del estrés de manejarlo por tu cuenta." services={[{"name":"Creación de Sitio Web","icon":"globe","description":"Desarrollamos tu web de ventas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"clock","description":"Asistencia técnica disponible en cualquier momento."},{"name":"Optimización SEO","icon":"search","description":"Mejora la visibilidad de tu sitio en buscadores."},{"name":"Gestión de Ventas Online","icon":"cart","description":"Convierte las visitas a tu sitio en ventas concretas."},{"name":"Automatización de Recomendaciones","icon":"handshake","description":"Digitalizamos el boca a boca para llegar a más clientes."},{"name":"Actualizaciones Constantes","icon":"sync","description":"Mantenemos tu sitio web al día con las últimas tendencias."}]} />
<BeforeAndAfter subheadline="Transformando ideas en proyectos digitales espectaculares" />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi pequeño negocio en Santiago?","respuesta":"WebGo es experto en transformar negocios tradicionales en exitosas empresas digitales. Creamos y gestionamos sitios web optimizados para tus productos o servicios, asegurando una transición sin problemas al mundo digital. Esto te permite llegar a una audiencia más amplia y vender de manera más efectiva online."},{"pregunta":"¿Cuánto cuesta el servicio de WebGo y qué incluye?","respuesta":"Nuestro servicio principal, asdads, tiene un costo de 123123. Este incluye la creación y gestión de tu sitio web, optimización para motores de búsqueda (SEO), y el soporte técnico constante para asegurar que tu negocio esté siempre online y disponible para tus clientes."},{"pregunta":"No sé nada sobre ventas online, ¿es esto un problema?","respuesta":"No en absoluto. En WebGo, nos encargamos de todo el proceso de digitalización para que no tengas que preocuparte por los detalles técnicos. Proporcionamos una solución completa para que puedas concentrarte en lo que mejor haces: manejar tu negocio."},{"pregunta":"¿Tendré tiempo suficiente para manejar mi negocio y un sitio web?","respuesta":"Definitivamente, sí. WebGo fue diseñado para empresarios ocupados como tú. Nosotros nos encargamos de la gestión del sitio web, lo que te libera tiempo para concentrarte en tus operaciones diarias. Además, proporcionamos un fácil acceso a las métricas de rendimiento para que puedas seguir las ventas y el crecimiento de tu negocio."},{"pregunta":"¿Qué me garantiza que las ventas online funcionarán para mi negocio?","respuesta":"La digitalización ya no es una opción, sino una necesidad para las empresas. WebGo utiliza métodos probados para maximizar tu visibilidad online y atraer a más clientes. Además, te brindamos herramientas para rastrear y entender el comportamiento de tus clientes, lo que te permite adaptarte y crecer constantemente."}]} />
<BookAppointment 
                      heading="¡Lleva Tu Negocio al Próximo Nivel!" 
                      description="Digitaliza tus ventas con WebGo. Ofrecemos soluciones accesibles y eficaces para hombres de negocios como tú. ¿Precio? Solo 123123. No dejes que el tiempo o la falta de conocimientos te limiten, comienza a vender online hoy mismo."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
