import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div>
        <header>
            <nav class="fixed w-full z-20 top-0 left-0">
                <ul class="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
                <a class="logo" href="#">
                    <h3 class="font-bold text-2xl">LOGO</h3>
                </a>
                <input type="checkbox" id="check" />

                <span class="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
                    <li><a href="#">Work</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>

                    <label for="check" class="close-menu">X</label>
                </span>

                <label for="check" class="open-menu">Menu</label>
                </ul>
            </nav>
            </header>
            
    </div>
  )
}

export default Navbar
