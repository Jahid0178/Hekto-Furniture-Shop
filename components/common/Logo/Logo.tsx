type LogoProps = {
  title: string;
  image?: HTMLImageElement;
};

const Logo = ({ title }: LogoProps) => {
  return <h1 className="text-3xl font-bold">{title}</h1>;
};

export default Logo;
