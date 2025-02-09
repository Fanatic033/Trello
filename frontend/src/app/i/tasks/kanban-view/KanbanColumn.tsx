import { Draggable, Droppable } from '@hello-pangea/dnd'
import type { Dispatch, SetStateAction } from 'react'
import { FILTERS } from '../columns.data'
import { KanbanAddCardInput } from './KanbanAddCardInput'
import { KanbanCard } from './KanbanCard'
import styles from './KanbanView.module.scss'
import { filterTasks } from '@/app/i/tasks/filter-task'
import type { ITaskResponse } from '@/types/task.types'

interface IKanbanColumn {
	value: string
	label: string
	items: ITaskResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanColumn({ value, items, label, setItems }: IKanbanColumn) {
	return (
		<Droppable droppableId={value}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					<div className={styles.column}>
						<div className={styles.columnHeading}>{label}</div>

						{filterTasks(items, value)?.map((item, index) => {
							const draggableId = item.id ? item.id : `${index}`
							return (
								<Draggable
									key={item.id}
									draggableId={draggableId}
									index={index}
								>
									{provided => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<KanbanCard
												key={item.id}
												item={item}
												setItems={setItems}
											/>
										</div>
									)}
								</Draggable>
							)
						})}

						{provided.placeholder}

						{value !== 'completed' && !items?.some(item => !item.id) && (
							<KanbanAddCardInput
								setItems={setItems}
								filterDate={
									FILTERS[value] ? FILTERS[value].format() : undefined
								}
							/>
						)}
					</div>
				</div>
			)}
		</Droppable>
	)
}
