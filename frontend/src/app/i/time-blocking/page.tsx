import { Metadata } from 'next';
import { Heading } from '@/components/ui/Heading/Heading';
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import {TimeBlocking} from "@/app/i/time-blocking/TimeBlocking";


export const metadata: Metadata = {
	title: 'Time blocking',
	...NO_INDEX_PAGE
}
export default function TimeBlockingPage() {
	return (
		<div>
			<Heading title={'Time blocking'} />
      <TimeBlocking/>
		</div>
	)
}