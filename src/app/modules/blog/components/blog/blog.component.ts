import { Component } from '@angular/core';
import { Observable, switchMap, of, tap, shareReplay, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BlogContent } from '../../models/blog-content';
import { Comment } from '../../models/comment';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  protected blog$?: Observable<BlogContent | null>;
  protected comments$?: Observable<Comment[]>;

  blogImagePath = environment.API_URI + '/public/blogs/';

  constructor(
    private blogServ: BlogsService,
    route: ActivatedRoute,
    private router: Router
  ) {
    const request$ = route.params.pipe(
      switchMap((params) => this.getBlog(params)),
      tap((blog) => this.redirectIfNull(blog)),
      shareReplay()
    );

    this.blog$ = request$;
    this.comments$ = request$.pipe(map(blog => blog!.comments));
  }

  private getBlog(params: { [key in string]?: string }) {
    const { id } = params;
    const idN = Number(id);

    if (Number.isNaN(idN)) return of(null);
    return this.blogServ.getBlog(idN);
  }

  private redirectIfNull(data: unknown | null) {
    if (!data) this.router.navigate(['/blog/search']);
  }
}
