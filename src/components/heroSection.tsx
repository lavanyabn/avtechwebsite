import style from  '@/styles/hero.module.css'
import ActionBtn from './actionBtn';

type HeroProps = {
  tag: string;
  title: string;
  subtitle: string;
  cta: string;
};

export default function Hero({title, tag, subtitle, cta} : HeroProps) {
  return (
    <>
    <section className={`${style.hero_section} md:h-screen h-[65vh]`}>     
      <div className='text-white flex flex-col gap-3 justify-center items-center w-full h-full bg-black/50'>
        <span className={`${style.secondary} leading-2.5 tracking-wide font-medium text-xl`}>{tag}</span>
        <h1 className="md:text-5xl text-4xl md:w-2/4 w-full leading-14  text-center nth-last-[1]:text-[#cfb070]">{title}</h1>
        <p className='text-lg  text-wrap text-center md:w-2/3 w-full md:px-0 px-5'>{subtitle}</p>
        <ActionBtn />
      </div>
    </section>
    </>
  );
}