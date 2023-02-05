import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';

  constructor () {}

  //* ngOnInit() es igual a un useEffect hook en React. Ejecuta una función en el momento de carga del componente.
  ngOnInit(): void {
    
  }

  toggleAddTask(){
    console.log('Esto salió del header: toggle');
    
  }
}
