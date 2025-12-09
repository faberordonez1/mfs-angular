export const environment = {
  production: true,
  remotes: {
    // En PROD: el WAF intercepta estas rutas y sirve el microfrontend correspondiente
    web_apuestas: '/web-apuestas', 
    web_recargas: '/web-recargas',
  },
};
