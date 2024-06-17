# Microfrontend Samples
Experiments on the microfrontend architecture

# BlazorApp: Installation and Configuration
- Create a web app with WebAssembly, an ASP.NET Core API as the server, and a class library project.
- Install the package `Microsoft.AspNetCore.Components.WebAssembly.Server`.
- In the server project, add references to the client app and the shared library.
- In the client project, add a reference to the shared library.
- Comment out the `launchURL` attribute in the launch profiles.
- To configure the blazor app to export component for a microfrontend architecture install `Blazor.ModuleFederation.Angular` at Client project.