<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {

        $data = [
            [
                'id' => 1,
                'name' => 'John Doe',
                'email' => 'jhone@test.com',
            ],
            [
                'id' => 2,
                'name' => 'Jane Smith',
                'email' => 'jane@test.com',
            ],
            [
                'id' => 3,
                'name' => 'Alice Johnson',
                'email' => 'alic@gmail.com',
            ],
            [
                'id' => 4,
                'name' => 'Bob Brown',
                'email' => 'bob@test.com',
            ],
        ];

        return Inertia::render('dashboard', [
            'data' => $data,
            'breadcrumbs' => [
                ['name' => 'Dashboard', 'href' => '/dashboard'],
            ],
        ]);
    }
}
