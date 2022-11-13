import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { LinkedElementsModule } from "../linked-elements.module";
import { BaseRouteMatcherStrategy } from "./base-route-matcher.strategy";


@Injectable({
    providedIn: LinkedElementsModule
})
export class FragmentRouteMatcherStrategy implements BaseRouteMatcherStrategy {
    match(route: ActivatedRouteSnapshot): string | null | undefined {
        return route.fragment
    }
}