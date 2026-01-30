import style from  '@/styles/hero.module.css'
import ActionBtn from './actionBtn';
import NavBar from './navBar';

type HeroProps = {
  title: string;
  subtitle: string;
  cta: string;
};



// export default function Hero({ title, subtitle, cta }: HeroProps) {
//   return (
//     <section className="w-full h-screen flex flex-col justify-center items-center">
//       <h1>{title}</h1>
//       <p>{subtitle}</p>
//       <button>{cta}</button>
//     </section>
//   );
// }

export default function Hero() {
  return (
    <>
    <section className={`${style.hero_section} md:h-screen h-[65vh]`}>
      
      <div className='text-white flex flex-col gap-3 justify-center items-center w-full h-full bg-black/50'>
        <span className={`${style.secondary} leading-2.5 tracking-wide font-medium text-xl`}>VTA APPROVED</span>
        <h1 className="md:text-5xl text-4xl text-center">Shaping Future Innovators with <br /> <span className={style.secondary}>Industry Demand Skills</span></h1>
        <p className='text-lg  text-wrap text-center md:w-2/3 w-full md:px-0 px-5'>Transform your career with future-ready programs in technology and innovation.</p>
        <ActionBtn />
      </div>
    </section>
    </>
  );
}