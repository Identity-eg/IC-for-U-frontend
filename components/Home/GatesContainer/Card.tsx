import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type GatesCardProp = {
  title: string;
  image: StaticImageData;
};

export default function GatesCard({ title, image }: GatesCardProp) {
  return (
    <article className='w-full h-full rounded-md border border-slate-300 p-6'>
      <div className='rounded-sm overflow-hidden mb-6 max-h-[200px]'>
        <Image
          src={image}
          width={1000}
          height={1000}
          alt=''
          className='w-full object-contain'
        />
      </div>
      <div className='flex flex-col justify-between '>
        <h3 className='font-semibold mb-6'>{title}</h3>
        <Link
          href={'#'}
          className={cn([
            buttonVariants({ variant: 'secondary' }),
            'text-primary self-start',
          ])}
        >
          Explore gate
        </Link>
      </div>
    </article>
  );
}
