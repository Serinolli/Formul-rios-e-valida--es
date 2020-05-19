import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CriarContaPageRoutingModule } from './criar-conta-routing.module';
import { CriarContaPage } from './criar-conta.page';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarContaPageRoutingModule
  ],
  declarations: [CriarContaPage]
})
export class CriarContaPageModule {}
