## Services section

1. [Nuoroda](https://preview.colorlib.com/#logis)
2. Sukurti OUR SERVICES sekcija su react komponentais
3. Pasiziureti i uzduoties nuotrauka 'service uzd.png'. Kvadratais apibrezti rekomentuojami komponentai ir props.
4. Rekomenduojama struktura

- ServicesSection
  - SectionTitle
  - ServicesList
    - ServiceCard
      - Icon

5. Pasidaryti ikoneles komponenta kad jis veiktu aprasytas kaip paveikslelyje. Paieskoti kaip veikia react componentai su props.children. Jei nepavyks pasidaryti jau zinomu budu.
6. Pradzoje duomenis galite hardkodinti(tiesiog irasyti jsx)
7. Duomenis pasiimti is services.json failiuko su fetch. Json failiuka patalpinti i public ir is te fetchinti pagal pavadinima. Public papke yra statine direktorija CRA projekte.
   6.1. uzkrauname ServicesList komponenta paduodami tuscia masyva kaip pradine reiksme
   6.2. useEffect hooke kuris uzsikrauna tik kai koponentas sukuriamas vygdome fetch ir parsiunciame duomenis is services.json.
   6.3. Atnaujiname state su gautais duomenimis ir generuojame ServiceCard komponentus.
8. ServicesSection komponente patalpiname mygtuka "two columns"
   7.1 paspaudus mygkutka korteles issidesto 2 o ne 3 per ekrano plota(prideti klase?)
   7.2 spaudinejant mygtuka korteles issidesto po 2 arba po 3 pakaitomis. Atitinkamai keiciasi mygtuko tekstas "two columns" => "three columns" => "two columns"...
