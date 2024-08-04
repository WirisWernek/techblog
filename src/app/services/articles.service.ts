import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ArticleModel } from '../models/article.model';

@Injectable()
export class ArticlesService {
	articles$: BehaviorSubject<ArticleModel[]>;
	base_path: string = 'assets/images/artigos';

	constructor() {
		this.articles$ = new BehaviorSubject(this._getList());
	}

	getArticles(): Observable<ArticleModel[]> {
		return this.articles$.asObservable();
	}

	private _getList(): ArticleModel[] {
		let list: ArticleModel[] = [];
		list.push({
			url: '',
			titulo: 'O que é linguagem de programação? Conheça as principais',
			texto: 'Uma das mais populares vertentes da tecnologia da informação, a área de...',
			imagem: `${this.base_path}/artigo-1.png`
		});
		list.push({
			url: '',
			titulo: 'Python: por que a linguagem é tão usada para Data Science e finanças?',
			texto: 'O mundo da programação conta com algumas opções de linguagem para...',
			imagem: `${this.base_path}/artigo-2.png`
		});
		list.push({
			url: '',
			titulo: 'GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários',
			texto: 'O popular serviço de repositório de código GitHub foi adquirido pela...',
			imagem: `${this.base_path}/artigo-3.png`
		});
		list.push({
			url: '',
			titulo: '15 comandos no GIT que os desenvolvedores precisam saber',
			texto: 'Dominar os comandos GIT é uma habilidade que se conquista com...',
			imagem: `${this.base_path}/artigo-4.png`
		});
		list.push({
			url: '',
			titulo: 'GIT e GitHub: o que são e quais as diferenças entre eles?',
			texto: 'Git e GibHub são dois softwares de controle de versão essenciais para...',
			imagem: `${this.base_path}/artigo-5.png`
		});
		list.push({
			url: '',
			titulo: 'GitHub Copilot ganha integração com GPT-4 e interface conversacional',
			texto: 'O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...',
			imagem: `${this.base_path}/artigo-6.png`
		});
		return list;
	}
}
