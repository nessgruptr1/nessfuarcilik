 "use client";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clientReferences } from "@/data/references";
import { motion } from "framer-motion";

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        title="Kusursuz projelere imza attığımız Değerli Firmalarımız"
        description="Her biriyle uzun soluklu iş ortaklığı kurduğumuz markalarımıza teşekkür ederiz."
        breadcrumbs={[{ label: "Referanslarımız", href: "/referanslar" }]}
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          overline="Referanslar"
          title="Farklı sektörlerden güçlü iş ortaklıkları"
          description="Gıda, teknoloji, sağlık, kamu ve üretim sektörlerinden yüzlerce projede yer aldık."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientReferences.map((reference) => (
            <motion.div
              key={reference.id}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="rounded-md border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              {reference.name}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
