import express from 'express'
import controllers from '../../controllers/contacts-controllers.js'

const router = express.Router()

router.get('/', controllers.getAll)

router.get('/:contactId', controllers.getById);

router.post('/', controllers.addContact);

router.delete('/:contactId', controllers.deleteById);

router.put('/:contactId', controllers.replaceById);

export default router
