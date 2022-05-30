import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsBarPage } from './tabs-bar.page';

const routes: Routes = [
  {
    path: '',
    component: TabsBarPage,
		children: [
			{
				path: 'transactions-list',
				loadChildren: () => import('../transactions-list/transactions-list.module').then( m => m.TransactionsListPageModule),
			}
		]
	},
	{
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsBarPageRoutingModule {}
