'use client'

import { SwitcherView } from '@/app/i/tasks/SwitcherView'
import { ListView } from '@/app/i/tasks/list-view/ListView'
import Loader from '@/components/ui/Loader/Loader'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import {KanbanView} from "@/app/i/tasks/kanban-view/KanbanView";

export type TypeView = 'list' | 'kanban'

export function TasksView() {
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'view-type',
		defaultValue: 'list'
	})

	if (isLoading) return <Loader />

	return (
		<div>
			<SwitcherView
				type={type}
				setType={setType}
			/>
			{type === 'list' ?
			<ListView /> : <KanbanView />
			}
		</div>
	)
}
