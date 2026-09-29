// Dummy data yang meniru response API GET /jobs (30 lowongan).
export const jobs = [
  {
    id: 30,
    title: "Product Designer Intern",
    description: "Magang 4 bulan di tim desain produk marketplace. Kamu akan terlibat dalam proyek nyata mulai dari riset hingga desain fitur yang dipakai jutaan pengguna.",
    requirements: "- Mahasiswa aktif atau fresh graduate jurusan Desain, Informatika, atau sejenisnya\n- Portofolio UI/UX (proyek kuliah atau pribadi)\n- Familiar dengan Figma\n- Bersedia magang full-time selama 4 bulan",
    responsibilities: "- Membantu membuat wireframe dan prototipe\n- Mengikuti sesi riset dan usability testing\n- Mendokumentasikan komponen design system",
    benefits: "- Uang saku bulanan\n- Mentoring dari Senior Product Designer\n- Sertifikat magang\n- Peluang menjadi karyawan tetap",
    company: {
      id: 6,
      name: "PT Toko Kita Commerce",
      slug: "pt-toko-kita-commerce",
      tagline: "Belanja mudah, UMKM bertumbuh",
      description: "PT Toko Kita Commerce adalah marketplace yang berfokus memberdayakan UMKM lokal dengan lebih dari 150.000 penjual aktif dan 8 juta pengguna bulanan.",
      logoUrl: "https://ui-avatars.com/api/?name=Toko+Kita+Commerce&background=F97316&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/toko-kita-commerce/1200/400",
      website: "https://www.tokokitacommerce.com",
      email: "hr@tokokitacommerce.com",
      phone: "0215556677",
      foundedYear: 2015,
      companySize: "LARGE",
      companyType: "PRIVATE",
      industryType: "E_COMMERCE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 7,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/toko-kita-commerce"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/tokokitacommerce"
        },
        {
          platform: "WEBSITE",
          url: "https://www.tokokitacommerce.com"
        }
      ],
      createdAt: "2026-09-21T06:10:13.036633Z",
      updatedAt: "2026-09-21T06:12:58.220344Z"
    },
    employerId: 7,
    category: {
      id: 8,
      name: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Perancangan pengalaman dan antarmuka pengguna, mulai dari riset, wireframe, prototipe, hingga design system.",
      iconUrl: "https://api.iconify.design/tabler/palette.svg",
      active: true,
      parentId: 11,
      parentName: "Design & Creative",
      subCategories: [],
      createdAt: "2026-09-25T00:23:36.005262Z"
    },
    skills: [
      {
        id: 27,
        name: "Figma",
        slug: "figma",
        category: "TOOL",
        active: true
      },
      {
        id: 40,
        name: "Teamwork",
        slug: "teamwork",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 3,
        name: "Fresh Graduate",
        slug: "fresh-graduate",
        active: true
      }
    ],
    address: "Jl. Letjen S. Parman Kav. 28, APL Tower Lt. 18",
    city: "Jakarta Barat",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "11470",
    minSalary: 3000000,
    maxSalary: 4000000,
    currency: "IDR",
    salaryNegotiable: true,
    salaryDisclosed: true,
    jobType: "INTERNSHIP",
    workMode: "ONSITE",
    experienceLevel: "ENTRY_LEVEL",
    status: "OPEN",
    openings: 3,
    applicationDeadline: "2026-10-28",
    expiresAt: "2026-11-28",
    active: true,
    viewCount: 350,
    applicationCount: 32,
    createdAt: "2026-09-25T11:55:30.207130Z",
    updatedAt: "2026-09-25T11:57:30.281330Z",
    publishedAt: "2026-09-25T11:57:30.281330Z",
    closedAt: null
  },
  {
    id: 29,
    title: "Site Reliability Engineer",
    description: "Jaga keandalan sistem pembayaran yang harus tersedia 24/7. Kamu akan menyusun SLO, meningkatkan observability, dan memimpin analisis pasca-insiden.",
    requirements: "- Minimal 4 tahun pengalaman sebagai SRE atau DevOps\n- Menguasai Kubernetes dan cloud (AWS atau GCP)\n- Pengalaman dengan observability tools (Prometheus, Grafana, OpenTelemetry)\n- Kemampuan scripting dengan Go atau Python\n- Pengalaman menangani insiden produksi berskala besar",
    responsibilities: "- Menyusun dan memantau SLO/SLI layanan kritikal\n- Mengotomatisasi pekerjaan operasional berulang\n- Memimpin incident response dan postmortem\n- Melakukan capacity planning",
    benefits: "- Gaji kompetitif, bonus, dan tunjangan on-call\n- ESOP\n- Asuransi kesehatan untuk karyawan dan keluarga\n- Hybrid 2 hari WFO",
    company: {
      id: 2,
      name: "PT Bayar Cepat Indonesia",
      slug: "pt-bayar-cepat-indonesia",
      tagline: "Pembayaran digital untuk semua",
      description: "PT Bayar Cepat Indonesia adalah perusahaan fintech penyedia layanan payment gateway dan dompet digital yang melayani lebih dari 40.000 merchant di seluruh Indonesia.",
      logoUrl: "https://ui-avatars.com/api/?name=Bayar+Cepat+Indonesia&background=2563EB&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/bayar-cepat-indonesia/1200/400",
      website: "https://www.bayarcepatindonesia.com",
      email: "hr@bayarcepatindonesia.com",
      phone: "0217654321",
      foundedYear: 2016,
      companySize: "LARGE",
      companyType: "PRIVATE",
      industryType: "FINANCE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 3,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/bayar-cepat-indonesia"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/bayarcepatindonesia"
        },
        {
          platform: "WEBSITE",
          url: "https://www.bayarcepatindonesia.com"
        }
      ],
      createdAt: "2026-09-22T02:10:13.036633Z",
      updatedAt: "2026-09-22T02:12:58.220344Z"
    },
    employerId: 3,
    category: {
      id: 5,
      name: "DevOps & Cloud",
      slug: "devops-cloud",
      description: "Pengelolaan infrastruktur, CI/CD, containerization, dan layanan cloud untuk memastikan aplikasi berjalan andal dan scalable.",
      iconUrl: "https://api.iconify.design/tabler/cloud-computing.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:20:36.005262Z"
    },
    skills: [
      {
        id: 9,
        name: "Kubernetes",
        slug: "kubernetes",
        category: "TOOL",
        active: true
      },
      {
        id: 7,
        name: "AWS",
        slug: "aws",
        category: "CLOUD_PLATFORM",
        active: true
      },
      {
        id: 17,
        name: "Go",
        slug: "go",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 25,
        name: "Terraform",
        slug: "terraform",
        category: "TOOL",
        active: true
      },
      {
        id: 39,
        name: "Linux",
        slug: "linux",
        category: "TOOL",
        active: true
      }
    ],
    tags: [
      {
        id: 6,
        name: "Stock Options",
        slug: "stock-options",
        active: true
      },
      {
        id: 2,
        name: "Urgent Hiring",
        slug: "urgent-hiring",
        active: true
      }
    ],
    address: "Jl. Jend. Sudirman Kav. 52-53, Equity Tower Lt. 30",
    city: "Jakarta Selatan",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "12190",
    minSalary: 28000000,
    maxSalary: 45000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "SENIOR_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-12-08",
    expiresAt: "2027-01-08",
    active: true,
    viewCount: 213,
    applicationCount: 99,
    createdAt: "2026-09-25T11:30:17.203559Z",
    updatedAt: "2026-09-25T11:32:17.278619Z",
    publishedAt: "2026-09-25T11:32:17.278619Z",
    closedAt: null
  },
  {
    id: 28,
    title: "Associate Product Manager",
    description: "Program Associate Product Manager untuk talenta muda yang ingin berkarier di dunia produk digital. Kamu akan menangani fitur aplikasi kurir dan pelacakan paket.",
    requirements: "- Pengalaman 0-2 tahun, fresh graduate dipersilakan melamar\n- Kemampuan analitis dan problem solving yang kuat\n- Memahami dasar SQL atau bersedia mempelajarinya\n- Komunikasi yang baik dalam bahasa Indonesia dan Inggris",
    responsibilities: "- Membantu menyusun PRD dan user story\n- Melakukan riset lapangan bersama kurir\n- Memantau metrik fitur dan menyusun laporan\n- Berkoordinasi dengan tim engineering dan desain",
    benefits: "- Gaji kompetitif\n- Program mentoring dengan Senior PM\n- Asuransi kesehatan\n- Tunjangan transportasi",
    company: {
      id: 4,
      name: "PT Kirim Kilat Logistik",
      slug: "pt-kirim-kilat-logistik",
      tagline: "Logistik cerdas, pengiriman tepat waktu",
      description: "PT Kirim Kilat Logistik adalah perusahaan logistik berbasis teknologi dengan jaringan 350 hub di 34 provinsi dan sistem routing berbasis machine learning.",
      logoUrl: "https://ui-avatars.com/api/?name=Kirim+Kilat+Logistik&background=DC2626&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/kirim-kilat-logistik/1200/400",
      website: "https://www.kirimkilatlogistik.com",
      email: "hr@kirimkilatlogistik.com",
      phone: "0318765432",
      foundedYear: 2012,
      companySize: "ENTERPRISE",
      companyType: "PRIVATE",
      industryType: "LOGISTICS",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 5,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/kirim-kilat-logistik"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/kirimkilatlogistik"
        },
        {
          platform: "WEBSITE",
          url: "https://www.kirimkilatlogistik.com"
        }
      ],
      createdAt: "2026-09-24T04:10:13.036633Z",
      updatedAt: "2026-09-24T04:12:58.220344Z"
    },
    employerId: 5,
    category: {
      id: 9,
      name: "Product Management",
      slug: "product-management",
      description: "Pengelolaan siklus hidup produk digital, mulai dari discovery, roadmap, hingga peluncuran fitur.",
      iconUrl: "https://api.iconify.design/tabler/layout-kanban.svg",
      active: true,
      parentId: 12,
      parentName: "Product & Business",
      subCategories: [],
      createdAt: "2026-09-25T00:24:36.005262Z"
    },
    skills: [
      {
        id: 30,
        name: "SQL",
        slug: "sql",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 11,
        name: "Communication",
        slug: "communication",
        category: "SOFT_SKILL",
        active: true
      },
      {
        id: 10,
        name: "Problem Solving",
        slug: "problem-solving",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 3,
        name: "Fresh Graduate",
        slug: "fresh-graduate",
        active: true
      }
    ],
    address: "Jl. Basuki Rahmat No. 8-12, Gedung Kilat Center",
    city: "Surabaya",
    state: "Jawa Timur",
    country: "Indonesia",
    zipCode: "60271",
    minSalary: 8000000,
    maxSalary: 12000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "ONSITE",
    experienceLevel: "ENTRY_LEVEL",
    status: "OPEN",
    openings: 2,
    applicationDeadline: "2026-11-07",
    expiresAt: "2026-12-07",
    active: true,
    viewCount: 76,
    applicationCount: 46,
    createdAt: "2026-09-25T11:05:04.199988Z",
    updatedAt: "2026-09-25T11:07:04.275908Z",
    publishedAt: "2026-09-25T11:07:04.275908Z",
    closedAt: null
  },
  {
    id: 27,
    title: "Backend Engineer (Node.js)",
    description: "Kembangkan layanan backend untuk sistem rekam medis elektronik dan integrasi SATUSEHAT. Kamu akan membangun API yang aman dan sesuai regulasi data kesehatan.",
    requirements: "- Minimal 2 tahun pengalaman backend development dengan Node.js\n- Menguasai TypeScript dan framework seperti NestJS atau Express\n- Pengalaman dengan PostgreSQL atau MongoDB\n- Memahami keamanan data dan autentikasi (OAuth2, JWT)\n- Nilai tambah: pengalaman dengan standar HL7 FHIR",
    responsibilities: "- Membangun API rekam medis elektronik\n- Mengintegrasikan sistem dengan platform SATUSEHAT\n- Menjaga keamanan dan privasi data pasien\n- Menulis unit test dan dokumentasi API",
    benefits: "- Gaji kompetitif\n- Konsultasi dokter gratis untuk karyawan dan keluarga\n- Hybrid 2 hari WFO di Bandung\n- Budget belajar tahunan",
    company: {
      id: 3,
      name: "PT Sehat Digital Sejahtera",
      slug: "pt-sehat-digital-sejahtera",
      tagline: "Akses kesehatan dalam genggaman",
      description: "PT Sehat Digital Sejahtera mengembangkan aplikasi telemedicine dan manajemen rekam medis elektronik yang terhubung dengan lebih dari 1.200 fasilitas kesehatan.",
      logoUrl: "https://ui-avatars.com/api/?name=Sehat+Digital+Sejahtera&background=16A34A&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/sehat-digital-sejahtera/1200/400",
      website: "https://www.sehatdigitalsejahtera.com",
      email: "hr@sehatdigitalsejahtera.com",
      phone: "0224567890",
      foundedYear: 2019,
      companySize: "MEDIUM",
      companyType: "PRIVATE",
      industryType: "HEALTHCARE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 4,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/sehat-digital-sejahtera"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/sehatdigitalsejahtera"
        },
        {
          platform: "WEBSITE",
          url: "https://www.sehatdigitalsejahtera.com"
        }
      ],
      createdAt: "2026-09-23T03:10:13.036633Z",
      updatedAt: "2026-09-23T03:12:58.220344Z"
    },
    employerId: 4,
    category: {
      id: 4,
      name: "Backend Development",
      slug: "backend-development",
      description: "Pekerjaan yang berfokus pada pengembangan sisi server, logika bisnis, RESTful API, dan manajemen database menggunakan teknologi seperti Java, Node.js, Python, dan Spring Boot.",
      iconUrl: "https://api.iconify.design/tabler/server.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:19:36.005262Z"
    },
    skills: [
      {
        id: 16,
        name: "Node.js",
        slug: "node-js",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 2,
        name: "TypeScript",
        slug: "typescript",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 5,
        name: "PostgreSQL",
        slug: "postgresql",
        category: "DATABASE",
        active: true
      },
      {
        id: 23,
        name: "MongoDB",
        slug: "mongodb",
        category: "DATABASE",
        active: true
      }
    ],
    tags: [
      {
        id: 4,
        name: "Work Life Balance",
        slug: "work-life-balance",
        active: true
      },
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      }
    ],
    address: "Jl. Asia Afrika No. 133-137, Gedung Graha Sehat Lt. 5",
    city: "Bandung",
    state: "Jawa Barat",
    country: "Indonesia",
    zipCode: "40112",
    minSalary: 13000000,
    maxSalary: 20000000,
    currency: "IDR",
    salaryNegotiable: true,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "MID_LEVEL",
    status: "OPEN",
    openings: 2,
    applicationDeadline: "2026-12-02",
    expiresAt: "2027-01-02",
    active: true,
    viewCount: 1839,
    applicationCount: 113,
    createdAt: "2026-09-25T10:40:51.196417Z",
    updatedAt: "2026-09-25T10:42:51.273197Z",
    publishedAt: "2026-09-25T10:42:51.273197Z",
    closedAt: null
  },
  {
    id: 26,
    title: "QA Engineer (Manual & API Testing)",
    description: "Jaga kualitas platform job portal kami dengan melakukan pengujian menyeluruh sebelum setiap rilis. Posisi ini cocok untuk kamu yang teliti dan ingin berkembang ke arah automation.",
    requirements: "- Minimal 1 tahun pengalaman sebagai QA\n- Mampu menyusun test case dan test scenario\n- Pengalaman API testing dengan Postman\n- Memahami dasar SQL untuk validasi data\n- Nilai tambah: pengalaman dasar dengan Cypress",
    responsibilities: "- Menyusun dan menjalankan test case\n- Melakukan API testing dan regression testing\n- Melaporkan bug dengan jelas dan terstruktur\n- Berpartisipasi dalam sprint planning",
    benefits: "- Gaji kompetitif\n- Fully remote\n- BPJS Kesehatan dan asuransi swasta\n- Budget belajar Rp 5.000.000 per tahun",
    company: {
      id: 1,
      name: "PT Teknologi Nusantara",
      slug: "pt-teknologi-nusantara",
      tagline: "Building the future of digital hiring",
      description: "PT Teknologi Nusantara adalah perusahaan teknologi yang fokus pada pengembangan platform job portal berbasis AI untuk mempertemukan talenta terbaik dengan perusahaan di Indonesia.",
      logoUrl: "https://ui-avatars.com/api/?name=Teknologi+Nusantara&background=7C3AED&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/teknologi-nusantara/1200/400",
      website: "https://www.teknologinusantara.com",
      email: "hr@teknologinusantara.com",
      phone: "0211234567",
      foundedYear: 2018,
      companySize: "MEDIUM",
      companyType: "PRIVATE",
      industryType: "TECHNOLOGY",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 2,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/teknologi-nusantara"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/teknologinusantara"
        },
        {
          platform: "WEBSITE",
          url: "https://www.teknologinusantara.com"
        }
      ],
      createdAt: "2026-09-21T01:10:13.036633Z",
      updatedAt: "2026-09-21T01:12:58.220344Z"
    },
    employerId: 2,
    category: {
      id: 6,
      name: "Quality Assurance",
      slug: "quality-assurance",
      description: "Pengujian perangkat lunak secara manual maupun otomatis untuk memastikan kualitas dan keandalan produk.",
      iconUrl: "https://api.iconify.design/tabler/bug.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:21:36.005262Z"
    },
    skills: [
      {
        id: 30,
        name: "SQL",
        slug: "sql",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 29,
        name: "Cypress",
        slug: "cypress",
        category: "TOOL",
        active: true
      },
      {
        id: 40,
        name: "Teamwork",
        slug: "teamwork",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      },
      {
        id: 3,
        name: "Fresh Graduate",
        slug: "fresh-graduate",
        active: true
      }
    ],
    address: null,
    city: "Jakarta",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: null,
    minSalary: 7000000,
    maxSalary: 11000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "REMOTE",
    experienceLevel: "JUNIOR_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-11-16",
    expiresAt: "2026-12-16",
    active: true,
    viewCount: 1702,
    applicationCount: 60,
    createdAt: "2026-09-25T10:15:38.192846Z",
    updatedAt: "2026-09-25T10:17:38.270486Z",
    publishedAt: "2026-09-25T10:17:38.270486Z",
    closedAt: null
  },
  {
    id: 25,
    title: "AI Engineer (LLM & NLP)",
    description: "Bangun fitur AI yang mencocokkan CV kandidat dengan lowongan secara otomatis. Kamu akan mengembangkan pipeline berbasis LLM, embedding, dan retrieval untuk meningkatkan kualitas rekomendasi.",
    requirements: "- Minimal 2 tahun pengalaman di bidang NLP atau machine learning\n- Menguasai Python dan pengalaman menggunakan API LLM\n- Memahami konsep embedding, vector database, dan RAG\n- Pengalaman membangun evaluasi kualitas model\n- Nilai tambah: pengalaman dengan pemrosesan dokumen PDF",
    responsibilities: "- Mengembangkan fitur CV parsing dan job matching berbasis AI\n- Menyusun pipeline evaluasi dan monitoring kualitas\n- Mengoptimalkan biaya dan latensi inferensi\n- Berkolaborasi dengan tim Backend untuk integrasi",
    benefits: "- Gaji kompetitif dan review tahunan\n- Fully remote\n- Budget eksperimen AI bulanan\n- Asuransi kesehatan untuk karyawan dan keluarga",
    company: {
      id: 1,
      name: "PT Teknologi Nusantara",
      slug: "pt-teknologi-nusantara",
      tagline: "Building the future of digital hiring",
      description: "PT Teknologi Nusantara adalah perusahaan teknologi yang fokus pada pengembangan platform job portal berbasis AI untuk mempertemukan talenta terbaik dengan perusahaan di Indonesia.",
      logoUrl: "https://ui-avatars.com/api/?name=Teknologi+Nusantara&background=7C3AED&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/teknologi-nusantara/1200/400",
      website: "https://www.teknologinusantara.com",
      email: "hr@teknologinusantara.com",
      phone: "0211234567",
      foundedYear: 2018,
      companySize: "MEDIUM",
      companyType: "PRIVATE",
      industryType: "TECHNOLOGY",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 2,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/teknologi-nusantara"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/teknologinusantara"
        },
        {
          platform: "WEBSITE",
          url: "https://www.teknologinusantara.com"
        }
      ],
      createdAt: "2026-09-21T01:10:13.036633Z",
      updatedAt: "2026-09-21T01:12:58.220344Z"
    },
    employerId: 2,
    category: {
      id: 7,
      name: "Data & AI",
      slug: "data-ai",
      description: "Pekerjaan di bidang data engineering, data analysis, data science, dan machine learning.",
      iconUrl: "https://api.iconify.design/tabler/brain.svg",
      active: true,
      parentId: 10,
      parentName: "Data & Analytics",
      subCategories: [],
      createdAt: "2026-09-25T00:22:36.005262Z"
    },
    skills: [
      {
        id: 18,
        name: "Python",
        slug: "python",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 5,
        name: "PostgreSQL",
        slug: "postgresql",
        category: "DATABASE",
        active: true
      },
      {
        id: 8,
        name: "Docker",
        slug: "docker",
        category: "TOOL",
        active: true
      },
      {
        id: 10,
        name: "Problem Solving",
        slug: "problem-solving",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      },
      {
        id: 2,
        name: "Urgent Hiring",
        slug: "urgent-hiring",
        active: true
      },
      {
        id: 5,
        name: "Flexible Hours",
        slug: "flexible-hours",
        active: true
      }
    ],
    address: null,
    city: "Jakarta",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: null,
    minSalary: 25000000,
    maxSalary: 40000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "REMOTE",
    experienceLevel: "SENIOR_LEVEL",
    status: "OPEN",
    openings: 2,
    applicationDeadline: "2026-11-29",
    expiresAt: "2026-12-29",
    active: true,
    viewCount: 1565,
    applicationCount: 7,
    createdAt: "2026-09-25T09:50:25.189275Z",
    updatedAt: "2026-09-25T09:52:25.267775Z",
    publishedAt: "2026-09-25T09:52:25.267775Z",
    closedAt: null
  },
  {
    id: 24,
    title: "Engineering Manager - Data Platform",
    description: "Pimpin tim yang terdiri dari 8 engineer untuk membangun data platform generasi berikutnya. Kamu akan menyeimbangkan eksekusi teknis, pengembangan tim, dan kebutuhan bisnis.",
    requirements: "- Minimal 8 tahun pengalaman software engineering, 2 tahun di antaranya sebagai manajer\n- Latar belakang kuat di sistem terdistribusi atau data engineering\n- Pengalaman merekrut dan mengembangkan engineer\n- Kemampuan komunikasi yang sangat baik dengan stakeholder bisnis",
    responsibilities: "- Memimpin dan mengembangkan tim engineering\n- Menyusun roadmap teknis bersama Product\n- Menjaga kualitas delivery dan kesehatan tim\n- Melakukan rekrutmen engineer baru",
    benefits: "- Gaji sangat kompetitif dan ESOP\n- Asuransi kesehatan premium untuk keluarga\n- Hybrid fleksibel\n- Budget kepemimpinan dan coaching",
    company: {
      id: 8,
      name: "PT Data Cerdas Analitika",
      slug: "pt-data-cerdas-analitika",
      tagline: "Mengubah data menjadi keputusan",
      description: "PT Data Cerdas Analitika menyediakan solusi data platform, business intelligence, dan AI untuk perusahaan ritel dan perbankan di Asia Tenggara.",
      logoUrl: "https://ui-avatars.com/api/?name=Data+Cerdas+Analitika&background=0891B2&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/data-cerdas-analitika/1200/400",
      website: "https://www.datacerdasanalitika.com",
      email: "hr@datacerdasanalitika.com",
      phone: "0219988776",
      foundedYear: 2017,
      companySize: "MEDIUM",
      companyType: "PRIVATE",
      industryType: "TECHNOLOGY",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 9,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/data-cerdas-analitika"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/datacerdasanalitika"
        },
        {
          platform: "WEBSITE",
          url: "https://www.datacerdasanalitika.com"
        }
      ],
      createdAt: "2026-09-23T08:10:13.036633Z",
      updatedAt: "2026-09-23T08:12:58.220344Z"
    },
    employerId: 9,
    category: {
      id: 4,
      name: "Backend Development",
      slug: "backend-development",
      description: "Pekerjaan yang berfokus pada pengembangan sisi server, logika bisnis, RESTful API, dan manajemen database menggunakan teknologi seperti Java, Node.js, Python, dan Spring Boot.",
      iconUrl: "https://api.iconify.design/tabler/server.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:19:36.005262Z"
    },
    skills: [
      {
        id: 33,
        name: "Leadership",
        slug: "leadership",
        category: "SOFT_SKILL",
        active: true
      },
      {
        id: 11,
        name: "Communication",
        slug: "communication",
        category: "SOFT_SKILL",
        active: true
      },
      {
        id: 1,
        name: "Java",
        slug: "java",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 9,
        name: "Kubernetes",
        slug: "kubernetes",
        category: "TOOL",
        active: true
      }
    ],
    tags: [
      {
        id: 6,
        name: "Stock Options",
        slug: "stock-options",
        active: true
      },
      {
        id: 5,
        name: "Flexible Hours",
        slug: "flexible-hours",
        active: true
      }
    ],
    address: "Jl. M.H. Thamrin No. 1, Menara BCA Lt. 45",
    city: "Jakarta Pusat",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "10310",
    minSalary: 45000000,
    maxSalary: 65000000,
    currency: "IDR",
    salaryNegotiable: true,
    salaryDisclosed: false,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "LEAD_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-12-20",
    expiresAt: "2027-01-20",
    active: true,
    viewCount: 1428,
    applicationCount: 74,
    createdAt: "2026-09-25T09:25:12.185704Z",
    updatedAt: "2026-09-25T09:27:12.265064Z",
    publishedAt: "2026-09-25T09:27:12.265064Z",
    closedAt: null
  },
  {
    id: 23,
    title: "Data Scientist",
    description: "Kembangkan model prediksi permintaan dan rekomendasi produk untuk klien ritel. Kamu akan terlibat dari eksplorasi data hingga presentasi hasil kepada klien.",
    requirements: "- Minimal 2 tahun pengalaman sebagai Data Scientist\n- Menguasai Python, pandas, dan scikit-learn\n- Memahami statistik dan eksperimen (A/B testing)\n- Pengalaman dengan time series forecasting\n- Kemampuan presentasi yang baik",
    responsibilities: "- Membangun model forecasting dan rekomendasi\n- Melakukan analisis eksploratif pada data klien\n- Mempresentasikan temuan kepada stakeholder\n- Berkolaborasi dengan Data Engineer untuk produksi model",
    benefits: "- Gaji kompetitif dan bonus proyek\n- Hybrid 2 hari WFO\n- Asuransi kesehatan\n- Akses dataset dan komputasi cloud untuk riset",
    company: {
      id: 8,
      name: "PT Data Cerdas Analitika",
      slug: "pt-data-cerdas-analitika",
      tagline: "Mengubah data menjadi keputusan",
      description: "PT Data Cerdas Analitika menyediakan solusi data platform, business intelligence, dan AI untuk perusahaan ritel dan perbankan di Asia Tenggara.",
      logoUrl: "https://ui-avatars.com/api/?name=Data+Cerdas+Analitika&background=0891B2&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/data-cerdas-analitika/1200/400",
      website: "https://www.datacerdasanalitika.com",
      email: "hr@datacerdasanalitika.com",
      phone: "0219988776",
      foundedYear: 2017,
      companySize: "MEDIUM",
      companyType: "PRIVATE",
      industryType: "TECHNOLOGY",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 9,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/data-cerdas-analitika"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/datacerdasanalitika"
        },
        {
          platform: "WEBSITE",
          url: "https://www.datacerdasanalitika.com"
        }
      ],
      createdAt: "2026-09-23T08:10:13.036633Z",
      updatedAt: "2026-09-23T08:12:58.220344Z"
    },
    employerId: 9,
    category: {
      id: 7,
      name: "Data & AI",
      slug: "data-ai",
      description: "Pekerjaan di bidang data engineering, data analysis, data science, dan machine learning.",
      iconUrl: "https://api.iconify.design/tabler/brain.svg",
      active: true,
      parentId: 10,
      parentName: "Data & Analytics",
      subCategories: [],
      createdAt: "2026-09-25T00:22:36.005262Z"
    },
    skills: [
      {
        id: 18,
        name: "Python",
        slug: "python",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 31,
        name: "TensorFlow",
        slug: "tensorflow",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 30,
        name: "SQL",
        slug: "sql",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      }
    ],
    tags: [
      {
        id: 4,
        name: "Work Life Balance",
        slug: "work-life-balance",
        active: true
      }
    ],
    address: "Jl. M.H. Thamrin No. 1, Menara BCA Lt. 45",
    city: "Jakarta Pusat",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "10310",
    minSalary: 18000000,
    maxSalary: 28000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "MID_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-12-03",
    expiresAt: "2027-01-03",
    active: true,
    viewCount: 1291,
    applicationCount: 21,
    createdAt: "2026-09-25T09:00:59.182133Z",
    updatedAt: "2026-09-25T09:02:59.262353Z",
    publishedAt: "2026-09-25T09:02:59.262353Z",
    closedAt: null
  },
  {
    id: 22,
    title: "Data Engineer",
    description: "Bangun data platform yang mengolah miliaran baris data transaksi ritel setiap hari. Kamu akan merancang pipeline batch dan streaming yang andal untuk kebutuhan analitik klien.",
    requirements: "- Minimal 3 tahun pengalaman sebagai Data Engineer\n- Menguasai Python dan SQL\n- Pengalaman dengan Apache Spark dan Kafka\n- Familiar dengan orchestrator seperti Airflow\n- Pengalaman dengan data warehouse (BigQuery, Snowflake, atau Redshift)",
    responsibilities: "- Merancang dan membangun pipeline data batch dan streaming\n- Menjaga kualitas dan keandalan data\n- Mengoptimalkan biaya dan performa query\n- Berkolaborasi dengan Data Scientist dan Analyst",
    benefits: "- Gaji kompetitif dan bonus tahunan\n- Hybrid 2 hari WFO\n- Asuransi kesehatan untuk karyawan dan keluarga\n- Budget sertifikasi cloud",
    company: {
      id: 8,
      name: "PT Data Cerdas Analitika",
      slug: "pt-data-cerdas-analitika",
      tagline: "Mengubah data menjadi keputusan",
      description: "PT Data Cerdas Analitika menyediakan solusi data platform, business intelligence, dan AI untuk perusahaan ritel dan perbankan di Asia Tenggara.",
      logoUrl: "https://ui-avatars.com/api/?name=Data+Cerdas+Analitika&background=0891B2&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/data-cerdas-analitika/1200/400",
      website: "https://www.datacerdasanalitika.com",
      email: "hr@datacerdasanalitika.com",
      phone: "0219988776",
      foundedYear: 2017,
      companySize: "MEDIUM",
      companyType: "PRIVATE",
      industryType: "TECHNOLOGY",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 9,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/data-cerdas-analitika"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/datacerdasanalitika"
        },
        {
          platform: "WEBSITE",
          url: "https://www.datacerdasanalitika.com"
        }
      ],
      createdAt: "2026-09-23T08:10:13.036633Z",
      updatedAt: "2026-09-23T08:12:58.220344Z"
    },
    employerId: 9,
    category: {
      id: 7,
      name: "Data & AI",
      slug: "data-ai",
      description: "Pekerjaan di bidang data engineering, data analysis, data science, dan machine learning.",
      iconUrl: "https://api.iconify.design/tabler/brain.svg",
      active: true,
      parentId: 10,
      parentName: "Data & Analytics",
      subCategories: [],
      createdAt: "2026-09-25T00:22:36.005262Z"
    },
    skills: [
      {
        id: 18,
        name: "Python",
        slug: "python",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 30,
        name: "SQL",
        slug: "sql",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 32,
        name: "Apache Spark",
        slug: "apache-spark",
        category: "TOOL",
        active: true
      },
      {
        id: 24,
        name: "Kafka",
        slug: "kafka",
        category: "TOOL",
        active: true
      },
      {
        id: 26,
        name: "Google Cloud",
        slug: "google-cloud",
        category: "CLOUD_PLATFORM",
        active: true
      }
    ],
    tags: [
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      },
      {
        id: 2,
        name: "Urgent Hiring",
        slug: "urgent-hiring",
        active: true
      }
    ],
    address: "Jl. M.H. Thamrin No. 1, Menara BCA Lt. 45",
    city: "Jakarta Pusat",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "10310",
    minSalary: 20000000,
    maxSalary: 32000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "MID_LEVEL",
    status: "OPEN",
    openings: 2,
    applicationDeadline: "2026-11-21",
    expiresAt: "2026-12-21",
    active: true,
    viewCount: 1154,
    applicationCount: 88,
    createdAt: "2026-09-25T08:35:46.178562Z",
    updatedAt: "2026-09-25T08:37:46.259642Z",
    publishedAt: "2026-09-25T08:37:46.259642Z",
    closedAt: null
  },
  {
    id: 21,
    title: "Social Media Specialist",
    description: "Kelola akun media sosial klien dari berbagai industri pariwisata dan F&B di Bali. Kamu akan menyusun strategi konten, mengelola komunitas, dan menganalisis performa kampanye.",
    requirements: "- Minimal 1 tahun pengalaman mengelola media sosial brand\n- Memahami algoritma Instagram dan TikTok\n- Kemampuan copywriting bahasa Indonesia dan Inggris\n- Familiar dengan Meta Business Suite",
    responsibilities: "- Menyusun rencana konten bulanan untuk klien\n- Mengelola interaksi dan komunitas\n- Menyusun laporan performa kampanye\n- Berkoordinasi dengan tim desain dan videografer",
    benefits: "- Gaji kompetitif\n- Suasana kerja kreatif di Bali\n- BPJS Kesehatan dan Ketenagakerjaan\n- Cuti tambahan saat hari raya Nyepi",
    company: {
      id: 7,
      name: "Studio Kreatif Lokal",
      slug: "studio-kreatif-lokal",
      tagline: "Desain yang bercerita",
      description: "Studio Kreatif Lokal adalah agensi digital yang menangani branding, desain produk, dan kampanye digital untuk klien dari berbagai industri.",
      logoUrl: "https://ui-avatars.com/api/?name=Studio+Kreatif+Lokal&background=DB2777&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/studio-kreatif-lokal/1200/400",
      website: "https://www.studiokreatiflokal.com",
      email: "hr@studiokreatiflokal.com",
      phone: "0361223344",
      foundedYear: 2020,
      companySize: "SMALL",
      companyType: "PRIVATE",
      industryType: "MEDIA",
      status: "ACTIVE",
      verified: false,
      active: true,
      ownerId: 8,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/studio-kreatif-lokal"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/studiokreatiflokal"
        },
        {
          platform: "WEBSITE",
          url: "https://www.studiokreatiflokal.com"
        }
      ],
      createdAt: "2026-09-22T07:10:13.036633Z",
      updatedAt: "2026-09-22T07:12:58.220344Z"
    },
    employerId: 8,
    category: {
      id: 13,
      name: "Digital Marketing",
      slug: "digital-marketing",
      description: "Pemasaran digital meliputi SEO, SEM, social media, content marketing, dan performance marketing.",
      iconUrl: "https://api.iconify.design/tabler/speakerphone.svg",
      active: true,
      parentId: 12,
      parentName: "Product & Business",
      subCategories: [],
      createdAt: "2026-09-25T00:28:36.005262Z"
    },
    skills: [
      {
        id: 11,
        name: "Communication",
        slug: "communication",
        category: "SOFT_SKILL",
        active: true
      },
      {
        id: 36,
        name: "Google Analytics",
        slug: "google-analytics",
        category: "TOOL",
        active: true
      },
      {
        id: 40,
        name: "Teamwork",
        slug: "teamwork",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 4,
        name: "Work Life Balance",
        slug: "work-life-balance",
        active: true
      }
    ],
    address: "Jl. Raya Kerobokan No. 88, Kuta Utara",
    city: "Denpasar",
    state: "Bali",
    country: "Indonesia",
    zipCode: "80361",
    minSalary: 5000000,
    maxSalary: 7000000,
    currency: "IDR",
    salaryNegotiable: true,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "ONSITE",
    experienceLevel: "ENTRY_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-11-02",
    expiresAt: "2026-12-02",
    active: true,
    viewCount: 1017,
    applicationCount: 35,
    createdAt: "2026-09-25T08:10:33.174991Z",
    updatedAt: "2026-09-25T08:12:33.256931Z",
    publishedAt: "2026-09-25T08:12:33.256931Z",
    closedAt: null
  },
  {
    id: 20,
    title: "Web Developer Part-Time",
    description: "Bantu kami membangun website company profile dan landing page kampanye untuk klien. Cocok untuk kamu yang ingin bekerja paruh waktu dengan jadwal fleksibel.",
    requirements: "- Pengalaman membuat website responsif dengan HTML, CSS, dan JavaScript\n- Familiar dengan React atau Next.js\n- Pengalaman dengan Tailwind CSS\n- Mampu bekerja mandiri",
    responsibilities: "- Membangun landing page berdasarkan desain Figma\n- Mengelola deployment website klien\n- Melakukan perbaikan dan pembaruan konten website",
    benefits: "- Jam kerja fleksibel (20 jam per minggu)\n- Fully remote\n- Portofolio proyek dari klien nasional",
    company: {
      id: 7,
      name: "Studio Kreatif Lokal",
      slug: "studio-kreatif-lokal",
      tagline: "Desain yang bercerita",
      description: "Studio Kreatif Lokal adalah agensi digital yang menangani branding, desain produk, dan kampanye digital untuk klien dari berbagai industri.",
      logoUrl: "https://ui-avatars.com/api/?name=Studio+Kreatif+Lokal&background=DB2777&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/studio-kreatif-lokal/1200/400",
      website: "https://www.studiokreatiflokal.com",
      email: "hr@studiokreatiflokal.com",
      phone: "0361223344",
      foundedYear: 2020,
      companySize: "SMALL",
      companyType: "PRIVATE",
      industryType: "MEDIA",
      status: "ACTIVE",
      verified: false,
      active: true,
      ownerId: 8,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/studio-kreatif-lokal"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/studiokreatiflokal"
        },
        {
          platform: "WEBSITE",
          url: "https://www.studiokreatiflokal.com"
        }
      ],
      createdAt: "2026-09-22T07:10:13.036633Z",
      updatedAt: "2026-09-22T07:12:58.220344Z"
    },
    employerId: 8,
    category: {
      id: 2,
      name: "Frontend Development",
      slug: "frontend-development",
      description: "Kategori yang mencakup pengembangan antarmuka pengguna (UI) menggunakan teknologi web seperti HTML, CSS, JavaScript, dan framework modern seperti React, Vue, dan Angular.",
      iconUrl: "https://api.iconify.design/tabler/code.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:17:36.005262Z"
    },
    skills: [
      {
        id: 3,
        name: "React",
        slug: "react",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 13,
        name: "Next.js",
        slug: "next-js",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 15,
        name: "Tailwind CSS",
        slug: "tailwind-css",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 12,
        name: "JavaScript",
        slug: "javascript",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      }
    ],
    tags: [
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      },
      {
        id: 5,
        name: "Flexible Hours",
        slug: "flexible-hours",
        active: true
      },
      {
        id: 3,
        name: "Fresh Graduate",
        slug: "fresh-graduate",
        active: true
      }
    ],
    address: null,
    city: "Denpasar",
    state: "Bali",
    country: "Indonesia",
    zipCode: null,
    minSalary: 4500000,
    maxSalary: 6500000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "PART_TIME",
    workMode: "REMOTE",
    experienceLevel: "JUNIOR_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-10-30",
    expiresAt: "2026-11-30",
    active: true,
    viewCount: 880,
    applicationCount: 102,
    createdAt: "2026-09-25T07:45:20.171420Z",
    updatedAt: "2026-09-25T07:47:20.254220Z",
    publishedAt: "2026-09-25T07:47:20.254220Z",
    closedAt: null
  },
  {
    id: 19,
    title: "Graphic Designer (Freelance)",
    description: "Kami membuka peluang freelance untuk Graphic Designer yang akan menangani materi branding dan kampanye media sosial untuk beberapa klien agensi.",
    requirements: "- Portofolio desain grafis yang kuat\n- Mahir Figma, Adobe Illustrator, dan Photoshop\n- Memahami tipografi, warna, dan layout\n- Mampu bekerja dengan tenggat waktu yang ketat",
    responsibilities: "- Membuat materi visual untuk media sosial dan kampanye\n- Menyusun brand guideline sederhana\n- Merevisi desain berdasarkan masukan klien",
    benefits: "- Pembayaran per proyek yang kompetitif\n- Fully remote\n- Jam kerja fleksibel\n- Peluang kerja sama jangka panjang",
    company: {
      id: 7,
      name: "Studio Kreatif Lokal",
      slug: "studio-kreatif-lokal",
      tagline: "Desain yang bercerita",
      description: "Studio Kreatif Lokal adalah agensi digital yang menangani branding, desain produk, dan kampanye digital untuk klien dari berbagai industri.",
      logoUrl: "https://ui-avatars.com/api/?name=Studio+Kreatif+Lokal&background=DB2777&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/studio-kreatif-lokal/1200/400",
      website: "https://www.studiokreatiflokal.com",
      email: "hr@studiokreatiflokal.com",
      phone: "0361223344",
      foundedYear: 2020,
      companySize: "SMALL",
      companyType: "PRIVATE",
      industryType: "MEDIA",
      status: "ACTIVE",
      verified: false,
      active: true,
      ownerId: 8,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/studio-kreatif-lokal"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/studiokreatiflokal"
        },
        {
          platform: "WEBSITE",
          url: "https://www.studiokreatiflokal.com"
        }
      ],
      createdAt: "2026-09-22T07:10:13.036633Z",
      updatedAt: "2026-09-22T07:12:58.220344Z"
    },
    employerId: 8,
    category: {
      id: 8,
      name: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Perancangan pengalaman dan antarmuka pengguna, mulai dari riset, wireframe, prototipe, hingga design system.",
      iconUrl: "https://api.iconify.design/tabler/palette.svg",
      active: true,
      parentId: 11,
      parentName: "Design & Creative",
      subCategories: [],
      createdAt: "2026-09-25T00:23:36.005262Z"
    },
    skills: [
      {
        id: 27,
        name: "Figma",
        slug: "figma",
        category: "TOOL",
        active: true
      },
      {
        id: 11,
        name: "Communication",
        slug: "communication",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      },
      {
        id: 5,
        name: "Flexible Hours",
        slug: "flexible-hours",
        active: true
      }
    ],
    address: null,
    city: "Denpasar",
    state: "Bali",
    country: "Indonesia",
    zipCode: null,
    minSalary: 4000000,
    maxSalary: 8000000,
    currency: "IDR",
    salaryNegotiable: true,
    salaryDisclosed: true,
    jobType: "FREELANCE",
    workMode: "REMOTE",
    experienceLevel: "MID_LEVEL",
    status: "OPEN",
    openings: 2,
    applicationDeadline: "2026-11-05",
    expiresAt: "2026-12-05",
    active: true,
    viewCount: 743,
    applicationCount: 49,
    createdAt: "2026-09-25T07:20:07.167849Z",
    updatedAt: "2026-09-25T07:22:07.251509Z",
    publishedAt: "2026-09-25T07:22:07.251509Z",
    closedAt: null
  },
  {
    id: 18,
    title: "iOS Engineer",
    description: "Kembangkan aplikasi marketplace di iOS dengan pengalaman belanja yang cepat dan mulus. Kamu akan bekerja sama dengan tim Android untuk menjaga konsistensi fitur di kedua platform.",
    requirements: "- Minimal 3 tahun pengalaman pengembangan iOS\n- Menguasai Swift dan SwiftUI\n- Memahami arsitektur MVVM dan Combine\n- Pengalaman dengan unit testing (XCTest)\n- Pernah merilis aplikasi ke App Store",
    responsibilities: "- Mengembangkan fitur baru aplikasi iOS\n- Meningkatkan performa dan stabilitas aplikasi\n- Melakukan code review\n- Berkolaborasi dengan tim desain dan backend",
    benefits: "- Gaji kompetitif dan bonus tahunan\n- MacBook Pro dan iPhone untuk bekerja\n- Asuransi kesehatan untuk karyawan dan keluarga\n- Hybrid 2 hari WFO",
    company: {
      id: 6,
      name: "PT Toko Kita Commerce",
      slug: "pt-toko-kita-commerce",
      tagline: "Belanja mudah, UMKM bertumbuh",
      description: "PT Toko Kita Commerce adalah marketplace yang berfokus memberdayakan UMKM lokal dengan lebih dari 150.000 penjual aktif dan 8 juta pengguna bulanan.",
      logoUrl: "https://ui-avatars.com/api/?name=Toko+Kita+Commerce&background=F97316&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/toko-kita-commerce/1200/400",
      website: "https://www.tokokitacommerce.com",
      email: "hr@tokokitacommerce.com",
      phone: "0215556677",
      foundedYear: 2015,
      companySize: "LARGE",
      companyType: "PRIVATE",
      industryType: "E_COMMERCE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 7,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/toko-kita-commerce"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/tokokitacommerce"
        },
        {
          platform: "WEBSITE",
          url: "https://www.tokokitacommerce.com"
        }
      ],
      createdAt: "2026-09-21T06:10:13.036633Z",
      updatedAt: "2026-09-21T06:12:58.220344Z"
    },
    employerId: 7,
    category: {
      id: 3,
      name: "Mobile Development",
      slug: "mobile-development",
      description: "Pengembangan aplikasi mobile untuk Android dan iOS, baik native (Kotlin, Swift) maupun cross-platform (Flutter, React Native).",
      iconUrl: "https://api.iconify.design/tabler/device-mobile.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:18:36.005262Z"
    },
    skills: [
      {
        id: 20,
        name: "Swift",
        slug: "swift",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 34,
        name: "Git",
        slug: "git",
        category: "TOOL",
        active: true
      }
    ],
    tags: [
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      }
    ],
    address: "Jl. Letjen S. Parman Kav. 28, APL Tower Lt. 18",
    city: "Jakarta Barat",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "11470",
    minSalary: 18000000,
    maxSalary: 30000000,
    currency: "IDR",
    salaryNegotiable: true,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "MID_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-11-26",
    expiresAt: "2026-12-26",
    active: true,
    viewCount: 606,
    applicationCount: 116,
    createdAt: "2026-09-25T06:55:54.164278Z",
    updatedAt: "2026-09-25T06:57:54.248798Z",
    publishedAt: "2026-09-25T06:57:54.248798Z",
    closedAt: null
  },
  {
    id: 17,
    title: "Data Analyst",
    description: "Bantu tim bisnis mengambil keputusan berbasis data. Kamu akan menyusun dashboard, menganalisis perilaku pembeli, dan mengevaluasi efektivitas kampanye promosi.",
    requirements: "- Minimal 1 tahun pengalaman sebagai Data Analyst\n- Mahir SQL tingkat lanjut (window function, CTE)\n- Pengalaman dengan tools BI seperti Looker Studio, Metabase, atau Tableau\n- Familiar dengan Python untuk analisis data\n- Mampu menyampaikan insight kepada stakeholder non-teknis",
    responsibilities: "- Membuat dan memelihara dashboard bisnis\n- Menganalisis funnel pembelian dan retensi pengguna\n- Mengevaluasi hasil kampanye dan eksperimen\n- Menyusun laporan mingguan untuk manajemen",
    benefits: "- Gaji kompetitif\n- Voucher belanja bulanan\n- Asuransi kesehatan\n- Hybrid 2 hari WFO",
    company: {
      id: 6,
      name: "PT Toko Kita Commerce",
      slug: "pt-toko-kita-commerce",
      tagline: "Belanja mudah, UMKM bertumbuh",
      description: "PT Toko Kita Commerce adalah marketplace yang berfokus memberdayakan UMKM lokal dengan lebih dari 150.000 penjual aktif dan 8 juta pengguna bulanan.",
      logoUrl: "https://ui-avatars.com/api/?name=Toko+Kita+Commerce&background=F97316&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/toko-kita-commerce/1200/400",
      website: "https://www.tokokitacommerce.com",
      email: "hr@tokokitacommerce.com",
      phone: "0215556677",
      foundedYear: 2015,
      companySize: "LARGE",
      companyType: "PRIVATE",
      industryType: "E_COMMERCE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 7,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/toko-kita-commerce"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/tokokitacommerce"
        },
        {
          platform: "WEBSITE",
          url: "https://www.tokokitacommerce.com"
        }
      ],
      createdAt: "2026-09-21T06:10:13.036633Z",
      updatedAt: "2026-09-21T06:12:58.220344Z"
    },
    employerId: 7,
    category: {
      id: 7,
      name: "Data & AI",
      slug: "data-ai",
      description: "Pekerjaan di bidang data engineering, data analysis, data science, dan machine learning.",
      iconUrl: "https://api.iconify.design/tabler/brain.svg",
      active: true,
      parentId: 10,
      parentName: "Data & Analytics",
      subCategories: [],
      createdAt: "2026-09-25T00:22:36.005262Z"
    },
    skills: [
      {
        id: 30,
        name: "SQL",
        slug: "sql",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 18,
        name: "Python",
        slug: "python",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 36,
        name: "Google Analytics",
        slug: "google-analytics",
        category: "TOOL",
        active: true
      }
    ],
    tags: [
      {
        id: 3,
        name: "Fresh Graduate",
        slug: "fresh-graduate",
        active: true
      },
      {
        id: 4,
        name: "Work Life Balance",
        slug: "work-life-balance",
        active: true
      }
    ],
    address: "Jl. Letjen S. Parman Kav. 28, APL Tower Lt. 18",
    city: "Jakarta Barat",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "11470",
    minSalary: 9000000,
    maxSalary: 14000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "JUNIOR_LEVEL",
    status: "OPEN",
    openings: 2,
    applicationDeadline: "2026-11-14",
    expiresAt: "2026-12-14",
    active: true,
    viewCount: 469,
    applicationCount: 63,
    createdAt: "2026-09-25T06:30:41.160707Z",
    updatedAt: "2026-09-25T06:32:41.246087Z",
    publishedAt: "2026-09-25T06:32:41.246087Z",
    closedAt: null
  },
  {
    id: 16,
    title: "Product Manager - Seller Experience",
    description: "Pimpin pengembangan produk untuk ratusan ribu penjual UMKM di platform kami. Kamu akan menentukan roadmap fitur manajemen toko, promosi, dan analitik penjual.",
    requirements: "- Minimal 3 tahun pengalaman sebagai Product Manager\n- Pengalaman di produk marketplace atau B2B menjadi nilai tambah\n- Mampu menganalisis data menggunakan SQL\n- Kemampuan komunikasi dan stakeholder management yang kuat\n- Terbiasa dengan metodologi Agile/Scrum",
    responsibilities: "- Menyusun dan memprioritaskan product roadmap\n- Melakukan riset dan wawancara dengan penjual\n- Menulis PRD dan user story\n- Memantau metrik keberhasilan fitur",
    benefits: "- Gaji kompetitif dan bonus tahunan\n- ESOP\n- Asuransi kesehatan untuk karyawan dan keluarga\n- Hybrid 3 hari WFO",
    company: {
      id: 6,
      name: "PT Toko Kita Commerce",
      slug: "pt-toko-kita-commerce",
      tagline: "Belanja mudah, UMKM bertumbuh",
      description: "PT Toko Kita Commerce adalah marketplace yang berfokus memberdayakan UMKM lokal dengan lebih dari 150.000 penjual aktif dan 8 juta pengguna bulanan.",
      logoUrl: "https://ui-avatars.com/api/?name=Toko+Kita+Commerce&background=F97316&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/toko-kita-commerce/1200/400",
      website: "https://www.tokokitacommerce.com",
      email: "hr@tokokitacommerce.com",
      phone: "0215556677",
      foundedYear: 2015,
      companySize: "LARGE",
      companyType: "PRIVATE",
      industryType: "E_COMMERCE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 7,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/toko-kita-commerce"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/tokokitacommerce"
        },
        {
          platform: "WEBSITE",
          url: "https://www.tokokitacommerce.com"
        }
      ],
      createdAt: "2026-09-21T06:10:13.036633Z",
      updatedAt: "2026-09-21T06:12:58.220344Z"
    },
    employerId: 7,
    category: {
      id: 9,
      name: "Product Management",
      slug: "product-management",
      description: "Pengelolaan siklus hidup produk digital, mulai dari discovery, roadmap, hingga peluncuran fitur.",
      iconUrl: "https://api.iconify.design/tabler/layout-kanban.svg",
      active: true,
      parentId: 12,
      parentName: "Product & Business",
      subCategories: [],
      createdAt: "2026-09-25T00:24:36.005262Z"
    },
    skills: [
      {
        id: 30,
        name: "SQL",
        slug: "sql",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 11,
        name: "Communication",
        slug: "communication",
        category: "SOFT_SKILL",
        active: true
      },
      {
        id: 33,
        name: "Leadership",
        slug: "leadership",
        category: "SOFT_SKILL",
        active: true
      },
      {
        id: 10,
        name: "Problem Solving",
        slug: "problem-solving",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 6,
        name: "Stock Options",
        slug: "stock-options",
        active: true
      }
    ],
    address: "Jl. Letjen S. Parman Kav. 28, APL Tower Lt. 18",
    city: "Jakarta Barat",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "11470",
    minSalary: 25000000,
    maxSalary: 38000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "SENIOR_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-12-15",
    expiresAt: "2027-01-15",
    active: true,
    viewCount: 332,
    applicationCount: 10,
    createdAt: "2026-09-25T06:05:28.157136Z",
    updatedAt: "2026-09-25T06:07:28.243376Z",
    publishedAt: "2026-09-25T06:07:28.243376Z",
    closedAt: null
  },
  {
    id: 15,
    title: "Frontend Engineer (Next.js)",
    description: "Bangun halaman produk dan checkout marketplace yang diakses jutaan pengguna setiap bulan. Fokus utama posisi ini adalah performa, SEO, dan konversi.",
    requirements: "- Minimal 3 tahun pengalaman frontend development\n- Menguasai React, Next.js, dan TypeScript\n- Memahami SSR, SSG, dan strategi caching\n- Pengalaman melakukan A/B testing\n- Paham Core Web Vitals dan optimasi performa",
    responsibilities: "- Mengembangkan halaman produk, keranjang, dan checkout\n- Meningkatkan skor Core Web Vitals\n- Menjalankan eksperimen A/B bersama tim Product\n- Melakukan code review",
    benefits: "- Gaji kompetitif dan bonus tahunan\n- Voucher belanja bulanan\n- Asuransi kesehatan untuk karyawan dan keluarga\n- Hybrid 2 hari WFO",
    company: {
      id: 6,
      name: "PT Toko Kita Commerce",
      slug: "pt-toko-kita-commerce",
      tagline: "Belanja mudah, UMKM bertumbuh",
      description: "PT Toko Kita Commerce adalah marketplace yang berfokus memberdayakan UMKM lokal dengan lebih dari 150.000 penjual aktif dan 8 juta pengguna bulanan.",
      logoUrl: "https://ui-avatars.com/api/?name=Toko+Kita+Commerce&background=F97316&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/toko-kita-commerce/1200/400",
      website: "https://www.tokokitacommerce.com",
      email: "hr@tokokitacommerce.com",
      phone: "0215556677",
      foundedYear: 2015,
      companySize: "LARGE",
      companyType: "PRIVATE",
      industryType: "E_COMMERCE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 7,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/toko-kita-commerce"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/tokokitacommerce"
        },
        {
          platform: "WEBSITE",
          url: "https://www.tokokitacommerce.com"
        }
      ],
      createdAt: "2026-09-21T06:10:13.036633Z",
      updatedAt: "2026-09-21T06:12:58.220344Z"
    },
    employerId: 7,
    category: {
      id: 2,
      name: "Frontend Development",
      slug: "frontend-development",
      description: "Kategori yang mencakup pengembangan antarmuka pengguna (UI) menggunakan teknologi web seperti HTML, CSS, JavaScript, dan framework modern seperti React, Vue, dan Angular.",
      iconUrl: "https://api.iconify.design/tabler/code.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:17:36.005262Z"
    },
    skills: [
      {
        id: 13,
        name: "Next.js",
        slug: "next-js",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 3,
        name: "React",
        slug: "react",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 2,
        name: "TypeScript",
        slug: "typescript",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 15,
        name: "Tailwind CSS",
        slug: "tailwind-css",
        category: "FRAMEWORK",
        active: true
      }
    ],
    tags: [
      {
        id: 4,
        name: "Work Life Balance",
        slug: "work-life-balance",
        active: true
      },
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      }
    ],
    address: "Jl. Letjen S. Parman Kav. 28, APL Tower Lt. 18",
    city: "Jakarta Barat",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "11470",
    minSalary: 17000000,
    maxSalary: 27000000,
    currency: "IDR",
    salaryNegotiable: true,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "MID_LEVEL",
    status: "OPEN",
    openings: 3,
    applicationDeadline: "2026-11-30",
    expiresAt: "2026-12-30",
    active: true,
    viewCount: 195,
    applicationCount: 77,
    createdAt: "2026-09-25T05:40:15.153565Z",
    updatedAt: "2026-09-25T05:42:15.240665Z",
    publishedAt: "2026-09-25T05:42:15.240665Z",
    closedAt: null
  },
  {
    id: 14,
    title: "Fullstack Developer (Laravel)",
    description: "Kami mencari Fullstack Developer untuk mengembangkan sistem manajemen kelas dan pembayaran langganan. Kamu akan bekerja di tim kecil yang bergerak cepat dengan kepemilikan fitur end-to-end.",
    requirements: "- Minimal 2 tahun pengalaman dengan PHP dan Laravel\n- Memahami MySQL dan desain database relasional\n- Familiar dengan JavaScript dan salah satu framework frontend\n- Pengalaman integrasi payment gateway menjadi nilai tambah",
    responsibilities: "- Mengembangkan fitur backend dan frontend secara end-to-end\n- Mengelola integrasi payment gateway\n- Memelihara dan melakukan refactor kode lama\n- Menulis dokumentasi API",
    benefits: "- Gaji kompetitif\n- Fully remote\n- Jam kerja fleksibel\n- Laptop kerja disediakan",
    company: {
      id: 5,
      name: "PT Belajar Pintar Edukasi",
      slug: "pt-belajar-pintar-edukasi",
      tagline: "Pendidikan berkualitas untuk semua",
      description: "PT Belajar Pintar Edukasi adalah startup edtech yang menyediakan platform belajar online interaktif untuk siswa SMA dan mahasiswa di seluruh Indonesia.",
      logoUrl: "https://ui-avatars.com/api/?name=Belajar+Pintar+Edukasi&background=CA8A04&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/belajar-pintar-edukasi/1200/400",
      website: "https://www.belajarpintaredukasi.com",
      email: "hr@belajarpintaredukasi.com",
      phone: "0274123456",
      foundedYear: 2021,
      companySize: "SMALL",
      companyType: "STARTUP",
      industryType: "EDUCATION",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 6,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/belajar-pintar-edukasi"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/belajarpintaredukasi"
        },
        {
          platform: "WEBSITE",
          url: "https://www.belajarpintaredukasi.com"
        }
      ],
      createdAt: "2026-09-20T05:10:13.036633Z",
      updatedAt: "2026-09-20T05:12:58.220344Z"
    },
    employerId: 6,
    category: {
      id: 4,
      name: "Backend Development",
      slug: "backend-development",
      description: "Pekerjaan yang berfokus pada pengembangan sisi server, logika bisnis, RESTful API, dan manajemen database menggunakan teknologi seperti Java, Node.js, Python, dan Spring Boot.",
      iconUrl: "https://api.iconify.design/tabler/server.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:19:36.005262Z"
    },
    skills: [
      {
        id: 38,
        name: "PHP",
        slug: "php",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 37,
        name: "Laravel",
        slug: "laravel",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 22,
        name: "MySQL",
        slug: "mysql",
        category: "DATABASE",
        active: true
      },
      {
        id: 12,
        name: "JavaScript",
        slug: "javascript",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      }
    ],
    tags: [
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      },
      {
        id: 8,
        name: "Four Day Week",
        slug: "four-day-week",
        active: true
      }
    ],
    address: null,
    city: "Yogyakarta",
    state: "DI Yogyakarta",
    country: "Indonesia",
    zipCode: null,
    minSalary: 7000000,
    maxSalary: 12000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "CONTRACT",
    workMode: "REMOTE",
    experienceLevel: "MID_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-11-28",
    expiresAt: "2026-12-28",
    active: true,
    viewCount: 58,
    applicationCount: 24,
    createdAt: "2026-09-25T05:15:02.149994Z",
    updatedAt: "2026-09-25T05:17:02.237954Z",
    publishedAt: "2026-09-25T05:17:02.237954Z",
    closedAt: null
  },
  {
    id: 13,
    title: "Content Marketing Specialist",
    description: "Tingkatkan jangkauan brand kami melalui konten edukatif yang relevan bagi pelajar. Kamu akan mengelola blog, media sosial, dan kampanye konten musiman seperti persiapan UTBK.",
    requirements: "- Minimal 1 tahun pengalaman di content marketing\n- Kemampuan menulis bahasa Indonesia yang baik dan menarik\n- Memahami dasar SEO\n- Familiar dengan Google Analytics\n- Nilai tambah: kemampuan editing video pendek",
    responsibilities: "- Menyusun kalender konten bulanan\n- Menulis artikel blog dan caption media sosial\n- Menganalisis performa konten dan memberi rekomendasi\n- Berkolaborasi dengan tim desain dan pengajar",
    benefits: "- Gaji kompetitif\n- Akses gratis seluruh kursus premium\n- Hybrid 2 hari WFO di Yogyakarta\n- BPJS Kesehatan dan Ketenagakerjaan",
    company: {
      id: 5,
      name: "PT Belajar Pintar Edukasi",
      slug: "pt-belajar-pintar-edukasi",
      tagline: "Pendidikan berkualitas untuk semua",
      description: "PT Belajar Pintar Edukasi adalah startup edtech yang menyediakan platform belajar online interaktif untuk siswa SMA dan mahasiswa di seluruh Indonesia.",
      logoUrl: "https://ui-avatars.com/api/?name=Belajar+Pintar+Edukasi&background=CA8A04&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/belajar-pintar-edukasi/1200/400",
      website: "https://www.belajarpintaredukasi.com",
      email: "hr@belajarpintaredukasi.com",
      phone: "0274123456",
      foundedYear: 2021,
      companySize: "SMALL",
      companyType: "STARTUP",
      industryType: "EDUCATION",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 6,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/belajar-pintar-edukasi"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/belajarpintaredukasi"
        },
        {
          platform: "WEBSITE",
          url: "https://www.belajarpintaredukasi.com"
        }
      ],
      createdAt: "2026-09-20T05:10:13.036633Z",
      updatedAt: "2026-09-20T05:12:58.220344Z"
    },
    employerId: 6,
    category: {
      id: 13,
      name: "Digital Marketing",
      slug: "digital-marketing",
      description: "Pemasaran digital meliputi SEO, SEM, social media, content marketing, dan performance marketing.",
      iconUrl: "https://api.iconify.design/tabler/speakerphone.svg",
      active: true,
      parentId: 12,
      parentName: "Product & Business",
      subCategories: [],
      createdAt: "2026-09-25T00:28:36.005262Z"
    },
    skills: [
      {
        id: 35,
        name: "SEO",
        slug: "seo",
        category: "OTHER",
        active: true
      },
      {
        id: 36,
        name: "Google Analytics",
        slug: "google-analytics",
        category: "TOOL",
        active: true
      },
      {
        id: 11,
        name: "Communication",
        slug: "communication",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 3,
        name: "Fresh Graduate",
        slug: "fresh-graduate",
        active: true
      },
      {
        id: 4,
        name: "Work Life Balance",
        slug: "work-life-balance",
        active: true
      }
    ],
    address: "Jl. Kaliurang Km. 5 No. 21",
    city: "Yogyakarta",
    state: "DI Yogyakarta",
    country: "Indonesia",
    zipCode: "55281",
    minSalary: 5000000,
    maxSalary: 7500000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "ENTRY_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-11-08",
    expiresAt: "2026-12-08",
    active: true,
    viewCount: 1821,
    applicationCount: 91,
    createdAt: "2026-09-25T04:50:49.146423Z",
    updatedAt: "2026-09-25T04:52:49.235243Z",
    publishedAt: "2026-09-25T04:52:49.235243Z",
    closedAt: null
  },
  {
    id: 12,
    title: "Frontend Developer (Vue.js)",
    description: "Bangun platform belajar interaktif yang dipakai ratusan ribu siswa. Kamu akan mengembangkan fitur kuis, video learning, dan dashboard progres belajar.",
    requirements: "- Minimal 2 tahun pengalaman dengan Vue.js (Vue 3 dan Composition API)\n- Menguasai HTML, CSS, dan JavaScript modern\n- Pengalaman dengan Tailwind CSS\n- Memahami integrasi REST API\n- Nilai tambah: pengalaman dengan Nuxt.js",
    responsibilities: "- Mengembangkan fitur baru pada platform web\n- Mengubah desain Figma menjadi komponen yang responsif\n- Meningkatkan performa dan SEO halaman\n- Berkolaborasi dengan tim backend dan konten",
    benefits: "- Gaji kompetitif\n- Akses gratis seluruh kursus premium\n- Fully remote\n- Jam kerja fleksibel\n- BPJS Kesehatan dan Ketenagakerjaan",
    company: {
      id: 5,
      name: "PT Belajar Pintar Edukasi",
      slug: "pt-belajar-pintar-edukasi",
      tagline: "Pendidikan berkualitas untuk semua",
      description: "PT Belajar Pintar Edukasi adalah startup edtech yang menyediakan platform belajar online interaktif untuk siswa SMA dan mahasiswa di seluruh Indonesia.",
      logoUrl: "https://ui-avatars.com/api/?name=Belajar+Pintar+Edukasi&background=CA8A04&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/belajar-pintar-edukasi/1200/400",
      website: "https://www.belajarpintaredukasi.com",
      email: "hr@belajarpintaredukasi.com",
      phone: "0274123456",
      foundedYear: 2021,
      companySize: "SMALL",
      companyType: "STARTUP",
      industryType: "EDUCATION",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 6,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/belajar-pintar-edukasi"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/belajarpintaredukasi"
        },
        {
          platform: "WEBSITE",
          url: "https://www.belajarpintaredukasi.com"
        }
      ],
      createdAt: "2026-09-20T05:10:13.036633Z",
      updatedAt: "2026-09-20T05:12:58.220344Z"
    },
    employerId: 6,
    category: {
      id: 2,
      name: "Frontend Development",
      slug: "frontend-development",
      description: "Kategori yang mencakup pengembangan antarmuka pengguna (UI) menggunakan teknologi web seperti HTML, CSS, JavaScript, dan framework modern seperti React, Vue, dan Angular.",
      iconUrl: "https://api.iconify.design/tabler/code.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:17:36.005262Z"
    },
    skills: [
      {
        id: 14,
        name: "Vue.js",
        slug: "vue-js",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 12,
        name: "JavaScript",
        slug: "javascript",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 15,
        name: "Tailwind CSS",
        slug: "tailwind-css",
        category: "FRAMEWORK",
        active: true
      }
    ],
    tags: [
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      },
      {
        id: 5,
        name: "Flexible Hours",
        slug: "flexible-hours",
        active: true
      }
    ],
    address: null,
    city: "Yogyakarta",
    state: "DI Yogyakarta",
    country: "Indonesia",
    zipCode: null,
    minSalary: 8000000,
    maxSalary: 13000000,
    currency: "IDR",
    salaryNegotiable: true,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "REMOTE",
    experienceLevel: "JUNIOR_LEVEL",
    status: "OPEN",
    openings: 2,
    applicationDeadline: "2026-11-22",
    expiresAt: "2026-12-22",
    active: true,
    viewCount: 1684,
    applicationCount: 38,
    createdAt: "2026-09-25T04:25:36.142852Z",
    updatedAt: "2026-09-25T04:27:36.232532Z",
    publishedAt: "2026-09-25T04:27:36.232532Z",
    closedAt: null
  },
  {
    id: 11,
    title: "Backend Engineer Intern",
    description: "Program magang 6 bulan untuk mahasiswa tingkat akhir atau fresh graduate yang ingin merasakan langsung pengembangan sistem logistik berskala nasional bersama mentor berpengalaman.",
    requirements: "- Mahasiswa tingkat akhir atau fresh graduate jurusan Informatika atau sejenisnya\n- Memahami dasar pemrograman berorientasi objek\n- Familiar dengan salah satu bahasa: Java, Go, atau Node.js\n- Memahami dasar SQL\n- Bersedia magang full-time selama 6 bulan",
    responsibilities: "- Membantu pengembangan fitur backend di bawah bimbingan mentor\n- Menulis unit test\n- Mengikuti sprint planning dan daily standup\n- Mempresentasikan proyek akhir magang",
    benefits: "- Uang saku bulanan\n- Sertifikat magang\n- Mentoring langsung dari Senior Engineer\n- Peluang diangkat menjadi karyawan tetap",
    company: {
      id: 4,
      name: "PT Kirim Kilat Logistik",
      slug: "pt-kirim-kilat-logistik",
      tagline: "Logistik cerdas, pengiriman tepat waktu",
      description: "PT Kirim Kilat Logistik adalah perusahaan logistik berbasis teknologi dengan jaringan 350 hub di 34 provinsi dan sistem routing berbasis machine learning.",
      logoUrl: "https://ui-avatars.com/api/?name=Kirim+Kilat+Logistik&background=DC2626&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/kirim-kilat-logistik/1200/400",
      website: "https://www.kirimkilatlogistik.com",
      email: "hr@kirimkilatlogistik.com",
      phone: "0318765432",
      foundedYear: 2012,
      companySize: "ENTERPRISE",
      companyType: "PRIVATE",
      industryType: "LOGISTICS",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 5,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/kirim-kilat-logistik"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/kirimkilatlogistik"
        },
        {
          platform: "WEBSITE",
          url: "https://www.kirimkilatlogistik.com"
        }
      ],
      createdAt: "2026-09-24T04:10:13.036633Z",
      updatedAt: "2026-09-24T04:12:58.220344Z"
    },
    employerId: 5,
    category: {
      id: 4,
      name: "Backend Development",
      slug: "backend-development",
      description: "Pekerjaan yang berfokus pada pengembangan sisi server, logika bisnis, RESTful API, dan manajemen database menggunakan teknologi seperti Java, Node.js, Python, dan Spring Boot.",
      iconUrl: "https://api.iconify.design/tabler/server.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:19:36.005262Z"
    },
    skills: [
      {
        id: 1,
        name: "Java",
        slug: "java",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 30,
        name: "SQL",
        slug: "sql",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 34,
        name: "Git",
        slug: "git",
        category: "TOOL",
        active: true
      },
      {
        id: 40,
        name: "Teamwork",
        slug: "teamwork",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 3,
        name: "Fresh Graduate",
        slug: "fresh-graduate",
        active: true
      }
    ],
    address: "Jl. Basuki Rahmat No. 8-12, Gedung Kilat Center",
    city: "Surabaya",
    state: "Jawa Timur",
    country: "Indonesia",
    zipCode: "60271",
    minSalary: 3500000,
    maxSalary: 4500000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "INTERNSHIP",
    workMode: "ONSITE",
    experienceLevel: "ENTRY_LEVEL",
    status: "OPEN",
    openings: 5,
    applicationDeadline: "2026-10-31",
    expiresAt: "2026-11-30",
    active: true,
    viewCount: 1547,
    applicationCount: 105,
    createdAt: "2026-09-25T04:00:23.139281Z",
    updatedAt: "2026-09-25T04:02:23.229821Z",
    publishedAt: "2026-09-25T04:02:23.229821Z",
    closedAt: null
  },
  {
    id: 10,
    title: "Machine Learning Engineer",
    description: "Kembangkan model machine learning untuk optimasi rute pengiriman dan prediksi estimasi waktu tiba. Model kamu akan langsung berdampak pada jutaan pengiriman setiap bulan.",
    requirements: "- Minimal 3 tahun pengalaman di bidang machine learning\n- Menguasai Python dan library ML (scikit-learn, TensorFlow, atau PyTorch)\n- Pengalaman men-deploy model ke produksi (MLOps)\n- Memahami SQL dan pengolahan data skala besar\n- Latar belakang Ilmu Komputer, Matematika, atau Statistika",
    responsibilities: "- Membangun model prediksi ETA dan optimasi rute\n- Menyusun pipeline training dan evaluasi model\n- Memantau performa model di produksi\n- Berkolaborasi dengan tim Data Engineering dan Product",
    benefits: "- Gaji kompetitif dan bonus tahunan\n- Akses GPU cloud untuk eksperimen\n- Asuransi kesehatan untuk karyawan dan keluarga\n- Hybrid 3 hari WFO",
    company: {
      id: 4,
      name: "PT Kirim Kilat Logistik",
      slug: "pt-kirim-kilat-logistik",
      tagline: "Logistik cerdas, pengiriman tepat waktu",
      description: "PT Kirim Kilat Logistik adalah perusahaan logistik berbasis teknologi dengan jaringan 350 hub di 34 provinsi dan sistem routing berbasis machine learning.",
      logoUrl: "https://ui-avatars.com/api/?name=Kirim+Kilat+Logistik&background=DC2626&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/kirim-kilat-logistik/1200/400",
      website: "https://www.kirimkilatlogistik.com",
      email: "hr@kirimkilatlogistik.com",
      phone: "0318765432",
      foundedYear: 2012,
      companySize: "ENTERPRISE",
      companyType: "PRIVATE",
      industryType: "LOGISTICS",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 5,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/kirim-kilat-logistik"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/kirimkilatlogistik"
        },
        {
          platform: "WEBSITE",
          url: "https://www.kirimkilatlogistik.com"
        }
      ],
      createdAt: "2026-09-24T04:10:13.036633Z",
      updatedAt: "2026-09-24T04:12:58.220344Z"
    },
    employerId: 5,
    category: {
      id: 7,
      name: "Data & AI",
      slug: "data-ai",
      description: "Pekerjaan di bidang data engineering, data analysis, data science, dan machine learning.",
      iconUrl: "https://api.iconify.design/tabler/brain.svg",
      active: true,
      parentId: 10,
      parentName: "Data & Analytics",
      subCategories: [],
      createdAt: "2026-09-25T00:22:36.005262Z"
    },
    skills: [
      {
        id: 18,
        name: "Python",
        slug: "python",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 31,
        name: "TensorFlow",
        slug: "tensorflow",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 30,
        name: "SQL",
        slug: "sql",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 26,
        name: "Google Cloud",
        slug: "google-cloud",
        category: "CLOUD_PLATFORM",
        active: true
      }
    ],
    tags: [
      {
        id: 4,
        name: "Work Life Balance",
        slug: "work-life-balance",
        active: true
      }
    ],
    address: "Jl. Basuki Rahmat No. 8-12, Gedung Kilat Center",
    city: "Surabaya",
    state: "Jawa Timur",
    country: "Indonesia",
    zipCode: "60271",
    minSalary: 20000000,
    maxSalary: 35000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "SENIOR_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-12-10",
    expiresAt: "2027-01-10",
    active: true,
    viewCount: 1410,
    applicationCount: 52,
    createdAt: "2026-09-25T03:35:10.135710Z",
    updatedAt: "2026-09-25T03:37:10.227110Z",
    publishedAt: "2026-09-25T03:37:10.227110Z",
    closedAt: null
  },
  {
    id: 9,
    title: "DevOps Engineer",
    description: "Kelola infrastruktur cloud yang menopang pelacakan jutaan paket setiap hari. Kamu akan mengotomatisasi deployment, meningkatkan observability, dan menekan biaya cloud.",
    requirements: "- Minimal 3 tahun pengalaman sebagai DevOps atau SRE\n- Menguasai Docker, Kubernetes, dan Helm\n- Pengalaman Infrastructure as Code dengan Terraform\n- Familiar dengan monitoring stack (Prometheus, Grafana, ELK)\n- Pengalaman dengan AWS atau Google Cloud",
    responsibilities: "- Membangun dan memelihara pipeline CI/CD\n- Mengelola cluster Kubernetes di lingkungan produksi\n- Menyusun alerting dan runbook insiden\n- Melakukan optimasi biaya infrastruktur cloud\n- Menjadi bagian dari rotasi on-call",
    benefits: "- Gaji kompetitif dan tunjangan on-call\n- Asuransi kesehatan untuk karyawan dan keluarga\n- Sertifikasi cloud ditanggung perusahaan\n- Tunjangan transportasi",
    company: {
      id: 4,
      name: "PT Kirim Kilat Logistik",
      slug: "pt-kirim-kilat-logistik",
      tagline: "Logistik cerdas, pengiriman tepat waktu",
      description: "PT Kirim Kilat Logistik adalah perusahaan logistik berbasis teknologi dengan jaringan 350 hub di 34 provinsi dan sistem routing berbasis machine learning.",
      logoUrl: "https://ui-avatars.com/api/?name=Kirim+Kilat+Logistik&background=DC2626&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/kirim-kilat-logistik/1200/400",
      website: "https://www.kirimkilatlogistik.com",
      email: "hr@kirimkilatlogistik.com",
      phone: "0318765432",
      foundedYear: 2012,
      companySize: "ENTERPRISE",
      companyType: "PRIVATE",
      industryType: "LOGISTICS",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 5,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/kirim-kilat-logistik"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/kirimkilatlogistik"
        },
        {
          platform: "WEBSITE",
          url: "https://www.kirimkilatlogistik.com"
        }
      ],
      createdAt: "2026-09-24T04:10:13.036633Z",
      updatedAt: "2026-09-24T04:12:58.220344Z"
    },
    employerId: 5,
    category: {
      id: 5,
      name: "DevOps & Cloud",
      slug: "devops-cloud",
      description: "Pengelolaan infrastruktur, CI/CD, containerization, dan layanan cloud untuk memastikan aplikasi berjalan andal dan scalable.",
      iconUrl: "https://api.iconify.design/tabler/cloud-computing.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:20:36.005262Z"
    },
    skills: [
      {
        id: 9,
        name: "Kubernetes",
        slug: "kubernetes",
        category: "TOOL",
        active: true
      },
      {
        id: 8,
        name: "Docker",
        slug: "docker",
        category: "TOOL",
        active: true
      },
      {
        id: 25,
        name: "Terraform",
        slug: "terraform",
        category: "TOOL",
        active: true
      },
      {
        id: 7,
        name: "AWS",
        slug: "aws",
        category: "CLOUD_PLATFORM",
        active: true
      },
      {
        id: 39,
        name: "Linux",
        slug: "linux",
        category: "TOOL",
        active: true
      }
    ],
    tags: [
      {
        id: 2,
        name: "Urgent Hiring",
        slug: "urgent-hiring",
        active: true
      }
    ],
    address: "Jl. Basuki Rahmat No. 8-12, Gedung Kilat Center",
    city: "Surabaya",
    state: "Jawa Timur",
    country: "Indonesia",
    zipCode: "60271",
    minSalary: 16000000,
    maxSalary: 26000000,
    currency: "IDR",
    salaryNegotiable: true,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "ONSITE",
    experienceLevel: "MID_LEVEL",
    status: "OPEN",
    openings: 2,
    applicationDeadline: "2026-11-12",
    expiresAt: "2026-12-12",
    active: true,
    viewCount: 1273,
    applicationCount: 119,
    createdAt: "2026-09-25T03:10:57.132139Z",
    updatedAt: "2026-09-25T03:12:57.224399Z",
    publishedAt: "2026-09-25T03:12:57.224399Z",
    closedAt: null
  },
  {
    id: 8,
    title: "UI/UX Designer",
    description: "Rancang pengalaman digital yang membuat layanan kesehatan terasa mudah bagi semua kalangan, termasuk pengguna lanjut usia. Kamu akan terlibat dari riset pengguna hingga handoff ke tim engineering.",
    requirements: "- Minimal 2 tahun pengalaman sebagai UI/UX Designer\n- Portofolio yang menunjukkan proses desain end-to-end\n- Mahir menggunakan Figma, termasuk auto layout dan component\n- Pengalaman melakukan usability testing\n- Memahami prinsip aksesibilitas",
    responsibilities: "- Melakukan riset pengguna dan menyusun insight\n- Membuat wireframe, prototipe, dan desain high-fidelity\n- Merawat dan mengembangkan design system\n- Berkolaborasi dengan Product Manager dan Engineer",
    benefits: "- Gaji kompetitif\n- Lisensi Figma dan tools desain ditanggung perusahaan\n- Konsultasi dokter gratis untuk karyawan dan keluarga\n- Fully remote",
    company: {
      id: 3,
      name: "PT Sehat Digital Sejahtera",
      slug: "pt-sehat-digital-sejahtera",
      tagline: "Akses kesehatan dalam genggaman",
      description: "PT Sehat Digital Sejahtera mengembangkan aplikasi telemedicine dan manajemen rekam medis elektronik yang terhubung dengan lebih dari 1.200 fasilitas kesehatan.",
      logoUrl: "https://ui-avatars.com/api/?name=Sehat+Digital+Sejahtera&background=16A34A&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/sehat-digital-sejahtera/1200/400",
      website: "https://www.sehatdigitalsejahtera.com",
      email: "hr@sehatdigitalsejahtera.com",
      phone: "0224567890",
      foundedYear: 2019,
      companySize: "MEDIUM",
      companyType: "PRIVATE",
      industryType: "HEALTHCARE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 4,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/sehat-digital-sejahtera"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/sehatdigitalsejahtera"
        },
        {
          platform: "WEBSITE",
          url: "https://www.sehatdigitalsejahtera.com"
        }
      ],
      createdAt: "2026-09-23T03:10:13.036633Z",
      updatedAt: "2026-09-23T03:12:58.220344Z"
    },
    employerId: 4,
    category: {
      id: 8,
      name: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Perancangan pengalaman dan antarmuka pengguna, mulai dari riset, wireframe, prototipe, hingga design system.",
      iconUrl: "https://api.iconify.design/tabler/palette.svg",
      active: true,
      parentId: 11,
      parentName: "Design & Creative",
      subCategories: [],
      createdAt: "2026-09-25T00:23:36.005262Z"
    },
    skills: [
      {
        id: 27,
        name: "Figma",
        slug: "figma",
        category: "TOOL",
        active: true
      },
      {
        id: 11,
        name: "Communication",
        slug: "communication",
        category: "SOFT_SKILL",
        active: true
      },
      {
        id: 10,
        name: "Problem Solving",
        slug: "problem-solving",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      },
      {
        id: 5,
        name: "Flexible Hours",
        slug: "flexible-hours",
        active: true
      }
    ],
    address: null,
    city: "Bandung",
    state: "Jawa Barat",
    country: "Indonesia",
    zipCode: null,
    minSalary: 9000000,
    maxSalary: 15000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "REMOTE",
    experienceLevel: "MID_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-12-01",
    expiresAt: "2026-12-31",
    active: true,
    viewCount: 1136,
    applicationCount: 66,
    createdAt: "2026-09-25T02:45:44.128568Z",
    updatedAt: "2026-09-25T02:47:44.221688Z",
    publishedAt: "2026-09-25T02:47:44.221688Z",
    closedAt: null
  },
  {
    id: 7,
    title: "QA Automation Engineer",
    description: "Pastikan setiap rilis aplikasi kesehatan kami aman dan andal. Kamu akan membangun framework automation testing untuk web, mobile, dan API dari awal.",
    requirements: "- Minimal 2 tahun pengalaman sebagai QA Engineer\n- Pengalaman membuat test automation dengan Cypress, Selenium, atau Appium\n- Memahami API testing menggunakan Postman atau REST Assured\n- Mampu menulis test case dan test plan yang terstruktur\n- Familiar dengan CI/CD (GitHub Actions, GitLab CI)",
    responsibilities: "- Membangun dan memelihara framework test automation\n- Menjalankan regression test sebelum setiap rilis\n- Melaporkan dan memverifikasi bug bersama tim developer\n- Menyusun metrik kualitas dan laporan pengujian",
    benefits: "- Gaji kompetitif\n- Konsultasi dokter gratis tanpa batas untuk karyawan dan keluarga\n- BPJS Kesehatan dan Ketenagakerjaan\n- Budget belajar Rp 5.000.000 per tahun",
    company: {
      id: 3,
      name: "PT Sehat Digital Sejahtera",
      slug: "pt-sehat-digital-sejahtera",
      tagline: "Akses kesehatan dalam genggaman",
      description: "PT Sehat Digital Sejahtera mengembangkan aplikasi telemedicine dan manajemen rekam medis elektronik yang terhubung dengan lebih dari 1.200 fasilitas kesehatan.",
      logoUrl: "https://ui-avatars.com/api/?name=Sehat+Digital+Sejahtera&background=16A34A&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/sehat-digital-sejahtera/1200/400",
      website: "https://www.sehatdigitalsejahtera.com",
      email: "hr@sehatdigitalsejahtera.com",
      phone: "0224567890",
      foundedYear: 2019,
      companySize: "MEDIUM",
      companyType: "PRIVATE",
      industryType: "HEALTHCARE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 4,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/sehat-digital-sejahtera"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/sehatdigitalsejahtera"
        },
        {
          platform: "WEBSITE",
          url: "https://www.sehatdigitalsejahtera.com"
        }
      ],
      createdAt: "2026-09-23T03:10:13.036633Z",
      updatedAt: "2026-09-23T03:12:58.220344Z"
    },
    employerId: 4,
    category: {
      id: 6,
      name: "Quality Assurance",
      slug: "quality-assurance",
      description: "Pengujian perangkat lunak secara manual maupun otomatis untuk memastikan kualitas dan keandalan produk.",
      iconUrl: "https://api.iconify.design/tabler/bug.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:21:36.005262Z"
    },
    skills: [
      {
        id: 29,
        name: "Cypress",
        slug: "cypress",
        category: "TOOL",
        active: true
      },
      {
        id: 28,
        name: "Selenium",
        slug: "selenium",
        category: "TOOL",
        active: true
      },
      {
        id: 12,
        name: "JavaScript",
        slug: "javascript",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 10,
        name: "Problem Solving",
        slug: "problem-solving",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 4,
        name: "Work Life Balance",
        slug: "work-life-balance",
        active: true
      }
    ],
    address: "Jl. Asia Afrika No. 133-137, Gedung Graha Sehat Lt. 5",
    city: "Bandung",
    state: "Jawa Barat",
    country: "Indonesia",
    zipCode: "40112",
    minSalary: 9000000,
    maxSalary: 14000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "ONSITE",
    experienceLevel: "JUNIOR_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-11-18",
    expiresAt: "2026-12-18",
    active: true,
    viewCount: 999,
    applicationCount: 13,
    createdAt: "2026-09-25T02:20:31.124997Z",
    updatedAt: "2026-09-25T02:22:31.218977Z",
    publishedAt: "2026-09-25T02:22:31.218977Z",
    closedAt: null
  },
  {
    id: 6,
    title: "Flutter Developer",
    description: "Bantu kami membangun aplikasi telemedicine yang menghubungkan pasien dengan dokter dalam hitungan menit. Kamu akan mengembangkan fitur konsultasi video, pembayaran, dan resep digital di Android dan iOS.",
    requirements: "- Minimal 2 tahun pengalaman dengan Flutter dan Dart\n- Memahami state management (Bloc, Riverpod, atau Provider)\n- Pengalaman integrasi REST API dan push notification\n- Pernah merilis aplikasi ke Play Store dan App Store\n- Nilai tambah: pengalaman dengan WebRTC atau video call SDK",
    responsibilities: "- Mengembangkan fitur baru pada aplikasi pasien dan dokter\n- Menulis widget test dan integration test\n- Berkolaborasi dengan tim desain untuk implementasi UI yang presisi\n- Memperbaiki bug dan meningkatkan performa aplikasi",
    benefits: "- Gaji kompetitif\n- Konsultasi dokter gratis tanpa batas untuk karyawan dan keluarga\n- BPJS Kesehatan dan Ketenagakerjaan\n- Hybrid 2 hari WFO di Bandung",
    company: {
      id: 3,
      name: "PT Sehat Digital Sejahtera",
      slug: "pt-sehat-digital-sejahtera",
      tagline: "Akses kesehatan dalam genggaman",
      description: "PT Sehat Digital Sejahtera mengembangkan aplikasi telemedicine dan manajemen rekam medis elektronik yang terhubung dengan lebih dari 1.200 fasilitas kesehatan.",
      logoUrl: "https://ui-avatars.com/api/?name=Sehat+Digital+Sejahtera&background=16A34A&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/sehat-digital-sejahtera/1200/400",
      website: "https://www.sehatdigitalsejahtera.com",
      email: "hr@sehatdigitalsejahtera.com",
      phone: "0224567890",
      foundedYear: 2019,
      companySize: "MEDIUM",
      companyType: "PRIVATE",
      industryType: "HEALTHCARE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 4,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/sehat-digital-sejahtera"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/sehatdigitalsejahtera"
        },
        {
          platform: "WEBSITE",
          url: "https://www.sehatdigitalsejahtera.com"
        }
      ],
      createdAt: "2026-09-23T03:10:13.036633Z",
      updatedAt: "2026-09-23T03:12:58.220344Z"
    },
    employerId: 4,
    category: {
      id: 3,
      name: "Mobile Development",
      slug: "mobile-development",
      description: "Pengembangan aplikasi mobile untuk Android dan iOS, baik native (Kotlin, Swift) maupun cross-platform (Flutter, React Native).",
      iconUrl: "https://api.iconify.design/tabler/device-mobile.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:18:36.005262Z"
    },
    skills: [
      {
        id: 21,
        name: "Flutter",
        slug: "flutter",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 34,
        name: "Git",
        slug: "git",
        category: "TOOL",
        active: true
      },
      {
        id: 40,
        name: "Teamwork",
        slug: "teamwork",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 4,
        name: "Work Life Balance",
        slug: "work-life-balance",
        active: true
      },
      {
        id: 5,
        name: "Flexible Hours",
        slug: "flexible-hours",
        active: true
      }
    ],
    address: "Jl. Asia Afrika No. 133-137, Gedung Graha Sehat Lt. 5",
    city: "Bandung",
    state: "Jawa Barat",
    country: "Indonesia",
    zipCode: "40112",
    minSalary: 10000000,
    maxSalary: 16000000,
    currency: "IDR",
    salaryNegotiable: true,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "JUNIOR_LEVEL",
    status: "OPEN",
    openings: 2,
    applicationDeadline: "2026-11-25",
    expiresAt: "2026-12-25",
    active: true,
    viewCount: 862,
    applicationCount: 80,
    createdAt: "2026-09-25T01:55:18.121426Z",
    updatedAt: "2026-09-25T01:57:18.216266Z",
    publishedAt: "2026-09-25T01:57:18.216266Z",
    closedAt: null
  },
  {
    id: 5,
    title: "Senior Android Engineer",
    description: "Kembangkan aplikasi dompet digital dengan lebih dari 10 juta unduhan. Kamu akan memimpin inisiatif modularisasi aplikasi Android dan migrasi UI ke Jetpack Compose.",
    requirements: "- Minimal 5 tahun pengalaman pengembangan Android native\n- Menguasai Kotlin, Coroutines, dan Jetpack Compose\n- Paham arsitektur MVVM/MVI dan clean architecture\n- Pengalaman dengan modularisasi dan dependency injection (Hilt/Koin)\n- Pernah merilis aplikasi dengan skala jutaan pengguna",
    responsibilities: "- Memimpin pengembangan fitur utama aplikasi Android\n- Merancang arsitektur modular dan menetapkan best practice\n- Meningkatkan stabilitas aplikasi (crash-free rate > 99,8%)\n- Mentoring engineer Android junior dan mid",
    benefits: "- Gaji kompetitif dan ESOP\n- Asuransi kesehatan swasta untuk karyawan dan keluarga\n- Budget perangkat Android dan iOS untuk testing\n- Hybrid 2 hari WFO\n- Cuti tahunan 18 hari",
    company: {
      id: 2,
      name: "PT Bayar Cepat Indonesia",
      slug: "pt-bayar-cepat-indonesia",
      tagline: "Pembayaran digital untuk semua",
      description: "PT Bayar Cepat Indonesia adalah perusahaan fintech penyedia layanan payment gateway dan dompet digital yang melayani lebih dari 40.000 merchant di seluruh Indonesia.",
      logoUrl: "https://ui-avatars.com/api/?name=Bayar+Cepat+Indonesia&background=2563EB&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/bayar-cepat-indonesia/1200/400",
      website: "https://www.bayarcepatindonesia.com",
      email: "hr@bayarcepatindonesia.com",
      phone: "0217654321",
      foundedYear: 2016,
      companySize: "LARGE",
      companyType: "PRIVATE",
      industryType: "FINANCE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 3,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/bayar-cepat-indonesia"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/bayarcepatindonesia"
        },
        {
          platform: "WEBSITE",
          url: "https://www.bayarcepatindonesia.com"
        }
      ],
      createdAt: "2026-09-22T02:10:13.036633Z",
      updatedAt: "2026-09-22T02:12:58.220344Z"
    },
    employerId: 3,
    category: {
      id: 3,
      name: "Mobile Development",
      slug: "mobile-development",
      description: "Pengembangan aplikasi mobile untuk Android dan iOS, baik native (Kotlin, Swift) maupun cross-platform (Flutter, React Native).",
      iconUrl: "https://api.iconify.design/tabler/device-mobile.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:18:36.005262Z"
    },
    skills: [
      {
        id: 19,
        name: "Kotlin",
        slug: "kotlin",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 34,
        name: "Git",
        slug: "git",
        category: "TOOL",
        active: true
      },
      {
        id: 33,
        name: "Leadership",
        slug: "leadership",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 6,
        name: "Stock Options",
        slug: "stock-options",
        active: true
      },
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      }
    ],
    address: "Jl. Jend. Sudirman Kav. 52-53, Equity Tower Lt. 30",
    city: "Jakarta Selatan",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "12190",
    minSalary: 28000000,
    maxSalary: 42000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "SENIOR_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-12-05",
    expiresAt: "2027-01-05",
    active: true,
    viewCount: 725,
    applicationCount: 27,
    createdAt: "2026-09-25T01:30:05.117855Z",
    updatedAt: "2026-09-25T01:32:05.213555Z",
    publishedAt: "2026-09-25T01:32:05.213555Z",
    closedAt: null
  },
  {
    id: 4,
    title: "Application Security Engineer",
    description: "Kami mencari Application Security Engineer untuk memastikan seluruh produk pembayaran memenuhi standar keamanan PCI DSS. Kamu akan terlibat sejak tahap desain hingga rilis untuk mengidentifikasi dan menutup celah keamanan.",
    requirements: "- Minimal 3 tahun pengalaman di bidang application security\n- Memahami OWASP Top 10 dan secure coding practices\n- Pengalaman melakukan penetration testing aplikasi web dan mobile\n- Familiar dengan SAST/DAST tools seperti SonarQube, Burp Suite, atau ZAP\n- Nilai tambah: sertifikasi OSCP, CEH, atau sejenisnya",
    responsibilities: "- Melakukan security review dan threat modeling fitur baru\n- Menjalankan penetration testing berkala\n- Mengintegrasikan security scanning ke pipeline CI/CD\n- Memberikan edukasi secure coding kepada tim engineering",
    benefits: "- Gaji kompetitif dan bonus tahunan\n- Budget sertifikasi keamanan hingga Rp 25.000.000 per tahun\n- Asuransi kesehatan swasta untuk karyawan dan keluarga\n- Hybrid 2 hari WFO",
    company: {
      id: 2,
      name: "PT Bayar Cepat Indonesia",
      slug: "pt-bayar-cepat-indonesia",
      tagline: "Pembayaran digital untuk semua",
      description: "PT Bayar Cepat Indonesia adalah perusahaan fintech penyedia layanan payment gateway dan dompet digital yang melayani lebih dari 40.000 merchant di seluruh Indonesia.",
      logoUrl: "https://ui-avatars.com/api/?name=Bayar+Cepat+Indonesia&background=2563EB&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/bayar-cepat-indonesia/1200/400",
      website: "https://www.bayarcepatindonesia.com",
      email: "hr@bayarcepatindonesia.com",
      phone: "0217654321",
      foundedYear: 2016,
      companySize: "LARGE",
      companyType: "PRIVATE",
      industryType: "FINANCE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 3,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/bayar-cepat-indonesia"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/bayarcepatindonesia"
        },
        {
          platform: "WEBSITE",
          url: "https://www.bayarcepatindonesia.com"
        }
      ],
      createdAt: "2026-09-22T02:10:13.036633Z",
      updatedAt: "2026-09-22T02:12:58.220344Z"
    },
    employerId: 3,
    category: {
      id: 14,
      name: "Cyber Security",
      slug: "cyber-security",
      description: "Perlindungan sistem, jaringan, dan data dari ancaman siber melalui pengujian keamanan dan monitoring.",
      iconUrl: "https://api.iconify.design/tabler/shield-lock.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:29:36.005262Z"
    },
    skills: [
      {
        id: 18,
        name: "Python",
        slug: "python",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 39,
        name: "Linux",
        slug: "linux",
        category: "TOOL",
        active: true
      },
      {
        id: 8,
        name: "Docker",
        slug: "docker",
        category: "TOOL",
        active: true
      },
      {
        id: 10,
        name: "Problem Solving",
        slug: "problem-solving",
        category: "SOFT_SKILL",
        active: true
      }
    ],
    tags: [
      {
        id: 2,
        name: "Urgent Hiring",
        slug: "urgent-hiring",
        active: true
      }
    ],
    address: "Jl. Jend. Sudirman Kav. 52-53, Equity Tower Lt. 30",
    city: "Jakarta Selatan",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "12190",
    minSalary: 20000000,
    maxSalary: 32000000,
    currency: "IDR",
    salaryNegotiable: false,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "MID_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-11-10",
    expiresAt: "2026-12-10",
    active: true,
    viewCount: 588,
    applicationCount: 94,
    createdAt: "2026-09-25T01:05:52.114284Z",
    updatedAt: "2026-09-25T01:07:52.210844Z",
    publishedAt: "2026-09-25T01:07:52.210844Z",
    closedAt: null
  },
  {
    id: 3,
    title: "Backend Engineer (Golang)",
    description: "Bergabunglah dengan tim Core Payment untuk membangun layanan pemrosesan transaksi berlatensi rendah. Kamu akan mengembangkan API yang dipakai ribuan merchant setiap harinya dengan target uptime 99,99%.",
    requirements: "- Minimal 3 tahun pengalaman backend development\n- Menguasai Go dan konsep concurrency (goroutine, channel)\n- Pengalaman dengan PostgreSQL dan Redis\n- Memahami prinsip idempotency dan konsistensi data pada sistem pembayaran\n- Terbiasa menulis unit test dan integration test",
    responsibilities: "- Membangun dan memelihara layanan pembayaran berbasis Go\n- Mengoptimalkan query database dan caching\n- Menangani insiden produksi bersama tim SRE\n- Menulis dokumentasi teknis dan API contract",
    benefits: "- Gaji kompetitif dan bonus tahunan berdasarkan kinerja\n- Asuransi kesehatan swasta termasuk rawat gigi dan kacamata\n- Hybrid 2 hari WFO\n- Makan siang gratis setiap hari kantor\n- Program kepemilikan saham karyawan (ESOP)",
    company: {
      id: 2,
      name: "PT Bayar Cepat Indonesia",
      slug: "pt-bayar-cepat-indonesia",
      tagline: "Pembayaran digital untuk semua",
      description: "PT Bayar Cepat Indonesia adalah perusahaan fintech penyedia layanan payment gateway dan dompet digital yang melayani lebih dari 40.000 merchant di seluruh Indonesia.",
      logoUrl: "https://ui-avatars.com/api/?name=Bayar+Cepat+Indonesia&background=2563EB&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/bayar-cepat-indonesia/1200/400",
      website: "https://www.bayarcepatindonesia.com",
      email: "hr@bayarcepatindonesia.com",
      phone: "0217654321",
      foundedYear: 2016,
      companySize: "LARGE",
      companyType: "PRIVATE",
      industryType: "FINANCE",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 3,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/bayar-cepat-indonesia"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/bayarcepatindonesia"
        },
        {
          platform: "WEBSITE",
          url: "https://www.bayarcepatindonesia.com"
        }
      ],
      createdAt: "2026-09-22T02:10:13.036633Z",
      updatedAt: "2026-09-22T02:12:58.220344Z"
    },
    employerId: 3,
    category: {
      id: 4,
      name: "Backend Development",
      slug: "backend-development",
      description: "Pekerjaan yang berfokus pada pengembangan sisi server, logika bisnis, RESTful API, dan manajemen database menggunakan teknologi seperti Java, Node.js, Python, dan Spring Boot.",
      iconUrl: "https://api.iconify.design/tabler/server.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:19:36.005262Z"
    },
    skills: [
      {
        id: 17,
        name: "Go",
        slug: "go",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 5,
        name: "PostgreSQL",
        slug: "postgresql",
        category: "DATABASE",
        active: true
      },
      {
        id: 6,
        name: "Redis",
        slug: "redis",
        category: "DATABASE",
        active: true
      },
      {
        id: 8,
        name: "Docker",
        slug: "docker",
        category: "TOOL",
        active: true
      },
      {
        id: 24,
        name: "Kafka",
        slug: "kafka",
        category: "TOOL",
        active: true
      }
    ],
    tags: [
      {
        id: 6,
        name: "Stock Options",
        slug: "stock-options",
        active: true
      },
      {
        id: 4,
        name: "Work Life Balance",
        slug: "work-life-balance",
        active: true
      }
    ],
    address: "Jl. Jend. Sudirman Kav. 52-53, Equity Tower Lt. 30",
    city: "Jakarta Selatan",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "12190",
    minSalary: 18000000,
    maxSalary: 28000000,
    currency: "IDR",
    salaryNegotiable: true,
    salaryDisclosed: true,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "MID_LEVEL",
    status: "OPEN",
    openings: 3,
    applicationDeadline: "2026-11-20",
    expiresAt: "2026-12-20",
    active: true,
    viewCount: 451,
    applicationCount: 41,
    createdAt: "2026-09-25T00:40:39.110713Z",
    updatedAt: "2026-09-25T00:42:39.208133Z",
    publishedAt: "2026-09-25T00:42:39.208133Z",
    closedAt: null
  },
  {
    id: 2,
    title: "Senior Frontend Engineer (React & TypeScript)",
    description: "Kami mencari Senior Frontend Engineer untuk memimpin pengembangan antarmuka platform job portal yang dipakai lebih dari 500.000 kandidat aktif. Kamu akan bertanggung jawab atas arsitektur frontend, design system, dan performa aplikasi di sisi klien, sekaligus menjadi rujukan teknis bagi tim frontend yang sedang tumbuh.",
    requirements: "- Minimal 5 tahun pengalaman frontend development, 3 tahun di antaranya dengan React\n- Penguasaan TypeScript, state management modern (Redux Toolkit / Zustand / TanStack Query)\n- Pengalaman membangun dan memelihara design system atau component library\n- Paham optimasi performa web: code splitting, lazy loading, Core Web Vitals\n- Terbiasa dengan testing: Jest, React Testing Library, Playwright atau Cypress\n- Memahami aksesibilitas (WCAG) dan responsive design\n- Nilai tambah: Next.js, SSR/ISR, dan micro-frontend",
    responsibilities: "- Merancang arsitektur frontend dan menetapkan standar teknis tim\n- Membangun komponen reusable dan merawat design system\n- Berkolaborasi erat dengan UI/UX Designer dan Backend Engineer\n- Melakukan code review dan menjaga kualitas kode\n- Memantau dan meningkatkan Core Web Vitals aplikasi produksi\n- Mentoring 3 frontend engineer level junior hingga mid",
    benefits: "- Gaji kompetitif dengan review tahunan\n- Fully remote dengan opsi coworking space yang ditanggung perusahaan\n- BPJS Kesehatan dan asuransi swasta untuk karyawan beserta keluarga\n- Budget perangkat kerja Rp 30.000.000 (MacBook Pro + monitor)\n- Budget belajar Rp 15.000.000 per tahun untuk kursus dan konferensi\n- 18 hari cuti tahunan dan kebijakan unlimited sick leave",
    company: {
      id: 1,
      name: "PT Teknologi Nusantara",
      slug: "pt-teknologi-nusantara",
      tagline: "Building the future of digital hiring",
      description: "PT Teknologi Nusantara adalah perusahaan teknologi yang fokus pada pengembangan platform job portal berbasis AI untuk mempertemukan talenta terbaik dengan perusahaan di Indonesia.",
      logoUrl: "https://ui-avatars.com/api/?name=Teknologi+Nusantara&background=7C3AED&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/teknologi-nusantara/1200/400",
      website: "https://www.teknologinusantara.com",
      email: "hr@teknologinusantara.com",
      phone: "0211234567",
      foundedYear: 2018,
      companySize: "MEDIUM",
      companyType: "PRIVATE",
      industryType: "TECHNOLOGY",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 2,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/teknologi-nusantara"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/teknologinusantara"
        },
        {
          platform: "WEBSITE",
          url: "https://www.teknologinusantara.com"
        }
      ],
      createdAt: "2026-09-21T01:10:13.036633Z",
      updatedAt: "2026-09-21T01:12:58.220344Z"
    },
    employerId: 2,
    category: {
      id: 2,
      name: "Frontend Development",
      slug: "frontend-development",
      description: "Kategori yang mencakup pengembangan antarmuka pengguna (UI) menggunakan teknologi web seperti HTML, CSS, JavaScript, dan framework modern seperti React, Vue, dan Angular.",
      iconUrl: "https://api.iconify.design/tabler/code.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:17:36.005262Z"
    },
    skills: [
      {
        id: 10,
        name: "Problem Solving",
        slug: "problem-solving",
        category: "SOFT_SKILL",
        active: true
      },
      {
        id: 2,
        name: "TypeScript",
        slug: "typescript",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 3,
        name: "React",
        slug: "react",
        category: "FRAMEWORK",
        active: true
      }
    ],
    tags: [
      {
        id: 2,
        name: "Urgent Hiring",
        slug: "urgent-hiring",
        active: true
      },
      {
        id: 5,
        name: "Flexible Hours",
        slug: "flexible-hours",
        active: true
      },
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      }
    ],
    address: null,
    city: "Jakarta",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: null,
    minSalary: 22000000,
    maxSalary: 35000000,
    currency: null,
    salaryNegotiable: null,
    salaryDisclosed: null,
    jobType: "FULL_TIME",
    workMode: "REMOTE",
    experienceLevel: "SENIOR_LEVEL",
    status: "OPEN",
    openings: 1,
    applicationDeadline: "2026-11-15",
    expiresAt: "2026-12-15",
    active: true,
    viewCount: null,
    applicationCount: null,
    createdAt: "2026-09-25T00:36:58.657067Z",
    updatedAt: "2026-09-25T00:38:22.151367Z",
    publishedAt: "2026-09-25T00:38:22.138354Z",
    closedAt: null
  },
  {
    id: 1,
    title: "Senior Backend Engineer",
    description: "Kami mencari Senior Backend Engineer untuk memperkuat tim Payment. Kamu akan merancang dan membangun layanan microservices yang menangani lebih dari 2 juta transaksi per hari, memimpin migrasi dari monolit ke arsitektur event-driven, serta membimbing engineer junior di tim.",
    requirements: "- Minimal 5 tahun pengalaman backend development dengan Java\n- Penguasaan mendalam Spring Boot, JPA/Hibernate, dan PostgreSQL\n- Pengalaman membangun sistem terdistribusi dengan Kafka atau message broker sejenis\n- Memahami praktik CI/CD, Docker, dan Kubernetes\n- Mampu berkomunikasi teknis dalam bahasa Inggris",
    responsibilities: "- Merancang dan mengimplementasikan REST API yang scalable\n- Melakukan code review dan menjaga kualitas kode tim\n- Berkolaborasi dengan tim Product dan Frontend\n- Memantau performa layanan dan melakukan optimasi\n- Mentoring 2-3 engineer junior",
    benefits: "- Gaji kompetitif dengan review tahunan\n- BPJS Kesehatan dan asuransi swasta untuk karyawan dan keluarga\n- Hybrid 3 hari WFO di Jakarta Selatan\n- Budget pengembangan diri Rp 15.000.000 per tahun\n- 16 hari cuti tahunan di luar cuti bersama",
    company: {
      id: 1,
      name: "PT Teknologi Nusantara",
      slug: "pt-teknologi-nusantara",
      tagline: "Building the future of digital hiring",
      description: "PT Teknologi Nusantara adalah perusahaan teknologi yang fokus pada pengembangan platform job portal berbasis AI untuk mempertemukan talenta terbaik dengan perusahaan di Indonesia.",
      logoUrl: "https://ui-avatars.com/api/?name=Teknologi+Nusantara&background=7C3AED&color=fff&size=256&bold=true",
      coverImageUrl: "https://picsum.photos/seed/teknologi-nusantara/1200/400",
      website: "https://www.teknologinusantara.com",
      email: "hr@teknologinusantara.com",
      phone: "0211234567",
      foundedYear: 2018,
      companySize: "MEDIUM",
      companyType: "PRIVATE",
      industryType: "TECHNOLOGY",
      status: "ACTIVE",
      verified: true,
      active: true,
      ownerId: 2,
      socialLinks: [
        {
          platform: "LINKEDIN",
          url: "https://linkedin.com/company/teknologi-nusantara"
        },
        {
          platform: "INSTAGRAM",
          url: "https://instagram.com/teknologinusantara"
        },
        {
          platform: "WEBSITE",
          url: "https://www.teknologinusantara.com"
        }
      ],
      createdAt: "2026-09-21T01:10:13.036633Z",
      updatedAt: "2026-09-21T01:12:58.220344Z"
    },
    employerId: 2,
    category: {
      id: 4,
      name: "Backend Development",
      slug: "backend-development",
      description: "Pekerjaan yang berfokus pada pengembangan sisi server, logika bisnis, RESTful API, dan manajemen database menggunakan teknologi seperti Java, Node.js, Python, dan Spring Boot.",
      iconUrl: "https://api.iconify.design/tabler/server.svg",
      active: true,
      parentId: 1,
      parentName: "Software Development",
      subCategories: [],
      createdAt: "2026-09-25T00:19:36.005262Z"
    },
    skills: [
      {
        id: 2,
        name: "TypeScript",
        slug: "typescript",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      },
      {
        id: 7,
        name: "AWS",
        slug: "aws",
        category: "CLOUD_PLATFORM",
        active: true
      },
      {
        id: 4,
        name: "Spring Boot",
        slug: "spring-boot",
        category: "FRAMEWORK",
        active: true
      },
      {
        id: 6,
        name: "Redis",
        slug: "redis",
        category: "DATABASE",
        active: true
      },
      {
        id: 5,
        name: "PostgreSQL",
        slug: "postgresql",
        category: "DATABASE",
        active: true
      },
      {
        id: 1,
        name: "Java",
        slug: "java",
        category: "PROGRAMMING_LANGUAGE",
        active: true
      }
    ],
    tags: [
      {
        id: 2,
        name: "Urgent Hiring",
        slug: "urgent-hiring",
        active: true
      },
      {
        id: 4,
        name: "Work Life Balance",
        slug: "work-life-balance",
        active: true
      },
      {
        id: 1,
        name: "Remote Friendly",
        slug: "remote-friendly",
        active: true
      }
    ],
    address: "Jl. Prof. Dr. Satrio No. 164, Menara Standard Chartered Lt. 21",
    city: "Jakarta Selatan",
    state: "DKI Jakarta",
    country: "Indonesia",
    zipCode: "12930",
    minSalary: 25000000,
    maxSalary: 40000000,
    currency: null,
    salaryNegotiable: null,
    salaryDisclosed: null,
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "SENIOR_LEVEL",
    status: "OPEN",
    openings: 2,
    applicationDeadline: "2026-11-30",
    expiresAt: "2026-12-31",
    active: true,
    viewCount: null,
    applicationCount: null,
    createdAt: "2026-09-25T00:35:17.227688Z",
    updatedAt: "2026-09-25T00:38:19.099148Z",
    publishedAt: "2026-09-25T00:38:19.022336Z",
    closedAt: null
  }
];
