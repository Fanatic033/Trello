'use client'

import { Pause, Play, RefreshCcw } from 'lucide-react'
import { formatTime } from './format-time'
import { useCreateSession } from '@/app/i/timer/hooks/useCreateSession'
import { useDeleteSession } from '@/app/i/timer/hooks/useDeleteSession'
import { useTimer } from '@/app/i/timer/hooks/useTimer'
import { useTimerActions } from '@/app/i/timer/hooks/useTimerActions'
import { useTodaySession } from '@/app/i/timer/hooks/useTodaySession'
import { PomodoroRounds } from '@/app/i/timer/rounds/PomodoroRounds'
import Loader from '@/components/ui/Loader/Loader'
import { Button } from '@/components/ui/buttons/Button'

export function Pomodoro() {
	const timerState = useTimer()
	const { isLoading, sessionResponse, workInterval } =
		useTodaySession(timerState)

	const rounds = sessionResponse?.data.rounds
	const actions = useTimerActions({ ...timerState, rounds })
	const { mutate, isPending } = useCreateSession()
	const { deleteSession, isDeletePending } = useDeleteSession(() =>
		timerState.setSecondsLeft(workInterval * 60)
	)

	return (
		<div className={'relative w-80 text-center'}>
			{!isLoading && (
				<div className={'text-7xl font-semibold'}>
					{formatTime(timerState.secondsLeft)}
				</div>
			)}
			{isLoading ? (
				<Loader />
			) : sessionResponse?.data ? (
				<>
					<PomodoroRounds
						rounds={rounds}
						nextRoundHandler={actions.nextRoundHandler}
						prevRoundHandler={actions.prevRoundHandler}
						activeRound={timerState.activeRound}
					/>
					<button
						className={'mt-6 opacity-80 hover:opacity-100 transition-opacity'}
						onClick={
							timerState.isRunning ? actions.pauseHandler : actions.playHandler
						}
						disabled={actions.isUpdateRoundPending}
					>
						{timerState.isRunning ? <Pause size={30} /> : <Play size={30} />}
					</button>
					<button
						className={
							'absolute top-0 right-0  opacity-40 hover:opacity-90 transition-opacity'
						}
						onClick={() => {
							timerState.setIsRunning(false)
							deleteSession(sessionResponse.data.id)
						}}
						disabled={isDeletePending}
					>
						<RefreshCcw size={19} />
					</button>
				</>
			) : (
				<Button
					onClick={() => mutate()}
					className={'mt-1'}
					disabled={isPending}
				>
					Create session
				</Button>
			)}
		</div>
	)
}
