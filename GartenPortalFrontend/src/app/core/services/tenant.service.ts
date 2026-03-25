import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TenantService {
  readonly tenantName = signal('Kleingartenverein Musterstadt e.V.');
}
