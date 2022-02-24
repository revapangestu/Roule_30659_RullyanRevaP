import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
  IonToggle,
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonText,
  IonImg,
  IonThumbnail,
  IonItemDivider,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import React from "react";

/* Import Icons for Menu */
import { 
  moon, 
  homeOutline, 
  restaurantOutline,
  helpCircleOutline,
  settingsOutline,
  paperPlaneOutline,
  closeSharp,
 } from "ionicons/icons";

export const Menu = () => {
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <IonMenu side="start" contentId="main" type="overlay" class="ion-menu-custom">
      <IonHeader>
        {/* <IonToolbar color="light">
          <IonTitle>MENU</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent>
        <IonList class="ion-list-custom" lines="none">
          <IonItem>
            <IonIcon slot="end" icon={moon} className="component-icon component-icon-dark" />
            <IonToggle 
            slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} class="ion-toggle-custom"/>
          </IonItem>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/home"} routerDirection="none">
              <IonIcon slot="start" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/tipstricks"} routerDirection="none">
              <IonIcon slot="start" icon={restaurantOutline} />
              <IonLabel>Tips & Tricks</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/helpsupport"} routerDirection="none">
              <IonIcon slot="start" icon={helpCircleOutline} />
              <IonLabel>Help & Support</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/settings"} routerDirection="none">
              <IonIcon slot="start" icon={settingsOutline} />
              <IonLabel>Settings</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
        <IonList>
          <IonCard class="ion-card-custom">
            <IonItem>
              <IonCardContent>
                <IonText>Get your claws around Roule today!</IonText>
                <br/>
                <IonText>
                  <a href="https://www.chefsteps.com">Check it out 
                  <IonIcon slot="start" icon={paperPlaneOutline} className="ion-icon-custom"/>
                  </a>
                </IonText>  
              </IonCardContent>
            </IonItem>
          </IonCard>  
          <img src="../../assets/icon/Crab.png" className="custom-img"/>      
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
