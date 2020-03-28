import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ZombiesComponent } from './zombies/zombies.component';
import { CerebrosComponent } from './cerebros/cerebros.component';

const routes: Routes = [
    { path: 'zombies', component: ZombiesComponent},
    { path: 'cerebros', component: CerebrosComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NopagefoundComponent}
];

export const appRouting = RouterModule.forRoot(routes);