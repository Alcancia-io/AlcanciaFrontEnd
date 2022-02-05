import { NavigationToolbarComponent } from './navigation-toolbar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'; 
import { MainScreenPage } from 'src/app/pages/main-screen/main-screen.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: MainScreenPage,
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
                path: 'home',
                children: [
                    {
                        path: '', 
                        loadChildren: () => import('../../pages/main-screen/main-screen.module').then(e => e.MainScreenPageModule)
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
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NavigationToolbarRoutingModule {}