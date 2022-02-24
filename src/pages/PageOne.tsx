import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonIcon,
  IonCard,
  IonFab,
  IonFabButton,
} from '@ionic/react';
import { 
  home,
  restaurantOutline,
  arrowForwardSharp,
} from 'ionicons/icons';
import React from 'react';
import './Home.css';

const TipsTricks: React.FC = () => {
  return (
    <IonPage>
      <IonFab vertical="bottom" horizontal="start" slot="fixed">
        <IonFabButton color="light" size="small" routerLink={"/home"}>
          <IonIcon icon={home} className="fabicon-custom"/>
        </IonFabButton>
      </IonFab>
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle>Tips & Tricks</IonTitle> */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid class="ion-no-padding ion-no-margin">
        <IonRow>
          <IonCol>
            <div className="home-img">
              <img src="../../assets/image/TipsTricks-AnneNygard.jpg" />
            </div>
            <div>
              <div className="icon-overimg">
                <IonIcon icon={restaurantOutline}/>
              </div>
              <div className="text-overimg3">
                <IonText><h1>Tips & Tricks</h1></IonText>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonCard>
        <IonRow>
          <IonCol>
            <img src="../../assets/image/Home-EnginAkyurt.jpg" className="cardimg2-custom"/>
          </IonCol>
          <IonCol>
            <br/>
            <IonText color="dark"><h6 className="cardtitleTpTs-custom">Getting Started with Sous Vide</h6></IonText>
            <p className="cardicon-custom"></p>
          </IonCol>
          <IonIcon icon={arrowForwardSharp} className="iconTpTs-custom"/>
        </IonRow>
      </IonCard>
      <IonCard>
        <IonRow>
          <IonCol>
            <img src="../../assets/image/Home-Michelle.jpg" className="cardimg2-custom"/>
          </IonCol>
          <IonCol>
            <br/>
            <IonText color="dark"><h6 className="cardtitleTpTs-custom">Tips for Sous Vide Superstardom</h6></IonText>
            <p className="cardicon-custom"></p>
          </IonCol>
          <IonIcon icon={arrowForwardSharp} className="iconTpTs-custom"/>
        </IonRow>
      </IonCard>
      <IonCard>
        <IonRow>
          <IonCol>
            <img src="../../assets/image/Home-AdamNiescioruk.jpg" className="cardimg2-custom"/>
          </IonCol>
          <IonCol>
            <br/>
            <IonText color="dark"><h6 className="cardtitleTpTs-custom">How to Sear Like a Boss</h6></IonText>
            <p className="cardicon-custom"></p>
          </IonCol>
          <IonIcon icon={arrowForwardSharp} className="iconTpTs-custom"/>
        </IonRow>
      </IonCard>
      <IonCard>
        <IonRow>
          <IonCol>
            <img src="../../assets/image/Home-SebastianComan.jpg" className="cardimg2-custom"/>
          </IonCol>
          <IonCol>
            <br/>
            <IonText color="dark"><h6 className="cardtitleTpTs-custom">Caring For Your New Friend Joule</h6></IonText>
            <p className="cardicon-custom"></p>
          </IonCol>
          <IonIcon icon={arrowForwardSharp} className="iconTpTs-custom"/>
        </IonRow>
      </IonCard>
      <IonCard>
        <IonRow>
          <IonCol>
            <img src="../../assets/image/Home-JonathanCooper.jpg" className="cardimg2-custom"/>
          </IonCol>
          <IonCol>
            <br/>
            <IonText color="dark"><h6 className="cardtitleTpTs-custom">Bag it up. Bag it in. Let Roule Begin</h6></IonText>
            <p className="cardicon-custom"></p>
          </IonCol>
          <IonIcon icon={arrowForwardSharp} className="iconTpTs-custom"/>
        </IonRow>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default TipsTricks;
