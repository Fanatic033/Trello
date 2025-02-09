'use client'

import { DragDropContext } from '@hello-pangea/dnd'
import { COLUMNS } from '../columns.data'
import { useTasks } from '../hooks/useTasks'
import { useTaskDnd } from '../hooks/useTasksDnd'
import { KanbanColumn } from './KanbanColumn'
import styles from './KanbanView.module.scss'

export function KanbanView() {
	const { items, setItems } = useTasks()
	const { onDragEnd } = useTaskDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.board}>
				{COLUMNS.map(column => (
					<KanbanColumn
						items={items}
						label={column.label}
						value={column.value}
						setItems={setItems}
						key={column.value}
					/>
				))}
			</div>
		</DragDropContext>
	)
}
