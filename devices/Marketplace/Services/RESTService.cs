using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Marketplace.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Xamarin.Essentials;

namespace Marketplace.Services
{

    /// <summary>
    /// Responsible for handle Restful calls based on JWT and Refresh-tokens.
    /// </summary>
    public class RESTService : IRESTService
    {
        public RESTService()
        {
        }

        private HttpClient client = new HttpClient();
        private const string AUTH_URL = "http://192.168.1.32:3080/api/auth/login";

        public async Task<AuthResponse> AuthWithCredentialsAsync(string username, string password)
        {
            dynamic jsonObject = new JObject();
            jsonObject.email = username;
            jsonObject.password = password;
          
            var content = new StringContent(jsonObject.ToString(), Encoding.UTF8, "application/json");
            HttpResponseMessage responseMessage = await client.PostAsync(AUTH_URL, content);

            if (responseMessage.IsSuccessStatusCode)
            {
                var stringResponse = await responseMessage.Content.ReadAsStringAsync();
                var authResponse = JsonConvert.DeserializeObject<AuthResponse>(stringResponse);

                return authResponse;
            }
            else
            {
                return null;
            }
        }
    }
}
