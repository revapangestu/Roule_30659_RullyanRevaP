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
  arrowForwardSharp,
  home, 
  paperPlaneOutline, 
 } from "ionicons/icons";

const HelpSupport: React.FC = () => {
  return (
    <IonPage>
      <IonFab vertical="bottom" horizontal="start" slot="fixed">
        <IonFabButton color="light" size="small" routerLink={"/home"}>
          <IonIcon icon={home} className="fabicon-custom"/>
        </IonFabButton>
      </IonFab>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-left">Help & Support</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList class="ion-no-padding ion-no-margin">
          <br/>
          <h6 className="ion-padding bio helpsupportheadh6-custom">Contact Us</h6>
        </IonList>
        <IonCard>
          <IonList>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Submit a Support Request</h6>
              <IonIcon slot="end" icon={paperPlaneOutline} className="iconHS-custom"/>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin" lines="none">
              <h6 className="settingsh6-custom"> My Support Requests</h6>
              <IonIcon slot="end" icon={paperPlaneOutline} className="iconHS-custom"/>
            </IonItem>
          </IonList>
        </IonCard>

        <IonList class="ion-no-padding ion-no-margin">
          <br/>
          <h6 className="ion-padding bio helpsupportheadh6-custom">Known Issues</h6>
        </IonList>
        <IonCard>
          <IonList>
            <IonItem class="ion-no-padding ion-no-margin" lines="none">
              <h6 className="settingsh6-custom">Known Issues</h6>
              <IonIcon slot="end" icon={paperPlaneOutline} className="iconHS-custom"/>
            </IonItem>
          </IonList>
        </IonCard>

        <IonList class="ion-no-padding ion-no-margin">
          <br/>
          <h6 className="ion-padding bio helpsupportheadh6-custom">Tips & Tricks</h6>
        </IonList>
        <IonCard>
          <IonList>
            <IonItem class="ion-no-padding ion-no-margin" lines="none">
              <h6 className="settingsh6-custom">Joule how-to-videos</h6>
              <IonIcon slot="end" icon={arrowForwardSharp} className="iconHS-custom"/>
            </IonItem>
          </IonList>
        </IonCard>

        <IonList class="ion-no-padding ion-no-margin">
          <br/>
          <h6 className="ion-padding bio helpsupportheadh6-custom">Common Questions</h6>
        </IonList>
        <IonCard>
          <IonList>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Why can't I connect Roule to WiFi?</h6>
              <IonIcon slot="end" icon={paperPlaneOutline} className="iconHS-custom"/>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Perform a Factory Reset</h6>
              <IonIcon slot="end" icon={paperPlaneOutline} className="iconHS-custom"/>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Trouble with pairing</h6>
              <IonIcon slot="end" icon={paperPlaneOutline} className="iconHS-custom"/>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">LED colors</h6>
              <IonIcon slot="end" icon={paperPlaneOutline} className="iconHS-custom"/>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin" lines="none">
              <h6 className="settingsh6-custom">Cleaning and caring for Roule</h6>
              <IonIcon slot="end" icon={arrowForwardSharp} className="iconHS-custom"/>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin" lines="none">
              <h6 className="settingsh6-custom">Joule and voice control</h6>
              <IonIcon slot="end" icon={arrowForwardSharp} className="iconHS-custom"/>
            </IonItem>
          </IonList>
        </IonCard>

        <IonList class="ion-no-padding ion-no-margin">
          <br/>
          <h6 className="ion-padding bio helpsupportheadh6-custom">General Questions</h6>
        </IonList>
        <IonCard>
          <IonList>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Roule App FAQ</h6>
              <IonIcon slot="end" icon={paperPlaneOutline} className="iconHS-custom"/>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin">
              <h6 className="settingsh6-custom">Roule Connectivity FAQ</h6>
              <IonIcon slot="end" icon={paperPlaneOutline} className="iconHS-custom"/>
            </IonItem>
            <IonItem class="ion-no-padding ion-no-margin" lines="none">
              <h6 className="settingsh6-custom">Roule Hardware FAQ</h6>
              <IonIcon slot="end" icon={paperPlaneOutline} className="iconHS-custom"/>
            </IonItem>
          </IonList>
        </IonCard>
        <IonItem>
            {/* RULLYAN REVA P - 30659 */}
            <br/><br/><br/><br/>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default HelpSupport;
