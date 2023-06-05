import Route from '@ioc:Adonis/Core/Route'

Route.get('/health', 'HealthController.health')

Route.group(() => {
  Route.group(() => {
    Route.post('/send-work-analyse', 'WorkAnalysesController.analyseWork')
  }).prefix('works')
  Route.group(() => {
    Route.post('/create', 'SchoolsController.store')
  }).prefix('schools')
}).prefix('v1')
