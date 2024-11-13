document.getElementById("generate-offspring").addEventListener("click", function() {
    // Get parent details
    const SireGenotype = document.getElementById("Sire-genotype").value;
    const SireCoat = document.getElementById("Sire-coat").value;
    const SireBuild = document.getElementById("Sire-build").value;
    const SireEars = document.getElementById("Sire-ears").value;
    const SireTail = document.getElementById("Sire-tail").value;

    const DamGenotype = document.getElementById("Dam-genotype").value;
    const DamCoat = document.getElementById("Dam-coat").value;
    const DamBuild = document.getElementById("Dam-build").value;
    const DamEars = document.getElementById("Dam-ears").value;
    const DamTail = document.getElementById("Dam-tail").value;

    // Generate offspring traits
    const offspringCount = Math.floor(Math.random() * 3) + 1; // Generate 1 to 3 offspring
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    for (let i = 0; i < offspringCount; i++) {
       /* const offspringGenotype = `${SireGenotype}-${DamGenotype}`;
        const offspringPhenotype = `${SirePhenotype} & ${DamPhenotype}`; */
        const offspringGenotype = Math.random() < 0.5 ? SireGenotype : DamGenotype;
        const offspringCoat = Math.random() < 0.5 ? SireCoat : DamCoat;
        const offspringBuild = Math.random() < 0.5 ? SireBuild : DamBuild;
        const offspringEars = Math.random() < 0.5 ? SireEars : DamEars;
        const offspringTail = Math.random() < 0.5 ? SireTail : DamTail;


        // Display offspring
        const offspringDiv = document.createElement("div");
        offspringDiv.innerHTML = `
            <strong>Offspring ${i + 1}:</strong>
            <div>Genotype: ${offspringGenotype}</div>
            <div>Phenotype: ${offspringPhenotype}</div>
            <div>Coat Type: ${offspringCoat}</div>
            <div>Build Type: ${offspringBuild}</div>
            <div>Ears: ${offspringEars}</div>
            <div>Tail: ${offspringTail}</div>
            <hr>
        `;
        resultsDiv.appendChild(offspringDiv);
    }
});
