import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

import { AuthService } from '../../../shared/services/auth.service';
import { SweertalertService } from '../../../shared/services/sweertalert.service';

interface FormGroupProfileData {
  name: string;
  phone: string;
  birthDay: Date;
  address: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [provideNativeDateAdapter()],
})
export class ProfileComponent implements OnInit {
  submitted = false;
  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sweetAlertService: SweertalertService
  ) {
    this.profileForm = this.formBuilder.group({
      name: new FormControl('', []),
      phone: new FormControl('', []),
      birthDay: new FormControl('', []),
      address: new FormControl('', []),
    });
  }

  ngOnInit() {
    this.authService.profile().subscribe({
      next: (data) => {
        const [day, month, year] = data.birthDay.split('/').map(Number);

        this.profileForm.setValue({
          name: data.name,
          phone: data.phone,
          birthDay: new Date(year, month - 1, day),
          address: data.address,
        });
      },
    });
  }

  onSubmit() {
    const form = this.profileForm.value as FormGroupProfileData;

    this.authService
      .updateProfile(
        form.name,
        form.phone,
        form.birthDay.toLocaleDateString('pt-br'),
        form.address
      )
      .subscribe({
        next: (data) => {
          const [day, month, year] = data.birthDay.split('/').map(Number);

          this.profileForm.setValue({
            name: data.name,
            phone: data.phone,
            birthDay: new Date(year, month - 1, day),
            address: data.address,
          });

          this.sweetAlertService.sucess(
            'Perfil atualizado',
            'Perfil atualizado com sucesso!'
          );
        },
        error: () =>
          this.sweetAlertService.error(
            'Erro na atualização',
            'Erro ao tentar atualizar as informações de perfil.'
          ),
      });
  }

  handleDeleteUser() {
    this.authService.deleteProfile().subscribe({
      next: () => {
        this.sweetAlertService.sucess(
          'Conta deletada',
          'Perfil de usuário removido com sucesso.'
        );

        this.authService.logout();
      },
      error: () =>
        this.sweetAlertService.error('Erro na remoção', 'Erro ao tentar deletar perfil.'),
    });
  }
}
