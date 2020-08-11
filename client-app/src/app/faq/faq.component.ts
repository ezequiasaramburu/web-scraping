import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
	faq = [];
	time = '';
	data = false;

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService.getJson().subscribe((data: any[]) => {
			// This could be improved by defining interfaces
			this.faq = data["result"];
			this.time = data["updated"];
			this.data = this.faq !== undefined;
		});
	}
}
