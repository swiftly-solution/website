import type { ReactNode } from 'react';

interface ApiParamProps {
  name?: string;
  type: string;
  typeHref?: string;
  children?: ReactNode;
}

export function ApiParam({ name, type, typeHref, children }: ApiParamProps) {
  return (
    <>
      {name && <span className="text-[#fa8282] font-bold">{name}</span>}
      {name && ' '}
      {typeHref ? (
        <a href={typeHref} className="text-[#8cb9ff] no-underline hover:underline">
          {type}
        </a>
      ) : (
        <span className="text-[#8cb9ff]">{type}</span>
      )}
      {children && <span className="text-fd-muted-foreground"> — {children}</span>}
    </>
  );
}