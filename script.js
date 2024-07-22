document.addEventListener("DOMContentLoaded", () => {
    const resources = [
        { name: "Black Pearls", value: 1000 },
        { name: "Cementing Paste / Achatina Paste", value: 8000 },
        { name: "Clay", value: 10000 },
        { name: "Crystal", value: 15000 },
        { name: "Electronics", value: 15000 },
        { name: "Gun Powder", value: 200000 },
        { name: "Hard Polymer", value: 15000 },
        { name: "Hide", value: 250000 },
        { name: "Metal Ingot", value: 30000 },
        { name: "Obsidian", value: 50000 },
        { name: "Oil", value: 100000 },
        { name: "Pelt", value: 20000 },
        { name: "Silica Pearls", value: 100000 },
        { name: "Spark Powder", value: 250000 },
        { name: "Sulfur", value: 300000 },
        { name: "Tree Sap", value: 25000 }
    ];

    const items = [
        { name: "Chemistry Bench", value: 20.0 },
        { name: "Cloning Chamber", value: 1.0 },
        { name: "CryoFridge", value: 100.0 },
        { name: "Cryopod", value: 1000.0 },
        { name: "Industrial Cooker", value: 15.0 },
        { name: "Industrial Forge", value: 10.0 },
        { name: "Industrial Grill", value: 150.0 },
        { name: "Industrial Grinder", value: 7.0 },
        { name: "Shotgun Ammo", value: 5000.0 },
        { name: "Tek Behemoth Cellar Door", value: 7.0 },
        { name: "Tek Ceiling", value: 100.0 },
        { name: "Tek Dedicated Storage", value: 30.0 },
        { name: "Tek Foundation", value: 80.0 },
        { name: "Tek Generator", value: 3.0 },
        { name: "Tek Large Wall", value: 30.0 },
        { name: "Tek Pillars", value: 200.0 },
        { name: "Tek Replicator", value: 2.0 },
        { name: "Tek Teleporter (Small)", value: 8.0 },
        { name: "Tek Teleporter (Medium)", value: 4.0 },
        { name: "Tek Teleporter (Large)", value: 2.0 },
        { name: "Tek Triangle Ceilings", value: 200.0 },
        { name: "Tek Trough", value: 5.0 },
        { name: "Tek Wall", value: 120.0 },
        { name: "Transmitter", value: 3.0 },
        { name: "Vacuum Compartment", value: 17.0 },
        { name: "Vault", value: 40.0 }
    ];

    const resourcesTable = document.getElementById("resources-table").getElementsByTagName("tbody")[0];
    const itemsTable = document.getElementById("items-table").getElementsByTagName("tbody")[0];

    function addRow(table, name, value) {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const valueCell = row.insertCell(1);
        const acceptCell = row.insertCell(2);

        nameCell.textContent = name;
        valueCell.innerHTML = `<input type="number" value="${value}" class="conversion-value">`;
        acceptCell.innerHTML = `<input type="checkbox" class="accept-checkbox">`;
    }

    function populateTable(table, items) {
        items.forEach(item => {
            addRow(table, item.name, item.value);
        });
    }

    if (resourcesTable.rows.length === 0) {
        populateTable(resourcesTable, resources);
    }

    if (itemsTable.rows.length === 0) {
        populateTable(itemsTable, items);
    }

    document.getElementById("generate-btn").addEventListener("click", () => {
        const acceptedList = document.getElementById("accepted-list");
        acceptedList.innerHTML = "";

        function addAcceptedItem(name, value) {
            const li = document.createElement("li");
            li.textContent = `${name}: ${value}`;
            acceptedList.appendChild(li);
        }

        const resourceRows = resourcesTable.getElementsByTagName("tr");
        for (const row of resourceRows) {
            const checkbox = row.getElementsByClassName("accept-checkbox")[0];
            if (checkbox.checked) {
                const name = row.cells[0].textContent;
                const value = row.getElementsByClassName("conversion-value")[0].value;
                addAcceptedItem(name, value);
            }
        }

        const itemRows = itemsTable.getElementsByTagName("tr");
        for (const row of itemRows) {
            const checkbox = row.getElementsByClassName("accept-checkbox")[0];
            if (checkbox.checked) {
                const name = row.cells[0].textContent;
                const value = row.getElementsByClassName("conversion-value")[0].value;
                addAcceptedItem(name, value);
            }
        }
    });
});
