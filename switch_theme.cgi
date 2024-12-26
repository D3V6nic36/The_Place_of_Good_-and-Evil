#!/usr/local/bin/perl
# switch_theme.cgi
# Change the theme for the current user if allowed

BEGIN { push(@INC, "."); };
use WebminCore;

&init_config();
&ReadParse();
my $err = sub {
    &PrintHeader();
    print("<tt>Cannot change theme : $_[0]</tt>\n");
    exit(1);
    };
# Check if in debug mode
&$err("Debug mode is not enabled!")
    if (!$gconfig{'debug_enabled'} &&
        !$gconfig{'debug_theme_switcher'});
# Check if allowed to change theme,
# otherwise throw an error
if (!&foreign_available('theme') &&
    !&foreign_available('change-user') &&
    !&foreign_available('webmin') &&
    !&foreign_available('acl')) {
    &$err("You are not allowed to change themes!"); 
    }
# Check if the theme is known
&$err("Theme identification is not known!")
    if (!$in{'theme'} || $in{'theme'} !~ /^[123]$/);
# Check if the remote user is known
&$err("Remote user is not known!") if (!$remote_user);
# Define the theme
my $themes = {
    '1' => 'authentic-theme',
    '2' => 'gray-theme',
    '3' => '' };
my $theme = $themes->{$in{'theme'}};
# Change the theme
&foreign_require('acl');
my @users = &acl::list_users();
my ($user) = grep { $_->{'name'} eq $remote_user } @users;
$user->{'theme'} = $theme;
&acl::modify_user($user->{'name'}, $user);
&restart_miniserv();
&redirect(&get_webprefix() . "/");
