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
  IonCardContent,
  IonItem,
  IonSlide,
  IonList,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonFab,
  IonFabButton,
  IonSearchbar,
 } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

 /* Import Icons for Menu */
 import { 
  albumsOutline, 
  qrCode,
  searchSharp,
  arrowBack, 
 } from "ionicons/icons";

const Home: React.FC = () => {
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
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle>Home</IonTitle> */}
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
        <IonGrid class="ion-no-padding ion-no-margin">
            <IonRow>
              <IonCol>
                <div className="home-img">
                  <img src="../../assets/image/Home-RomainBriaux.jpg" />
                </div>
                <div>
                  <div className="text-overimg">
                    <IonText><h1>Get your Roule. Be Happy!</h1></IonText>
                  </div>
                  <div className="text-overimg2">
                    <IonText><a href="https://www.chefsteps.com">Explore</a></IonText>
                  </div>
                 </div>
              </IonCol>
            </IonRow>
        </IonGrid>
        
        <IonList class="ion-no-padding ion-no-margin">
          <h6 className="ion-padding bio h6-custom">Search by Type</h6>
        </IonList>
        <IonGrid class="ion-no-padding ion-no-margin" fixed={true}>
          <IonRow>
            <IonCol>
              <IonCard routerLink={"/type/beef"}>
                <div>
                  <br/>
                  <img src="../../assets/icon/Beef.png" />
                  <IonText color="dark"><h6 className="cardtitle-custom">Beef</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard routerLink={"/type/seafood"}>
                <div>
                  <br/>
                  <img src="../../assets/icon/Fish.png" />
                  <IonText color="dark"><h6 className="cardtitle-custom">Seafood</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard routerLink={"/type/poultry"}>
                <div>
                  <br/>
                  <img src="../../assets/icon/Chicken.png" />
                  <IonText color="dark"><h6 className="cardtitle-custom">Poultry</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard routerLink={"/type/pork"}>
                <div>
                  <br/>
                  <img src="../../assets/icon/Pork.png" />
                  <IonText color="dark"><h6 className="cardtitle-custom">Pork</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard routerLink={"/type/lamb"}>
                <div>
                  <br/>
                  <img src="../../assets/icon/Lamb.png" />
                  <IonText color="dark"><h6 className="cardtitle-custom">Lamb</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard routerLink={"/type/game"}>
                <div>
                  <br/>
                  <img src="../../assets/icon/Deer.png" />
                  <IonText color="dark"><h6 className="cardtitle-custom">Game</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard routerLink={"/type/vegetables"}>
                <div>
                  <br/>
                  <img src="../../assets/icon/Vegetables.png" />
                  <IonText color="dark"><h6 className="cardtitle-custom">Vegetables</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard routerLink={"/type/desserts"}>
                <div>
                  <br/>
                  <img src="../../assets/icon/Cake.png" />
                  <IonText color="dark"><h6 className="cardtitle-custom">Desserts</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard routerLink={"/type/other"}>
                <div>
                  <br/>
                  <img src="../../assets/icon/Eggs.png" />
                  <IonText color="dark"><h6 className="cardtitle-custom">Other</h6></IonText>
                  <br/>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonList class="ion-no-padding ion-no-margin">
          <h6 className="ion-padding bio h6-custom">Cooking Guides</h6>
        </IonList>      
        <IonGrid class="ion-no-padding ion-no-margin" fixed={true}>
          <IonCard routerLink={"/cookingguides/basicguides"}>
            <IonRow>
              <IonCol>
                <img src="../../assets/image/Home-EnginAkyurt.jpg" className="cardimg-custom"/>
              </IonCol>
              <IonCol>
                <br/>
                <IonText color="dark"><h6 className="cardtitle2-custom">Get Started: Basic Guides</h6></IonText>
                <p className="cardicon-custom"><IonIcon icon={albumsOutline} className="ion-icon-custom"/></p>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard routerLink={"cookingguides/quickeasy"}>
            <IonRow>
              <IonCol>
                <img src="../../assets/image/Home-Michelle.jpg" className="cardimg-custom"/>
              </IonCol>
              <IonCol>
                <br/>
                <IonText color="dark"><h6 className="cardtitle2-custom">Quick & Easy</h6></IonText>
                <br/>
                <p className="cardicon-custom"><IonIcon icon={albumsOutline} className="ion-icon-custom"/></p>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard routerLink={"cookingguides/cookinajar"}>
            <IonRow>
              <IonCol>
                <img src="../../assets/image/Home-AdamNiescioruk.jpg" className="cardimg-custom"/>
              </IonCol>
              <IonCol>
                <br/>
                <IonText color="dark"><h6 className="cardtitle2-custom">Cook in a Jar⎯ No Bag Required!</h6></IonText>
                <p className="cardicon-custom"><IonIcon icon={albumsOutline} className="ion-icon-custom"/></p>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard routerLink={"cookingguides/alltheguides"}>
            <IonRow>
              <IonCol>
                <img src="../../assets/image/Home-SebastianComan.jpg" className="cardimg-custom"/>
              </IonCol>
              <IonCol>
                <br/>
                <IonText color="dark"><h6 className="cardtitle2-custom">All the Guides</h6></IonText>
                <br/>
                <p className="cardicon-custom"><IonIcon icon={albumsOutline} className="ion-icon-custom"/></p>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard routerLink={"cookingguides/rouleready"}>
            <IonRow>
              <IonCol>
                <img src="../../assets/image/Home-JonathanCooper.jpg" className="cardimg-custom"/>
              </IonCol>
              <IonCol>
                <br/>
                <IonText color="dark"><h6 className="cardtitle2-custom">Roule Ready (Available in the US)</h6></IonText>
                <p className="cardicon-custom"><IonIcon icon={albumsOutline} className="ion-icon-custom"/></p>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonItem>
            {/* RULLYAN REVA P - 30659 */}
          </IonItem>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
