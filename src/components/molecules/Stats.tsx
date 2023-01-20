import { stats } from '@/constant';
import styles from '@/style';

const Stats = () => (
  <section className={`${styles.flexCenter} mb-6 flex-row flex-wrap sm:mb-20`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className='m-3 flex flex-1 flex-row items-center justify-start'
      >
        <h4 className='xs:text-[40.89px] xs:leading-[53.16px] font-poppins text-[30.89px] font-semibold leading-[43.16px] text-white'>
          {stat.value}
        </h4>
        <p className='xs:text-[20.45px] xs:leading-[26.58px] text-gradient ml-3 font-poppins text-[15.45px] font-normal uppercase leading-[21.58px]'>
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
