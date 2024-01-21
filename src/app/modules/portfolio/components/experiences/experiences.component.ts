import { Component, signal } from '@angular/core';

import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Full-Stack',
        p: 'Freelancer | Dez/2023 - Atualmente',
      },
      text: '<p></p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Django',
        p: 'Freelancer | Set/2022 - Fev/2023',
      },
      text: '<p>Foi um sistema para realizar o gerenciamento de captação de clientes. Implementei o backend e implementação da infraestrutura de conteinerização e hospedagem.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Django',
        p: 'IFMG | Mai/2022 - Jan/2023',
      },
      text: '<p>Desenvolvi um sistema em Django para auxiliar no gerenciamento de recursos do PNAE e fornecedores para o refeitório estudantil do IFMG Campus Bambuí.</p>',
    },
  ]);
}
