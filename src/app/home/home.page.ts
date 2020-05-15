import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'

//Quando se trabalha com formularios, deve-se adicionar ReactiveFormsModule, ao lado de FormsModule, dentro do ".module.ts"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public formLogin: FormGroup;

  public mensagens_validacao = {
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail inválido' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório digitar a senha' },
      { tipo: 'minlenght', mensagem: 'A senha deve ter pelo menos 6 caracteres.' },
      { tipo: 'maxlenght', mensagem: 'A senha deve ter no máximo 10 caracteres.' }
    ],
    confirma: [],

  };


  constructor(public formBuilder: FormBuilder, public alertController: AlertController, public router: Router) {
    //Montar o formulário
    this.formLogin = formBuilder.group({

      //Aqui, declara-se todos os campos do formulário
      email: ['', Validators.compose([Validators.email, Validators.required])],
      senha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(10), Validators.required])]

    });
  }

  public login() {
    if(this.formLogin.valid){

      let email = this.formLogin.value.email;
      let senha = this.formLogin.value.senha;

      if (email == 'admin@admin.com' && senha == '123456') {
        this.router.navigateByUrl('painel-usuario');
      } else {
        this.alertUserInvalid();
      }

  }else{
    this.alertFormInvalid();
  }

}

async alertFormInvalid() {
  const alert = await this.alertController.create({
    header: 'ERRO!',
    message: 'Formulário invalido, confira os dados!',
    buttons: ['OK']
  });

  await alert.present();
}

async alertUserInvalid() {
  const alert = await this.alertController.create({
    header: 'ERRO!',
    message: 'Email ou senha invalidos, confira os dados!',
    buttons: ['OK']
  });

  await alert.present();
}


}