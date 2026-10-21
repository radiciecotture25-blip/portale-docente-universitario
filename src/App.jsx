const stats = [
  { label: 'Corsi attivi', value: '12', delta: '+2 rispetto al mese scorso', tone: 'purple' },
  { label: 'Studenti', value: '418', delta: '+18 iscrizioni', tone: 'green' },
  { label: 'Media esami', value: '88.4%', delta: '+4.2% miglioramento', tone: 'blue' },
  { label: 'Ore didattiche', value: '136h', delta: '18 lezioni pianificate', tone: 'orange' },
];

const courses = [
  { title: 'Informatica 2', students: 46, progress: 74, color: 'purple', next: 'Mer 10:30', room: 'Lab 3' },
  { title: 'Algoritmi e Strutture Dati', students: 52, progress: 68, color: 'blue', next: 'Gio 14:00', room: 'Aula 201' },
  { title: 'Sistemi Digitali', students: 39, progress: 82, color: 'green', next: 'Ven 09:00', room: 'Lab 1' },
  { title: 'Intelligenza Artificiale', students: 31, progress: 61, color: 'orange', next: 'Lun 11:15', room: 'Aula 305' },
];

const activities = [
  { title: 'Correzione compiti', meta: '12 studenti', time: '08:30', status: 'In corso' },
  { title: 'Riunione dipartimento', meta: 'Sala Consiglio', time: '11:00', status: 'Programmata' },
  { title: 'Valutazioni esami', meta: '3 corsi', time: '15:00', status: 'Da fare' },
  { title: 'Tirocinio studenti', meta: '6 tutoraggi', time: '17:30', status: 'Pronto' },
];

const students = [
  { name: 'Arianna Rossi', course: 'Informatica 2', attendance: '96%', grade: 'A', status: 'Attivo' },
  { name: 'Luca Bianchi', course: 'Algoritmi', attendance: '91%', grade: 'A-', status: 'Attivo' },
  { name: 'Sara Verdi', course: 'Sistemi Digitali', attendance: '88%', grade: 'B+', status: 'Warning' },
  { name: 'Marco Neri', course: 'AI', attendance: '80%', grade: 'B', status: 'Monitorato' },
  { name: 'Giulia Moretti', course: 'Informatica 2', attendance: '94%', grade: 'A', status: 'Attivo' },
];

const calendar = [
  { day: 'Lun', date: 14, event: 'Corso AI', type: 'lesson' },
  { day: 'Mar', date: 15, event: 'Appelli', type: 'exam' },
  { day: 'Mer', date: 16, event: 'Tutoraggio', type: 'meeting' },
  { day: 'Gio', date: 17, event: 'Seminario', type: 'seminar' },
  { day: 'Ven', date: 18, event: 'Verifica', type: 'exam' },
  { day: 'Sab', date: 19, event: 'Ripasso', type: 'lesson' },
  { day: 'Dom', date: 20, event: 'Libero', type: 'free' },
];

const notifications = [
  'Nuovi compiti da correggere per Informatica 2',
  '5 studenti hanno richiesto supporto in algoritmi',
  'Proroga consegna progetto per Sistemi Digitali',
  'Riunione dipartimento confermata per giovedì alle 11:00',
];

const assignments = [
  { name: 'Progetto Web App', course: 'Informatica 2', due: '18 Ott', submissions: '26/38', priority: 'Alta' },
  { name: 'Esercitazione 4', course: 'Algoritmi', due: '21 Ott', submissions: '41/52', priority: 'Media' },
  { name: 'Relazione Lab', course: 'Sistemi Digitali', due: '25 Ott', submissions: '29/39', priority: 'Alta' },
  { name: 'Quiz AI', course: 'Intelligenza Artificiale', due: '30 Ott', submissions: '18/31', priority: 'Bassa' },
];

const sidebarItems = ['Dashboard', 'Corsi', 'Studenti', 'Esami', 'Calendario', 'Messaggi', 'Report'];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">U</div>
          <div>
            <p className="eyebrow">Università</p>
            <h1>Docenti Hub</h1>
          </div>
        </div>

        <nav className="nav">
          {sidebarItems.map((item, index) => (
            <button key={item} className={index === 0 ? 'nav-item active' : 'nav-item'}>
              {item}
            </button>
          ))}
        </nav>

        <div className="profile-card">
          <div className="avatar">DR</div>
          <div>
            <strong>Prof. Daniela Rossi</strong>
            <span>Dipartimento di Informatica</span>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Panoramica</p>
            <h2>Dashboard docente</h2>
          </div>
          <div className="topbar-actions">
            <button className="secondary-btn">Filtri</button>
            <button className="primary-btn">Nuovo corso</button>
          </div>
        </header>

        <section className="hero-card">
          <div>
            <p className="eyebrow accent">Settimana accademica</p>
            <h3>Benvenuta, Daniela</h3>
            <p>
              Hai 8 attività da completare e 3 nuove richieste di supporto da studenti.
            </p>
          </div>
          <div className="hero-cta">
            <span>78%</span>
            <small>Obiettivi del mese</small>
          </div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className={`stat-card ${stat.tone}`}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <small>{stat.delta}</small>
            </div>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel large-panel">
            <div className="panel-header">
              <h3>Corsi attivi</h3>
              <button className="text-btn">Vedi tutti</button>
            </div>
            <div className="courses-grid">
              {courses.map((course) => (
                <article key={course.title} className="course-card">
                  <div className={`course-badge ${course.color}`} />
                  <div className="course-header">
                    <h4>{course.title}</h4>
                    <span>{course.students} studenti</span>
                  </div>
                  <div className="progress-wrap">
                    <div className="progress-bar">
                      <span style={{ width: `${course.progress}%` }} />
                    </div>
                    <strong>{course.progress}%</strong>
                  </div>
                  <div className="course-meta">
                    <span>{course.next}</span>
                    <span>{course.room}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Agenda</h3>
              <button className="text-btn">Questo mese</button>
            </div>
            <div className="mini-calendar">
              {calendar.map((item) => (
                <div key={`${item.day}-${item.date}`} className={`calendar-item ${item.type}`}>
                  <span>{item.day}</span>
                  <strong>{item.date}</strong>
                  <small>{item.event}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel table-panel">
            <div className="panel-header">
              <h3>Studenti</h3>
              <button className="text-btn">Esporta</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Corso</th>
                  <th>Presenze</th>
                  <th>Voto</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.name}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.attendance}</td>
                    <td>{student.grade}</td>
                    <td>
                      <span className={`status ${student.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Attività</h3>
              <button className="text-btn">Nuova</button>
            </div>
            <div className="activity-list">
              {activities.map((activity) => (
                <div key={activity.title} className="activity-item">
                  <div className="activity-dot" />
                  <div>
                    <h4>{activity.title}</h4>
                    <p>{activity.meta}</p>
                  </div>
                  <div className="activity-right">
                    <span>{activity.time}</span>
                    <small>{activity.status}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-grid lower-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Compiti</h3>
              <button className="text-btn">Gestisci</button>
            </div>
            <div className="assignment-list">
              {assignments.map((assignment) => (
                <div key={assignment.name} className="assignment-item">
                  <div>
                    <h4>{assignment.name}</h4>
                    <span>{assignment.course}</span>
                  </div>
                  <div className="assignment-meta">
                    <strong>{assignment.due}</strong>
                    <small>{assignment.submissions}</small>
                    <em className={`priority ${assignment.priority.toLowerCase()}`}>{assignment.priority}</em>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel notifications-panel">
            <div className="panel-header">
              <h3>Notifiche</h3>
              <button className="text-btn">Leggi tutte</button>
            </div>
            <ul className="notification-list">
              {notifications.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
