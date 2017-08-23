import {AppComponent as AppComponent01} from './01/app.component';
import {AppComponent as AppComponent02} from './02/app.component';
import {AppComponent as AppComponent03} from './03/app.component';
import {AppComponent as AppComponent05} from './05/app.component';
import {AppComponent as AppComponent06} from './06/app.component';
import {AppComponent as AppComponent08} from './08/app.component';
import {AppComponent as AppComponent09a} from './09a/app.component';
import {AppComponent as AppComponent09b} from './09b/app.component';
import {AppComponent as AppComponent14} from './14/app.component';
import {AppComponent as AppComponent15} from './15/app.component';
import {AppComponent as AppComponent100} from './demo-change-detection/app.component';
import {AppComponent as AppComponent101} from './demo-observables/app.component';
import {AppComponent as AppComponent102} from './demo-typeahead/app.component';
import {AppComponent as AppComponent103} from './demo-rendering/app.component';

import {AppModule as ExModule01} from './01/app.module';
import {AppModule as ExModule02} from './02/app.module';
import {AppModule as ExModule03} from './03/app.module';
import {AppModule as ExModule05} from './05/app.module';
import {AppModule as ExModule06} from './06/app.module';
import {AppModule as ExModule08} from './08/app.module';
import {AppModule as ExModule09a} from './09a/app.module';
import {AppModule as ExModule09b} from './09b/app.module';
import {AppModule as ExModule14} from './14/app.module';
import {AppModule as ExModule15} from './15/app.module';
import {AppModule as ExModule100} from './demo-change-detection/app.module';
import {AppModule as ExModule101} from './demo-observables/app.module';
import {AppModule as ExModule102} from './demo-typeahead/app.module';
import {AppModule as ExModule103} from './demo-rendering/app.module';

export const MODULES = [ExModule01, ExModule02, ExModule03, ExModule05, ExModule06,
  ExModule08, ExModule09a, ExModule09b, ExModule14, ExModule15, ExModule100, ExModule101,
  ExModule102, ExModule103];

export const ROUTES = [
  {
    path: '01',
    component: AppComponent01
  },
  {
    path: '02',
    component: AppComponent02
  },
  {
    path: '03',
    component: AppComponent03
  },
  {
    path: '05',
    component: AppComponent05
  },
  {
    path: '06',
    component: AppComponent06
  },
  {
    path: '08',
    component: AppComponent08
  },
  {
    path: '09a',
    component: AppComponent09a
  },
  {
    path: '09b',
    component: AppComponent09b
  },
  {
    path: '10',
    loadChildren: 'app/solutions/10/app.module#AppModule'
  },
  {
    path: '11',
    loadChildren: 'app/solutions/11/app.module#AppModule'
  },
  {
    path: '12',
    loadChildren: 'app/solutions/12/app.module#AppModule'
  },
  {
    path: '13',
    loadChildren: 'app/solutions/13/app.module#AppModule'
  },
  {
    path: '14',
    component: AppComponent14
  },
  {
    path: '15',
    component: AppComponent15
  },
  {
    path: '16',
    loadChildren: 'app/solutions/16/app.module#AppModule'
  },
  {
    path: 'demo-change-detection',
    component: AppComponent100
  },
  {
    path: 'demo-observables',
    component: AppComponent101
  },
  {
    path: 'demo-typeahead',
    component: AppComponent102
  },
  {
    path: 'demo-rendering',
    component: AppComponent103
  },
  {
    path: 'demo-data-flow',
    loadChildren: 'app/solutions/demo-data-flow/app.module#AppModule'
  }
];
