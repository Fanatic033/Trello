import { GlobalLoader } from '@/components/dashboard-layout/header/GlobalLoader'
import { Profile } from '@/components/dashboard-layout/header/profile/Profile'

export function Header() {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	)
}
