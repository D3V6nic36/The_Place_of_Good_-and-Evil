line1=Opcje konfiguracyjne,11
max_len=Maksymalna długość polecenia do wyświetlenia,3,Nielimitowane
max_jobs=Maksymalna liczba zadań Cron do wyświetlenia,3,Nielimitowane
show_time=Wyświetlać harmonogram pracy?,1,1-Tak,0-Nie
show_comment=Wyświetlać komentarze zadań?,1,1-Tak,0-Nie
show_run=Wyświetlać stan uruchomionych zadań?,1,2-Tak&#44; i pozwalaj na uruchamianie i zatrzymywanie,1-Tak,0-Nie
match_mode=Szukaj proces zadań przez,1,1-tylko polecenie,0-Polecenie i argumenty
match_user=Dopasować nazwy użytkowników&#44; przy szukaniu procesu zadania?,1,1-Tak,0-Nie
kill_subs=Zabić pod procesy&#44; przy zabijaniu zadań?,1,1-Tak,0-Nie
hourly_only=Pozwalać tylko na zadania maksymalnie godzinne?,1,0-Nie,1-Tak
add_file=Dodaj nowe zadania do pliku,3,Zwykły plik crontab użytkownika
line2=Konfiguracja systemu,11
cron_dir=Katalog tablic crona,0
cron_get_command=Polecenie czytania zadań użytkownika dla crona,0
cron_edit_command=Polecenie modyfikacji zadań użytkownika dla crona,0
cron_copy_command=Polecenie przyjęcia zadania użytkownika ze standardowego wejścia,0
cron_delete_command=Polecenie usunięcia zadań użytkownika dla crona,0
cron_input=Cron pozwala na dodawanie zadań,1,1-Tak,0-Nie
cron_allow_file=Plik z listą dopuszczonych użytkowników,0
cron_deny_file=Plik z listą użytkowników bez dostępu,0
cron_deny_all=Uprawnienia przy braku plików pozwoleń/zakazu,1,0-Zablokuj dla wszystkich,1-Zablokuj oprócz roota,2-Pozwól wszystkim
vixie_cron=Obsługa rozszerzeń vixie-crona,1,1-Tak,0-Nie
system_crontab=Scieżka do systemowego pliku zadań vixie-crona,0
single_file=Ścieżka do pliku crontab pojedynczego użytkownika,0
cronfiles_dir=Ścieżka do katalogu z dodatkowymi plikami crona,3,Brak
run_parts=Polecenie run-parts,0
