import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService } from './location.service'

@Component({
  selector: 'sty-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})

export class UsersComponent implements OnInit{

  public communes$: Observable<any> | undefined;

  constructor(private locationService: LocationService)
  {}
    ngOnInit() {
      this.communes$ = this.locationService.getCommunes();
    }
}
