import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { DialogueScreenComponent } from './dialogue-screen/dialogue-screen.component';
import { DialogueScreenGuard } from './dialogue-screen/dialogue-screen.guard';
import { EndScreenComponent } from './end-screen/end-screen.component';


const routes: Routes = [
  {
    path: 'title',
    component: TitleScreenComponent
  },
  {
    path: 'dialogue',
    component: DialogueScreenComponent,
    canActivate: [DialogueScreenGuard]
  },
  {
    path: 'end',
    component: EndScreenComponent,
    canActivate: [DialogueScreenGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'title'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
