<?php
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\ContactMessageController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\FormationController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('admin.dashboard');
});

Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.store');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('projects', ProjectController::class);
    Route::resource('formations', FormationController::class)->except(['show']);
    Route::get('messages', [ContactMessageController::class, 'index'])->name('messages.index');
    Route::get('messages/{contactMessage}', [ContactMessageController::class, 'show'])->name('messages.show');
    Route::post('messages/{contactMessage}/read', [ContactMessageController::class, 'markAsRead'])->name('messages.read');
    Route::delete('messages/{contactMessage}', [ContactMessageController::class, 'destroy'])->name('messages.destroy');
});

Route::patch('/admin/projects/{project}/publish', [ProjectController::class, 'publish'])
    ->name('admin.projects.publish');
Route::patch('/admin/projects/{project}/unpublish', [ProjectController::class, 'unpublish'])
    ->name('admin.projects.unpublish');
