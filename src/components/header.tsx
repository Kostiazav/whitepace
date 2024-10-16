import Image from 'next/image'
import mainLogo from '../../public/main-logo.png'
import { BurgerMenu } from '@/icons/burger-menu'
export const Header = () =>{
    return <header className="flex justify-between">
        <div><Image alt='main-logo' src={mainLogo}/></div>
        <div><BurgerMenu/></div>

    </header>
}