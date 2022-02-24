import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton,
  IonText,
  IonCard,
  IonItem,
  IonList,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonFab,
  IonFabButton,
  IonButton,
 } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

 /* Import Icons for Menu */
 import { 
  paperPlaneOutline, 
 } from "ionicons/icons";

const RoulePage: React.FC = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  };
  return (
    <IonPage>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton href="https://www.chefsteps.com" size="small" className="fabroule3-custom">
            <h6 className="textbutton-custom">Okay, I'm Interested 
            <IonIcon slot="start" icon={paperPlaneOutline}className="rouleicon-custom" /></h6>
          </IonFabButton>
      </IonFab>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton color="transparent" size="small" className="fabroule2-custom" routerLink={"/tipstricks"}>
            <h6 className="textbutton-custom">Wait, I have Roule!</h6>
          </IonFabButton>
      </IonFab>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton color="transparent" size="small" className="fabroule-custom" routerLink={"/home"}>
            <h6 className="textbutton-custom">Cancel</h6>
          </IonFabButton>
      </IonFab>
      <IonContent fullscreen className="roulepage-background">
        <IonText>
          <h2 className="rouletext-custom">If you had Roule, you could be eating this right now.</h2>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default RoulePage;
