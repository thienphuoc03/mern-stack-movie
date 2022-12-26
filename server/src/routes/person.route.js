import express from 'express'
import personController from '../controllers/person.controller.js'

const router = express.Router({ mergeParams: true })

router.get('/:personId/medias')

router.get('/:personId', personController.personDetail)

export default router
