import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Heading } from '@/components/ui/Heading/Heading'
import { Statistics } from '@/app/i/Statistics'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}
export default function AuthPage() {
	return <div>
		<Heading title={'Statistics'}/>
		<Statistics/>
	</div>
}