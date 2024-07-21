
document.addEventListener("DOMContentLoaded", () => {
    const resources = [
        { name: "Black Pearls", value: 1000, img: "https://ark.fandom.com/wiki/File:Black_Pearl.png" },
        { name: "Cementing Paste / Achatina Paste", value: 8000, img: "https://ark.fandom.com/wiki/File:Cementing_Paste.png" },
        { name: "Clay", value: 10000, img: "https://ark.fandom.com/wiki/File:Clay.png" },
        { name: "Crystal", value: 15000, img: "https://ark.fandom.com/wiki/File:Crystal.png" },
        { name: "Electronics", value: 15000, img: "https://ark.fandom.com/wiki/File:Electronics.png" },
        { name: "Gun Powder", value: 200000, img: "https://ark.fandom.com/wiki/File:Gunpowder.png" },
        { name: "Hard Polymer", value: 15000, img: "https://ark.fandom.com/wiki/File:Hard_Polymer.png" },
        { name: "Hide", value: 250000, img: "https://ark.fandom.com/wiki/File:Hide.png" },
        { name: "Metal Ingot", value: 30000, img: "https://ark.fandom.com/wiki/File:Metal_Ingot.png" },
        { name: "Obsidian", value: 50000, img: "https://ark.fandom.com/wiki/File:Obsidian.png" },
        { name: "Oil", value: 100000, img: "https://ark.fandom.com/wiki/File:Oil.png" },
        { name: "Pelt", value: 20000, img: "https://ark.fandom.com/wiki/File:Pelt.png" },
        { name: "Silica Pearls", value: 100000, img: "https://ark.fandom.com/wiki/File:Silica_Pearls.png" },
        { name: "Spark Powder", value: 250000, img: "https://ark.fandom.com/wiki/File:Sparkpowder.png" },
        { name: "Sulfur", value: 300000, img: "https://ark.fandom.com/wiki/File:Sulfur.png" },
        { name: "Tree Sap", value: 25000, img: "https://ark.fandom.com/wiki/File:Tree_Sap.png" }
    ];

    const items = [
        { name: "Chemistry Bench", value: 20.0, img: "https://ark.fandom.com/wiki/File:Chemistry_Bench.png" },
        { name: "Cloning Chamber", value: 1.0, img: "https://ark.fandom.com/wiki/File:Cloning_Chamber.png" },
        { name: "CryoFridge", value: 100.0, img: "https://ark.fandom.com/wiki/File:CryoFridge.png" },
        { name: "Cryopod", value: 1000.0, img: "https://ark.fandom.com/wiki/File:Cryopod.png" },
        { name: "Industrial Cooker", value: 15.0, img: "https://ark.fandom.com/wiki/File:Industrial_Cooker.png" },
        { name: "Industrial Forge", value: 10.0, img: "https://ark.fandom.com/wiki/File:Industrial_Forge.png" },
        { name: "Industrial Grill", value: 150.0, img: "https://ark.fandom.com/wiki/File:Industrial_Grill.png" },
        { name: "Industrial Grinder", value: 7.0, img: "https://ark.fandom.com/wiki/File:Industrial_Grinder.png" },
        { name: "Shotgun Ammo", value: 5000.0, img: "https://ark.fandom.com/wiki/File:Shotgun_Shells.png" },
        { name: "Tek Behemoth Cellar Door", value: 7.0, img: "https://ark.fandom.com/wiki/File:Tek_Behemoth_Gateway.png" },
        { name: "Tek Ceiling", value: 100.0, img: "https://ark.fandom.com/wiki/File:Tek_Ceiling.png" },
        { name: "Tek Dedicated Storage", value: 30.0, img: "https://ark.fandom.com/wiki/File:Tek_Dedicated_Storage.png" },
        { name: "Tek Foundation", value: 80.0, img: "https://ark.fandom.com/wiki/File:Tek_Foundation.png" },
        { name: "Tek Generator", value: 3.0, img: "https://ark.fandom.com/wiki/File:Tek_Generator.png" },
        { name: "Tek Large Wall", value: 30.0, img: "https://ark.fandom.com/wiki/File:Tek_Wall.png" },
        { name: "Tek Pillars", value: 200.0, img: "https://ark.fandom.com/wiki/File:Tek_Pillar.png" },
        { name: "Tek Replicator", value: 2.0, img: "https://ark.fandom.com/wiki/File:Tek_Replicator.png" },
        { name: "Tek Teleporter (Small)", value: 8.0, img: "https://ark.fandom.com/wiki/File:Tek_Teleporter.png" },
        { name: "Tek Teleporter (Medium)", value: 4.0, img: "https://ark.fandom.com/wiki/File:Tek_Teleporter.png" },
        { name: "Tek Teleporter (Large)", value: 2.0, img: "https://ark.fandom.com/wiki/File:Tek_Teleporter.png" },
        { name: "Tek Triangle Ceilings", value: 200.0, img: "https://ark.fandom.com/wiki/File:Tek_Triangle_Ceiling.png" },
        { name: "Tek Trough", value: 5.0, img: "https://ark.fandom.com/wiki/File:Tek_Trough.png" },
        { name: "Tek Wall", value: 120.0, img: "https://ark.fandom.com/wiki/File:Tek_Wall.png" },
        { name: "Transmitter", value: 3.0, img: "https://ark.fandom.com/wiki/File:Tek_Transmitter.png" },
        { name: "Vacuum Compartment", value: 17.0, img: "https://ark.fandom.com/wiki/File:Vacuum_Compartment.png" },
        { name: "Vault", value: 40.0, img: "https://ark.fandom.com/wiki/File:Vault.png" }
    ];

    const resourcesTable = document.getElementById("resources-table").getElementsByTagName("tbody")[0];
    const itemsTable = document.getElementById("items-table").getElementsByTagName("tbody")[0];

    function addRow(table, name, value, img) {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const valueCell = row.insertCell(1);
        const acceptCell = row.insertCell(2);

        nameCell.innerHTML = `<img src="${img}" alt="${name}" onerror="this.src='https://ark.fandom.com/wiki/File:Item_Icons.png'"> ${name}`;
        valueCell.innerHTML = `<input type="number" value="${value}" class="conversion-value">`;
        acceptCell.innerHTML = `<input type="checkbox" class="accept-checkbox">`;
    }

    resources.forEach(resource => {
        addRow(resourcesTable, resource.name, resource.value, resource.img);
    });

    items.forEach(item => {
        addRow(itemsTable, item.name, item.value, item.img);
    });

    document.getElementById("generate-btn").addEventListener("click", () => {
        const acceptedList = document.getElementById("accepted-list");
        acceptedList.innerHTML = "";

        function addAcceptedItem(name, value, img) {
            const li = document.createElement("li");
            li.innerHTML = `<img src="${img}" alt="${name}" onerror="this.src='https://ark.fandom.com/wiki/File:Item_Icons.png'"> ${name}: ${value}`;
            acceptedList.appendChild(li);
        }

        const resourceRows = resourcesTable.getElementsByTagName("tr");
        for (const row of resourceRows) {
            const checkbox = row.getElementsByClassName("accept-checkbox")[0];
            if (checkbox.checked) {
                const name = row.getElementsByTagName("img")[0].alt;
                const value = row.getElementsByClassName("conversion-value")[0].value;
                addAcceptedItem(name, value, row.getElementsByTagName("img")[0].src);
            }
        }

        const itemRows = itemsTable.getElementsByTagName("tr");
        for (const row of itemRows) {
            const checkbox = row.getElementsByClassName("accept-checkbox")[0];
            if (checkbox.checked) {
                const name = row.getElementsByTagName("img")[0].alt;
                const value = row.getElementsByClassName("conversion-value")[0].value;
                addAcceptedItem(name, value, row.getElementsByTagName("img")[0].src);
            }
        }
    });
});
