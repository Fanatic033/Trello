import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { TimeBlock } from './TimeBlock'
import styles from './TimeBlocking.module.scss'
import { useTimeBlock } from './hooks/useTimeBlock'
import { useTimeBlockDnd } from './hooks/useTimeBlockDnd'
import { calcLeftTime } from '@/app/i/time-blocking/calc-left-time'
import Loader from '@/components/ui/Loader/Loader'

export function TimeBlockingList() {
	const { items, setItems, isLoading } = useTimeBlock()
	const { handleDragEnd, sensors } = useTimeBlockDnd(items, setItems)

	if (isLoading) return <Loader />

	const { hoursLeft } = calcLeftTime(items)

	return (
		<div>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<div className={styles.list}>
					<SortableContext
						items={items || []}
						strategy={verticalListSortingStrategy}
					>
						{items?.length ? (
							items?.map(item => (
								<TimeBlock
									key={item.id}
									item={item}
								/>
							))
						) : (
							<div>Add the first time-block on the right form</div>
						)}
					</SortableContext>
				</div>
			</DndContext>
			<div>
				{hoursLeft > 0
					? `${hoursLeft} hours out of 24 left for sleep`
					: 'No hours left for sleep'}
			</div>
		</div>
	)
}
