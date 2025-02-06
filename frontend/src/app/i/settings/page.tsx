import { Metadata } from 'next'
import { Settings } from './Settings'
import { Heading } from '@/components/ui/Heading/Heading'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE
}
export default function SettingsPage() {
	return (
		<div>
			<Heading title={'Settings'} />
			<Settings />
		</div>
	)
}
