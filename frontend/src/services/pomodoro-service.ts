import { axiosWithAuth } from '@/api/interceptors';
import {
	IPomodoroSessionResponse,
	TypePomodoroRoundFormState,
	TypePomodoroSessionFormState
} from '@/types/pomodoro.types'





class PomodoroService {
	private BASE_URL = '/user/timer'

	async getTodaySession() {
		return await axiosWithAuth.get<IPomodoroSessionResponse>(
			`${this.BASE_URL}/today`
		)
	}

	async createSession() {
		return await axiosWithAuth.post<IPomodoroSessionResponse>(this.BASE_URL)
	}

	async updateSession(id: string, data: TypePomodoroSessionFormState) {
		return await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
	}

	async deleteSession(id: string, ) {
		return await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
	}
	async updateRound(id: string, data: TypePomodoroRoundFormState) {
		return await axiosWithAuth.put(`${this.BASE_URL}/round/${id}`, data)
	}
}

export const pomodoroService = new PomodoroService()