import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

export const Submenu = () => {
	const { isSubmenuOpen } = useGlobalContext();

	return (
		<>
			<aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>
				submenu
			</aside>
		</>
	);
};
