import { Service, Brand, Area, FAQ } from './types';

export interface LocationHub {
  area: string;
  address: string;
}

export const SERVICES: Service[] = [
  {
    id: 'screen',
    title: 'Screen Replacement',
    description: 'Expert replacement of cracked or damaged LED, OLED, and QLED panels. We use industrial-grade suction lifts and original factory-sealed display modules to restore perfect clarity and color accuracy.',
    icon: '📺',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1200', // Actual television on a repair workbench with technician
    brands: ['Samsung', 'Sony', 'OnePlus', 'Panasonic', 'MI', 'LG']
  },
  {
    id: 'motherboard',
    title: 'Motherboard Repair',
    description: 'Precision chip-level repair for TV mainboards. Fixing boot loops, HDMI port failures, and processor overheating using advanced BGA infrared rework stations and original ICs.',
    icon: '🖥️',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200', // Professional electronics repair bench
    brands: ['Tizen', 'Android TV', 'Google TV', 'PatchWall']
  },
  {
    id: 'power',
    title: 'Power Supply Issues',
    description: 'Specialized diagnostics for TV power modules. We resolve standby blinking, automatic restarts, and no-power conditions by replacing faulty MOSFETs and high-grade capacitors.',
    icon: '🔌',
    image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?auto=format&fit=crop&q=80&w=1200', // Technical testing with a multimeter on circuitry
    brands: ['All Major Brands']
  },
  {
    id: 'backlight',
    title: 'Backlight Repair',
    description: 'Complete LED strip replacement for sets with "Sound but No Picture" or blue/purple tinting. We guarantee 100% brightness uniformity across the entire panel.',
    icon: '💡',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1200', // Detailed internal electronics view
    brands: ['4K UHD', 'QLED', 'OLED']
  }
];

export const BRANDS: Brand[] = [
  {
    name: 'Samsung',
    logo: 'https://cdn.simpleicons.org/samsung/1428A0',
    description: 'QLED, Crystal UHD & Neo QLED Specialists',
    specialty: 'OneConnect Box & Tizen OS'
  },
  {
    name: 'Sony',
    logo: 'https://cdn.simpleicons.org/sony/000000',
    description: 'Bravia OLED & Master Series experts',
    specialty: 'Cognitive Processor XR & Android TV'
  },
  {
    name: 'OnePlus',
    logo: 'https://cdn.simpleicons.org/oneplus/F5010C',
    description: 'Q, U, and Y series display specialists',
    specialty: 'Gamma Engine & OxygenPlay'
  },
  {
    name: 'Panasonic',
    logo: 'https://cdn.simpleicons.org/panasonic/0030B5',
    description: '4K LED & Smart Viera service',
    specialty: 'HCX Pro & Hollywood Tuning'
  },
  {
    name: 'MI (Xiaomi)',
    logo: 'https://cdn.simpleicons.org/xiaomi/FF6700',
    description: 'Most popular PatchWall & 5A series repair',
    specialty: 'Vivid Picture Engine & App Support'
  },
  {
    name: 'LG',
    logo: 'https://cdn.simpleicons.org/lg/A50034',
    description: 'OLED, NanoCell & WebOS specialists',
    specialty: 'Alpha 9 Gen 5 & pixel-level repair'
  }
];

export const COVERAGE: Area[] = [
  { name: 'Rajarajeshwari Nagar', icon: '📍' },
  { name: 'Kengeri', icon: '📍' },
  { name: 'KR Puram', icon: '📍' },
  { name: 'Electronic City', icon: '📍' },
  { name: 'Anekal', icon: '📍' },
  { name: 'Bidadi', icon: '📍' },
  { name: 'Banashankari', icon: '📍' },
  { name: 'Jayanagar', icon: '📍' },
  { name: 'JP Nagar', icon: '📍' },
  { name: 'Bannerghatta Road', icon: '📍' },
  { name: 'Vijayanagar', icon: '📍' },
  { name: 'Basaveshwaranagar', icon: '📍' },
  { name: 'HSR Layout', icon: '📍' }
];

export const HUBS: LocationHub[] = [
  {
    area: 'Uttarahalli',
    address: '12th Cross Rd, Uttarahalli Hobli, Bengaluru, Karnataka 560061'
  },
  {
    area: 'Rajarajeshwari Nagar',
    address: 'Ideal Homes Township, RR Nagar, Bengaluru, Karnataka 560098'
  },
  {
    area: 'Jayanagar',
    address: '4th Block, Jayanagar, Bengaluru, Karnataka 560041'
  },
  {
    area: 'JP Nagar',
    address: '15th Cross Rd, Phase 2, JP Nagar, Bengaluru, Karnataka 560078'
  },
  {
    area: 'Basaveshwaranagar',
    address: '69, 1st Main Rd, Stages 1 & 2, Basaveshwar Nagar, Bengaluru, Karnataka 560079'
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Do you provide same-day TV repair?",
    answer: "Yes, we offer same-day service for most common issues like backlight failure, software glitches, and minor board repairs across Bengaluru."
  },
  {
    question: "What is the warranty on repairs?",
    answer: "We provide a comprehensive 90-day warranty on all genuine spare parts replaced and our service labor."
  },
  {
    question: "Do you use original company parts?",
    answer: "We strictly use original manufacturer parts for Samsung, Sony, OnePlus, Panasonic, and MI to ensure longevity and performance."
  }
];