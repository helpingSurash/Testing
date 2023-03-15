import Link from "next/link"

const Nav =()=>{

    return <>
     <nav className='newClass'>
          <ul>
            <li> <Link href={'/'}>Home</Link></li>
            <li><Link href={'/about'} >About</Link></li>
            <li><Link href={'/courses'}>Courses</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
          </ul>
        </nav>
    </>
}
export default Nav