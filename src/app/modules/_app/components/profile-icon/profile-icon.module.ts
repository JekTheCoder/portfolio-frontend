import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgLetDirective } from '@common/directives/ng-let.directive';
import { ProfileIconComponent } from './profile-icon.component';

import { ProfileIconComponent as IconComponent } from '@common/components/profile-icon/profile-icon.component';

@NgModule({
    declarations: [ProfileIconComponent],
    imports: [
        CommonModule,
        RouterModule,
        NgLetDirective,
        IconComponent
    ],
    exports: [ProfileIconComponent]
})
export class ProfileIconModule {}