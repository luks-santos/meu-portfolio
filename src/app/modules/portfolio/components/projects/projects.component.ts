import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { IProjects } from '../../interface/IProjects.interface';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    // {
    //   src: '',
    //   alt: '',
    //   title: 'Mediccap',
    //   with: '100px',
    //   height: '51px',
    //   description:
    //     '<p>Desenvolvi esse sistema em Django e Angular para gerenciar leads. Foi utilizado Docker e hospedado na AWS através do EC2.</p>',
    //   links: [
    //     {
    //       name: 'Mediccap',
    //       href: 'https://app.mediccap.com.br/login',
    //     },
    //   ],
    // },
    // {
    //   src: '',
    //   alt: '',
    //   title: 'Compnae',
    //   with: '100px',
    //   height: '51px',
    //   description:
    //     '<p>Desenvolvi esse aplicativo web em Django para facilitar o processo do PNAE em um projeto da faculdade. O aplicativo permitiu que registrassem pedidos de alimentos, valores e relatórios.</p>',
    //   links: [
    //     {
    //       name: 'Compnae',
    //       href: 'https://github.com/luks-santos/compnae',
    //     },
    //   ],
    // },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
