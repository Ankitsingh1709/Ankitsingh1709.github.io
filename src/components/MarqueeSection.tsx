import { useEffect, useRef, useState } from 'react';

const DATA = ['SQL', 'Power BI', 'DAX', 'Python', 'Snowflake', 'Microsoft Fabric', 'Power Automate', 'dbt', 'AWS S3', 'BigQuery', 'Salesforce', 'Excel'];
const AI = ['LangGraph', 'LangChain', 'RAG', 'Gemini', 'OpenAI', 'Ollama', 'Google ADK', 'MCP', 'Cloud Run', 'Copilot Studio', 'Streamlit', 'Forecasting'];

function Row({ items, transform, filled }: { items: string[]; transform: string; filled?: boolean }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="flex gap-3" style={{ transform, willChange: 'transform' }}>
      {tripled.map((item, i) => (
        <span
          key={i}
          className={`shrink-0 whitespace-nowrap rounded-2xl px-8 py-5 font-black uppercase tracking-tight md:px-12 md:py-8 ${
            filled ? 'text-white' : 'border-2 border-[#D7E2EA]/30 text-[#D7E2EA]'
          }`}
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
            background: filled ? 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' : undefined,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const sectionTop = ref.current.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={ref} className="flex flex-col gap-3 overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40">
      <Row items={DATA} transform={`translateX(${offset - 600}px)`} />
      <Row items={AI} filled transform={`translateX(${-(offset - 200)}px)`} />
    </section>
  );
}
