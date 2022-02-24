import { IonContent, 
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
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonText,
  IonItem, 
} from '@ionic/react';
import React from 'react';
import './Home.css';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

/* Import Icons */
import { 
  arrowBack,
  qrCode ,
  searchSharp,
} from 'ionicons/icons';

const TypeDesserts: React.FC = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  };
  return (
    <IonPage>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton color="light" size="small" className="fab-custom" routerLink={"/roulepage"}>
            <h6 className="textcolor-custom">Search for Roule</h6>
          </IonFabButton>
      </IonFab>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="light" size="small" onClick={openScanner}>
            <IonIcon icon={qrCode} className="fabicon-custom"/>
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
          <IonButtons slot="end">
            <IonItem  routerLink={"/searchpage"}>
              <IonText><p>Search</p></IonText>
              <IonIcon slot="end" icon={searchSharp} />
            </IonItem>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>    
        <IonList class="ion-no-padding ion-no-margin">
          <h6 className="ion-padding bio typeh6-custom">Desserts</h6>
        </IonList>
        <IonGrid class="ion-no-padding ion-no-margin">
          <IonRow>
            <IonCol>
              <IonCard>
                <div>
                  <img src="../../assets/image/Type2-EtiennePauthenet.jpg" />
                  <IonText color="dark"><h6 className="cardtitle3-custom">Chocolate Frozen Mousse (Semifreddo)</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <div>
                  <img src="../../assets/image/Type2-EtiennePauthenet.jpg" />
                  <IonText color="dark"><h6 className="cardtitle3-custom">Coffee Frozen Mouse (Semifreddo)</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <div>
                  <img src="../../assets/image/Type1-AndresRodriguez.jpg" />
                  <IonText color="dark"><h6 className="cardtitle3-custom">WineGummies!</h6><br/></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <div>
                  <img src="../../assets/image/Type1-AndresRodriguez.jpg" /> 
                  <IonText color="dark"><h6 className="cardtitle3-custom">Red Wine⎯Poached Pears</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <div>
                  <img src="../../assets/image/Type2-EtiennePauthenet.jpg" />
                  <IonText color="dark"><h6 className="cardtitle3-custom">Rich and Creamy Eggnog Custard</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <div>
                  <img src="../../assets/image/Type2-EtiennePauthenet.jpg" />
                  <IonText color="dark"><h6 className="cardtitle3-custom">Pumpkin Pie in a Jar</h6><br/></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonItem>
            {/* RULLYAN REVA P - 30659 */}
          </IonItem>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TypeDesserts;
