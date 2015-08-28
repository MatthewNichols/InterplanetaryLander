using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LanderExperiments.Startup))]
namespace LanderExperiments
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
