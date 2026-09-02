declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.mov' {
  const src: string;
  export default src;
}

declare module '*.m4v' {
  const src: string;
  export default src;
}

declare module 'fslightbox-react' {
  import type { ComponentType } from 'react';

  interface FsLightboxProps {
    toggler: boolean;
    sources: string[];
    sourceIndex?: number;
    onClose?: () => void;
  }

  const FsLightbox: ComponentType<FsLightboxProps>;
  export default FsLightbox;
}
