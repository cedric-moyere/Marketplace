using System;
using System.Collections.Generic;

namespace Marketplace.Models
{
    public class AuthResponse
    {
        public AuthResponse()
        {
        }

        public string UserId { get;  set; }
        public string Token { get; set; }
        public string First { get; set; }
        public string Role { get; set; }
    }
}
