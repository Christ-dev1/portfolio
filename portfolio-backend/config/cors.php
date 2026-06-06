<?php

return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'http://localhost:3000',
        'https://portfolio-rc8s73xbb-kadjoblin3-2694s-projects.vercel.app',
        'https://portfolio-azure-seven-73.vercel.app',
        'https://*.vercel.app',
    ],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
