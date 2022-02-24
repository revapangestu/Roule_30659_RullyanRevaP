import { 
  IonContent, 
  IonHeader,
   IonPage, 
   IonTitle, 
   IonToolbar, 
   IonButtons, 
   IonMenuButton,
   IonFab,
   IonFabButton,
   IonIcon, 
  } from '@ionic/react';
import { 
  arrowBack 
} from 'ionicons/icons';
import React from 'react';
import './Home.css';

const SearchPage: React.FC = () => {
  return (
    <IonPage>
      <IonFab vertical="bottom" horizontal="start" slot="fixed">
        <IonFabButton color="light" size="small" routerLink={"/home"}>
          <IonIcon icon={arrowBack} className="fabicon-custom"/>
        </IonFabButton>
      </IonFab>
      <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton color="light" size="small" routerLink={"/home"}>
            <IonIcon icon={arrowBack} className="fabicon-custom"/>
          </IonFabButton>
      </IonFab>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
      </IonContent>
    </IonPage>
  );
};

export default SearchPage;
