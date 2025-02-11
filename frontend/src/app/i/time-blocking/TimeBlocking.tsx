'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { TimeBlockingList } from './TimeBlockingList';
import { TimeBlockingForm } from '@/app/i/time-blocking/form/TimeBlockingForm';
import type { TypeTimeBlockFormState } from '@/types/time-block.types'


export function TimeBlocking() {
	const methods = useForm<TypeTimeBlockFormState>()

	return (
		<FormProvider {...methods}>
			<div className={'grid grid-cols-2 gap-12'}>
        <TimeBlockingList/>
				<TimeBlockingForm />
			</div>
		</FormProvider>
	)
}
