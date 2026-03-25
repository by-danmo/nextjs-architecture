"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { Check, Store, User } from "lucide-react";
import { motion } from "motion/react";
import type { RegistrationStepperProps } from "../types";

export function RegistrationStepper({ currentStep }: RegistrationStepperProps) {
  const steps = [
    { id: 1, label: "Informations Vendeuse", icon: User },
    { id: 2, label: "Configuration Boutique", icon: Store },
  ];

  return (
    <div className="w-full max-w-lg mx-auto mb-16 px-4">
      <div className="relative flex justify-between items-center">
        {/* Progress Bar Track */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[3px] bg-slate-100 rounded-full" />

        {/* Active Progress Bar */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] bg-primary rounded-full origin-left"
          initial={{ width: "0%" }}
          animate={{
            width: currentStep === 1 ? "0%" : "100%",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;
          const StepIcon = step.icon;

          return (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center"
            >
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  backgroundColor:
                    isCompleted || isActive ? "#D62F42" : "#ffffff",
                  borderColor: isCompleted || isActive ? "#D62F42" : "#e2e8f0",
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex items-center justify-center w-16 h-16 rounded-full border-2 transition-shadow duration-300 p-4",
                  isCompleted ? "bg-primary text-white" : "bg-white",
                  !isActive && !isCompleted ? "text-slate-400" : "text-white",
                )}
              >
                <motion.div
                  initial={false}
                  animate={{
                    scale: isCompleted ? 0 : 1,
                    opacity: isCompleted ? 0 : 1,
                  }}
                  className="absolute"
                >
                  <StepIcon size={24} strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{
                    scale: isCompleted ? 1 : 0,
                    opacity: isCompleted ? 1 : 0,
                  }}
                  className="absolute"
                >
                  <Check size={24} strokeWidth={3} className="text-white" />
                </motion.div>
              </motion.div>

              <motion.span
                animate={{
                  y: isActive ? 0 : 2,
                  opacity: isActive || isCompleted ? 1 : 0.6,
                }}
                className={cn(
                  "absolute -bottom-8 w-max text-sm font-medium tracking-tight whitespace-nowrap",
                  isActive
                    ? "text-primary"
                    : isCompleted
                      ? "text-slate-700"
                      : "text-slate-400",
                )}
              >
                {step.label}
              </motion.span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
