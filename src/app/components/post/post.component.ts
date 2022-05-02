import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LocalStorageService } from '../../services/localstorage/local-storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  // recebe os dados no foreach la no front html
  eventos: any;
  errorMessage: any;

  //infinite scroll
  listArray: string[] = [];
  sum = 20;
  direction = '';

  constructor(
    private blogService: BlogService,
    private spinner: NgxSpinnerService,

    private storage: LocalStorageService
  ) {}

  ngOnInit() {
    this.getTodosEventos();
    this.appendItems();

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

  // Paginação
  page = 1;
  next() {
    this.blogService.nextUser((this.page += 1)).subscribe((data) => {
      console.log('<- NEXT ->', data);
      if (data) {
        this.eventos = data;
      }
    });
  }
  previous() {
    if (this.page > 1) {
      this.blogService.previousUser((this.page -= 1)).subscribe((data) => {
        console.log('<- PREVIOUS ->', data);
        if (data) {
          this.eventos = data;
        }
      });
    }
  }

  addItems(_method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if (_method === 'push') {
        this.listArray.push([i].join(''));
      } else if (_method === 'unshift') {
        this.listArray.unshift([i].join(''));
      }
    }
  }
  prependItems() {
    this.addItems('unshift');
  }
  appendItems() {
    this.addItems('push');
  }

  onScrollDown(ev: any) {
    console.log('scrolled down!!', ev);

    this.sum += 10;
    this.appendItems();

    this.direction = 'scroll down';
  }
  onScrollUp(ev: any) {
    console.log('scrolled up!', ev);
    this.sum += 10;
    this.prependItems();

    this.direction = 'scroll up';
  }
}
