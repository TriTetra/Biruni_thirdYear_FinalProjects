
import React from 'react'; // React bileşenlerini kullanmak için import edilir.


{/*AuthButtons bileşeni*/}
const AuthButtons = () => {
  return (
    // Düğmeleri hizalamak için bir div oluşturduk. "flex" sınıfıyla yatay hizalama sağlanır.
    <div className="flex items-center gap-2 font-semibold">

      {/* Log in düğmesi */}
      <button className="py-1.5 text-base hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors font-normal pr-3 px-2">
        Log in
      </button>
      
      {/* Get Started düğmesi */}
      <button className="px-3 py-1.5 text-sm text-white bg-black hover:bg-black-500 rounded-md transition-colors">
        Get Yadigar Free
      </button>
    </div>
  );
};

export default AuthButtons; 