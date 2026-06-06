<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title ?? 'Admin Portfolio' }}</title>
    <style>
        :root {
            --bg: #f4f7fb;
            --panel: #ffffff;
            --line: #e5e7eb;
            --text: #111827;
            --muted: #6b7280;
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --success: #16a34a;
            --warning: #d97706;
            --danger: #dc2626;
            --dark: #0f172a;
            --dark-soft: #1e293b;
        }
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, sans-serif; background: var(--bg); color: var(--text); }
        a { color: var(--primary); text-decoration: none; }
        h1, h2, h3, p { margin-top: 0; }
        .app { min-height: 100vh; display: grid; grid-template-columns: 260px 1fr; }
        .sidebar { background: var(--dark); color: white; padding: 24px 18px; position: sticky; top: 0; height: 100vh; }
        .brand { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; }
        .brand-mark { width: 42px; height: 42px; border-radius: 8px; background: var(--primary); display: flex; align-items: center; justify-content: center; font-weight: 800; }
        .brand-title { font-size: 15px; font-weight: 800; }
        .brand-subtitle { color: #94a3b8; font-size: 12px; margin-top: 2px; }
        .nav-label { color: #64748b; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; margin: 22px 12px 10px; }
        .nav-link { display: flex; align-items: center; justify-content: space-between; color: #cbd5e1; padding: 11px 12px; border-radius: 8px; margin-bottom: 5px; font-size: 14px; }
        .nav-link:hover { background: var(--dark-soft); color: white; }
        .nav-link.active { background: var(--primary); color: white; }
        .logout { width: 100%; text-align: left; background: transparent; color: #cbd5e1; border: 0; cursor: pointer; padding: 11px 12px; border-radius: 8px; font: inherit; }
        .logout:hover { background: var(--dark-soft); color: white; }
        .main { min-width: 0; }
        .topbar { height: 72px; background: rgba(255,255,255,.9); border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; padding: 0 28px; position: sticky; top: 0; z-index: 10; }
        .topbar-title { font-weight: 800; }
        .topbar-subtitle { color: var(--muted); font-size: 13px; margin-top: 3px; }
        .user-pill { background: #eef2ff; color: #3730a3; border-radius: 999px; padding: 8px 12px; font-size: 13px; font-weight: 700; }
        .container { max-width: 1180px; margin: 0 auto; padding: 28px; }
        .page-head { display: flex; justify-content: space-between; gap: 18px; align-items: flex-start; margin-bottom: 22px; }
        .page-title { font-size: 28px; margin-bottom: 6px; }
        .page-text { color: var(--muted); margin-bottom: 0; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 16px; }
        .content-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 18px; margin-top: 20px; }
        .card { background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 20px; box-shadow: 0 8px 24px rgba(15,23,42,.04); }
        .kpi { position: relative; overflow: hidden; }
        .kpi::after { content: ""; position: absolute; right: -20px; top: -20px; width: 80px; height: 80px; border-radius: 999px; background: rgba(37,99,235,.08); }
        .kpi-label { color: var(--muted); font-size: 13px; font-weight: 700; }
        .kpi-value { font-size: 34px; line-height: 1; font-weight: 900; margin-top: 12px; }
        .kpi-note { color: var(--muted); font-size: 12px; margin-top: 10px; }
        .section-title { font-size: 17px; margin-bottom: 16px; }
        .actions { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
        .button { display: inline-flex; align-items: center; justify-content: center; border: 0; border-radius: 7px; background: var(--primary); color: white; padding: 10px 14px; cursor: pointer; font: inherit; font-weight: 700; }
        .button:hover { background: var(--primary-dark); color: white; }
        .button.danger { background: var(--danger); }
        .button.secondary { background: #475569; }
        .button.light { background: #eef2ff; color: #3730a3; }
        .table-wrap { overflow: auto; border: 1px solid var(--line); border-radius: 8px; background: white; }
        table { width: 100%; border-collapse: collapse; min-width: 720px; }
        th { background: #f8fafc; color: #475569; font-size: 12px; letter-spacing: .05em; text-transform: uppercase; }
        th, td { padding: 14px 16px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
        tbody tr:hover { background: #f8fafc; }
        tbody tr:last-child td { border-bottom: 0; }
        .badge { display: inline-flex; align-items: center; border-radius: 999px; padding: 5px 9px; font-size: 12px; font-weight: 800; }
        .badge.green { background: #dcfce7; color: #166534; }
        .badge.yellow { background: #fef3c7; color: #92400e; }
        .badge.blue { background: #dbeafe; color: #1e40af; }
        .badge.gray { background: #f1f5f9; color: #475569; }
        .muted { color: var(--muted); }
        .alert { background: #dcfce7; color: #166534; padding: 13px 15px; border-radius: 8px; margin-bottom: 18px; font-weight: 700; }
        .error { color: var(--danger); font-size: 14px; margin-top: 5px; }
        label { display: block; font-weight: 800; margin: 15px 0 7px; font-size: 14px; }
        input, textarea { width: 100%; border: 1px solid #d1d5db; border-radius: 7px; padding: 11px 12px; font: inherit; background: white; }
        input:focus, textarea:focus { outline: 2px solid rgba(37,99,235,.18); border-color: var(--primary); }
        input[type="file"] { padding: 9px; }
        textarea { min-height: 120px; resize: vertical; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .span-2 { grid-column: 1 / -1; }
        .preview-img { max-width: 240px; border-radius: 8px; border: 1px solid var(--line); }
        .detail-list { display: grid; grid-template-columns: 140px 1fr; gap: 12px; margin-top: 18px; }
        .detail-label { color: var(--muted); font-weight: 800; }
        .message-box { background: #f8fafc; border: 1px solid var(--line); border-radius: 8px; padding: 18px; line-height: 1.7; }
        .empty { text-align: center; padding: 30px; color: var(--muted); }
        .pagination { margin-top: 16px; }
        @media (max-width: 860px) {
            .app { grid-template-columns: 1fr; }
            .sidebar { position: static; height: auto; }
            .content-grid, .form-grid { grid-template-columns: 1fr; }
            .span-2 { grid-column: auto; }
            .page-head { display: block; }
        }
    </style>
</head>
<body>
    <div class="app">
        @auth
            <aside class="sidebar">
                <div class="brand">
                    <div class="brand-mark">K</div>
                    <div>
                        <div class="brand-title">Portfolio Admin</div>
                        <div class="brand-subtitle">Gestion du site</div>
                    </div>
                </div>
                <div class="nav-label">Menu</div>
                <a class="nav-link {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}" href="{{ route('admin.dashboard') }}">Dashboard <span>›</span></a>
                <a class="nav-link {{ request()->routeIs('admin.projects.*') ? 'active' : '' }}" href="{{ route('admin.projects.index') }}">Projets <span>›</span></a>
                <a class="nav-link {{ request()->routeIs('admin.formations.*') ? 'active' : '' }}" href="{{ route('admin.formations.index') }}">Formations <span>›</span></a>
                <a class="nav-link {{ request()->routeIs('admin.messages.*') ? 'active' : '' }}" href="{{ route('admin.messages.index') }}">Messages <span>›</span></a>
                <div class="nav-label">Session</div>
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button class="logout" type="submit">Deconnexion</button>
                </form>
            </aside>
        @endauth

        <div class="main">
            <header class="topbar">
                <div>
                    <div class="topbar-title">{{ $title ?? 'Admin Portfolio' }}</div>
                    <div class="topbar-subtitle">Backend Laravel du portfolio</div>
                </div>
                @auth
                    <div class="user-pill">{{ auth()->user()->name }}</div>
                @endauth
            </header>

            <main class="container">
                @if (session('success'))
                    <div class="alert">{{ session('success') }}</div>
                @endif
                @yield('content')
            </main>
        </div>
    </div>
</body>
</html>
