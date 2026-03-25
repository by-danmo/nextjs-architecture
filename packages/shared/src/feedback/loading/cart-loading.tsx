'use client';

import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

export const CartLoading = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <div className="relative">
        <motion.div
          animate={{
            x: [0, 10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <ShoppingCart size={48} className="text-[#D62F42]" />
        </motion.div>
        
        {/* Wheels effect */}
        <motion.div 
            className="absolute -bottom-1 left-2 w-2 h-2 bg-gray-300 rounded-full"
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
            className="absolute -bottom-1 right-2 w-2 h-2 bg-gray-300 rounded-full"
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Item dropping into cart */}
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#D62F42] rounded-md"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 10, opacity: 1, scale: [1, 0.8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeIn",
            times: [0, 0.6, 1]
          }}
        />
      </div>
      <p className="text-sm font-medium text-gray-500 animate-pulse">Ajout du produit...</p>
    </div>
  );
};
