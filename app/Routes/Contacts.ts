import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/api/contacts', 'ContactsController.show')
  Route.get('/api/contact/:id', 'ContactsController.view')
  Route.post('/api/create-contact', 'ContactsController.store')
  Route.put('/api/update-contact/:id', 'ContactsController.update')
  Route.delete('/api/delete-contact/:id', 'ContactsController.destroy')
})