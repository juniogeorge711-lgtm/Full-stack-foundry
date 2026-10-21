import React from 'react';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiPython,
  SiMongodb,
  SiFastapi,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiRabbitmq,
  SiApachekafka,
  SiGit,
  SiNginx,
  SiGithubactions,
  SiExpress,
  SiLinux
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { Cpu, Database, Server, Layout } from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5", size = 20 }) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (normalized.includes('react')) return <SiReact className={className} size={size} />;
  if (normalized.includes('typescript')) return <SiTypescript className={className} size={size} />;
  if (normalized.includes('node')) return <SiNodedotjs className={className} size={size} />;
  if (normalized.includes('postgres')) return <SiPostgresql className={className} size={size} />;
  if (normalized.includes('docker')) return <SiDocker className={className} size={size} />;
  if (normalized.includes('kubernetes')) return <SiKubernetes className={className} size={size} />;
  if (normalized.includes('aws') || normalized.includes('amazon')) return <FaAws className={className} size={size} />;
  if (normalized.includes('redis')) return <SiRedis className={className} size={size} />;
  if (normalized.includes('python')) return <SiPython className={className} size={size} />;
  if (normalized.includes('mongo')) return <SiMongodb className={className} size={size} />;
  if (normalized.includes('fastapi')) return <SiFastapi className={className} size={size} />;
  if (normalized.includes('tailwind')) return <SiTailwindcss className={className} size={size} />;
  if (normalized.includes('next')) return <SiNextdotjs className={className} size={size} />;
  if (normalized.includes('graphql')) return <SiGraphql className={className} size={size} />;
  if (normalized.includes('rabbitmq')) return <SiRabbitmq className={className} size={size} />;
  if (normalized.includes('kafka')) return <SiApachekafka className={className} size={size} />;
  if (normalized.includes('git')) return <SiGit className={className} size={size} />;
  if (normalized.includes('nginx')) return <SiNginx className={className} size={size} />;
  if (normalized.includes('github') || normalized.includes('ci')) return <SiGithubactions className={className} size={size} />;
  if (normalized.includes('express')) return <SiExpress className={className} size={size} />;
  if (normalized.includes('linux')) return <SiLinux className={className} size={size} />;

  if (normalized.includes('db') || normalized.includes('sql')) return <Database className={className} size={size} />;
  if (normalized.includes('server') || normalized.includes('api')) return <Server className={className} size={size} />;
  if (normalized.includes('front') || normalized.includes('ui')) return <Layout className={className} size={size} />;

  return <Cpu className={className} size={size} />;
};
