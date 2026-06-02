<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use App\Models\Project;
use App\Models\SiteVisit;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function index(): View
    {
        $stats = [
            'projects' => Project::count(),
            'publishedProjects' => Project::whereNotNull('published_at')->count(),
            'featuredProjects' => Project::where('is_featured', true)->count(),
            'messages' => ContactMessage::count(),
            'unreadMessages' => ContactMessage::whereNull('read_at')->count(),
            'visits' => SiteVisit::count(),
            'visitsToday' => SiteVisit::whereDate('visited_at', now()->toDateString())->count(),
        ];

        $latestMessages = ContactMessage::latest()->take(5)->get();

        $topPages = SiteVisit::select('page_url', DB::raw('count(*) as visits_count'))
            ->groupBy('page_url')
            ->orderByDesc('visits_count')
            ->take(5)
            ->get();

        return view('admin.dashboard', compact('stats', 'latestMessages', 'topPages'));
    }
}
