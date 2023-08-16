<?php

interface AuthenticationService
{
    public function authenticate($email);
}

class GoogleAuthenticationService implements AuthenticationService
{
    public function authenticate($email): bool
    {
        return true;
    }
}

class GithubAuthenticationService implements AuthenticationService
{
    public function authenticate($email): bool
    {
        return true;
    }
}

class UserLogin
{
    public function login($email, AuthenticationService $authenticationService)
    {
        // DIP
        // Dependency inverted on abstraction
        $auth_result = $authenticationService->authenticate($email);
        if ($auth_result) {
            echo 'Authenticated 😄';
            return true;
        }
    }
}

$login = new UserLogin();
$login->login('samadocpl@gmail.com', new GoogleAuthenticationService());
