using System;
using System.Collections.Generic;
using Marketplace.ViewModels;
using Marketplace.Views;
using Xamarin.Forms;

namespace Marketplace
{
    public partial class AppShell : Xamarin.Forms.Shell
    {
        public AppShell()
        {
            InitializeComponent();
            //Routing.RegisterRoute(nameof(ItemDetailPage), typeof(ItemDetailPage));
        }

    }
}
