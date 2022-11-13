import { ActivatedRouteSnapshot } from "@angular/router";

export abstract class BaseRouteMatcherStrategy {
    abstract match(route: ActivatedRouteSnapshot): string | undefined | null;
}