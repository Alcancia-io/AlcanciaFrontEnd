import { NavigationToolbarComponent } from './navigation-toolbar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'tabs',
        component: NavigationToolbarComponent,
        children: [
            {
                path: 'products',
                children: [
                    {
                        path: '', 
                        loadChildren: () => import('../../pages/products/products.module').then(e => e.ProductsPageModule)
                    }
                ]
            },
            {
                path: 'transactions',
                children: [
                    {
                        path: '', 
                        loadChildren: () => import('../../pages/transactions/transactions.module').then(e => e.TransactionsPageModule)
                    }
                ]
            },
            {
                path: 'status',
                children: [
                    {
                        path: '', 
                        loadChildren: () => import('../../pages/status/status.module').then(e => e.StatusPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/main-screen',
                pathMatch: 'full'
            }
        ]
    },
    
    {
        path: '',
        redirectTo: '/main-screen',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NavigationToolbarRoutingModule {}