using Marketplace.Services;
using Marketplace.Views;
using System;
using Xamarin.Forms;

namespace Marketplace.ViewModels
{
    public class LoginViewModel : BaseViewModel
    {
        private string username = "cedric.moyere@ausy.fr";
        private string password = "azert";
        public Command LoginCommand { get; }
        public IRESTService RESTService => DependencyService.Get<IRESTService>();
        public LoginViewModel()
        {
            LoginCommand = new Command(OnLoginClicked);
        }
    
        public string Username
        {
            get => username;
            set => SetProperty(ref username, value);
        }
        public string Password
        {
            get => password;
            set => SetProperty(ref password, value);
        }
       

        private async void OnLoginClicked(object obj)
        {

            try
            {
                IsBusy = true;
                Models.AuthResponse response;
                try
                {
                    response = await RESTService.AuthWithCredentialsAsync(Username, Password);
                }
                catch (Exception e)
                {

                    throw;
                }

                if (response is null)
                {                    
                    await Application.Current.MainPage.DisplayAlert("error", "Invalid Credentials", "CANCEL");
                }
                else
                {
                    await Shell.Current.GoToAsync($"//{nameof(AboutPage)}");
                }

            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                IsBusy = false;
            }
         
        }
    }
}
