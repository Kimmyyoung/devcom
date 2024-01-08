import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from '@/hook/useDarkMode';

export default function DarkMode() {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

    const toggleDarkMode = (checked: boolean | ((prevState: boolean) => boolean)) => {
      setTheme(colorTheme);
      setDarkSide(checked);
    };

    return (
    <>
      <div className="flex w-max items-center justify-center m-auto my-2">
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={20} />
      </div>
    </>
    );
}