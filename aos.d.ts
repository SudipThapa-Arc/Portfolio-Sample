declare module 'aos' {
    interface AosOptions {
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    declare const AOS: {
      init(options?: AosOptions): void;
      refresh(): void;
    };
  
    export default AOS;
  }
  