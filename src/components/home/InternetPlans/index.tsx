import React from 'react';
import PlanSection from './PlanSection';

const fiberPlans = [
  {
    name: "Fibra Start",
    speed: 100,
    price: 89.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 100 Mbps",
      "Upload 50 Mbps"
    ]
  },
  {
    name: "Fibra Plus",
    speed: 200,
    price: 119.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 200 Mbps",
      "Upload 100 Mbps",
      "IP Fixo"
    ],
    highlighted: true
  },
  {
    name: "Fibra Ultra",
    speed: 300,
    price: 149.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 300 Mbps",
      "Upload 150 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento"
    ]
  },
  {
    name: "Fibra Max",
    speed: 400,
    price: 199.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 400 Mbps",
      "Upload 200 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento",
      "Atendimento VIP"
    ]
  }
];

const radioPlans = [
  {
    name: "Rádio Basic",
    speed: 10,
    price: 69.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 10 Mbps",
      "Upload 5 Mbps"
    ]
  },
  {
    name: "Rádio Plus",
    speed: 15,
    price: 89.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 15 Mbps",
      "Upload 7 Mbps",
      "IP Fixo"
    ],
    highlighted: true
  },
  {
    name: "Rádio Pro",
    speed: 20,
    price: 109.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 20 Mbps",
      "Upload 10 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento"
    ]
  }
];

export default function InternetPlans() {
  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossos Planos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para você. Todos com qualidade e velocidade garantida.
          </p>
        </div>

        <PlanSection
          title="Planos Fibra Óptica"
          description="Internet ultra veloz com fibra óptica de ponta a ponta, ideal para streaming, jogos e home office"
          plans={fiberPlans}
          type="fiber"
        />

        <PlanSection
          title="Planos Via Rádio"
          description="Conexão estável para regiões mais distantes, perfeita para áreas rurais e locais sem cobertura de fibra"
          plans={radioPlans}
          type="radio"
        />
      </div>
    </section>
  );
}