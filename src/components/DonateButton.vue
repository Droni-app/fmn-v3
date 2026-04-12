<template>
  <a
    href="https://checkout.wompi.co/l/VPOS_2DN3Dr"
    target="_blank"
    rel="noopener noreferrer"
    class="donate-btn group fixed bottom-8 right-8 z-50 flex items-center bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white rounded-full shadow-2xl transition-all duration-500 overflow-hidden"
  >
    <div class="relative flex items-center justify-center w-16 h-16 flex-shrink-0">
      <i class="mdi mdi-heart text-4xl animate-heartbeat relative z-10" />
      <span class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping-slow" />
    </div>
    <div class="max-w-0 group-hover:max-w-[180px] transition-all duration-500 overflow-hidden">
      <span class="text-xl font-bold whitespace-nowrap pr-6 tracking-wide">¡DONAR AHORA!</span>
    </div>
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
  </a>
</template>

<style scoped>
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.3); }
  30% { transform: scale(1.1); }
}

@keyframes ping-slow {
  0% { transform: scale(1); opacity: 0.3; }
  100% { transform: scale(2); opacity: 0; }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(244,63,94,0.4), 0 0 40px rgba(244,63,94,0.2); }
  50% { box-shadow: 0 0 30px rgba(244,63,94,0.6), 0 0 60px rgba(244,63,94,0.3); }
}

.animate-heartbeat { animation: heartbeat 1.5s ease-in-out infinite; }
.group:hover .animate-heartbeat { animation: heartbeat 0.6s ease-in-out infinite; }
.animate-ping-slow { animation: ping-slow 1s cubic-bezier(0, 0, 0.2, 1); }
.donate-btn { animation: pulse-glow 2s ease-in-out infinite; }
.donate-btn:hover { animation: pulse-glow 0.8s ease-in-out infinite; }
</style>
