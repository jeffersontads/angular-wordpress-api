<div
  id="layout"
  class="pure-g"
  infinite-scroll
  (scrolled)="onScrollDown($event)"
  (scrolledUp)="onScrollUp($event)"
>
  <!-- MODELOS PARA NOVOS CARDS DA PÁGINA -->
  <section class="post cards">
    <div class="card">
      <div class="cicle" style="--clr: #f40103">
        <img
          src="../../../assets/images/logo/cocacola_logo_2.png"
          alt="logotipo da coca"
          class="logo"
        />
      </div>

      <div class="content">
        <h2 class="card-title">Ecommerces</h2>
        <p class="card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quod
          necessitatibus molestias. At expedita illo optio ipsa recusandae
          accusantium ut ipsam in a, minus, mollitia, animi eaque aspernatur vel
          suscipit?
        </p>
        <a href="#">Explorar</a>
      </div>
      <img
        src="../../../assets/images/products/cocacola_2.png"
        alt="Imagem dos produtos"
        class="card-products-img"
      />
    </div>
    <!-- produto numero 2 (neste caso sprite como exemplo) -->
    <div class="card">
      <div class="cicle" style="--clr: #02953a">
        <img
          src="../../../assets/images/logo/sprite_logo_2.png"
          alt="logotipo da coca"
          class="logo"
        />
      </div>

      <div class="content">
        <h2 class="card-title">Sites Institucionais</h2>
        <p class="card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quod
          necessitatibus molestias. At expedita illo optio ipsa recusandae
          accusantium ut ipsam in a, minus
        </p>
        <a href="#">Explorar</a>
      </div>
      <img
        src="../../../assets/images/products/sprite.png"
        alt="Imagem dos produtos"
        class="card-products-img"
      />
    </div>

  </section>
</div>

    <!-- <div>
      <!-- A wrapper for all the blog posts -->
      <div class="posts" *ngFor="let evento of eventos">
        <h1 class="content-subhead">Eventos</h1>
        <h3 style="color: #ec5666; font-weight: bold; font-size: 30px">
          {{ errorMessage }}
        </h3>
        <span style="color: #ec5666">{{ evento.acf.data_hora_evento }}</span>

        <!-- A single blog post -->
        <section class="post">
          <header class="post-header">
            <h2 class="post-title">{{ evento.title.rendered }}</h2>
            <p class="post-meta">
              By
              <a href="#" target="_blank" class="post-author"
                >Jefferson Sotto</a
              >
              Data
              <!-- data:short deixa a data mais amigavel quando pegamos direto do wp -->
              <span> {{ evento.date | date: "short" }}</span>
            </p>
          </header>

          <div class="post-description">
            slice delimata a quantidade de caracteres dentro deste paragrafo
            <p [innerHtml]="evento.acf.resumo_do_evento | slice: 0:150"></p>
            <button
              [routerLink]="['/posts', evento.id]"
              class="btn btn-primary"
              type="button"
            >
              Leia mais..
            </button>
          </div>
        </section>
      </div>
      <section class="post">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li (click)="previous()" class="page-item">
              <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li (click)="next()" class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </section>

      <div class="footer">
        <div class="pure-menu pure-menu-horizontal">
          <div class="pure-menu-item">
            <a href="http://github.com/jeffersontads" class="pure-menu-link">
              Jefferson Github</a
            >
          </div>
        </div>
      </div>
    </div>
