export class User {

  id!: number
  firstName!: string
  lastName!: string
  username!: string
  dateOfBirth?: Date | null
  gender!: string | null
  profession!: string
  department!: string
  roomNumber?: string | null
  accessRole!: string
  preferences?: number | null

}
