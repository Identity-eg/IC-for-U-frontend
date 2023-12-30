import { egyptFeatures } from '@/constants/egyptFeatures';

type Props = (typeof egyptFeatures)[number];

export default function FeatureCard({ description, title, Icon }: Props) {
  return (
    <article className='bg-white p-6 rounded-md'>
      <div className='mb-6 bg-primary h-20 w-20 rounded-sm flex justify-center items-center text-white'>
        <Icon />
      </div>
      <h4 className='text-primary mb-4'>{title}</h4>
      <p className='text-base'>{description}</p>
    </article>
  );
}
