import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  StopCircle, 
  Brain, 
  ScanLine, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Users, 
  FileText, 
  Settings, 
  Bell, 
  Search, 
  ChevronRight,
  Activity,
  ShieldCheck,
  Database,
  UploadCloud,
  FileDigit,
  ArrowUpRight,
  DollarSign,
  Clock,
  Menu,
  X,
  Stethoscope,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Layers,
  MoreVertical,
  FileCheck
} from 'lucide-react';

// --- MAIN DASHBOARD COMPONENT ---
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard'); 
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Close sidebar on mobile when navigating
  const handleNavClick = (tab) => {
    setActiveTab(tab);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <HomeView />;
      case 'patient': return <PatientView />;
      case 'imaging': return <ImagingView />;
      case 'billing': return <BillingView />;
      case 'migration': return <MigrationView />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Mobile Sidebar Overlay */}
      {!isSidebarOpen && (
        <button 
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 bg-slate-900 text-white p-2 rounded-md md:hidden shadow-lg"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out border-r border-slate-800 flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="p-6 flex items-center justify-between text-white border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-900/50">
              <Brain size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">felixguide</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400 hover:text-white transition">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavItem 
            icon={<Activity size={20} />} 
            label="Overview" 
            id="dashboard" 
            activeTab={activeTab} 
            onClick={handleNavClick} 
          />
          <NavItem 
            icon={<Users size={20} />} 
            label="Patient View" 
            id="patient" 
            activeTab={activeTab} 
            onClick={handleNavClick} 
          />
          <NavItem 
            icon={<ScanLine size={20} />} 
            label="Imaging AI" 
            id="imaging" 
            activeTab={activeTab} 
            onClick={handleNavClick} 
          />
          <NavItem 
            icon={<FileText size={20} />} 
            label="Billing & Claims" 
            id="billing" 
            activeTab={activeTab} 
            onClick={handleNavClick} 
          />
          <NavItem 
            icon={<Database size={20} />} 
            label="Migration Center" 
            id="migration" 
            activeTab={activeTab} 
            onClick={handleNavClick} 
          />
          
          <div className="pt-6 pb-2 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            System
          </div>
          <NavItem 
            icon={<Settings size={20} />} 
            label="Settings" 
            id="settings" 
            activeTab={activeTab} 
            onClick={handleNavClick} 
          />
        </nav>

        <div className="p-4 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="text-xs font-mono text-green-400 font-medium">System: ONLINE</span>
          </div>
          <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
              <span className="text-xs font-mono text-blue-400 font-medium">Kanta Sync: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex justify-between items-center px-6 lg:px-8 z-10 shrink-0 shadow-sm">
          <div className="hidden md:flex items-center gap-4 w-full max-w-md bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search patients, codes, or notes..." 
              className="bg-transparent outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="relative p-2 text-slate-500 hover:text-blue-600 transition-colors rounded-full hover:bg-slate-50">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-slate-900 leading-tight">Dr. Z. Farmani</p>
                    <p className="text-xs text-slate-500 font-medium">Max Clinics Dubai</p>
                </div>
                <div className="h-10 w-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-700 font-bold border border-blue-200 shadow-sm">
                    ZF
                </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scroll-smooth">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const NavItem = ({ icon, label, id, activeTab, onClick }) => (
  <button 
    onClick={() => onClick(id)}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
      activeTab === id 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20 font-semibold' 
        : 'hover:bg-slate-800 hover:text-white text-slate-400'
    }`}
  >
    <span className={`${activeTab === id ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
      {icon}
    </span>
    <span className="text-sm tracking-wide">{label}</span>
    {activeTab === id && <ChevronRight size={16} className="ml-auto opacity-50" />}
  </button>
);

const SectionHeader = ({ title, subtitle, badge, action }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h1>
        {badge && (
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100 shadow-sm">
            {badge}
          </span>
        )}
      </div>
      <p className="text-slate-500 mt-1 font-medium">{subtitle}</p>
    </div>
    {action}
  </div>
);

// --- VIEW 1: DASHBOARD HOME ---
const HomeView = () => (
  <div className="space-y-6 max-w-7xl mx-auto">
    <SectionHeader 
      title="Practice Overview" 
      subtitle="Good morning, Dr. Farmani. Here's your daily pulse." 
      badge="Live Data" 
      action={
        <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-slate-50 flex items-center gap-2">
          <Calendar size={16} /> Today: Oct 24
        </button>
      }
    />
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        icon={<Clock className="text-blue-600" />} 
        label="Admin Time Saved" 
        value="12.5 hrs" 
        subtext="This Week"
        trend="+2.1 hrs" 
        color="blue"
      />
      <StatCard 
        icon={<Users className="text-purple-600" />} 
        label="Patients Today" 
        value="14" 
        subtext="4 New / 10 Return"
        trend="Fully Booked" 
        color="purple"
      />
      <StatCard 
        icon={<DollarSign className="text-emerald-600" />} 
        label="Est. Daily Revenue" 
        value="€4,250" 
        subtext="Projected"
        trend="+15% vs avg" 
        color="emerald"
      />
      <StatCard 
        icon={<ShieldCheck className="text-orange-600" />} 
        label="Pending Reviews" 
        value="3" 
        subtext="Requires Sign-off"
        trend="Safety Protocol" 
        color="orange"
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
      {/* Clinic Throughput Chart */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Activity size={18} className="text-blue-500" /> Patient Throughput
          </h3>
          <div className="flex gap-2">
             <span className="text-xs font-semibold text-slate-400 px-2 py-1 bg-slate-100 rounded">Weekly</span>
          </div>
        </div>
        <div className="h-64 flex items-end justify-between px-2 gap-4">
           {[40, 65, 55, 80, 60, 90, 75].map((h, i) => (
             <div key={i} className="flex-1 flex flex-col justify-end group cursor-pointer">
               <div 
                 className="w-full bg-blue-100 rounded-t-md relative overflow-hidden transition-all duration-300 group-hover:bg-blue-200" 
                 style={{height: `${h}%`}}
               >
                 <div className="absolute bottom-0 left-0 right-0 bg-blue-500 h-0 transition-all duration-500 ease-out group-hover:h-full opacity-90"></div>
                 {/* Tooltip */}
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-10">
                    {h} Patients
                 </div>
               </div>
             </div>
           ))}
        </div>
        <div className="flex justify-between mt-4 border-t border-slate-100 pt-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
            <span key={i} className="text-xs font-bold text-slate-400 flex-1 text-center uppercase tracking-wider">{day}</span>
          ))}
        </div>
      </div>

      {/* AI Activity Feed */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Brain size={18} className="text-purple-500" /> AI Agent Activity
        </h3>
        <div className="space-y-0 flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="relative border-l-2 border-slate-100 ml-3 space-y-6 pb-2">
            <ActionItem time="10:42" text="Auto-coded procedure D2391 for Sarah Lindholm" badge="Smart-Revenue" />
            <ActionItem time="10:40" text="Flagged potential allergy conflict (Penicillin)" type="alert" badge="Safety" />
            <ActionItem time="10:15" text="Ingested 12 legacy charts from Migration Queue" badge="FelixCore" />
            <ActionItem time="09:55" text="Generated referral letter for Dr. M. Parsa" badge="FelixVoice" />
            <ActionItem time="09:30" text="Sent 4 post-op care summaries via SMS" badge="Engagement" />
          </div>
        </div>
        <button className="mt-4 w-full py-2 text-sm text-blue-600 font-semibold bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          View All Logs
        </button>
      </div>
    </div>
  </div>
);

const StatCard = ({ icon, label, value, subtext, trend, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl bg-${color}-50 text-${color}-600 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-${color}-50 text-${color}-700 border border-${color}-100`}>
        {trend}
      </span>
    </div>
    <div className="mt-2">
      <p className="text-slate-500 text-sm font-medium">{label}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <p className="text-3xl font-bold text-slate-900">{value}</p>
        <span className="text-xs text-slate-400 font-medium">{subtext}</span>
      </div>
    </div>
  </div>
);

const ActionItem = ({ time, text, type, badge }) => (
  <div className="pl-6 relative">
    <div className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white ${type === 'alert' ? 'bg-red-500' : 'bg-blue-400'} ring-1 ring-slate-100`}></div>
    <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">{time}</span>
            {badge && <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">{badge}</span>}
        </div>
        <p className={`text-sm ${type === 'alert' ? 'text-red-700 font-medium' : 'text-slate-600'}`}>{text}</p>
    </div>
  </div>
);

// --- VIEW 2: PATIENT VIEW (AI SCRIBE) ---
const PatientView = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [activeNoteTab, setActiveNoteTab] = useState('soap');
  
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <SectionHeader 
        title="Patient Interaction" 
        subtitle="Sarah Lindholm (ID: FG-889) - Routine Checkup" 
        badge="FelixVoice Active"
        action={
            <div className="flex gap-2">
                <button className="bg-white border border-slate-200 text-slate-600 p-2 rounded-lg hover:bg-slate-50" title="History">
                    <Clock size={20} />
                </button>
                <button className="bg-white border border-slate-200 text-slate-600 p-2 rounded-lg hover:bg-slate-50" title="Settings">
                    <Settings size={20} />
                </button>
            </div>
        }
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-200px)] min-h-[600px]">
        {/* Left: Patient Profile Sidebar */}
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-slate-200 overflow-y-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="h-24 w-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center text-3xl font-bold text-slate-500 mb-4 border-4 border-white shadow-sm">SL</div>
            <h3 className="font-bold text-xl text-slate-900">Sarah Lindholm</h3>
            <p className="text-slate-500 text-sm mt-1">34 yrs • Female</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded border border-blue-100">Private</span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded border border-purple-100">High Anxiety</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
              <p className="text-xs text-red-600 font-bold uppercase mb-2 flex items-center gap-1">
                <AlertCircle size={12} /> Medical Alerts
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-red-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Penicillin Allergy
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-red-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Hx Endocarditis
                </div>
              </div>
            </div>
            
            <div>
                <p className="text-xs text-slate-400 font-bold uppercase mb-3 ml-1">Clinical History</p>
                <div className="space-y-3 relative border-l-2 border-slate-100 ml-2 pl-4">
                    <div className="relative">
                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white"></div>
                        <p className="text-xs text-slate-400">12 Oct 2023</p>
                        <p className="text-sm font-medium text-slate-700">RCT Tooth 46</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white"></div>
                        <p className="text-xs text-slate-400">05 Mar 2022</p>
                        <p className="text-sm font-medium text-slate-700">Implant Consultation</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Right: AI Scribe Interface */}
        <div className="lg:col-span-9 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                    <Mic size={18} className={isRecording ? "text-red-500 animate-pulse" : "text-slate-400"} />
                    <span className={`text-sm font-bold ${isRecording ? 'text-slate-800' : 'text-slate-500'}`}>
                        {isRecording ? 'Listening...' : 'Ready to record'}
                    </span>
                </div>
                {isRecording && <span className="text-xs font-mono text-red-500 animate-pulse">● REC 00:42</span>}
            </div>
            
            <div className="flex gap-2">
                <button 
                    onClick={() => setActiveNoteTab('soap')}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${activeNoteTab === 'soap' ? 'bg-slate-200 text-slate-800' : 'text-slate-500 hover:bg-slate-100'}`}
                >
                    SOAP Note
                </button>
                <button 
                    onClick={() => setActiveNoteTab('transcript')}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${activeNoteTab === 'transcript' ? 'bg-slate-200 text-slate-800' : 'text-slate-500 hover:bg-slate-100'}`}
                >
                    Raw Transcript
                </button>
            </div>
          </div>

          <div className="flex-1 p-0 relative bg-slate-50">
             {/* Note Editor Area */}
             <div className="absolute inset-0 p-6 overflow-y-auto">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm min-h-full p-8 relative group">
                    <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
                        <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded font-bold flex items-center gap-1">
                            <Brain size={12} /> AI Generated
                        </span>
                    </div>
                    
                    {activeNoteTab === 'soap' ? (
                        <div className="space-y-6 font-mono text-sm leading-relaxed text-slate-700">
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Subjective</h4>
                                <p className="p-3 bg-slate-50 rounded-lg border border-slate-100">Patient reports sharp sensitivity in UL6 (Tooth 26) when drinking cold fluids. Pain duration described as "lingering" for ~5 seconds. No spontaneous pain reported.</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Objective</h4>
                                <p className="p-3 bg-slate-50 rounded-lg border border-slate-100">Visual inspection reveals existing amalgam restoration with marginal breakdown. Cold test positive on 26 (lingering). FelixVision detects radiolucency on distal aspect of 26 approaching pulp horn.</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Assessment</h4>
                                <p className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-slate-900 font-semibold">Irreversible Pulpitis (K04.0) / Secondary Caries (K02.52)</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Plan</h4>
                                <ul className="p-3 bg-slate-50 rounded-lg border border-slate-100 list-disc list-inside space-y-1">
                                    <li>Discussed RCT vs. Extraction. Patient consents to RCT.</li>
                                    <li>Administered 1.8ml Articaine 4% w/ Epi 1:100k.</li>
                                    <li>Access opening, working length determination.</li>
                                    <li>CaOH dressing placed. Tempit restoration.</li>
                                    <li>Rx: Ibuprofen 600mg prn.</li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="font-mono text-sm text-slate-500 leading-loose">
                            [00:00] Dr: Hi Sarah, how are you doing today?<br/>
                            [00:02] Pt: I'm okay, but that tooth on the top left is still bothering me.<br/>
                            [00:05] Dr: Is it sensitive to hot or cold?<br/>
                            [00:07] Pt: Mostly cold. It hurts for like, 5 seconds after I drink water.<br/>
                            [00:15] Dr: Okay, let's take a look. Open wide please.<br/>
                            ...
                        </div>
                    )}
                </div>
             </div>
          </div>
          
          {/* Action Footer */}
          <div className="p-4 border-t border-slate-200 bg-white flex justify-between items-center z-10">
             <div className="flex items-center gap-4">
                <button 
                    onClick={() => setIsRecording(!isRecording)}
                    className={`h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 ${
                        isRecording ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'
                    }`}
                >
                    {isRecording ? <StopCircle size={24} /> : <Mic size={24} />}
                </button>
                {isRecording && (
                    <div className="flex gap-1 h-6 items-end">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-1 bg-blue-500 rounded-full animate-bounce" style={{height: `${Math.random() * 20 + 4}px`, animationDelay: `${i * 0.1}s`}}></div>
                        ))}
                    </div>
                )}
             </div>

             <div className="flex gap-3">
                 <button className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-500 hover:bg-slate-100">Edit</button>
                 <button className="px-6 py-2 rounded-lg text-sm font-bold text-white bg-green-600 hover:bg-green-700 shadow-md flex items-center gap-2">
                   <CheckCircle2 size={18} /> Approve Note
                 </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- VIEW 3: IMAGING (FELIXVISION) ---
const ImagingView = () => {
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [selectedScan, setSelectedScan] = useState(2); // Default to the interesting one

  const scans = [
      { id: 1, name: 'Bitewing L', date: '10/24/2025', alert: false },
      { id: 2, name: 'Periapical 26', date: '10/24/2025', alert: true },
      { id: 3, name: 'Bitewing R', date: '10/24/2025', alert: false },
      { id: 4, name: 'OPG Full', date: '04/12/2024', alert: false },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto h-[calc(100vh-140px)] flex flex-col">
      <SectionHeader title="FelixVision Diagnostics" subtitle="AI-Augmented Radiology Viewer" badge="Decision Support" 
        action={
            <div className="flex items-center gap-3 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
                <span className={`text-xs font-bold px-3 py-1.5 rounded transition-colors ${showHeatmap ? 'text-slate-500' : 'bg-slate-100 text-slate-900'}`}>Original</span>
                <button 
                    onClick={() => setShowHeatmap(!showHeatmap)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold transition-all ${
                        showHeatmap 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'text-blue-600 hover:bg-blue-50'
                    }`}
                >
                    <Brain size={14} /> AI Analysis
                </button>
            </div>
        }
      />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-0">
        {/* Sidebar: Image List */}
        <div className="col-span-1 bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-100 font-bold text-slate-700 bg-slate-50/50">Patient Scans</div>
            <div className="overflow-y-auto flex-1 p-2 space-y-1">
                {scans.map((scan) => (
                    <button 
                        key={scan.id} 
                        onClick={() => setSelectedScan(scan.id)}
                        className={`w-full text-left p-3 rounded-lg text-sm flex items-center justify-between transition-colors group ${
                            selectedScan === scan.id 
                            ? 'bg-blue-50 text-blue-700 border border-blue-100 font-medium' 
                            : 'hover:bg-slate-50 text-slate-600 border border-transparent'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <FileDigit size={16} className={selectedScan === scan.id ? "text-blue-500" : "text-slate-400"} />
                            <div className="flex flex-col">
                                <span>{scan.name}</span>
                                <span className="text-[10px] text-slate-400 font-mono">{scan.date}</span>
                            </div>
                        </div>
                        {scan.alert && (
                            <div className="h-2 w-2 bg-red-500 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.6)]"></div>
                        )}
                    </button>
                ))}
            </div>
            <div className="p-3 border-t border-slate-100">
                <button className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg hover:bg-slate-700 flex items-center justify-center gap-2">
                    <UploadCloud size={14} /> Import DICOM
                </button>
            </div>
        </div>

        {/* Main Viewer */}
        <div className="col-span-3 bg-black rounded-xl overflow-hidden relative flex flex-col shadow-2xl border border-slate-800">
            {/* Toolbar */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-black/80 to-transparent z-20 flex justify-between items-center px-6 pointer-events-none">
                <div className="bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono border border-white/10 pointer-events-auto">
                    Periapical 26 | 10.24.2025 | 14:02:11
                </div>
                <div className="flex gap-2 pointer-events-auto">
                    <button className="p-2 rounded-full bg-black/40 backdrop-blur text-white hover:bg-white/20 transition"><ZoomIn size={16} /></button>
                    <button className="p-2 rounded-full bg-black/40 backdrop-blur text-white hover:bg-white/20 transition"><ZoomOut size={16} /></button>
                    <button className="p-2 rounded-full bg-black/40 backdrop-blur text-white hover:bg-white/20 transition"><Maximize2 size={16} /></button>
                </div>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 relative flex items-center justify-center bg-gray-900 cursor-crosshair overflow-hidden group">
                {/* Simulated X-Ray Background - Abstract representation */}
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black opacity-80 absolute inset-0"></div>
                
                {/* Simulated Tooth Structure (Abstract Shapes) */}
                <div className="relative transform scale-125 group-active:scale-150 transition-transform duration-500 ease-out">
                    {/* Tooth Root */}
                    <div className="w-32 h-48 bg-slate-400/20 rounded-b-full blur-sm mx-auto"></div>
                    {/* Tooth Crown */}
                    <div className="w-40 h-32 bg-slate-300/30 rounded-t-2xl -mt-4 blur-sm relative">
                         {/* Enamel detail */}
                         <div className="absolute top-2 left-2 right-2 h-8 bg-white/10 rounded-t-xl blur-md"></div>
                    </div>

                    {/* The Pathology - Only visible with Heatmap */}
                    <div 
                        className={`absolute top-20 right-8 w-10 h-10 rounded-full blur-xl transition-opacity duration-500 ${
                            showHeatmap ? 'opacity-100 bg-red-500/60 animate-pulse' : 'opacity-0'
                        }`}
                    ></div>
                    
                    {/* Precise Marker */}
                    {showHeatmap && (
                        <>
                            <div className="absolute top-22 right-10 w-6 h-6 border-2 border-red-500/80 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)] z-10 animate-[ping_2s_infinite]"></div>
                            {/* Connection Line */}
                            <div className="absolute top-24 right-4 w-16 h-[1px] bg-red-500/50 origin-right"></div>
                            
                            {/* Floating Label */}
                            <div className="absolute top-16 right-[-140px] bg-black/80 backdrop-blur-md text-white text-xs p-3 rounded-lg border-l-4 border-red-500 shadow-2xl z-20 w-48">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-red-400">Caries Detected</span>
                                    <span className="text-[10px] bg-red-900/50 px-1.5 py-0.5 rounded text-red-200">98%</span>
                                </div>
                                <p className="text-slate-400 text-[10px] leading-tight">Interproximal radiolucency extending into dentin. D2 Lesion.</p>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="bg-slate-900/90 border-t border-slate-800 p-4 backdrop-blur-md">
                <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                        <div className="text-xs text-slate-400">
                            <span className="block font-bold text-slate-500 uppercase text-[10px]">Exposure</span>
                            0.08s / 65kV
                        </div>
                        <div className="text-xs text-slate-400">
                            <span className="block font-bold text-slate-500 uppercase text-[10px]">Sensor</span>
                            Size 2 CMOS
                        </div>
                    </div>
                    {showHeatmap && (
                        <div className="flex items-center gap-2 text-blue-400 text-xs font-bold animate-pulse">
                            <Activity size={14} /> AI Analysis Complete
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- VIEW 4: BILLING (SMART-REVENUE) ---
const BillingView = () => (
  <div className="space-y-6 max-w-7xl mx-auto">
    <SectionHeader title="Smart-Revenue" subtitle="Automated Coding & Claims Processing" badge="Fintech Core" 
        action={
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition">
                <ArrowUpRight size={16} /> Submit Batch (3)
            </button>
        }
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm font-medium">Claims Ready</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">€3,240</p>
            <div className="w-full bg-slate-100 rounded-full h-1.5 mt-4">
                <div className="bg-green-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
            </div>
            <p className="text-xs text-slate-400 mt-2">75% High Confidence</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm font-medium">Pending Insurance</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">€12,850</p>
            <p className="text-xs text-slate-400 mt-4">Avg. payout: 14 days</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm font-medium">AI Saved (Prevented Rejections)</p>
            <p className="text-3xl font-bold text-green-600 mt-2">€850</p>
            <p className="text-xs text-slate-400 mt-4">This month</p>
        </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-bold text-slate-700">Claim Queue</h3>
            <div className="flex gap-2">
                <button className="text-slate-400 hover:text-blue-600"><Settings size={18} /></button>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Patient</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">AI Suggested Code</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Value</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Confidence</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    <ClaimRow 
                        date="Oct 24" 
                        patient="Sarah Lindholm" 
                        code="D2391 (Resin-2 Surf)" 
                        value="€120.00" 
                        confidence={99}
                        status="ready" 
                    />
                    <ClaimRow 
                        date="Oct 24" 
                        patient="Matti Korhonen" 
                        code="D0330 (Panoramic)" 
                        value="€85.00" 
                        confidence={98}
                        status="ready" 
                    />
                    <ClaimRow 
                        date="Oct 23" 
                        patient="Elena Rossi" 
                        code="D2740 (Crown Porcelain)" 
                        value="€850.00" 
                        confidence={65}
                        status="flagged" 
                    />
                    <ClaimRow 
                        date="Oct 23" 
                        patient="Juhani Virtanen" 
                        code="D1110 (Prophylaxis)" 
                        value="€90.00" 
                        confidence={99}
                        status="submitted" 
                    />
                </tbody>
            </table>
        </div>
    </div>
  </div>
);

const ClaimRow = ({ date, patient, code, value, confidence, status }) => (
  <tr className="hover:bg-slate-50 transition-colors group">
    <td className="p-4 text-sm text-slate-600 font-mono">{date}</td>
    <td className="p-4 text-sm font-bold text-slate-900">{patient}</td>
    <td className="p-4">
        <div className="flex flex-col">
            <span className="text-sm font-mono text-blue-600 bg-blue-50 w-fit rounded px-2 py-0.5 border border-blue-100">{code}</span>
            {status === 'flagged' && <span className="text-[10px] text-red-500 mt-1">Mismatch with notes</span>}
        </div>
    </td>
    <td className="p-4 text-sm font-bold text-slate-900">{value}</td>
    <td className="p-4">
        <div className="flex items-center gap-2">
            <div className="w-16 bg-slate-200 rounded-full h-1.5">
                <div className={`h-1.5 rounded-full ${confidence > 90 ? 'bg-green-500' : 'bg-orange-500'}`} style={{width: `${confidence}%`}}></div>
            </div>
            <span className="text-xs text-slate-500">{confidence}%</span>
        </div>
    </td>
    <td className="p-4">
        {status === 'ready' && (
            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold border border-green-200">
                <CheckCircle2 size={12} /> Ready
            </span>
        )}
        {status === 'flagged' && (
            <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold border border-red-200 animate-pulse">
                <AlertCircle size={12} /> Review
            </span>
        )}
        {status === 'submitted' && (
            <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs font-bold border border-slate-200">
                <Clock size={12} /> Sent
            </span>
        )}
    </td>
    <td className="p-4 text-right">
        <button className="text-slate-400 hover:text-blue-600 p-2 rounded-full hover:bg-white transition opacity-0 group-hover:opacity-100"><ChevronRight size={18} /></button>
    </td>
  </tr>
);

// --- VIEW 5: MIGRATION CENTER (FELIXCORE) ---
const MigrationView = () => (
  <div className="space-y-6 max-w-7xl mx-auto">
    <SectionHeader title="Migration Center" subtitle="FelixCore Ingestion Engine" badge="Human-in-the-Loop Protocol" />

    <div className="bg-blue-900 text-white rounded-xl p-8 mb-8 relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="text-2xl font-bold mb-2">Zero-Friction Import</h2>
                <p className="text-blue-200 mb-6 max-w-md">
                    Drag and drop legacy database exports, PDF charts, or scanned paper files. Our Computer Vision engine digitizes them in minutes.
                </p>
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition shadow-lg flex items-center gap-2">
                    <UploadCloud size={20} /> Start New Batch
                </button>
            </div>
            <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="font-bold">Current Batch Processing</span>
                        <span className="font-mono">85%</span>
                    </div>
                    <div className="w-full bg-blue-950 rounded-full h-2 mb-4">
                        <div className="bg-blue-400 h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
                    </div>
                    <div className="space-y-2 text-xs text-blue-200 font-mono">
                        <p className="flex items-center gap-2"><CheckCircle2 size={12} className="text-green-400"/> OCR Scanning Complete</p>
                        <p className="flex items-center gap-2"><CheckCircle2 size={12} className="text-green-400"/> Structure Mapping Complete</p>
                        <p className="flex items-center gap-2"><Clock size={12} className="text-blue-400"/> Validating Clinical Flags...</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-800 to-transparent opacity-50"></div>
    </div>

    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Ingestion Queue</h3>
            <div className="flex gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded">Last 24h</span>
            </div>
        </div>
        <div className="divide-y divide-slate-100">
            <MigrationItem 
                name="Batch_2023_Archive_A.pdf" 
                source="Paper Scan"
                count="128 Recs" 
                progress={100} 
                status="complete" 
            />
            <MigrationItem 
                name="Dr_Smith_Paper_Scans.zip" 
                source="Image Folder"
                count="45 Recs" 
                progress={100} 
                status="review" 
                alert="3 Medical Alerts Unclear"
            />
            <MigrationItem 
                name="Legacy_Dentrix_Export.csv" 
                source="Legacy DB"
                count="850 Recs" 
                progress={45} 
                status="processing" 
            />
        </div>
    </div>
  </div>
);

const MigrationItem = ({ name, source, count, progress, status, alert }) => (
  <div className="p-4 hover:bg-slate-50 transition-colors">
    <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-4">
            <div className={`p-2 rounded-lg ${status === 'processing' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                <FileDigit size={20} />
            </div>
            <div>
                <p className="text-sm font-bold text-slate-800">{name}</p>
                <p className="text-xs text-slate-500 flex items-center gap-2">
                    {source} • {count}
                </p>
            </div>
        </div>
        
        <div className="flex items-center gap-4">
            {alert && <span className="text-xs text-red-600 font-medium bg-red-50 px-2 py-1 rounded">{alert}</span>}
            
            {status === 'complete' && <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full border border-green-200">Done</span>}
            
            {status === 'review' && (
                <button className="text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 px-4 py-1.5 rounded-full shadow-sm flex items-center gap-2 transition-colors">
                    <ShieldCheck size={12}/> Verify Data
                </button>
            )}
            
            {status === 'processing' && <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full animate-pulse">Processing</span>}
        </div>
    </div>
    
    <div className="flex items-center gap-4">
        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
                className={`h-full rounded-full transition-all duration-1000 ${
                    status === 'review' ? 'bg-orange-500' : 
                    status === 'complete' ? 'bg-green-500' : 'bg-blue-500'
                }`} 
                style={{width: `${progress}%`}}
            ></div>
        </div>
        <span className="text-xs font-mono text-slate-400 w-8 text-right">{progress}%</span>
    </div>
  </div>
);

export default Dashboard;