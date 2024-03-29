import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permissions from 'App/Models/Permissions'
import Roles from 'App/Models/Roles'

export default class RolePermissionsStudentSeeder extends BaseSeeder {
  public async run() {
    const permissionsStudent = [
      'lessons',
      'getLessonsByStudent',
      'activities',
      'getActivity',
      'getActivities',
      'sendAcademicPaper',
      'ortographyCorrections',
      'createNewOrtographyCorrection',
      'viewOrtographyCorrections',
      'viewOneOrtographyCorrection',
    ]

    const studentPermissionsIds = (
      await Permissions.query().whereIn('name', permissionsStudent)
    ).map((permission) => permission.id)
    const roleStudent = await Roles.query().where('name', 'STUDENT').first()

    await roleStudent?.related('permissions').attach(studentPermissionsIds)
  }
}
