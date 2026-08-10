import { useState, useEffect } from "react";
import WEEKS from "./todo-data";

const CATEGORY_COLORS = {
  project: { bg: "bg-violet-500/20", border: "border-violet-500/40", text: "text-violet-300", dot: "bg-violet-400", label: "Project/Skill" },
  apply: { bg: "bg-emerald-500/20", border: "border-emerald-500/40", text: "text-emerald-300", dot: "bg-emerald-400", label: "Apply/Freelance" },
  interview: { bg: "bg-amber-500/20", border: "border-amber-500/40", text: "text-amber-300", dot: "bg-amber-400", label: "Interview Prep" },
  visibility: { bg: "bg-sky-500/20", border: "border-sky-500/40", text: "text-sky-300", dot: "bg-sky-400", label: "Visibility" },
};

const STORAGE_KEY = "roadmap-checked-ids";
const PASSIVE_KEY = "roadmap-passive-ids";

export default function Roadmap() {
  const [checked, setChecked] = useState({});
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [passiveTasks, setPassiveTasks] = useState([]);

  // Load saved data on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const ids = JSON.parse(raw);
        const obj = {};
        ids.forEach((k) => { obj[k] = true; });
        setChecked(obj);
      }
      const passiveRaw = localStorage.getItem(PASSIVE_KEY);
      if (passiveRaw) {
        setPassiveTasks(JSON.parse(passiveRaw));
      }
    } catch (e) {
      // start fresh
    } finally {
      setLoaded(true);
    }
  }, []);

  // Persist checked
  useEffect(() => {
    if (!loaded) return;
    try {
      const ids = Object.keys(checked).filter((k) => checked[k]);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
      setSaveError(false);
    } catch (e) {
      setSaveError(true);
    }
  }, [checked, loaded]);

  // Persist passive tasks
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(PASSIVE_KEY, JSON.stringify(passiveTasks));
    } catch (e) { }
  }, [passiveTasks, loaded]);

  const toggle = (key) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  const addPassiveTask = (key) => {
    if (passiveTasks.length >= 5) return;
    if (passiveTasks.includes(key)) return;
    setPassiveTasks(prev => [...prev, key]);
  };

  const removePassiveTask = (key) => {
    setPassiveTasks(prev => prev.filter(k => k !== key));
  };

  const getTaskByKey = (key) => {
    const [wi, di, bi] = key.split('-').map(Number);
    return WEEKS[wi]?.days[di]?.blocks[bi];
  };

  const totalTasks = WEEKS.flatMap(w => w.days.flatMap(d => d.blocks)).length;
  const completedTasks = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((completedTasks / totalTasks) * 100);

  const week = WEEKS[activeWeek];
  const day = week.days[activeDay];

  const weekProgress = (wi) => {
    const tasks = WEEKS[wi].days.flatMap(d => d.blocks);
    const done = tasks.filter((_, ti) => {
      const key = `${wi}-${Math.floor(ti / 4)}-${ti % 4}`;
      return checked[key];
    }).length;
    return Math.round((done / tasks.length) * 100);
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 font-mono p-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Month 1 — 28 days</p>
          <h1 className="text-2xl font-bold text-white">IT Career Roadmap</h1>
          <p className="text-zinc-400 text-sm mt-1">5 hrs/day · Full-time job + freelance · Steady pace</p>
        </div>

        {!loaded && (
          <div className="mb-4 text-xs text-zinc-500">Loading saved progress…</div>
        )}
        {saveError && (
          <div className="mb-4 text-xs text-amber-400">Couldn't save progress — check will still work for this session.</div>
        )}

        {/* Global progress */}
        <div className="mb-6 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-zinc-400 text-xs">Overall progress</span>
            <span className="text-white text-sm font-bold">{completedTasks}/{totalTasks} tasks</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-2">
            <div className="bg-violet-500 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="fixed left-8 top-24 w-120 p-4 bg-zinc-900 rounded-xl border border-emerald-500/30 z-50">
          <p className="text-xs font-bold text-emerald-400 mb-3 uppercase tracking-widest">
            Passive Tasks ({passiveTasks.length}/5)
          </p>
          <div className="space-y-2">
            {passiveTasks.map((key) => {
              const task = getTaskByKey(key);
              if (!task) return null;
              return (
                <div key={key} className="flex items-start gap-2 text-xs text-zinc-300">
                  <span className="text-emerald-400 mt-0.5">→</span>
                  <span className="flex-1 leading-relaxed">{task.task.slice(0, 60)}...</span>
                  <button
                    onClick={() => removePassiveTask(key)}
                    className="w-4 h-4  text-zinc-600 hover:text-red-400 transition-colors flex-shrink-0"
                  >
                    off
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-6">
          {Object.entries(CATEGORY_COLORS).map(([key, c]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${c.dot}`} />
              <span className="text-zinc-400 text-xs">{c.label}</span>
            </div>
          ))}
        </div>

        {/* Week tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          {WEEKS.map((w, wi) => {
            const wp = weekProgress(wi);
            return (
              <button
                key={wi}
                onClick={() => { setActiveWeek(wi); setActiveDay(0); }}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-bold border transition-all ${activeWeek === wi ? "bg-violet-600 border-violet-500 text-white" : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600"}`}
              >
                Week {wi + 1}
                {wp > 0 && <span className="ml-2 opacity-60">{wp}%</span>}
              </button>
            );
          })}
        </div>

        {/* Week theme */}
        <div className="mb-4 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg">
          <span className="text-zinc-500 text-xs">Theme: </span>
          <span className="text-zinc-200 text-xs">{week.theme}</span>
        </div>

        {/* Day tabs */}
        <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1">
          {week.days.map((d, di) => {
            const dayDone = d.blocks.filter((_, bi) => checked[`${activeWeek}-${di}-${bi}`]).length;
            const allDone = dayDone === d.blocks.length;
            return (
              <button
                key={di}
                onClick={() => setActiveDay(di)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs border transition-all ${activeDay === di ? "bg-zinc-700 border-zinc-500 text-white" : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700"} ${allDone ? "border-emerald-700" : ""}`}
              >
                {d.label.slice(0, 3)}
                {allDone && <span className="ml-1 text-emerald-400">✓</span>}
                {!allDone && dayDone > 0 && <span className="ml-1 text-zinc-500">{dayDone}/4</span>}
              </button>
            );
          })}
        </div>

        {/* Day tasks */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-bold">Day {day.day} — {day.label}</span>
            <span className="text-zinc-500 text-xs">
              {day.blocks.filter((_, bi) => checked[`${activeWeek}-${activeDay}-${bi}`]).length}/4 done
            </span>
          </div>

          {day.blocks.map((block, bi) => {
            const key = `${activeWeek}-${activeDay}-${bi}`;
            const done = !!checked[key];
            const c = CATEGORY_COLORS[block.category];
            const isPassive = passiveTasks.includes(key);
            return (
              <div
                key={bi}
                onClick={() => toggle(key)}
                className={`flex gap-3 p-4 rounded-xl border cursor-pointer transition-all select-none ${done ? "opacity-50 bg-zinc-900/50 border-zinc-800" : `${c.bg} ${c.border}`}`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${done ? "bg-emerald-500 border-emerald-500" : "border-zinc-600"}`}>
                    {done && <span className="text-white text-xs">✓</span>}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold ${c.text}`}>{c.label}</span>
                    <span className="text-zinc-600 text-xs">{block.time}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${done ? "line-through text-zinc-600" : "text-zinc-200"}`}>
                    {block.task}
                  </p>
                </div>
                {block.category === 'apply' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      isPassive ? removePassiveTask(key) : addPassiveTask(key);
                    }}
                    className={`flex-shrink-0 self-center text-xs px-2 py-1 rounded-lg border transition-all ${isPassive
                      ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                      : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-emerald-500/40 hover:text-emerald-400"
                      } ${passiveTasks.length >= 5 && !isPassive ? "opacity-30 cursor-not-allowed" : ""}`}
                  >
                    {isPassive ? "✓ Passive" : "+ Passive"}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-zinc-700 text-xs text-center mt-8">
          Tap any task to mark it done · Progress saves automatically and reloads next time you open this
        </p>
      </div>
    </div>
  );
}
