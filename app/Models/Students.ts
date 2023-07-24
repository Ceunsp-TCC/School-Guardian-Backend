import { BaseModel, column, belongsTo, BelongsTo, scope } from '@ioc:Adonis/Lucid/Orm'

import Users from 'App/Models/Users'
import Schools from 'App/Models/Schools'
export default class Students extends BaseModel {
  public static table = 'students'
  public static primaryKey = ''

  @column({ columnName: 'userId', serializeAs: null })
  public userId: number

  @column({ columnName: 'schoolId', serializeAs: null })
  public schoolId: number

  @column({
    columnName: 'CPF',
  })
  public CPF: string

  @column({
    columnName: 'randomPassword',
    serializeAs: 'randomPassword',
  })
  public randomPassword: boolean

  @column()
  public status: 'ACTIVE' | 'INACTIVE'

  @belongsTo(() => Users, {
    localKey: 'id',
    foreignKey: 'userId',
  })
  public user: BelongsTo<typeof Users>

  @belongsTo(() => Schools, {
    localKey: 'schoolId',
    foreignKey: 'userId',
  })
  public school: BelongsTo<typeof Schools>

  public static byUser = scope((query, schoolId: number) => {
    query.where('schoolId', schoolId)
  })
}
