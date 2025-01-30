import { GanttChartSquare } from 'lucide-react';
import Link from 'next/link';
import { MenuItem } from './MenuItem';
import { LogoutButton } from '@/components/dashboard-layout/sidebar/LogoutButton';
import { MENU } from '@/components/dashboard-layout/sidebar/menu.data';
import { COLORS } from '@/constants/color.constants'


export function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout border-b border-b-border'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className='text-2xl font-bold relative'>Trello 2.0</span>
				</Link>
				<div className='p-3 relative'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<footer className='text-xs opacity-40 font-normal text-center p-layout'>
				2025 &copy; made according to the project from the channel
				<br/>
				{''}
				<a
					href='https://youtube.com/red-group'
					target={'_blank'}
					rel={'noreferrer'}
					className='hover:text-primary text-brand-200 transition-colors'>
					Red Group
				</a>
				.<br /> All rights reserved.
			</footer>
		</aside>
	)
}
