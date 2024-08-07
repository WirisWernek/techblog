import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleModel } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';
import { CardComponent } from '../card/card.component';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss',
	standalone: true,
	imports: [CardComponent, AsyncPipe],
	providers: [ArticlesService],
})
export class MainComponent {
	articles$!: Observable<ArticleModel[]>;
	constructor(private articlesService: ArticlesService) {}
	ngOnInit() {
		this.articles$ = this.articlesService.getArticles();
	}
}
