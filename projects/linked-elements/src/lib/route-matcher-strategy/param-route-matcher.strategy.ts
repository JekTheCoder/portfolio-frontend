import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { LinkedElementsModule } from "../linked-elements.module";
import { BaseRouteMatcherStrategy } from "./base-route-matcher.strategy";


@Injectable({
    providedIn: LinkedElementsModule
})
export class ParamRouteMatcherStrategy implements BaseRouteMatcherStrategy {
    match(route: ActivatedRouteSnapshot): string | null | undefined {
        const key = route.paramMap.keys.at(0);
        if (!key) return null;

        return route.paramMap.get(key);
    }
}