import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public arrayProjects = signal<IProjects[]>([
    {
      src: '',
      alt: '',
      title: '',
      with: '100px',
      height: '51px',
      description:
        '<p></p>',
      links: [
        {
          name: '',
          href: '',
        },
      ],
    },
  ]);
}
