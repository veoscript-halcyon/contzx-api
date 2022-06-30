import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contact from 'App/Models/Contact'

export default class ContactsController {

  // display all contacts
  public async show({}: HttpContextContract) {
    const contacts = await Contact.all();
    return contacts
  }

  // display specific contact
  public async view({ params }: HttpContextContract) {
    const contact = await Contact.find(params.id)
    return contact
  }

  // store contact
  public async store({ request, response }: HttpContextContract) {
    const formData = request.only([
      'name',
      'phone',
      'address',
      'gender',
      'status',
    ])
    const createContact = await Contact.create(formData)
    return response.json({ createContact })
  }

  // update contact
  public async update({ params, request, response }: HttpContextContract) {
    const formData = request.only([
      'name',
      'phone',
      'address',
      'gender',
      'status',
    ])
    const updateContact = await Contact.findOrFail(params.id)
    
    updateContact.merge(formData)
    await updateContact.save()
    return response.json({ updateContact })
  }

  // delete contact
  public async destroy({ params, response }: HttpContextContract) {
    const deleteContact = await Contact.findOrFail(params.id)
    await deleteContact.delete()

    return response.json({ deleteContact })
  }
}
