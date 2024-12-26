line1=Nastavení domovského adresáře,11
homedir_perms=Práva pro nově vytvořené domovské adresáře,0
user_files=Kopírovat soubory do nového domovského adresáře z,9,40,3
home_base=Automatický základ domovského adresáře,3,není nastaven
real_base=Základna domovských adresářů,3,Stejný jako výše
home_style=Automatický styl domovského adresáře,4,0-home/username,1-home/u/username,2-home/u/us/username,3-home/u/s/username
line2=Nastavení nového uživatele,11
base_uid=Nejmenší UID pro nové uživatele,0,5
base_gid=Nejmenší GID pro nové skupiny,0,5
uid_mode=Výchozí metoda pro vložení UID,4,0-Vloženo uživatelem,1-Automaticky narůstající,2-Vypočítaný
gid_mode=Výchozí metoda pro vložení GID,4,0-Vloženo uživatelem,1-Automaticky narůstající,2-Vypočítaný
uid_calc=Metoda výpočtu UID,4,0-Berkeley cksum,1-Náhodný program mkuid
gid_calc=Metoda výpočtu GID,4,0-Berkeley cksum,1-Náhodný program mkgid
new_user_group=Vytvořit novou skupinu pro nové uživatele?,1,1-ano,0-ne
new_user_gid=Přidělit stejné ID pro nového uživatele i skupinu?,1,1-ano,0-ne
md5=Metoda kryptování hesla,1,1-Automatické zjištění,0-DES crypt,2-MD5
alias_check=Kontrolovat kolize v sendmail aliasech?,1,1-ano,0-ne
delete_only=Smazat pouze soubory vlastněné uživatelem?,1,1-ano,0-ne
max_length=Maximální délka jmen uživatele a skupiny,3,Neomezeno
username_re=Perl regexp pro kontrolu jména uživatele,3,Nic
shells=Vytvořit seznam shells z,2,fixed-Zabudovaný seznam,passwd-Existující uživatelé,shells-/etc/shells
line3=Výchozí nastavení pro nové uživatele,11
default_group=Výchozí primární skupina pro nové uživatele,6,Výchozí
default_secs=Výchozí sekundární skupina pro nové uživatele,3,Nic
default_shell=Výchozí shell pro nové uživatele,3,První v seznamu
default_min=Výchozí minimální počet dnů pro nové uživatele,3,Nic
default_max=Výchozí maximální počet dnů pro nové uživatele,3,Nic
default_warn=Výchozí varovný počet dnů pro nové uživatele,3,Nic
default_inactive=Výchozí neaktivní počet dnů pro nové uživatele,3,Nic
default_expire=Výchozí čas expirace pro nové uživatele (dd/mm/yyyy),3,Nic
default_other=Vytvořit a aktualizovat v jiných modulech?,1,1-Ano,0-Ne
line4=Nastavení zobrazení,11
display_max=Maximální počet zobrazených uživatelů,0
sort_mode=Seřadit uživatele a skupiny podle,4,0-pořadí v souboru,1-uživatelského jména,2-skutečného jména,3-příjmení,4-shellu,5-UID nebo GID,6-domovského adresáře
last_count=Počet zobrazení předchozích přihlášení,3,Neomezeno
last_show=Zobrazit v seznamu poslední přihlášení uživatele?,1,1-Ano,0-Ne
display_mode=Zobrazit uživatele a skupiny podle,1,2-kategorizace primární skupiny,1-úplných detailů,0-pouze podle jména
passwd_stars=Zatajovat plain-text heslo?,1,1-ano,0-ne
from_files=Podat uživateli a skupině informaci ze,1,1-souborů,0-systemových volání
random_password=Vygenerovat heslo pro nové uživatele?,1,1-ano,0-ne
extra_real=Ukázat detaily o kanceláři a telefonu?,1,1-ano,0-ne
delete_root=Povolit mazání systémových uživatelů a skupin?,1,1-Ano,0-Ne
secmode=Zobrazit v uživatelském formuláři sekundární skupiny?,1,0-Ano,1-Ne,2-Jako textový rámeček
line5=Omezení pro heslo,11
passwd_min=Minimální délka hesla,3,Žádné minimum
passwd_dict=Nepovolit hesla ze slovníků?,1,1-ano,0-ne
passwd_re=Perl regexp pro kontrolu hesla,3,Nic
passwd_same=Nepovolit hesla obsahující jméno uživatele?,1,1-ano,0-ne
passwd_prog=Externí program pro kontrolu hesla,3,Nic
passwd_progmode=Poslat uživatelské jméno a heslo do programu,1,1-jako vstup,0-jako parametry
line0=Příkazy před a po,11
pre_command=Příkaz vykonané před provedením změn,0
post_command=Příkaz vykonané po provedení změn,0
line6=Konfigurace systému,11
passwd_file=Soubor s hesly,3,Generováno
group_file=Soubor skupin,0
shadow_file=Shadow soubor hesel,3
master_file=BSD hlavní soubor hesel,3
gshadow_file=Shadow soubor skupin,3
netinfo_domain=NetInfo doména pro správu,3,Lokální doména (<tt>.</tt>)
lock_string=Nahradit heslo uzamčených účtů s,0
lock_prepend=Označit hesla pro dočasně zakázané účty,3,Výchozí (!)
nscd_restart=Příkaz restartující nscd,3,Poslat HUP signál
