import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService } from './location.service'

@Component({
  selector: 'sty-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})

export class UserComponent implements OnInit{

  public communes$: Observable<any> | undefined;

  constructor(private locationService: LocationService)
  {}
    ngOnInit() {
      this.communes$ = this.locationService.getCommunes();
    }
}
