import { useEffect } from "react";

const SmartSupp = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      var _smartsupp = _smartsupp || {};
        _smartsupp.key = '2093c9861ffae9405db83d798684eb4e9f6e2d19';
        window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
        })(document);
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default SmartSupp;
