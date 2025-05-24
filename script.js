const tips = [
    "Start your day by setting clear priorities.",
    "Take time to rest as you do to work.",
    "Learn something new every day.",
    "Drink enough water to stay hydrated.",
    "Smile, as a smile is positive energy.",
    "Define your goals clearly.",
    "Exercise regularly for better health.",
    "Avoid procrastination and start now.",
    "Help others, it will benefit you too.",
    "Sleep well to maintain your energy.",
    "Keep a positive mindset throughout the day.",
    "Read books to expand your knowledge.",
    "Practice gratitude daily.",
    "Stay organized to reduce stress.",
    "Listen more, speak less.",
    "Take breaks to boost your productivity.",
    "Stay curious and ask questions.",
    "Surround yourself with positive people.",
    "Set realistic and achievable goals.",
    "Be kind to yourself and others.",
    "Plan your tasks the night before.",
    "Focus on one thing at a time.",
    "Celebrate small victories.",
    "Keep learning from your mistakes.",
    "Avoid negative self-talk.",
    "Practice mindfulness and meditation.",
    "Stay active even if it's just walking.",
    "Eat healthy foods for better brain power.",
    "Limit your screen time.",
    "Take time for hobbies you enjoy.",
    "Stay connected with friends and family.",
    "Be honest and trustworthy.",
    "Keep your workspace tidy.",
    "Challenge yourself regularly.",
    "Stay patient and persistent.",
    "Help someone without expecting anything back.",
    "Stay humble and open-minded.",
    "Practice good posture.",
    "Take deep breaths when stressed.",
    "Write down your thoughts and goals.",
    "Listen to inspiring podcasts or music.",
    "Avoid comparing yourself to others.",
    "Learn to say no when needed.",
    "Spend time in nature.",
    "Visualize your success.",
    "Avoid multitasking to increase focus.",
    "Keep a journal of your progress.",
    "Stay adaptable to change.",
    "Be proactive, not reactive.",
    "Remember that failure is a step to success."
  ];
  
  function getTodayKey() {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
  
  function getAdvice(force = false) {
    const key = "advice_" + getTodayKey();
  
    if (!force && localStorage.getItem(key)) {
      document.getElementById("advice").textContent = localStorage.getItem(key);
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * tips.length);
    const selectedTip = tips[randomIndex];
    document.getElementById("advice").textContent = selectedTip;
    localStorage.setItem(key, selectedTip);
  }
  
  function shareWhatsApp() {
    const advice = document.getElementById("advice").textContent;
    const url = `https://wa.me/?text=${encodeURIComponent("🌟 نصيحة اليوم:\n" + advice)}`;
    window.open(url, "_blank");
  }
  
  function shareTwitter() {
    const advice = document.getElementById("advice").textContent;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent("🌟 نصيحة اليوم:\n" + advice)}`;
    window.open(url, "_blank");
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  function scheduleRegularUpdate() {
    setInterval(() => {
      getAdvice(true); // force update every 2 minutes
    }, 120000);
  }
  
  window.onload = () => {
    getAdvice();
    scheduleRegularUpdate();
  };
  