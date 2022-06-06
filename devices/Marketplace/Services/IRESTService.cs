using System;
using System.Threading.Tasks;
using Marketplace.Models;

namespace Marketplace.Services
{
    public interface IRESTService
    {       
        Task<AuthResponse> AuthWithCredentialsAsync(string username, string password);
    }
}
