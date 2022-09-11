import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Profile } from '../../_app/models/profile.interface';
import { ProfileService } from '../../_app/services/profile.service';

import { PermissionGuard } from './permission.guard';

let permissions = [{
  id: 0,
  name: ''
}];

describe('PermissionGuard', () => {
  let guard: PermissionGuard;
  let mockProfileService: Partial<ProfileService> = {
    getProfile: () => of<Partial<Profile>>({ __role__: { id: 0, permissions, name: '' } }) as any
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ProfileService, useValue: mockProfileService }]
    });
    guard = TestBed.inject(PermissionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canLoad', () => {
    let reqPermissions: string[] = [];
    const mockRoute = {
      data: {
        permissions: reqPermissions
      }
    }

    beforeEach(() => {
      permissions.length = 0;
      reqPermissions.length = 0;
    })

    it('should pass if user permissions are great', (done) => {
      reqPermissions.push('p1');
      permissions.push({ id: 0, name: 'p1' });
  
      guard.canLoad(mockRoute, null as any).subscribe(load => {
        expect(load).toBeTruthy();
        done()
      })
    });

    it('should not pass if user does not has required permissions', (done) => {
      reqPermissions.push('p1');
      permissions.push({ id: 0, name: 'p2' });

      guard.canLoad(mockRoute, null as any).subscribe(load => {
        expect(load).toBeFalsy();
        done();
      })
    });
  });
});
