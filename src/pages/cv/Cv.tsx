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
          <IonTitle>{"ADELINA MAYOL    --    FullStack Developer"}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='cv-content'>



        <IonCard className='cv-card'>
          <IonCardHeader>
            <IonCardTitle>
              Desarrollador FullStack

            </IonCardTitle>
            <IonCardSubtitle>
              Epidata · Jornada completa · En remoto
            </IonCardSubtitle>
            <IonCardSubtitle>
              jun. 2022 - feb. 2025 · 2 años 9 meses

            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent style={{ textIndent: '2em', whiteSpace: 'pre-line', lineHeight: '2' }}>
            <span style={{ textIndent: '2em', display: 'block' }}>

              Como desarrolladora FullStack, he trabajado en la creación y mantenimiento de aplicaciones web modernas con React y Spring Boot, dentro de una arquitectura de microservicios. {'\n'}
            </span>
            <span style={{ textIndent: '2em', display: 'block' }}>
              He desarrollado nuevos componentes en React, mejorando la eficiencia y experiencia de usuario, además de conectar el frontend con APIs REST usando Axios/Fetch. También participé activamente en la migración de una biblioteca de UX de React a Vue.js.
            </span>

            <span style={{ textIndent: '2em', display: 'block' }}>


              En el backend, diseñé e implementé soluciones en Java 8 y Spring Boot, estructurando controladores, servicios y repositorios, con persistencia en MySQL mediante JPA/Hibernate. {'\n'}
            </span>
            <span style={{ textIndent: '2em', display: 'block' }}>

              Además, cuento con experiencia en control de versiones con Git (GitHub/GitLab) y he trabajado bajo metodologías ágiles, utilizando Jira para la gestión de tareas y proyectos. {'\n'}
            </span>

            <IonList>
              <IonItem>
                <IonLabel>Java 8 - JPA - Hibernate - MySQL - Spring Boot - Microservicios - Maven</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>JavaScript - TypeScript - React 18 - HTML - CSS - Material UI v5</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Scrum - JIRA - Figma -  Git/GitLab </IonLabel>
              </IonItem>
            </IonList>

          </IonCardContent>

        </IonCard>

        <IonCard className='cv-card'>
          <IonCardHeader>
            <IonCardTitle>
              Desarrollador de Back-End Trainee
            </IonCardTitle>
            <IonCardSubtitle>
              PinApp · Contrato de formación · Media jornada · Hibrido
            </IonCardSubtitle>
            <IonCardSubtitle>
              nov. 2021 - dic. 2021 · 2 meses
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent style={{ textIndent: '2em', whiteSpace: 'pre-line', lineHeight: '2' }}>
            <span style={{ textIndent: '2em', display: 'block' }}>

              Colaboración en el desarrollo de un carrito de compras.
            </span>
            <span style={{ textIndent: '2em', display: 'block' }}>
              Desarrollé el microservicio generador de pedidos en Java con Spring Boot, estructurado bajo una arquitectura en capas: controladores, servicios, repositorios y modelos.             </span>

            <span style={{ textIndent: '2em', display: 'block' }}>


              Utilicé Hibernate como ORM para la persistencia y el mapeo en MySQL, con consultas a través de JPA. Implementé conexiones a otros microservicios para consultar datos sobre el stock y los clientes, con el fin de conformar el pedido.             </span>
            <span style={{ textIndent: '2em', display: 'block' }}>

              Gestión de versiones mediante Git/GitHub y uso de la metodología ágil Scrum como dinámica de desarrollo, con tableros en Trello.            </span>

            <IonList>
              <IonItem>
                <IonLabel>Java 7 y 8 - JPA - Hibernate  - Spring Boot - Microservicios - Maven</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>H2 - MySQL - Mockito - JUnit - Postman - API de Swagger
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Scrum - Trello -  Git/GitLab </IonLabel>
              </IonItem>
            </IonList>

          </IonCardContent>

        </IonCard>


      </IonContent>

    </IonPage>
  );
};

export default CV;
