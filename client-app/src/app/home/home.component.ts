import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly NAVIGATE_FAQ = './faq';
  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

	ngOnInit() {
		this.apiService.get().subscribe((data: any[]) => {  
			console.log(data); 
		});
  }
  
  goToFaq() {
    return this.router.navigate([this.NAVIGATE_FAQ]);
  }
}
