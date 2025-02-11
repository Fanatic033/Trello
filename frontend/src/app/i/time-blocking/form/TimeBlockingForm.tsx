import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'
import { useCreateTimeBlock } from './useCreateTimeBlock'
import { COLORS } from '@/app/i/time-blocking/form/colors.data'
import { useUpdateTimeBlock } from '@/app/i/time-blocking/form/useUpdateTimeBlock'
import { SingleSelect } from '@/components/dashboard-layout/task-edit/SingleSelect'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import type { TypeTimeBlockFormState } from '@/types/time-block.types'

export function TimeBlockingForm() {
	const { register, control, watch, reset, handleSubmit, getValues } =
		useFormContext<TypeTimeBlockFormState>()

	const existsId = watch('id')

	const { createTimeBlock, isPending } = useCreateTimeBlock()
	const { updateTimeBlock } = useUpdateTimeBlock(existsId)

	const onSubmit: SubmitHandler<TypeTimeBlockFormState> = data => {
		const { color, id, ...rest } = data
		const dto = { ...rest, color: color || undefined }

		if (id) {
			updateTimeBlock({
				id,
				data: dto
			})
		} else {
			createTimeBlock(dto)
		}

		reset({
			color: COLORS[COLORS.length - 1],
			duration: 0,
			name: '',
			id: undefined,
			order: 1
		})
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={'w-3/5'}
		>
			<Field
				id={'name'}
				label={'Enter name:'}
				placeholder={'Enter name:'}
				extra={'mb-4'}
				{...register('name', { required: true })}
			/>
			<Field
				id={'duration'}
				label={'Enter duration (min.):'}
				placeholder={'Enter duration (min.):'}
				isNumber
				extra={'mb-4'}
				{...register('duration', {
					required: true,
					valueAsNumber: true
				})}
			/>

			<div>
				<span className={'inline-block mb-1.5'}>Color:</span>
				<Controller
					control={control}
					name={'color'}
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={COLORS.map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || COLORS[COLORS.length - 1]}
							isColorSelect
						/>
					)}
				/>
			</div>

			<Button
				type={'submit'}
				disabled={isPending}
				className={'mt-6'}
			>
				{existsId ? 'Update' : 'Create'}
			</Button>
		</form>
	)
}
