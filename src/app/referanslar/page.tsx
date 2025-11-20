import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

const referenceClients = [
  "AGRONİTRO TARIM",
  "ARAS TURİZM",
  "ARDEF MADEN",
  "ARFEM ALEMİNYUM",
  "ASİA TOHUMCULUK",
  "ASYA SİNYALİZASYON",
  "ATASAM MEDİKAL",
  "AVEREST CANDY GIDA",
  "AYD CAM GRUP",
  "AYGEN MÜHENDİSLİK",
  "BAF ENDÜSTRİ MAKİNE",
  "BAİDE ELEKTRONİK",
  "BAY ŞEKER",
  "BİLMAK GÜVENLİK",
  "BİOAKTİF MEDİKAL",
  "BİTLİS VALİLİĞİ",
  "BLOK BİMS",
  "BTİLİS İL KÜLTÜR MÜDÜRLÜĞÜ",
  "BURSAN YANGIN SİSTEMLERİ",
  "CAM DÜNYASI",
  "CARL ZEİSS",
  "CLOOS KAYNAK MAKİNALARI",
  "CLOOS ROBOTİK KAYNAK",
  "COCO SPACE",
  "DEİCO MÜHENDİSLİK",
  "DEMKA KİLİT",
  "DİYARBAKIR BÜYÜKŞEHİR BELEDİYESİ",
  "DİYARBAKIR TİCARET BORSASI",
  "DİYARBAKIR TİCARET VE SANAYİ ODASI",
  "DİYARBAKIR VALİLİĞİ",
  "DİYARBAKIR YENİŞEHİR BELEDİYESİ",
  "DRC KAUCUK",
  "EKİN MEDİKAL",
  "EKMAŞ AŞ",
  "ELEKTRİO",
  "ELMANN MEDİKAL LAZER",
  "ENELSAL ELEKTİRİK",
  "EPSON",
  "ERGÜ MAKİNE",
  "ERİLMEZ GIDA",
  "ERTAŞ GRUP (BLOKBİMS)",
  "ET VE SÜT KURUMU",
  "ETİ MADEN – ETİ GÜBRE",
  "FATİH PROJESİ",
  "FC FANTASY GİYİM",
  "FIRAT DİŞ DEPOSU",
  "FİLO KOMRESÖR",
  "FOTON SAĞLIK",
  "GALENA ENDÜSTRİ",
  "GİRYAHAN DANIŞMANLIK",
  "GİZE DOOR",
  "GÜLEÇ KÖY",
  "HAZERHAN İLAÇ",
  "HUZUR MALZEMECİLİK",
  "IBM TEKNOLOJİ",
  "İNDHTECH TEKNOLOJİ",
  "İNTECRO ROBOTİK",
  "JAİN SULAMA SİSTEMLERİ",
  "KARACADAĞ KALKINMA AJANSI",
  "KAYAPINAR BELEDİYESİ",
  "KOBOLD ÖLÇÜM CİHAZLARI",
  "KOLT MÜHENDİSLİK",
  "KUBATO TRAKTÖR",
  "KUBİK ROBOTİK",
  "LİDYA AŞ",
  "LİFE STONE MERMER",
  "MARDRİP SULAMA",
  "MEDDATA BİLİŞİM",
  "MEDGAPOL TÜL PERDE",
  "MEDİSAM MEDİKAL",
  "METOD PARK",
  "MİCROTECH",
  "MİCROTECH SAVUNMA MÜHENDİSLİK",
  "MİLLİ EĞİTİM BAKANLIĞI",
  "MİRSAN TARIM",
  "MİSS DENTAL",
  "MONKAS KAPI",
  "MPS METAL",
  "MTM MADENCİLİK",
  "MTM MADENCİLİK VE MÜHENDİSLİK",
  "NERGİZ TOHUM",
  "NORDİK LAZER",
  "OPTİK DÜNYASI",
  "ORDEL ELEKTRONİK",
  "ÖSSOR MEDİKAL",
  "ÖZAYTAÇ TEKSTİL",
  "PARK KENT MOBİLYALARI",
  "PEKER METAL",
  "POLER TARIM",
  "PROYEM",
  "QANTUM İPLİK",
  "RADİSSON BLUE OTEL",
  "RAM ROBOTİCS",
  "RANDO ŞEKERLEME",
  "REBSTOCK",
  "RELKO AŞ",
  "SECAND MÜHENDİSLİK",
  "SEFA MEDİKAL",
  "SEYHAN İNŞAAT",
  "SİYA LİFE İLAÇ SAN",
  "STARNG İPLİK",
  "STEELREF MADEN",
  "STERİLMED MEDİKAL",
  "STUBLİNA",
  "SUR BELEDİYESİ",
  "ŞANLI URFA MİLLİ EĞİTİM MÜDÜRLÜĞÜ",
  "TAG ARABİA",
  "TEKNOBİL TARIM",
  "TEKNOBİMS",
  "TEKNOKAR",
  "TMG DOĞALTAŞ MERMER",
  "TOSYA ÇELİK",
  "TURK İLAÇ AŞ",
  "TURKİSH ARAPGATE",
  "TÜBİTAK",
  "TÜRKİLAÇ AŞ / TÜRK OLUKLU MUKAVVA",
  "VURAL AMBALAJ",
  "WYNDHAM HOTEL",
  "YAŞARBEY KAHVE",
  "YEDİTEPE MEDİKAL",
  "YÖN TİME YÖNLENDİRME SİSTEMLERİ",
  "YÖRÜK HİDROLİK",
  "ZEROPEST TARIM",
  "ZİRAAT BANKASI",
];

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
          {referenceClients.map((name) => (
            <div
              key={name}
              className="rounded-3xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
