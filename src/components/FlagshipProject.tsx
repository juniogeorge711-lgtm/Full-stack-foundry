import React, { useState } from 'react';
import {
  Cog,
  Wrench,
  Search,
  ExternalLink,
  Github,
  CheckCircle,
  AlertTriangle,
  QrCode,
  Users,
  PackageCheck,
  CreditCard,
  BellRing,
  Globe,
  ShieldAlert,
  LineChart as LineChartIcon,
  History,
  ScanLine,
  GitFork,
  UserCheck,
  Cpu,
  Layers,
  ChevronRight,
  X,
  Sparkles,
  Server,
  Database
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import { flagshipProject, RepairTicketMock, ArchitectureNode } from '../data';
import { TechIcon } from './TechIcon';

export const FlagshipProject: React.FC = () => {
  // Interactive states
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(3); // In Repair
  const [ticketFilter, setTicketFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTicket, setSelectedTicket] = useState<RepairTicketMock | null>(null);
  const [selectedArchNode, setSelectedArchNode] = useState<ArchitectureNode>(flagshipProject.architectureNodes[2]); // Workflow service
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoTicketCode, setDemoTicketCode] = useState('RF-8492');
  const [demoResult, setDemoResult] = useState<RepairTicketMock | null>(flagshipProject.mockTickets[0]);

  // Filtered tickets
  const filteredTickets = flagshipProject.mockTickets.filter((ticket) => {
    const matchesFilter = ticketFilter === 'All' || ticket.status === ticketFilter;
    const matchesSearch =
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.device.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.issue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Received':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Diagnosing':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Awaiting Parts':
        return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case 'In Repair':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Testing':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Ready':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Delivered':
        return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
      default:
        return 'bg-neutral-500/20 text-neutral-300 border-neutral-500/30';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'text-[#C62828] font-bold';
      case 'High':
        return 'text-amber-500 font-semibold';
      case 'Medium':
        return 'text-blue-400';
      default:
        return 'text-neutral-400';
    }
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'QrCode': return <QrCode className="w-5 h-5" />;
      case 'GitFork': return <GitFork className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'PackageCheck': return <PackageCheck className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'BellRing': return <BellRing className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'LineChart': return <LineChartIcon className="w-5 h-5" />;
      case 'History': return <History className="w-5 h-5" />;
      case 'ScanLine': return <ScanLine className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  const handleDemoLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const found = flagshipProject.mockTickets.find(
      (t) => t.id.toLowerCase() === demoTicketCode.trim().toLowerCase()
    );
    setDemoResult(found || null);
  };

  return (
    <section id="flagship" className="py-28 relative overflow-hidden bg-[#0E0C10] light:bg-[#F6EFE9] border-y border-[#6D4C41]/30">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-[#C62828]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-[#1E88E5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Flagship Header with Rotating Gear Motif */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#6D4C41]/25">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#C62828]/15 border border-[#C62828]/35 text-xs font-mono font-semibold text-[#C62828]">
              <Cog className="w-4 h-4 animate-spin text-[#C62828] [animation-duration:8s]" />
              <span>{flagshipProject.statusBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5EFEA] light:text-[#271C19]">
              {flagshipProject.title}
            </h2>
            <p className="text-base sm:text-lg text-[#D7CCC8] light:text-[#4E342E]">
              {flagshipProject.tagline}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#C62828] hover:bg-[#D32F2F] active:scale-95 rounded-xl transition-all shadow-lg shadow-[#C62828]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Interactive Portal Demo</span>
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#D7CCC8] light:text-[#4E342E] hover:text-[#F5EFEA] glass-panel hover:border-[#1E88E5]/50 active:scale-95 rounded-xl transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source</span>
            </a>
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Problem Statement */}
          <div className="p-8 rounded-2xl glass-panel border border-[#C62828]/30 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C62828]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C62828]/20 flex items-center justify-center text-[#C62828]">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#F5EFEA] light:text-[#271C19]">
                The Operational Bottleneck
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#D7CCC8] light:text-[#4E342E] leading-relaxed">
              {flagshipProject.problemStatement}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#C62828]">
              <span>Identified: 35% revenue leakage · Untracked technician hours</span>
            </div>
          </div>

          {/* Solution Overview */}
          <div className="p-8 rounded-2xl glass-panel border border-[#1E88E5]/30 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E88E5]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/20 flex items-center justify-center text-[#1E88E5]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#F5EFEA] light:text-[#271C19]">
                The Architectural Solution
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#D7CCC8] light:text-[#4E342E] leading-relaxed">
              {flagshipProject.solutionOverview}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#1E88E5]">
              <span>Engineered: Real-time event broker · Atomic inventory locks</span>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Impact Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {flagshipProject.impactMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-[#6D4C41]/35 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono uppercase text-[#8D6E63]">{metric.label}</span>
                <p className="text-2xl sm:text-3xl font-extrabold font-mono text-[#F5EFEA] light:text-[#271C19] mt-1 tabular-nums">
                  {metric.value}
                </p>
              </div>
              <p className="text-xs text-[#D7CCC8]/80 light:text-[#4E342E]/80 mt-3 pt-3 border-t border-[#6D4C41]/20">
                {metric.context}
              </p>
            </div>
          ))}
        </div>

        {/* 7-Stage Workflow Interactive Stepper */}
        <div className="mb-20 p-8 rounded-3xl glass-panel border border-[#6D4C41]/35">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-mono text-[#1E88E5] uppercase tracking-wider">Finite State Machine</p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEA] light:text-[#271C19]">
                7-Stage Repair Lifecycle Workflow
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8D6E63]">
              Click any stage below to inspect automation rules
            </span>
          </div>

          {/* Stepper buttons bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
            {flagshipProject.workflowSteps.map((step) => {
              const isSelected = activeWorkflowStep === step.step;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveWorkflowStep(step.step)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#3E2723]/60 border-[#C62828] shadow-md shadow-[#C62828]/20'
                      : 'bg-black/20 border-[#6D4C41]/25 hover:border-[#6D4C41]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono text-[#8D6E63]">0{step.step}</span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>
                  <p className="text-xs font-bold text-[#F5EFEA] light:text-[#271C19] truncate">
                    {step.title}
                  </p>
                  <p className="text-[10px] font-mono text-[#D7CCC8]/70 light:text-[#4E342E]/70 truncate">
                    {step.status}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Explainer Card */}
          {(() => {
            const current = flagshipProject.workflowSteps[activeWorkflowStep - 1];
            return (
              <div className="p-6 rounded-2xl bg-black/30 border border-[#6D4C41]/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold uppercase"
                      style={{ backgroundColor: `${current.color}25`, color: current.color }}
                    >
                      Stage 0{current.step}: {current.status}
                    </span>
                    <h4 className="text-base font-bold text-[#F5EFEA] light:text-[#271C19]">
                      {current.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[#D7CCC8] light:text-[#4E342E]">
                    {current.description}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#3E2723]/30 border border-[#6D4C41]/35 shrink-0 max-w-sm">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] mb-1">
                    <BellRing className="w-3.5 h-3.5" />
                    <span>Triggered Automation</span>
                  </div>
                  <p className="text-xs text-[#F5EFEA] light:text-[#271C19]">
                    {current.automation}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Interactive Mock Dashboard Preview */}
        <div className="mb-20 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase text-[#C62828] tracking-wider">
                Live Operations Center
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5EFEA] light:text-[#271C19]">
                Interactive Mock Dashboard Preview
              </h3>
              <p className="text-sm text-[#D7CCC8] light:text-[#4E342E] mt-1">
                Filter tickets, click any table row to inspect diagnostic specs, or observe live turnaround metrics.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8D6E63]">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Real-time Telemetry Active</span>
            </div>
          </div>

          {/* The Styled Dashboard Container */}
          <div className="rounded-3xl glass-panel border border-[#6D4C41]/40 overflow-hidden shadow-2xl">
            {/* Top Mock Window Bar */}
            <div className="px-6 py-4 bg-[#141114] light:bg-[#EBE2D8] border-b border-[#6D4C41]/30 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#C62828]" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-[#D7CCC8] light:text-[#271C19] font-semibold pl-2 border-l border-[#6D4C41]/30">
                  RepairForge OS v4.2 // Central Bench Controller
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-[#8D6E63]">
                <span>Active Bench: Bench-04 (Board Rework)</span>
                <span>·</span>
                <span className="text-[#10B981]">Sync: Nominal (12ms)</span>
              </div>
            </div>

            {/* Dashboard Content Interior */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Analytics Top Row: Line Chart + Donut Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Turnaround Time Curve (8 Cols) */}
                <div className="lg:col-span-8 p-6 rounded-2xl bg-black/25 border border-[#6D4C41]/25">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-[#F5EFEA] light:text-[#271C19]">
                        Turnaround SLA Reduction (Days)
                      </h4>
                      <p className="text-xs text-[#8D6E63] font-mono">
                        Turnaround dropped from 4.8 to 2.6 days as volume scaled to 1,120 tickets/mo
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded">
                      -42% Faster
                    </span>
                  </div>

                  <div className="h-56 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={flagshipProject.chartData.turnaroundDays} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <XAxis dataKey="month" stroke="#8D6E63" fontSize={11} tickLine={false} />
                        <YAxis stroke="#8D6E63" fontSize={11} tickLine={false} domain={[2, 6]} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#141114',
                            borderColor: '#6D4C41',
                            borderRadius: '8px',
                            fontSize: '12px',
                            color: '#F5EFEA'
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="days"
                          name="Avg Turnaround (Days)"
                          stroke="#C62828"
                          strokeWidth={3}
                          dot={{ r: 4, fill: '#C62828' }}
                          activeDot={{ r: 6, fill: '#1E88E5' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Common Faults Distribution (4 Cols) */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-black/25 border border-[#6D4C41]/25 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#F5EFEA] light:text-[#271C19] mb-1">
                      Fault Category Distribution
                    </h4>
                    <p className="text-xs text-[#8D6E63] font-mono">
                      Categorized breakdown of common bench repairs
                    </p>
                  </div>

                  <div className="h-44 w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={flagshipProject.chartData.faultBreakdown}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={42}
                          outerRadius={68}
                          paddingAngle={3}
                        >
                          {flagshipProject.chartData.faultBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#141114',
                            borderColor: '#6D4C41',
                            borderRadius: '8px',
                            fontSize: '12px',
                            color: '#F5EFEA'
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-2 gap-1 text-[11px] font-mono text-[#D7CCC8]/80">
                    {flagshipProject.chartData.faultBreakdown.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 truncate">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: f.color }} />
                        <span className="truncate">{f.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tickets Table Header & Filter Toolbar */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-[#F5EFEA] light:text-[#271C19]">
                      Active Repair Tickets
                    </h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#3E2723]/40 border border-[#6D4C41]/30 text-[#D7CCC8]">
                      {filteredTickets.length} visible
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {/* Search box */}
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8D6E63]" />
                      <input
                        type="text"
                        placeholder="Search ticket, model, customer..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 pr-4 py-1.5 rounded-xl bg-black/40 border border-[#6D4C41]/30 text-xs text-[#F5EFEA] light:text-[#271C19] placeholder:text-[#8D6E63] focus:outline-none focus:border-[#C62828] w-48 sm:w-60"
                      />
                    </div>

                    {/* Filter buttons */}
                    <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
                      {['All', 'In Repair', 'Testing', 'Awaiting Parts', 'Ready'].map((status) => (
                        <button
                          key={status}
                          type="button"
                          onClick={() => setTicketFilter(status)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                            ticketFilter === status
                              ? 'bg-[#C62828] text-white font-semibold'
                              : 'bg-black/30 text-[#D7CCC8] hover:text-white'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* The Ticket Table */}
                <div className="overflow-x-auto rounded-2xl border border-[#6D4C41]/30 bg-black/30">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#141114] light:bg-[#ECE4DC] text-[#8D6E63] font-mono uppercase text-[11px] border-b border-[#6D4C41]/25">
                      <tr>
                        <th className="py-3 px-4">Ticket ID</th>
                        <th className="py-3 px-4">Customer</th>
                        <th className="py-3 px-4">Device Model</th>
                        <th className="py-3 px-4">Symptom / Issue</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Priority</th>
                        <th className="py-3 px-4 text-right">Estimate</th>
                        <th className="py-3 px-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#6D4C41]/15">
                      {filteredTickets.length > 0 ? (
                        filteredTickets.map((t) => (
                          <tr
                            key={t.id}
                            onClick={() => setSelectedTicket(t)}
                            className="hover:bg-[#3E2723]/25 cursor-pointer transition-colors group"
                          >
                            <td className="py-3.5 px-4 font-mono font-bold text-[#1E88E5] whitespace-nowrap">
                              {t.id}
                            </td>
                            <td className="py-3.5 px-4 font-medium text-[#F5EFEA] light:text-[#271C19] whitespace-nowrap">
                              {t.customer}
                            </td>
                            <td className="py-3.5 px-4 text-[#D7CCC8] light:text-[#4E342E] whitespace-nowrap font-medium">
                              {t.device}
                            </td>
                            <td className="py-3.5 px-4 text-[#8D6E63] max-w-xs truncate">
                              {t.issue}
                            </td>
                            <td className="py-3.5 px-4 whitespace-nowrap">
                              <span
                                className={`px-2 py-0.5 rounded-md text-[11px] font-mono border ${getStatusColor(
                                  t.status
                                )}`}
                              >
                                {t.status}
                              </span>
                            </td>
                            <td className={`py-3.5 px-4 text-xs font-mono whitespace-nowrap ${getPriorityColor(t.priority)}`}>
                              {t.priority}
                            </td>
                            <td className="py-3.5 px-4 text-right font-mono font-semibold text-[#F5EFEA] light:text-[#271C19] whitespace-nowrap tabular-nums">
                              ${t.estimatedCost}
                            </td>
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
                              <span className="inline-flex items-center gap-1 text-[11px] text-[#C62828] group-hover:underline">
                                Inspect
                                <ChevronRight className="w-3 h-3" />
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={8} className="py-8 text-center text-sm text-[#8D6E63] font-mono">
                            No repair tickets found matching criteria.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 12 Core Features Grid */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase text-[#1E88E5] tracking-wider">Comprehensive Architecture</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5EFEA] light:text-[#271C19]">
              12 Enterprise Modules & Workflows
            </h3>
            <p className="text-sm sm:text-base text-[#D7CCC8] light:text-[#4E342E] mt-2">
              Every critical dimension of hardware repair facility operations built with fault-tolerant state handling and zero guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flagshipProject.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-[#6D4C41]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#3E2723]/40 border border-[#6D4C41]/35 flex items-center justify-center text-[#C62828]">
                      {getFeatureIcon(feat.icon)}
                    </div>
                    {feat.badge && (
                      <span className="text-[11px] font-mono text-[#1E88E5] px-2 py-0.5 rounded bg-[#1E88E5]/10 border border-[#1E88E5]/25">
                        {feat.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-[#F5EFEA] light:text-[#271C19] mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D7CCC8] light:text-[#4E342E] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scalability & Distributed Architecture Section */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-[#6D4C41]/40 mb-16">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-mono uppercase text-[#C62828] tracking-wider">System Design & Scale</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5EFEA] light:text-[#271C19]">
              Distributed Microservices Topology
            </h3>
            <p className="text-sm sm:text-base text-[#D7CCC8] light:text-[#4E342E] mt-2">
              Engineered to process 10,000+ tickets monthly without performance degradation. Click each node below to review scaling trade-offs and resilience patterns.
            </p>
          </div>

          {/* Interactive Topology Nodes Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-8">
            {flagshipProject.architectureNodes.map((node) => {
              const isSelected = selectedArchNode.id === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedArchNode(node)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#C62828]/20 border-[#C62828] shadow-md shadow-[#C62828]/25 scale-102'
                      : 'bg-black/30 border-[#6D4C41]/30 hover:border-[#6D4C41]/60'
                  }`}
                >
                  <p className="text-[11px] font-mono text-[#8D6E63] uppercase truncate">{node.role}</p>
                  <h5 className="text-xs sm:text-sm font-bold text-[#F5EFEA] light:text-[#271C19] mt-1 truncate">
                    {node.title}
                  </h5>
                </button>
              );
            })}
          </div>

          {/* Selected Node Deep-Dive Panel */}
          <div className="p-6 rounded-2xl bg-black/40 border border-[#6D4C41]/35 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1E88E5]/20 text-[#1E88E5]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F5EFEA] light:text-[#271C19]">
                    {selectedArchNode.title}
                  </h4>
                  <p className="text-xs font-mono text-[#1E88E5]">
                    Tech Stack: {selectedArchNode.tech}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#D7CCC8] light:text-[#4E342E]">
                <strong className="text-[#F5EFEA] light:text-[#271C19]">Scalability Focus: </strong>
                {selectedArchNode.scalabilityFocus}
              </p>
              <p className="text-xs font-mono text-[#10B981]">
                ✓ {selectedArchNode.highlight}
              </p>
            </div>

            <div className="lg:col-span-4 p-4 rounded-xl bg-[#3E2723]/30 border border-[#6D4C41]/30 text-xs font-mono space-y-2">
              <span className="text-[#8D6E63] uppercase">Engineering Principle:</span>
              <p className="text-[#F5EFEA] light:text-[#271C19]">
                Decoupled worker queues prevent cascade failure during upstream database latency spikes.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <span className="text-xs font-mono text-[#8D6E63] uppercase mr-2">Core Tech:</span>
          {flagshipProject.techStackBadges.map((badge, bIdx) => (
            <div
              key={bIdx}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel border border-[#6D4C41]/30 text-xs font-medium text-[#F5EFEA] light:text-[#271C19]"
            >
              <TechIcon name={badge} className="w-3.5 h-3.5 text-[#1E88E5]" size={14} />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ticket Inspector Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-[#6D4C41]/50 p-6 sm:p-8 bg-[#0B0B0F] light:bg-[#FAF6F0] shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#6D4C41]/30">
              <div className="flex items-center gap-3">
                <span className="text-lg font-mono font-bold text-[#1E88E5]">
                  {selectedTicket.id}
                </span>
                <span className={`px-2.5 py-0.5 rounded text-xs font-mono border ${getStatusColor(selectedTicket.status)}`}>
                  {selectedTicket.status}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTicket(null)}
                className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center text-[#8D6E63] hover:text-[#C62828] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6">
              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-[11px] font-mono text-[#8D6E63] uppercase">Customer</span>
                  <p className="font-semibold text-[#F5EFEA] light:text-[#271C19] mt-0.5">{selectedTicket.customer}</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8D6E63] uppercase">Device Model</span>
                  <p className="font-semibold text-[#F5EFEA] light:text-[#271C19] mt-0.5">{selectedTicket.device}</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8D6E63] uppercase">Assigned Technician</span>
                  <p className="font-semibold text-[#F5EFEA] light:text-[#271C19] mt-0.5">{selectedTicket.assignedTech}</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8D6E63] uppercase">Intake Date</span>
                  <p className="font-semibold text-[#F5EFEA] light:text-[#271C19] mt-0.5">{selectedTicket.intakeDate}</p>
                </div>
              </div>

              {/* Reported Issue */}
              <div className="p-4 rounded-xl bg-black/30 border border-[#6D4C41]/25 text-xs sm:text-sm">
                <span className="text-[11px] font-mono text-[#8D6E63] uppercase">Reported Symptom</span>
                <p className="text-[#F5EFEA] light:text-[#271C19] mt-1">{selectedTicket.issue}</p>
              </div>

              {/* Bench Diagnostic Notes */}
              <div className="p-4 rounded-xl bg-[#3E2723]/30 border border-[#6D4C41]/35 text-xs sm:text-sm space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C62828]">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Bench Diagnostics Log</span>
                </div>
                <p className="text-[#D7CCC8] light:text-[#4E342E] leading-relaxed">
                  {selectedTicket.diagnosticsNote}
                </p>
              </div>

              {/* Parts & Cost Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="text-[11px] font-mono text-[#8D6E63] uppercase">Parts Allocated</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {selectedTicket.partsUsed.length > 0 ? (
                      selectedTicket.partsUsed.map((p, pIdx) => (
                        <span key={pIdx} className="text-xs px-2 py-0.5 rounded bg-black/40 border border-[#6D4C41]/30 text-[#D7CCC8]">
                          {p}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-[#8D6E63] font-mono">No physical parts required</span>
                    )}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-[#6D4C41]/25 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8D6E63]">Estimate / Balance:</span>
                  <span className="text-lg font-mono font-bold text-[#10B981] tabular-nums">
                    ${selectedTicket.estimatedCost}.00
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#6D4C41]/30 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedTicket(null)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C62828] hover:bg-[#D32F2F] rounded-xl transition-all"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customer Portal Interactive Demo Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-[#1E88E5]/40 p-6 sm:p-8 bg-[#0B0B0F] light:bg-[#FAF6F0] shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#6D4C41]/30">
              <div className="flex items-center gap-2.5">
                <Globe className="w-5 h-5 text-[#1E88E5]" />
                <h3 className="text-lg font-bold text-[#F5EFEA] light:text-[#271C19]">
                  RepairForge Customer Self-Service Portal
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setDemoModalOpen(false)}
                className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center text-[#8D6E63] hover:text-[#C62828] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lookup form */}
            <form onSubmit={handleDemoLookup} className="py-4 space-y-4">
              <p className="text-xs text-[#D7CCC8] light:text-[#4E342E]">
                Enter any demo ticket code (e.g. <button type="button" onClick={() => setDemoTicketCode('RF-8492')} className="text-[#1E88E5] underline">RF-8492</button>, <button type="button" onClick={() => setDemoTicketCode('RF-8493')} className="text-[#1E88E5] underline">RF-8493</button>, <button type="button" onClick={() => setDemoTicketCode('RF-8495')} className="text-[#1E88E5] underline">RF-8495</button>):
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={demoTicketCode}
                  onChange={(e) => setDemoTicketCode(e.target.value)}
                  placeholder="Enter Ticket ID (e.g. RF-8492)"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-black/40 border border-[#6D4C41]/40 text-sm font-mono text-[#F5EFEA] light:text-[#271C19] focus:outline-none focus:border-[#1E88E5]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1E88E5] hover:bg-[#1976D2] rounded-xl transition-all"
                >
                  Track Device
                </button>
              </div>
            </form>

            {/* Result display */}
            {demoResult ? (
              <div className="p-6 rounded-2xl bg-black/40 border border-[#6D4C41]/35 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#6D4C41]/20">
                  <div>
                    <span className="text-xs font-mono text-[#8D6E63]">Device Registered:</span>
                    <h4 className="text-sm font-bold text-[#F5EFEA] light:text-[#271C19]">
                      {demoResult.device}
                    </h4>
                  </div>
                  <span className={`px-2.5 py-1 rounded text-xs font-mono border ${getStatusColor(demoResult.status)}`}>
                    {demoResult.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-[#8D6E63]">
                    <span>Intake</span>
                    <span>Diagnosing</span>
                    <span>In Repair</span>
                    <span>Testing</span>
                    <span>Ready</span>
                  </div>
                  <div className="w-full h-2 bg-[#3E2723]/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#1E88E5] to-[#C62828] rounded-full"
                      style={{
                        width:
                          demoResult.status === 'Received' ? '15%'
                          : demoResult.status === 'Diagnosing' ? '30%'
                          : demoResult.status === 'Awaiting Parts' ? '45%'
                          : demoResult.status === 'In Repair' ? '60%'
                          : demoResult.status === 'Testing' ? '80%'
                          : '100%'
                      }}
                    />
                  </div>
                </div>

                <p className="text-xs text-[#D7CCC8] light:text-[#4E342E]">
                  <strong>Current Bench Update: </strong>
                  {demoResult.diagnosticsNote}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#8D6E63]">
                  <span>Customer: {demoResult.customer}</span>
                  <span className="text-[#10B981]">Total Cost: ${demoResult.estimatedCost}.00</span>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-sm font-mono text-[#8D6E63] border border-dashed border-[#6D4C41]/30 rounded-2xl">
                Ticket code not found. Try searching for RF-8492 or RF-8494.
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
