import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonLabel } from '@ionic/react';

import '../../../src/theme/cardStyle.css';
import './../../theme/cardStyle.css';


const CV: React.FC = (props: any) => {



  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonCardTitle className="cv-card-title-header">
            Adelina Mayol
          </IonCardTitle>
          <IonCardSubtitle className="cv-card-subtitle-header">
            Desarrolladora Full Stack
          </IonCardSubtitle>
          <div className="cv-card-contact-header">
            📍 Córdoba, Argentina · ✉️ adelina.mayol@gmail.com · 🔗
            <a href="https://linkedin.com/in/adelina-mayol" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/adelina-mayol
            </a>
          </div>

        </IonToolbar>
      </IonHeader>

      <IonContent className='cv-content'>


        <IonCard className='cv-card'>
          <IonCardHeader>
            <IonCardTitle className="cv-card-title-2">
              Perfil Profesional
            </IonCardTitle>

          </IonCardHeader>

          <IonCardContent style={{ textIndent: '2em', whiteSpace: 'pre-line', lineHeight: '2' }}>
            <span style={{ textIndent: '2em', display: 'block' }}>
              Desarrolladora Full Stack con experiencia en el desarrollo de aplicaciones web
              modernas utilizando Java + Spring Boot en el backend y React/Vue.js en el
              frontend. He trabajado bajo arquitecturas de microservicios, aplicando patrones
              en capas, consumo e integración de APIs RESTful y persistencia de datos con
              JPA/Hibernate.
            </span>
            <span style={{ textIndent: '2em', display: 'block' }}>
              En frontend, cuento con experiencia en la creación y optimización de
              componentes reutilizables, migraciones de librerías y mejora de la experiencia de
              usuario. Me motiva participar en proyectos que integren ambos mundos (backend
              y frontend), aplicando buenas prácticas, metodologías ágiles y trabajo en equipo.
            </span>

          </IonCardContent>

        </IonCard>


        <IonCard className='cv-card'>
          <IonCardHeader>
            <IonCardTitle className="cv-card-title-2">
              Experiencia Profesional
            </IonCardTitle>
            <IonCardSubtitle className="cv-card-title-3">
              Desarrolladora Full Stack Junior | Epidata
            </IonCardSubtitle>
            <IonCardSubtitle className="cv-card-title-3">
              Remoto | jun. 2022 – feb. 2025 (2 años 9 meses)
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent style={{ textIndent: '2em', whiteSpace: 'pre-line', lineHeight: '2' }}>
            <span style={{ textIndent: '2em', display: 'block' }}>

              • Desarrollo y mantenimiento de aplicaciones web bajo arquitectura de
              microservicios.            </span>
            <span style={{ textIndent: '2em', display: 'block' }}>
              • Backend: implementación de servicios en Java 8 + Spring Boot, persistencia con
              MySQL (JPA/Hibernate) y pruebas con JUnit/Mockito.            </span>

            <span style={{ textIndent: '2em', display: 'block' }}>
              • Frontend: creación de componentes en React 18 (Material UI) y colaboración en
              la migración de librerías a Vue.js, mejorando eficiencia y experiencia de usuario.       </span>
            <span style={{ textIndent: '2em', display: 'block' }}>

              • Uso de GitHub/GitLab, Jira y metodologías ágiles Scrum en equipos distribuidos.            </span>

            <IonList>
              <IonItem>
                <IonLabel>Stack: Java 8 · Spring Boot · Microservicios · APIs REST · Maven · Hibernate · JPA · MySQL</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>  React 18 ·  HTML · CSS · JavaScript · TypeScript · Material UI · Vue.js </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel> GitHub/GitLab · Jira  · Figma · Scrum </IonLabel>
              </IonItem>
            </IonList>

          </IonCardContent>


          <IonCardHeader>

            <IonCardSubtitle className="cv-card-title-3">
              Desarrolladora Backend Trainee | PinApp            </IonCardSubtitle>
            <IonCardSubtitle className="cv-card-title-3">
              Córdoba (Híbrido) | nov. 2021 – dic. 2021 (2 meses)            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent style={{ textIndent: '2em', whiteSpace: 'pre-line', lineHeight: '2' }}>
            <span style={{ textIndent: '2em', display: 'block' }}>
              • Desarrollo de un microservicio de gestión de pedidos en Java con Spring Boot,
              bajo arquitectura en capas.
            </span>
            <span style={{ textIndent: '2em', display: 'block' }}>
              • Persistencia con Hibernate/JPA en MySQL e integración con microservicios para
              stock y clientes.
            </span>
            <span style={{ textIndent: '2em', display: 'block' }}>
              • Trabajo en equipo ágil bajo Scrum, con GitHub, Swagger, Postman y Trello.
            </span>

            <IonList>
              <IonItem>
                <IonLabel>Stack: Java 7/8 · Spring Boot · JPA · Hibernate · MySQL · GitHub · Swagger</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Postman · JUnit · Mockito · Maven · Trello
                </IonLabel>
              </IonItem>
            </IonList>

          </IonCardContent>

        </IonCard>


        <IonCard className='cv-card'>
          <IonCardHeader>
            <IonCardTitle className="cv-card-title-2">
              Formación Académica            </IonCardTitle>

          </IonCardHeader>

          <IonCardContent style={{ textIndent: '2em', whiteSpace: 'pre-line', lineHeight: '2' }}>
            <span style={{ textIndent: '2em', display: 'block' }}>
              Ingeniería en Computación - Universidad Nacional de Córdoba – FCEFyN
            </span>
            <span style={{ textIndent: '2em', display: 'block' }}>
              • Algoritmos y estructuras de datos · Programación orientada a objetos ·
              Concurrente
            </span>
            <span style={{ textIndent: '2em', display: 'block' }}>
              • Desarrollo en Java, C, C++, ASM, Verilog
            </span>
            <span style={{ textIndent: '2em', display: 'block' }}>
              • Bases de datos · Protocolos de red · Sistemas Linux/Windows
            </span>
            <span style={{ textIndent: '2em', display: 'block' }}>
              Curso Intensivo de Inglés – Nivel 4 (feb. 2023 – abr. 2023)
              Universidad Nacional de Córdoba – Facultad de Lenguas
            </span>
          </IonCardContent>

        </IonCard>

        <IonCard className='cv-card'>
          <IonCardHeader>
            <IonCardTitle className="cv-card-title-2">
              Habilidades Técnicas
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent style={{ textIndent: '2em', whiteSpace: 'pre-line', lineHeight: '2' }}>
            <IonCardSubtitle className="cv-card-title-3">
              Backend:
            </IonCardSubtitle>
            <span style={{ textIndent: '2em', display: 'block' }}>
              Java · Spring Boot · JPA · Hibernate · MySQL · H2            </span>
            <IonCardSubtitle className="cv-card-title-3">
              Frontend:
            </IonCardSubtitle>
            <span style={{ textIndent: '2em', display: 'block' }}>
              React 18 · Vue.js · JavaScript · TypeScript · HTML · CSS · Material UI     </span>
            <IonCardSubtitle className="cv-card-title-3">
              Herramientas & Testing:
            </IonCardSubtitle>
            <span style={{ textIndent: '2em', display: 'block' }}>
              Git · GitHub · GitLab · Postman · Swagger · JUnit · Mockito
              · Maven · Figma            </span>
            <IonCardSubtitle className="cv-card-title-3">
              Metodologías:
            </IonCardSubtitle>
            <span style={{ textIndent: '2em', display: 'block' }}>
              Metodologías: Scrum · Jira · Trello            </span>
            <IonCardSubtitle className="cv-card-title-3">
              Otros:
            </IonCardSubtitle>
            <span style={{ textIndent: '2em', display: 'block' }}>
              Arquitectura en microservicios · APIs RESTful
            </span>
          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
}

export default CV;
