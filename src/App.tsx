import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Page and Menu */
import { Menu } from './components/Menu';
import Home from './pages/Home';
import TipsTricks from './pages/PageOne';
import HelpSupport from './pages/PageTwo';
import Settings from './pages/PageThree';
import RoulePage from './pages/RoulePage';
import SearchPage from './pages/SearchPage';
import TypeBeef from './pages/TypeBeef';
import TypeSeafood from './pages/TypeSeafood';
import TypePoultry from './pages/TypePoultry';
import TypePork from './pages/TypePork';
import TypeLamb from './pages/TypeLamb';
import TypeGame from './pages/TypeGame';
import TypeVegetables from './pages/TypeVegetables';
import TypeDesserts from './pages/TypeDesserts';
import TypeOther from './pages/TypeOther';
import CookingGuide1 from './pages/CookingGuide1';
import CookingGuide2 from './pages/CookingGuide2';
import CookingGuide3 from './pages/CookingGuide3';
import CookingGuide4 from './pages/CookingGuide4';
import CookingGuide5 from './pages/CookingGuide5';
import { SplashScreen } from '@capacitor/splash-screen';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu/>
      <IonRouterOutlet id="main">
        <Route path="/home" component={Home} exact={true} />
        <Route path="/tipstricks" component={TipsTricks} exact={true} />
        <Route path="/helpsupport" component={HelpSupport} exact={true} />
        <Route path="/settings" component={Settings} exact={true} />
        <Route path="/roulepage" component={RoulePage} exact={true} />
        <Route path="/searchpage" component={SearchPage} exact={true} />
        <Route path="/type/beef" component={TypeBeef} exact={true} />
        <Route path="/type/seafood" component={TypeSeafood} exact={true} />
        <Route path="/type/poultry" component={TypePoultry} exact={true} />
        <Route path="/type/pork" component={TypePork} exact={true} />
        <Route path="/type/lamb" component={TypeLamb} exact={true} />
        <Route path="/type/game" component={TypeGame} exact={true} />
        <Route path="/type/Vegetables" component={TypeVegetables} exact={true} />
        <Route path="/type/Desserts" component={TypeDesserts} exact={true} />
        <Route path="/type/Other" component={TypeOther} exact={true} />
        <Route path="/cookingguides/basicguides" component={CookingGuide1} exact={true} />
        <Route path="/cookingguides/quickeasy" component={CookingGuide2} exact={true} />
        <Route path="/cookingguides/cookinajar" component={CookingGuide3} exact={true} />
        <Route path="/cookingguides/alltheguides" component={CookingGuide4} exact={true} />
        <Route path="/cookingguides/rouleready" component={CookingGuide5} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
