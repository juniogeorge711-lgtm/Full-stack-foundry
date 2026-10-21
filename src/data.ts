/**
 * =====================================================================
 * FULLSTACK FOUNDRY - CENTRAL DATA CONFIGURATION
 * =====================================================================
 * You can customize ALL personal information, bio, projects,
 * skills, experience, and contact details directly in this file.
 * =====================================================================
 */

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
  decimals?: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    tag: string;
  }[];
}

export interface RepairTicketMock {
  id: string;
  customer: string;
  device: string;
  issue: string;
  status: 'Received' | 'Diagnosing' | 'Awaiting Parts' | 'In Repair' | 'Testing' | 'Ready' | 'Delivered';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  assignedTech: string;
  intakeDate: string;
  estimatedCost: number;
  partsUsed: string[];
  diagnosticsNote: string;
}

export interface FlagshipFeature {
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  role: string;
  tech: string;
  scalabilityFocus: string;
  highlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web' | 'Backend' | 'Cloud' | 'Systems';
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  metrics: string;
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
  icon: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  icon: string;
  verifyUrl: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarText: string;
  metric: string;
}

// ---------------------------------------------------------------------
// 1. PERSONAL INFORMATION (Edit your name and details here!)
// ---------------------------------------------------------------------
export const personalInfo = {
  // Replace with your real name
  name: "Alex Vance",
  brandName: "Fullstack Foundry",
  brandSubtitle: "Scalable Systems & Distributed Software",
  
  // Hero typewriter cycling roles
  roles: [
    "Software Engineer",
    "Scalable Systems Architect",
    "Backend & Cloud Developer",
    "Distributed Systems Specialist"
  ],
  
  // One-sentence value proposition
  valueStatement: "Engineering battle-hardened distributed architectures, resilient full-stack systems, and mission-critical software built for uncompromising scale.",
  
  // About me bio & philosophy
  bioParagraph1: "I am a full-stack software engineer and systems architect specializing in high-throughput backend services, fault-tolerant cloud infrastructures, and complex business software. With deep hands-on expertise spanning modern web frameworks to low-level concurrency and message brokers, I design software where reliability is an intrinsic property, not an afterthought.",
  bioParagraph2: "My background combines deep domain curiosity with systematic engineering: whether optimizing high-volume PostgreSQL indices, designing event-driven distributed state machines, or constructing intuitive frontend operations dashboards, I focus on delivering tangible operational speed and system stability.",
  
  philosophy: "Simple architectures fail less. Resilient systems treat failure as an expected state and self-heal automatically through graceful degradation, backpressure, and comprehensive observability.",
  passion: "Distributed data pipelines, hardware-integrated management systems, high-concurrency microservices, and eliminating human friction through meticulously crafted software workflows.",
  
  // Quick facts
  location: "San Francisco, CA (Open to Worldwide Remote)",
  experienceYears: "6+ Years Production",
  availabilityStatus: "Open to opportunities",
  availabilityDetails: "Available for Senior/Lead Fullstack & Systems roles & high-impact architectural consulting",
  spokenLanguages: ["English (Native)", "German (Professional)", "TypeScript & Go (Fluent)"],
  
  // Profile picture generated
  profileImage: "/src/assets/images/hero_engineer_portrait_1792572359437.jpg",
  
  // Social & action links
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "alex@fullstackfoundry.dev",
    phone: "+1 (555) 749-2819",
  },
  
  resumeUrl: "#cv-download",

  // Animated stat counters
  stats: [
    { label: "Years Experience", value: 6, suffix: "+", description: "In production engineering" },
    { label: "Projects Delivered", value: 42, suffix: "+", description: "Enterprise & startup systems" },
    { label: "Systems Scaled", value: 18, suffix: "+", description: "From MVP to 10M+ daily events" },
    { label: "Production Uptime", value: 99.98, suffix: "%", description: "Maintained across fleet", decimals: 2 }
  ] as StatItem[]
};

// ---------------------------------------------------------------------
// 2. SKILLS & TECHNOLOGIES
// ---------------------------------------------------------------------
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React 19 / 18", level: 95, tag: "Primary" },
      { name: "TypeScript", level: 96, tag: "Primary" },
      { name: "Next.js (App Router)", level: 90, tag: "Advanced" },
      { name: "Tailwind CSS", level: 95, tag: "Advanced" },
      { name: "State Management (Zustand/Redux)", level: 92, tag: "Advanced" },
      { name: "HTML5 / Semantic Web", level: 98, tag: "Core" }
    ]
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Node.js & Express", level: 95, tag: "Primary" },
      { name: "NestJS & Fastify", level: 88, tag: "Advanced" },
      { name: "Python / FastAPI", level: 90, tag: "Advanced" },
      { name: "RESTful API Architecture", level: 98, tag: "Core" },
      { name: "GraphQL & gRPC", level: 86, tag: "Advanced" },
      { name: "WebSockets & SSE", level: 92, tag: "Advanced" }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "PostgreSQL & PgBouncer", level: 94, tag: "Primary" },
      { name: "Redis Caching & PubSub", level: 92, tag: "Advanced" },
      { name: "MySQL / MariaDB", level: 88, tag: "Advanced" },
      { name: "MongoDB & Document Stores", level: 85, tag: "Intermediate" },
      { name: "Database Indexing & Query Tuning", level: 90, tag: "Expertise" }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "Docker & Containerization", level: 94, tag: "Primary" },
      { name: "Kubernetes (EKS/GKE)", level: 86, tag: "Advanced" },
      { name: "AWS (ECS, Lambda, S3, RDS)", level: 90, tag: "Primary" },
      { name: "CI/CD (GitHub Actions)", level: 92, tag: "Advanced" },
      { name: "Nginx Reverse Proxy & SSL", level: 88, tag: "Advanced" },
      { name: "Terraform / IaC", level: 84, tag: "Intermediate" }
    ]
  },
  {
    category: "Architecture & Systems Design",
    icon: "Cpu",
    skills: [
      { name: "Microservices & Domain Design", level: 92, tag: "Core" },
      { name: "Event-Driven Architecture", level: 90, tag: "Advanced" },
      { name: "Message Queues (RabbitMQ/Kafka)", level: 88, tag: "Advanced" },
      { name: "Distributed Caching (Write-through)", level: 90, tag: "Advanced" },
      { name: "Horizontal Scaling & Load Balancing", level: 92, tag: "Core" },
      { name: "Observability (Prometheus/Grafana)", level: 86, tag: "Advanced" }
    ]
  },
  {
    category: "Tools, Testing & Soft Skills",
    icon: "ShieldCheck",
    skills: [
      { name: "Git & GitFlow Collaboration", level: 96, tag: "Daily" },
      { name: "Automated Testing (Jest / Vitest)", level: 90, tag: "Quality" },
      { name: "Systematic Root-Cause Analysis", level: 95, tag: "Core" },
      { name: "Technical Communication & Mentorship", level: 92, tag: "Leadership" },
      { name: "Agile / Scrum Sprint Leadership", level: 88, tag: "Process" }
    ]
  }
];

// ---------------------------------------------------------------------
// 3. FLAGSHIP PROJECT: COMPUTER REPAIR MANAGEMENT SYSTEM
// ---------------------------------------------------------------------
export const flagshipProject = {
  title: "RepairForge: Computer Repair Management System",
  tagline: "Enterprise-grade operations engine engineered for high-volume hardware repair centers, multi-technician diagnostics, and end-to-end device lifecycle management.",
  statusBadge: "Flagship Production System",
  image: "/src/assets/images/flagship_repair_mockup_1792572360816.jpg",
  
  problemStatement: "Hardware repair centers and computer service shops routinely encounter crippling operational bottlenecks: lost paper claim tickets, untracked component swaps, inefficient technician queue distribution, silent customer delays, and inventory stock-outs. These breakdowns lead to an average 35% revenue leakage and poor customer retention.",
  
  solutionOverview: "RepairForge delivers an integrated event-driven workflow engine that connects intake desks, bench technicians, inventory storehouses, and customers in real time. Built with automated barcode ingestion, state-machine tracking, technician workload balancing, parts inventory sync, and live customer self-service portals, it cuts turnaround times by 40%.",
  
  impactMetrics: [
    { label: "Turnaround Time", value: "42% Faster", context: "Reduced from 4.8 to 2.8 average business days" },
    { label: "Throughput Capacity", value: "10,000+ Tickets", context: "Handled seamlessly per month with zero bottlenecks" },
    { label: "System Uptime", value: "99.98%", context: "Engineered with resilient microservices and read replicas" },
    { label: "Customer Satisfaction", value: "94.6% CSAT", context: "Driven by real-time SMS updates and self-service tracking" }
  ],
  
  keyFeatures: [
    {
      title: "Customer & Device Intake",
      description: "Rapid customer check-in with auto-suggest, IMEI/Serial number lookup, pre-existing cosmetic condition checklist, and customer digital signatures.",
      icon: "UserCheck",
      badge: "Intake"
    },
    {
      title: "Unique Ticket Tracking IDs",
      description: "Cryptographically sound, collision-free tracking codes (e.g. RF-8492) printed directly to thermal labels with QR/barcodes for bench scanning.",
      icon: "QrCode",
      badge: "Tagging"
    },
    {
      title: "7-Stage Workflow Engine",
      description: "Strict finite-state machine enforcing linear progression: Received → Diagnosing → Awaiting Parts → In Repair → Testing → Ready → Delivered.",
      icon: "GitFork",
      badge: "Core Workflow"
    },
    {
      title: "Technician Assignment & Queue Balancing",
      description: "Intelligent dispatch algorithms matching device architecture (Apple Silicon, PC Gaming, Server Board) to technician skill matrices and live queue depth.",
      icon: "Users",
      badge: "Dispatch"
    },
    {
      title: "Inventory & Spare-Parts Management",
      description: "Real-time spare parts allocation (NVMe drives, displays, capacitors, thermal paste) with automated minimum threshold supplier reorder triggers.",
      icon: "PackageCheck",
      badge: "Inventory"
    },
    {
      title: "Invoicing, Quotations & Multi-Currency",
      description: "Dynamic quote generation with labor rates and parts markup, customer quote approval workflows, and multi-channel payment (Card, Stripe, M-Pesa).",
      icon: "CreditCard",
      badge: "Billing"
    },
    {
      title: "Automated SMS & Email Broadcasts",
      description: "Webhook-driven dispatch alerting customers instantly whenever ticket stage changes, diagnostic estimates are ready, or pickup is authorized.",
      icon: "BellRing",
      badge: "Notifications"
    },
    {
      title: "Customer Self-Service Portal",
      description: "Zero-login public tracking page where customers input their ticket ID to view live repair milestones, technician diagnostic notes, and approve quotes.",
      icon: "Globe",
      badge: "Client Portal"
    },
    {
      title: "Granular RBAC Security",
      description: "Fine-grained permissions matrix separating Super Admin, Shop Manager, Senior Technician, Front Desk Receptionist, and Auditing roles.",
      icon: "ShieldAlert",
      badge: "Security"
    },
    {
      title: "Executive Reports & Analytics",
      description: "Real-time dashboard charting technician throughput, average repair duration by device family, recurring failure modes, and gross margins.",
      icon: "LineChart",
      badge: "Analytics"
    },
    {
      title: "Warranty & Repair History Tracking",
      description: "Complete chronological audit trail for every serial number, capturing historical repairs, replaced modules, and 90-day parts warranty enforcement.",
      icon: "History",
      badge: "Audit"
    },
    {
      title: "Barcode / QR Bench Scanning",
      description: "Instant ticket lookup via USB barcode scanners or mobile camera PWA for rapid bench intake, stage updates, and parts deduction.",
      icon: "ScanLine",
      badge: "Hardware"
    }
  ] as FlagshipFeature[],
  
  workflowSteps: [
    {
      step: 1,
      title: "Device Intake",
      status: "Received",
      color: "#1E88E5",
      description: "Customer drops off device. Physical inspection, serial scan, initial symptoms recorded, unique QR ticket generated.",
      automation: "Customer receives confirmation SMS with tracking link."
    },
    {
      step: 2,
      title: "Bench Triage",
      status: "Diagnosing",
      color: "#F59E0B",
      description: "Assigned technician conducts hardware stress tests, multimeter probing, and component fault isolation.",
      automation: "Diagnosis report and quote automatically compiled for manager review."
    },
    {
      step: 3,
      title: "Component Sourcing",
      status: "Awaiting Parts",
      color: "#EC4899",
      description: "If replacement logic boards, panels, or ICs are not in local storage, procurement order is generated.",
      automation: "Inventory hold placed; customer notified of lead time."
    },
    {
      step: 4,
      title: "Hardware Repair",
      status: "In Repair",
      color: "#C62828",
      description: "Micro-soldering, board rework, thermal pad replacement, and module assembly executed by lead technician.",
      automation: "Bench time logged for accurate labor analytics."
    },
    {
      step: 5,
      title: "QA & Stress Testing",
      status: "Testing",
      color: "#8B5CF6",
      description: "Automated 24-hour diagnostic test suite: MemTest, thermal throttling runs, battery cycle validation, and I/O checks.",
      automation: "Passing test report stamped to ticket record."
    },
    {
      step: 6,
      title: "Ready for Pickup",
      status: "Ready",
      color: "#10B981",
      description: "Device sanitization, QC sign-off, invoice generated and moved to front desk secure pickup lockers.",
      automation: "Customer receives SMS with pickup PIN and payment link."
    },
    {
      step: 7,
      title: "Delivered & Warranty",
      status: "Delivered",
      color: "#3B82F6",
      description: "Customer tests device at front counter, invoice settled, 90-day warranty certificate generated.",
      automation: "Automated follow-up satisfaction survey sent after 48 hours."
    }
  ],
  
  mockTickets: [
    {
      id: "RF-8492",
      customer: "Eleanor Vance",
      device: "MacBook Pro 16\" (M2 Max, 32GB)",
      issue: "Kernel panics under GPU load & intermittent USB-C charging",
      status: "In Repair",
      priority: "Critical",
      assignedTech: "Marcus Brody (Board Specialist)",
      intakeDate: "Oct 20, 2026",
      estimatedCost: 380,
      partsUsed: ["USB-C Daughterboard", "Thermal Grizzly Conductonaut"],
      diagnosticsNote: "Short detected on PP3V3_G3H rail. Replaced corroded decoupling capacitors near charging controller."
    },
    {
      id: "RF-8493",
      customer: "David Chen",
      device: "Dell XPS 15 9530 (OLED)",
      issue: "Display flickering pink horizontal lines, cracked hinge",
      status: "Awaiting Parts",
      priority: "High",
      assignedTech: "Alice Chen (Display Specialist)",
      intakeDate: "Oct 20, 2026",
      estimatedCost: 295,
      partsUsed: ["OEM 3.5K OLED Assembly", "Left CNC Hinge"],
      diagnosticsNote: "EDP cable severed by fractured hinge assembly. Display panel undamaged, awaiting OEM cable harness."
    },
    {
      id: "RF-8494",
      customer: "Sarah Jenkins",
      device: "Custom Liquid-Cooled Rig (RTX 4090)",
      issue: "Coolant pump whining, thermal throttling at 98°C in 30 seconds",
      status: "Testing",
      priority: "High",
      assignedTech: "Marcus Brody",
      intakeDate: "Oct 19, 2026",
      estimatedCost: 210,
      partsUsed: ["D5 Water Pump", "EK-CryoFuel Clear 1L"],
      diagnosticsNote: "Impeller seized due to plasticizer buildup. Flushed dual rads, installed high-flow D5 pump, stress testing 2hr Furmark."
    },
    {
      id: "RF-8495",
      customer: "Michael Torres",
      device: "ThinkPad X1 Carbon Gen 11",
      issue: "Spilled hot coffee on keyboard; 8 keys unresponsive",
      status: "Ready",
      priority: "Medium",
      assignedTech: "David Kim (General Hardware)",
      intakeDate: "Oct 18, 2026",
      estimatedCost: 165,
      partsUsed: ["Backlit US-Layout Keyboard", "CMOS Battery"],
      diagnosticsNote: "Ultrasonic cleaning on motherboard. Zero trace corrosion. Replaced keyboard matrix, passed 100% key tests."
    },
    {
      id: "RF-8496",
      customer: "Priya Sharma",
      device: "ASUS ROG Zephyrus G14",
      issue: "No POST after BIOS update crash; power LED solid white",
      status: "Diagnosing",
      priority: "Critical",
      assignedTech: "Marcus Brody",
      intakeDate: "Oct 21, 2026",
      estimatedCost: 140,
      partsUsed: [],
      diagnosticsNote: "SPI flash chip corrupt. Desoldering Winbond 25Q128 to reprogram clean vendor bin via CH341A programmer."
    },
    {
      id: "RF-8497",
      customer: "Liam O'Connor",
      device: "Apple iPad Pro 12.9\" (M2)",
      issue: "Severe battery swelling pushing glass off housing",
      status: "Delivered",
      priority: "Critical",
      assignedTech: "Alice Chen",
      intakeDate: "Oct 16, 2026",
      estimatedCost: 185,
      partsUsed: ["OEM Dual-Cell 10758mAh Li-Po", "Laser-cut Tesa Tape"],
      diagnosticsNote: "Hazardous cell safely discharged and recycled. Cleaned chassis, installed OEM battery, battery health restored to 100%."
    }
  ] as RepairTicketMock[],

  chartData: {
    turnaroundDays: [
      { month: "May", days: 4.8, tickets: 420 },
      { month: "Jun", days: 4.4, tickets: 560 },
      { month: "Jul", days: 3.9, tickets: 680 },
      { month: "Aug", days: 3.4, tickets: 820 },
      { month: "Sep", days: 3.0, tickets: 940 },
      { month: "Oct", days: 2.6, tickets: 1120 },
    ],
    faultBreakdown: [
      { name: "Logic Board Rework", value: 34, color: "#C62828" },
      { name: "Display & Cable Panels", value: 26, color: "#1E88E5" },
      { name: "Battery & Power Rails", value: 18, color: "#F59E0B" },
      { name: "Cooling & Thermal Services", value: 12, color: "#10B981" },
      { name: "Firmware & BIOS SPI", value: 10, color: "#8B5CF6" },
    ]
  },
  
  architectureNodes: [
    {
      id: "client",
      title: "Client Layer",
      role: "Web Desk SPA & Mobile Barcode PWA",
      tech: "React 19, TypeScript, Tailwind, ServiceWorker",
      scalabilityFocus: "Optimistic UI updates, offline ticket caching via IndexedDB, sub-50ms render times.",
      highlight: "Allows bench technicians to work uninterrupted even during network dips."
    },
    {
      id: "gateway",
      title: "API Gateway & Edge",
      role: "TLS Termination, Rate Limiting & Auth",
      tech: "Nginx / Envoy Gateway, JWT Token Validation",
      scalabilityFocus: "Protects backend microservices from burst traffic, enforces RBAC headers, terminates TLS in 4ms.",
      highlight: "Filters 100% of unauthorized requests at the perimeter."
    },
    {
      id: "workflow-svc",
      title: "Workflow Engine Service",
      role: "Ticket Finite State Machine & Dispatch",
      tech: "Node.js, Express, XState, TypeScript",
      scalabilityFocus: "State transition validation with idempotency keys; prevents invalid stage jumps.",
      highlight: "Guarantees zero concurrent modification collisions across multi-technician benches."
    },
    {
      id: "inventory-svc",
      title: "Inventory & Hardware Service",
      role: "Real-Time Stock & Supplier Automation",
      tech: "Python, FastAPI, SQLAlchemy",
      scalabilityFocus: "Atomic inventory decrements via row-level locking to prevent double-allocation of rare chips.",
      highlight: "Automates replenishment with distributor APIs when stock drops below threshold."
    },
    {
      id: "notification-svc",
      title: "Async Notification Queue",
      role: "Customer SMS & Email Broadcasts",
      tech: "RabbitMQ + Worker Pool, Twilio, SendGrid",
      scalabilityFocus: "Decouples slow 3rd-party telecom latency from main HTTP request lifecycle with retry queues and dead-letter topics.",
      highlight: "Guarantees 100% message delivery with exponential backoff."
    },
    {
      id: "db-layer",
      title: "Database Tier",
      role: "Primary Write Node & Read Replicas",
      tech: "PostgreSQL 16 with PgBouncer Pooling",
      scalabilityFocus: "B-Tree indexing on ticket codes, GIN indices on JSON diagnostic specs, connection pooling up to 2,000 clients.",
      highlight: "Maintains 99.98% query latency under 12ms under peak workloads."
    },
    {
      id: "cache-layer",
      title: "Distributed Cache",
      role: "Ticket Status & Session Store",
      tech: "Redis Cluster 7.x",
      scalabilityFocus: "Write-through caching with 60-second TTL invalidation; cuts database read load by 74%.",
      highlight: "Instant public tracking portal lookups without stressing primary database."
    }
  ] as ArchitectureNode[],
  
  techStackBadges: [
    "React 19", "TypeScript", "Node.js", "Express", "FastAPI",
    "PostgreSQL", "Redis", "RabbitMQ", "Docker", "AWS ECS", "Tailwind CSS", "Recharts"
  ]
};

// ---------------------------------------------------------------------
// 4. OTHER SELECTED PROJECTS
// ---------------------------------------------------------------------
export const otherProjects: ProjectItem[] = [
  {
    id: "meshqueue",
    title: "MeshQueue: Distributed Event Streaming Engine",
    category: "Backend",
    tagline: "High-throughput, consensus-driven event streaming mesh engineered for sub-5ms multi-region replication.",
    description: "Designed and implemented a distributed log-structured event broker with Raft consensus, zero-copy socket transfers, and partition failover. Built to eliminate single-point-of-failure risks in mission-critical financial and telemetry pipelines.",
    image: "/src/assets/images/project_stream_mesh_1792572361082.jpg",
    tech: ["Go", "Raft Consensus", "Docker", "Linux epoll", "Prometheus", "gRPC"],
    metrics: "1.2M msg/sec throughput at <5ms P99 latency",
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    featured: true
  },
  {
    id: "stratacloud",
    title: "StrataCloud: Multi-Cloud Topology & Cost Optimizer",
    category: "Cloud",
    tagline: "Autonomous infrastructure orchestrator mapping live cloud spending and executing zero-downtime spot migrations.",
    description: "Built a cloud governance engine that continuously scans AWS and GCP resource graphs, detects orphaned disks and over-provisioned compute pools, and automates spot-fleet balancing with pre-warmed fallback nodes.",
    image: "/src/assets/images/project_cloud_orchestrator_1792572361879.jpg",
    tech: ["TypeScript", "React", "Python", "AWS CDK", "Kubernetes", "Terraform"],
    metrics: "38% average cloud spend reduction across 14 enterprise fleets",
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    featured: true
  },
  {
    id: "auraedge",
    title: "AuraEdge: Industrial IoT Telemetry Gateway",
    category: "Systems",
    tagline: "Ultra-low-latency edge computing daemon for hardware diagnostic telemetry and predictive failure modeling.",
    description: "Developed an embedded Linux gateway daemon handling high-frequency vibration, thermal, and voltage telemetry from assembly robotics. Features on-device local anomaly detection and store-and-forward syncing over unreliable cellular connections.",
    image: "/src/assets/images/project_hardware_telemetry_1792572363009.jpg",
    tech: ["C++", "Python", "MQTT", "TimescaleDB", "Docker", "Grafana"],
    metrics: "25,000 edge metrics/sec ingested with zero packet drops",
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    featured: true
  },
  {
    id: "synapsecache",
    title: "SynapseCache: In-Memory Key-Value Storage Engine",
    category: "Backend",
    tagline: "Lock-free concurrent in-memory store with LRU-K cache eviction and append-only write-ahead logging.",
    description: "Engineered a low-latency key-value store with custom memory arena allocators to bypass garbage collection pauses. Implements Redis-compatible protocol serialization, crash-safe persistence, and multi-threaded partition sharding.",
    image: "/src/assets/images/project_stream_mesh_1792572361082.jpg",
    tech: ["Rust", "Tokio", "jemalloc", "Linux eBPF", "RESP Protocol"],
    metrics: "950,000 ops/sec on a single 8-core compute instance",
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    featured: false
  }
];

// ---------------------------------------------------------------------
// 5. PROFESSIONAL EXPERIENCE
// ---------------------------------------------------------------------
export const experiences: ExperienceItem[] = [
  {
    role: "Senior Systems & Backend Engineer",
    company: "Apex Distributed Labs",
    location: "San Francisco, CA",
    period: "2023 - Present",
    type: "Full-Time",
    achievements: [
      "Architected and deployed high-throughput event processing pipelines handling 15M+ daily API transactions across AWS ECS clusters with 99.99% availability.",
      "Redesigned the core database topology using PostgreSQL read replicas and Redis write-through caching, slashing P95 API response times from 180ms to 24ms.",
      "Spearheaded the migration to Kubernetes-driven GitOps pipelines with automated rollback safeguards, reducing release cycle lead times by 65%."
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"]
  },
  {
    role: "Fullstack Infrastructure Engineer",
    company: "NexaWorks Cloud Systems",
    location: "Remote / Austin, TX",
    period: "2021 - 2023",
    type: "Full-Time",
    achievements: [
      "Engineered real-time operations dashboards in React and TypeScript for enterprise IT teams managing over 50,000 networked hardware devices.",
      "Constructed a multi-tenant billing and webhook dispatch service handling $4.5M in monthly recurring revenue with zero reconciliation errors.",
      "Instituted rigorous automated integration testing and distributed tracing using OpenTelemetry, capturing critical failure modes before customer impact."
    ],
    technologies: ["React", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "RabbitMQ", "Grafana"]
  },
  {
    role: "Software Engineer",
    company: "ForgeTech Solutions",
    location: "Seattle, WA",
    period: "2019 - 2021",
    type: "Full-Time",
    achievements: [
      "Built internal inventory and hardware diagnostic tracking software for 12 regional repair and refurbishment centers.",
      "Designed RESTful service interfaces and normalized relational database schemas serving 120+ active daily technician benches.",
      "Collaborated closely with bench technicians to eliminate redundant data entry, cutting ticket creation time from 7 minutes to under 90 seconds."
    ],
    technologies: ["TypeScript", "React", "Express", "MySQL", "Docker", "Nginx", "Jest"]
  }
];

// ---------------------------------------------------------------------
// 6. EDUCATION & CERTIFICATIONS
// ---------------------------------------------------------------------
export const educationList: EducationItem[] = [
  {
    degree: "B.S. in Computer Science & Systems Engineering",
    institution: "University of Washington",
    period: "2015 - 2019",
    details: "Focus on Distributed Operating Systems, Concurrent Programming, Computer Architecture, and Database Internals. Magna Cum Laude honors.",
    icon: "GraduationCap"
  }
];

export const certificationsList: CertificationItem[] = [
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued 2024 · Active",
    credentialId: "AWS-PSA-882194",
    icon: "Cloud",
    verifyUrl: "https://aws.amazon.com/verification"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    date: "Issued 2023 · Active",
    credentialId: "CKA-773910",
    icon: "Cpu",
    verifyUrl: "https://cncf.io/verification"
  },
  {
    title: "Distributed Systems & Cloud Computing Specialization",
    issuer: "Stanford Online",
    date: "Issued 2022",
    credentialId: "STANFORD-DS-491",
    icon: "Layers",
    verifyUrl: "https://online.stanford.edu"
  }
];

// ---------------------------------------------------------------------
// 7. SERVICES (WHAT I OFFER)
// ---------------------------------------------------------------------
export const servicesList: ServiceItem[] = [
  {
    title: "Custom Software Development",
    description: "End-to-end web applications and internal enterprise tooling designed for responsiveness, domain clarity, and long-term maintainability.",
    deliverables: [
      "Full-stack React & TypeScript architectures",
      "Tailwind-styled responsive interfaces",
      "Role-based access & authentication integration",
      "Comprehensive test suites & documentation"
    ],
    icon: "Laptop"
  },
  {
    title: "Scalable Backend Systems",
    description: "High-throughput, concurrent APIs and distributed microservices engineered to process heavy loads with deterministic low latency.",
    deliverables: [
      "REST, GraphQL & gRPC API design",
      "Asynchronous message queues (RabbitMQ/Kafka)",
      "Database schema optimization & indexing",
      "Zero-downtime database migration strategies"
    ],
    icon: "Server"
  },
  {
    title: "Cloud & DevOps Automation",
    description: "Resilient cloud infrastructure and containerized deployment pipelines with built-in security, scaling, and observability.",
    deliverables: [
      "Docker & Kubernetes cluster orchestration",
      "AWS cloud architecture setup & IaC",
      "Automated CI/CD pipelines with GitHub Actions",
      "Prometheus & Grafana monitoring dashboards"
    ],
    icon: "CloudRain"
  },
  {
    title: "API Design & Systems Integration",
    description: "Seamlessly connecting decoupled systems, 3rd-party payment gateways, telecom APIs, and IoT device hardware.",
    deliverables: [
      "Secure webhook engines with signature validation",
      "Stripe, M-Pesa & banking integrations",
      "Hardware barcode / telemetry ingestion",
      "Comprehensive OpenAPI / Swagger specs"
    ],
    icon: "Workflow"
  },
  {
    title: "System Architecture Consulting",
    description: "Independent technical reviews, bottleneck diagnostics, reliability hardening, and strategic scalability roadmaps.",
    deliverables: [
      "Deep-dive performance & query profiling",
      "Architectural risk & single-point-of-failure audits",
      "Modernization of legacy monolithic codebases",
      "Engineering team mentoring on distributed patterns"
    ],
    icon: "Compass"
  }
];

// ---------------------------------------------------------------------
// 8. TESTIMONIALS
// ---------------------------------------------------------------------
export const testimonialsList: TestimonialItem[] = [
  {
    quote: "Alex transformed our entire repair pipeline. Before RepairForge, we were losing track of laptops across 3 locations. Within two weeks of deployment, our ticket turnaround dropped by 42% and customer phone inquiries plummeted because the live portal answered every question in advance.",
    author: "Raymond Holt",
    role: "VP of Operations",
    company: "Metro Hardware Solutions",
    avatarText: "RH",
    metric: "42% Faster Turnaround"
  },
  {
    quote: "Finding an engineer who understands both low-level database indexing and clean React user experience is exceptionally rare. Alex built our streaming telemetry backend from the ground up, and it handled our 10x traffic spike on Black Friday without a single hitch.",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "Veloce Cloud Systems",
    avatarText: "ER",
    metric: "10x Traffic Handled"
  },
  {
    quote: "Alex's commitment to architectural rigor, clean code, and proactive communication made him a cornerstone of our distributed infrastructure initiatives. He doesn't just write code; he thinks through failure modes before they ever reach production.",
    author: "Julian Davies",
    role: "Head of Engineering",
    company: "Apex Distributed Labs",
    avatarText: "JD",
    metric: "99.99% Reliability"
  }
];
