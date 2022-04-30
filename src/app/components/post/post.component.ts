import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  // recebe os dados no foreach la no front html
  eventos: any;
  errorMessage: any;

  constructor(
    private blogService: BlogService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getTodosEventos();

    // this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 2000);
  }

  getTodosEventos() {
    this.spinner.show();
    this.blogService.getTodosEventos().subscribe(
      (data) => {
        this.eventos = data;
        console.log('<- DADOS DOS EVENTOS VIA API -->', data);
        //this.spinner.hide();
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1300);
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
