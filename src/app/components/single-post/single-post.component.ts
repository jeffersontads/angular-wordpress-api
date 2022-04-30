import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  singleEventos!: any;
  errorMessage!: string;
  id!: string;

  constructor(
    private blogService: BlogService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getSingleEventos();
  }

  getSingleEventos() {
    this.spinner.show();
    this.blogService.getSingleEventos(this.id).subscribe(
      (singleEventosData) => {
        this.singleEventos = singleEventosData;
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1300);
        console.log('<- SINGLE EVENTOS VIA API -->', singleEventosData);
      },

      (error) => {
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 2000);
        this.errorMessage = error.message;
        console.log('<- DEU ALGUM ERRO OLHA A MENSAGEM -->', error);
      }
    );
  }
}
