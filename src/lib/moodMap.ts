import { Mood, MoodConfig } from '@/types'

export const moodConfig: Record<Mood, MoodConfig> = {
  happy: {
    emoji: '😄',
    label: 'Happy',
    description: 'Feeling great and want to keep the good vibes going',
    color: '#f4a261',
    bgColor: 'rgba(244, 162, 97, 0.15)',
    cowLine: "Moooo-velous! Let's keep those good vibes going! 🐄"
  },
  sad: {
    emoji: '😢',
    label: 'Sad',
    description: 'Need a good cry or something to lift your spirits',
    color: '#74b9ff',
    bgColor: 'rgba(116, 185, 255, 0.15)',
    cowLine: "Aww, don't have a cow. I've got something to help! 🐄"
  },
  stressed: {
    emoji: '😤',
    label: 'Stressed',
    description: 'Need something to help you unwind and laugh',
    color: '#ff7675',
    bgColor: 'rgba(255, 118, 117, 0.15)',
    cowLine: "Holy cow, let's get you to your happy place! 🐄"
  },
  bored: {
    emoji: '🥱',
    label: 'Bored',
    description: 'Need something exciting to get you going',
    color: '#a29bfe',
    bgColor: 'rgba(162, 155, 254, 0.15)',
    cowLine: "Don't be a lazy cow — I've got something thrilling! 🐄"
  },
  exhausted: {
    emoji: '😴',
    label: 'Exhausted',
    description: 'Something easy to watch while you rest',
    color: '#81ecec',
    bgColor: 'rgba(129, 236, 236, 0.15)',
    cowLine: "Time to graze on something easy and comfy! 🐄"
  },
  excited: {
    emoji: '🤩',
    label: 'Excited',
    description: 'Match your energy with something epic',
    color: '#fdcb6e',
    bgColor: 'rgba(253, 203, 110, 0.15)',
    cowLine: "Udderly excited for you! Let's find something epic! 🐄"
  },
  chill: {
    emoji: '😌',
    label: 'Chill',
    description: 'Something relaxing to enjoy at your own pace',
    color: '#55efc4',
    bgColor: 'rgba(85, 239, 196, 0.15)',
    cowLine: "Just grazing through movies for your chill evening! 🐄"
  },
  motivated: {
    emoji: '💪',
    label: 'Motivated',
    description: 'Something inspiring to fuel your drive',
    color: '#e17055',
    bgColor: 'rgba(225, 112, 85, 0.15)',
    cowLine: "No bull — let's find something to fire you up! 🐄"
  }
}

export const moodToGenres: Record<Mood, number[]> = {
  happy:     [35, 10751, 16, 12],
  sad:       [18, 10749, 36],
  stressed:  [35, 16, 10751],
  bored:     [28, 12, 878, 53],
  exhausted: [35, 10770, 10751],
  excited:   [28, 12, 14, 878],
  chill:     [18, 10749, 36, 99],
  motivated: [36, 99, 18, 878]
}