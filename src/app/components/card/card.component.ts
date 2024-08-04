import { Component, Input } from '@angular/core';
import { ArticleModel } from '../../models/article.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    standalone: true,
})
export class CardComponent {
	@Input() artigo!: ArticleModel;
}
