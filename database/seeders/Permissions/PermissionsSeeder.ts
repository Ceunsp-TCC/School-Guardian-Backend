import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permissions from 'App/Models/Permissions'

export default class PermissionsSeeder extends BaseSeeder {
  public async run() {
    await Permissions.query().delete()

    await Permissions.createMany([
      {
        name: 'createPermission',
      },
      {
        name: 'deletePermission',
      },
      {
        name: 'updatePermission',
      },
      {
        name: 'viewPermission',
      },
      {
        name: 'createRole',
      },
      {
        name: 'updateRole',
      },
      {
        name: 'viewRole',
      },
      {
        name: 'deleteRole',
      },
      {
        name: 'syncRolesPermissions',
      },
      {
        name: 'teachers',
      },
      {
        name: 'createTeacher',
      },
      {
        name: 'getTeachers',
      },
      {
        name: 'students',
      },
      {
        name: 'createStudent',
      },
      {
        name: 'getStudents',
      },
      {
        name: 'courses',
      },
      {
        name: 'createCourse',
      },
      {
        name: 'getCourses',
      },
      {
        name: 'getCourse',
      },
      {
        name: 'createSemester',
      },
      {
        name: 'lessons',
      },
      {
        name: 'createLesson',
      },
      {
        name: 'getLessonsByTeacher',
      },
      {
        name: 'getLessonsByStudent',
      },
      {
        name: 'classes',
      },
      {
        name: 'createClass',
      },
      {
        name: 'getClasses',
      },
      {
        name: 'getClass',
      },
      {
        name: 'getStudentsByClass',
      },
      {
        name: 'linkTeacherAndLessonInClass',
      },
      {
        name: 'activities',
      },
      {
        name: 'createActivity',
      },
      {
        name: 'getActivity',
      },
      {
        name: 'getActivities',
      },
      {
        name: 'academicPapers',
      },
      {
        name: 'sendAcademicPaper',
      },
      {
        name: 'getAcademicPapers',
      },
      {
        name: 'getAcademicPaper',
      },
      {
        name: 'sendNoteForAcademicPaper',
      },
      {
        name: 'plagiarismAnalyse',
      },
      {
        name: 'ortographyCorrections',
      },
      {
        name: 'createNewOrtographyCorrection',
      },
      {
        name: 'viewOrtographyCorrections',
      },
      {
        name: 'viewOneOrtographyCorrection',
      },
    ])
  }
}
