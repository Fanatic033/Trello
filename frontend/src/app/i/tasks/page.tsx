import { Metadata } from 'next';
import { Heading } from '@/components/ui/Heading/Heading'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { TasksView } from '@/app/i/tasks/TasksView'


export const metadata: Metadata = {
	title: 'Tasks',
	...NO_INDEX_PAGE
}
export default function TasksPage() {
	return <div>
		<Heading title={'Tasks'}/>
		<TasksView/>
	</div>
}