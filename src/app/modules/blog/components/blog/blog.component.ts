import { Component } from '@angular/core';
import { Observable, switchMap, of, tap } from 'rxjs';
import { BlogsService } from '../../service/blogs.service';
import { Blog } from '../../models/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  protected blog$?: Observable<Blog | null>;
  blogImagePath = environment.API_URI + '/public/blogs/';

  constructor(
    private blogServ: BlogsService,
    route: ActivatedRoute,
    private router: Router
  ) {
    this.blog$ = route.params.pipe(
      switchMap((params) => this.getBlog(params)),
      tap((blog) => this.redirectIfNull(blog))
    );
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
