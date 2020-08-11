import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private apiService: ApiService) { }
	ngOnInit() {
		this.apiService.getJson().subscribe((data: any[]) => {  
			console.log(data); 
		});
	}
}
