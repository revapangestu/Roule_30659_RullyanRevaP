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
  IonList,
  IonCard,
  IonItem,
} from '@ionic/react';
import React from 'react';
import './Home.css';

/* Import Icons */
import { 
  home, 
 } from "ionicons/icons";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonFab vertical="bottom" horizontal="start" slot="fixed">
        <IonFabButton color="light" size="small" routerLink={"/home"}>
          <IonIcon icon={home} className="fabicon-custom"/>
        </IonFabButton>
      </IonFab>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-left">Settings</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList class="ion-no-padding ion-no-margin">
          <br/>
          <h6 className="ion-padding bio settingsheadh6-custom">Account & App Settings</h6>
        </IonList>
        <IonCard>
          <IonList>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Create Account</h6>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Sign In</h6>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Default Temperature Unit</h6>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Video Settings</h6>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Data Usage</h6>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin" lines="none">
              <h6 className="settingsh6-custom">About This App</h6>
            </IonItem>
          </IonList>
        </IonCard>

        <IonList class="ion-no-padding ion-no-margin">
          <h6 className="ion-padding bio settingsheadh6-custom">Developer</h6>
        </IonList>
        <IonCard>
          <IonList>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Rullyan Reva P</h6>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin" lines="none">
              <h6 className="settingsh6-custom">00000030659</h6>
            </IonItem>
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
