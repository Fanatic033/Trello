import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { timeBlockService } from '@/services/time-block-service'
import { ITimeBlockResponse } from '@/types/time-block.types'

export function useTimeBlock() {
	const { data, isLoading } = useQuery({
		queryKey: ['time-blocks'],
		queryFn: () => timeBlockService.getTimeBlocks()
	})

	const [items, setItems] = useState<ITimeBlockResponse[] | undefined>(
		data?.data
	)
	useEffect(() => {
		setItems(data?.data)
	}, [data])

	return { items, isLoading, setItems }
}
