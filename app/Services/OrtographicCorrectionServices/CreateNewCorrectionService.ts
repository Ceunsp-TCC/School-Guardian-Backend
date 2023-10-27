import DefaultResponse from '@ioc:Utils/DefaultResponse'
import Env from '@ioc:Adonis/Core/Env'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import OrtographyCorrectionsRepository from '@ioc:Repositories/OrtographyCorrectionRepository'
import type { CreateNewCorrectionServiceDto } from 'App/Dtos/Services/OrtographicCorrectionServices/CreateNewCorrectionServiceDto'

export default class CreateNewCorrectionService {
  public async create({
    original,
    requesterId,
    userProvidedIdentifier,
  }: CreateNewCorrectionServiceDto) {
    const originalName = `${userProvidedIdentifier.replace(/\s/g, '')}${cuid()}.${original.extname}`

    await original.move(Application.tmpPath('/uploads/ortographic-correction/originals'), {
      name: originalName,
    })
    const originalUrl = `${Env.get(
      'APP_URL'
    )}/uploads/ortographic-correction/originals/${originalName}`

    const correction = {
      requesterId,
      userProvidedIdentifier,
      original: originalUrl,
    }

    await OrtographyCorrectionsRepository.create(correction)

    return await DefaultResponse.success(
      'Your file has been submitted for spelling correction',
      201
    )
  }
}