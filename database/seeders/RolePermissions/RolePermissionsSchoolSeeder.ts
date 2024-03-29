import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permissions from 'App/Models/Permissions'
import Roles from 'App/Models/Roles'

export default class RolePermissionsSchoolSeeder extends BaseSeeder {
  public async run() {
    const permissionsSchool = [
      'teachers',
      'createTeacher',
      'getTeachers',
      'students',
      'createStudent',
      'getStudents',
      'courses',
      'createCourse',
      'getCourses',
      'getCourse',
      'createSemester',
      'createLesson',
      'classes',
      'createClass',
      'getClasses',
      'getClass',
      'getStudentsByClass',
      'linkTeacherAndLessonInClass',
    ]

    const schoolPermissionsIds = (await Permissions.query().whereIn('name', permissionsSchool)).map(
      (permission) => permission.id
    )
    const roleSchool = await Roles.query().where('name', 'SCHOOL').first()

    await roleSchool?.related('permissions').attach(schoolPermissionsIds)
  }
}
