import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class RepositoriesProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    this.app.container.bind('Repositories/UserRepository', () => {
      const UserLucidRepository =
        require('App/Repositories/UserRepository/UserLucidRepository').default
      const userModel = require('App/Models/Users').default

      return new UserLucidRepository(userModel)
    })
    this.app.container.bind('Repositories/RoleRepository', () => {
      const RoleLucidRepository =
        require('App/Repositories/RoleRepository/RoleLucidRepository').default
      const rolesModel = require('App/Models/Roles').default

      return new RoleLucidRepository(rolesModel)
    })
    this.app.container.bind('Repositories/PermissionRepository', () => {
      const PermissionLucidRepository =
        require('App/Repositories/PermissionRepository/PermissionLucidRepository').default
      const permissionsModel = require('App/Models/Permissions').default

      return new PermissionLucidRepository(permissionsModel)
    })
    this.app.container.bind('Repositories/TeacherRepository', () => {
      const TeacherLucidRepository =
        require('App/Repositories/TeacherRepository/TeacherLucidRepository').default
      const lessonModel = require('App/Models/ClassSemestersLessons').default
      return new TeacherLucidRepository(lessonModel)
    })
    this.app.container.bind('Repositories/StudentRepository', () => {
      const StudentLucidRepository =
        require('App/Repositories/StudentRepository/StudentLucidRepository').default
      const studentModel = require('App/Models/Students').default
      const modelSemesters = require('App/Models/ClassSemesters').default
      const modelLessons = require('App/Models/ClassSemestersLessons').default

      return new StudentLucidRepository(studentModel, modelSemesters, modelLessons)
    })
    this.app.container.bind('Repositories/CourseRepository', () => {
      const CourseLucidRepository =
        require('App/Repositories/CourseRepository/CourseLucidRepository').default
      const courseModel = require('App/Models/Courses').default

      return new CourseLucidRepository(courseModel)
    })

    this.app.container.bind('Repositories/SemesterRepository', () => {
      const SemesterLucidRepository =
        require('App/Repositories/SemesterRepository/SemesterLucidRepository').default
      const semesterModel = require('App/Models/Semesters').default

      return new SemesterLucidRepository(semesterModel)
    })

    this.app.container.bind('Repositories/LessonRepository', () => {
      const LessonLucidRepository =
        require('App/Repositories/LessonRepository/LessonLucidRepository').default
      const lessonModel = require('App/Models/Lessons').default

      return new LessonLucidRepository(lessonModel)
    })

    this.app.container.bind('Repositories/ClassRepository', () => {
      const ClassLucidRepository =
        require('App/Repositories/ClassRepository/ClassLucidRepository').default
      const classModel = require('App/Models/Classes').default
      const lessonModel = require('App/Models/ClassSemestersLessons').default

      return new ClassLucidRepository(classModel, lessonModel)
    })

    this.app.container.bind('Repositories/ActivityRepository', () => {
      const ActivityLucidRepository =
        require('App/Repositories/ActivityRepository/ActivityLucidRepository').default
      const activityModel = require('App/Models/Activities').default

      return new ActivityLucidRepository(activityModel)
    })
    this.app.container.bind('Repositories/AcademicPaperRepository', () => {
      const AcademicPaperLucidRepository =
        require('App/Repositories/AcademicPapersRepository/AcademicPapersLucidRepository').default
      const academicPapersModel = require('App/Models/AcademicPapers').default

      return new AcademicPaperLucidRepository(academicPapersModel)
    })
    this.app.container.bind('Repositories/PlagiarismReportRepository', () => {
      const PlagiarismReportLucidRepository =
        require('App/Repositories/PlagiarismReportRepository/PlagiarismReportLucidRepository').default
      const plagiarismReportModel = require('App/Models/PlagiarismReport').default

      return new PlagiarismReportLucidRepository(plagiarismReportModel)
    })

    this.app.container.bind('Repositories/NotificationsRepository', () => {
      const NotificationsLucidRepository =
        require('App/Repositories/NotificationsRepository/NotificationsLucidRepository').default
      const notificationsModel = require('App/Models/Notifications').default

      return new NotificationsLucidRepository(notificationsModel)
    })

    this.app.container.bind('Repositories/OrtographyCorrectionRepository', () => {
      const OrtographyCorrectionsLucidRepository =
        require('App/Repositories/OrtographyCorrectionsRepository/OrtographyCorrectionsLucidRepository').default
      const ortographyCorrectionsModel = require('App/Models/OrtographyCorrections').default

      return new OrtographyCorrectionsLucidRepository(ortographyCorrectionsModel)
    })
  }

  public async boot() {}

  public async ready() {}

  public async shutdown() {}
}
