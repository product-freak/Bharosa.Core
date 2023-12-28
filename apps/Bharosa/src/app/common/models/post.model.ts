import { EmploymentTypeEnum } from "../enums/employment-type.enum"
import { SkillTypeEnum } from "../enums/skill-type.enum"
import { StatusTypeEnum } from "../enums/status.enum"
import { UserTypeEnum } from "../enums/user-type.enum"

export type PostModel = {
    id?: string
    createdAtUtc?: Date
    updatedAtUtc?: Date
    isDeleted?: boolean
    userId?: string
    companyName?: string
    companyId?: string
    title?: string
    description?: string
    postById?: string
    location?: string
    rating?: number
    department?: UserTypeEnum
    skills?: SkillTypeEnum
    experience?: string
    employmentType?: EmploymentTypeEnum
    education?: string
    salary?: string
    status?: StatusTypeEnum
    noOfVacancies?: string
    imageUrl?: string
    searchCode?: string
}
