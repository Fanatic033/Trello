import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { taskService } from '@/services/task-service'
import { ITaskResponse } from '@/types/task.types'


export function useTasks() {

	const {data} = useQuery({
		queryKey: ['tasks'],
		queryFn: () => taskService.getTasks()
	})

	const [items, setItems] = useState<ITaskResponse[] | undefined>(data?.data)

	React.useEffect(() => {
		setItems(data?.data)
	},[data?.data])
	return {items, setItems};
}