<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel com Inertia e Vuetify</title>
        @vite(['resources/js/app.js'])
        @routes
        @inertiaHead
    </head>
    <body class="bg-background">
        @inertia
    </body>
</html>
