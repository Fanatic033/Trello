import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { Priority } from '@prisma/client'
import { Transform } from 'class-transformer'

export class TimeBlockDto {
	@IsString()
	name: string

	@IsString()
	@IsOptional()
	color: string

	@IsNumber()
	duration: number

	@IsOptional()
	@IsNumber()
	order: number
}
