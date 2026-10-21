:root {
  --bg: #f5f7ff;
  --panel: #ffffff;
  --panel-alt: #eef2ff;
  --sidebar: #111827;
  --sidebar-soft: #1f2937;
  --text: #1f2937;
  --muted: #6b7280;
  --line: #e5e7eb;
  --purple: #6d5efc;
  --purple-soft: rgba(109, 94, 252, 0.12);
  --blue: #3b82f6;
  --blue-soft: rgba(59, 130, 246, 0.12);
  --green: #22c55e;
  --green-soft: rgba(34, 197, 94, 0.12);
  --orange: #f59e0b;
  --orange-soft: rgba(245, 158, 11, 0.12);
  --red: #ef4444;
  --red-soft: rgba(239, 68, 68, 0.12);
  --shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  min-height: 100%;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #eef2ff 0%, #f5f7ff 34%, #eff6ff 100%);
  color: var(--text);
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.sidebar {
  width: 290px;
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  color: #f9fafb;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 10px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  color: white;
  font-weight: 800;
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94a3b8;
}

.brand h1,
.topbar h2,
.hero-card h3,
.panel-header h3,
.course-header h4,
.activity-item h4,
.assignment-item h4 {
  margin: 0;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-item {
  width: 100%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.72);
  text-align: left;
  padding: 12px 14px;
  border-radius: 12px;
  font-weight: 600;
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

.profile-card {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  padding: 14px 12px;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, #fef3c7, #f59e0b);
  color: #1f2937;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.profile-card strong,
.profile-card span {
  display: block;
}

.profile-card span {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 3px;
}

.main-panel {
  flex: 1;
  padding: 32px;
}

.topbar,
.panel-header,
.course-header,
.assignment-item,
.activity-item,
.hero-card,
.progress-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topbar {
  margin-bottom: 24px;
}

.topbar h2 {
  font-size: clamp(1.8rem, 2vw, 2.2rem);
}

.topbar-actions {
  display: flex;
  gap: 12px;
}

.primary-btn,
.secondary-btn,
.text-btn {
  border-radius: 12px;
  border: none;
  font-weight: 600;
}

.primary-btn {
  background: linear-gradient(135deg, #6d5efc, #4f46e5);
  color: white;
  padding: 12px 18px;
  box-shadow: var(--shadow);
}

.secondary-btn {
  background: #eef2ff;
  color: var(--text);
  padding: 12px 18px;
}

.text-btn {
  background: transparent;
  color: var(--purple);
  padding: 0;
}

.hero-card {
  background: linear-gradient(135deg, #111827 0%, #1f2937 40%, #4338ca 100%);
  color: white;
  border-radius: 28px;
  padding: 28px 30px;
  box-shadow: var(--shadow);
  margin-bottom: 28px;
}

.hero-card .eyebrow {
  color: rgba(255, 255, 255, 0.74);
}

.hero-card h3 {
  font-size: clamp(2rem, 2vw, 2.4rem);
  margin-bottom: 10px;
}

.hero-card p {
  margin: 0;
  max-width: 600px;
  color: rgba(255, 255, 255, 0.8);
}

.hero-cta {
  min-width: 150px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: grid;
  place-items: center;
  padding: 18px 20px;
}

.hero-cta span {
  font-size: 2rem;
  font-weight: 800;
}

.hero-cta small {
  color: rgba(255, 255, 255, 0.8);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 18px;
  margin-bottom: 28px;
}

.stat-card {
  background: var(--panel);
  padding: 22px 20px;
  border-radius: 22px;
  box-shadow: var(--shadow);
  border: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stat-card span {
  color: var(--muted);
  font-size: 14px;
}

.stat-card strong {
  font-size: clamp(1.6rem, 2vw, 2.2rem);
  line-height: 1;
}

.stat-card small {
  font-size: 12px;
  color: var(--muted);
}

.stat-card.purple {
  background: linear-gradient(180deg, #ffffff 0%, #f5f3ff 100%);
}

.stat-card.green {
  background: linear-gradient(180deg, #ffffff 0%, #ecfdf5 100%);
}

.stat-card.blue {
  background: linear-gradient(180deg, #ffffff 0%, #eff6ff 100%);
}

.stat-card.orange {
  background: linear-gradient(180deg, #ffffff 0%, #fff7ed 100%);
}

.content-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.95fr;
  gap: 22px;
  margin-bottom: 22px;
}

.lower-grid {
  margin-bottom: 0;
}

.panel {
  background: var(--panel);
  border-radius: 24px;
  padding: 22px;
  box-shadow: var(--shadow);
  border: 1px solid var(--line);
}

.panel-header {
  margin-bottom: 18px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(210px, 1fr));
  gap: 18px;
}

.course-card {
  padding: 18px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: #fafbff;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.course-badge {
  width: 48px;
  height: 48px;
  border-radius: 14px;
}

.course-badge.purple {
  background: linear-gradient(135deg, #c4b5fd, #8b5cf6);
}

.course-badge.blue {
  background: linear-gradient(135deg, #93c5fd, #3b82f6);
}

.course-badge.green {
  background: linear-gradient(135deg, #6ee7b7, #22c55e);
}

.course-badge.orange {
  background: linear-gradient(135deg, #fcd34d, #f59e0b);
}

.course-header {
  align-items: flex-start;
  gap: 12px;
}

.course-header h4 {
  font-size: 1.05rem;
}

.course-header span {
  color: var(--muted);
  font-size: 12px;
}

.progress-wrap {
  gap: 12px;
}

.progress-bar {
  height: 8px;
  flex: 1;
  background: #eef2ff;
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--purple), #8b5cf6);
}

.course-meta {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 12px;
}

.mini-calendar {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 10px;
}

.calendar-item {
  background: #f8faff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  text-align: center;
}

.calendar-item span,
.calendar-item small {
  color: var(--muted);
  font-size: 11px;
}

.calendar-item strong {
  font-size: 1.1rem;
}

.calendar-item.lesson {
  background: var(--purple-soft);
}

.calendar-item.exam {
  background: var(--blue-soft);
}

.calendar-item.meeting {
  background: var(--green-soft);
}

.calendar-item.seminar {
  background: var(--orange-soft);
}

.calendar-item.free {
  background: #f3f4f6;
}

.table-panel {
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 14px 10px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  font-size: 14px;
}

th {
  color: var(--muted);
  font-weight: 600;
}

.status {
  display: inline-flex;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.status.attivo {
  background: var(--green-soft);
  color: #15803d;
}

.status.warning {
  background: rgba(245, 158, 11, 0.12);
  color: #b45309;
}

.status.monitorato {
  background: var(--red-soft);
  color: #b91c1c;
}

.activity-list,
.assignment-list,
.notification-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.activity-item {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
  gap: 12px;
}

.activity-item:last-child,
.assignment-item:last-child {
  border-bottom: none;
}

.activity-item > div:first-child {
  display: flex;
  align-items: center;
  gap: 12px;
}

.activity-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  box-shadow: 0 0 0 6px rgba(109, 94, 252, 0.12);
}

.activity-item h4,
.assignment-item h4 {
  font-size: 14px;
  margin-bottom: 4px;
}

.activity-item p,
.assignment-item span,
.assignment-meta small {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
}

.activity-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 11px;
  color: var(--muted);
}

.activity-right small {
  margin-top: 5px;
  color: var(--purple);
  font-weight: 600;
}

.assignment-item {
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.assignment-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.priority {
  display: inline-flex;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
}

.priority.alta {
  background: var(--red-soft);
  color: #b91c1c;
}

.priority.media {
  background: rgba(245, 158, 11, 0.12);
  color: #b45309;
}

.priority.bassa {
  background: var(--green-soft);
  color: #15803d;
}

.notification-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.notification-list li {
  position: relative;
  padding-left: 18px;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 12px;
}

.notification-list li::before {
  content: '';
  position: absolute;
  top: 9px;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6d5efc, #3b82f6);
}

@media (max-width: 1150px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .nav {
    display: grid;
    grid-template-columns: repeat(3, minmax(120px, 1fr));
  }
}

@media (max-width: 880px) {
  .content-grid,
  .bottom-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .main-panel {
    padding: 20px;
  }

  .topbar,
  .panel-header,
  .hero-card,
  .course-header,
  .assignment-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .mini-calendar {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
