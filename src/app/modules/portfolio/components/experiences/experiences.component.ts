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
        strong: 'Desenvolvedor FullStack',
        p: 'Estágio | Dez/2023 - Atualmente',
      },
      text: '<p>Atualmente, estou colaborando com uma equipe para realizar a manutenção e aprimoramento do sistema App Cidades. Minha principal área de atuação é no backend, onde utilizo Java e Spring, e no frontend, trabalho com Angular, Bootstrap, HTML e SCSS. Além disso, faço uso de ferramentas como Git para controle de versão e Kanban para gestão de tarefas.</p>',
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
      text: '<p>Desenvolvimento de um sistema web utilizando Python, Django, Bootstrap, HTML e CSS para auxiliar no gerenciamento de recursos do Programa Nacional de Alimentação Escolar (PNAE) e fornecedores para o refeitório estudantil do IFMG Campus Bambuí.</p>',
    },
  ]);
}
