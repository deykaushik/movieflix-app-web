import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularBannerComponent } from './popular-banner/popular-banner.component';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: DashboardShellComponent }];

@NgModule({
  declarations: [PopularBannerComponent, DashboardShellComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardModule {}
