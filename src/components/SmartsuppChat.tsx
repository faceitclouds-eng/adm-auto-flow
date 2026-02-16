import { useEffect } from 'react';

declare global {
  interface Window {
    smartsupp: any;
    _smartsupp: any;
  }
}

export default function SmartsuppChat() {
  useEffect(() => {
    window._smartsupp = window._smartsupp || {};
    window._smartsupp.key = 'a55811e7e48e40abfd3f2f94a124219764e5b24d';

    if (!window.smartsupp) {
      const d = document;
      const o: any = (window.smartsupp = function () {
        o._.push(arguments);
      });
      o._ = [];
      const s = d.getElementsByTagName('script')[0];
      const c = d.createElement('script');
      c.type = 'text/javascript';
      c.charset = 'utf-8';
      c.async = true;
      c.src = 'https://www.smartsuppchat.com/loader.js?';
      s.parentNode?.insertBefore(c, s);
    }
  }, []);

  return null;
}
