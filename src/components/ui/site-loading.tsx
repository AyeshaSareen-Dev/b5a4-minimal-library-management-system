import Lottie from 'react-lottie';
import LoadingAnim from '../../assets/anim/loading.json';
import { cn } from '../../lib/utils';

interface Props {
  className?: string;
}
const SiteLoading = ({ className }: Props) => {
  return (
    <section
      className={cn(
        'min-h-screen flex flex-col items-center justify-center gap-6 my-10  w-4/5 mx-auto rounded-lg px-16 py-12',
        className
      )}
    >
      <Lottie
        style={{ width: '200px', height: '200px' }}
        options={{
          loop: true,
          autoplay: true,
          animationData: LoadingAnim,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
      />
    </section>
  );
};

export default SiteLoading;
