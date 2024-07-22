document.addEventListener("DOMContentLoaded", () => {
    const resources = [
        { name: "Black Pearls", value: 10 },
        { name: "Cementing Paste / Achatina Paste", value: 80 },
        { name: "Clay", value: 100 },
        { name: "Crystal", value: 70 },
        { name: "Electronics", value: 150 },
        { name: "Gun Powder", value: 2000 },
        { name: "Hard Polymer", value: 150 },
        { name: "Hide", value: 2500 },
        { name: "Metal Ingot", value: 300 },
        { name: "Obsidian", value: 500 },
        { name: "Oil", value: 1000 },
        { name: "Pelt", value: 200 },
        { name: "Silica Pearls", value: 1000 },
        { name: "Spark Powder", value: 2500 },
        { name: "Sulfur", value: 3000 },
        { name: "Tree Sap", value: 250 }
    ];

    const items = [
        { name: "Chemistry Bench", value: 0.2 },
        { name: "Cloning Chamber", value: 0.0 },
        { name: "CryoFridge", value: 1.0 },
        { name: "Cryopod", value: 10.0 },
        { name: "Industrial Cooker", value: 0.2 },
        { name: "Industrial Forge", value: 0.1 },
        { name: "Industrial Grill", value: 1.5 },
        { name: "Industrial Grinder", value: 0.1 },
        { name: "Shotgun Ammo", value: 50.0 },
        { name: "Tek Behemoth Cellar Door", value: 0.1 },
        { name: "Tek Ceiling", value: 1.0 },
        { name: "Tek Dedicated Storage", value: 0.3 },
        { name: "Tek Foundation", value: 0.8 },
        { name: "Tek Generator", value: 0.3 },
        { name: "Tek Large Wall", value: 0.3 },
        { name: "Tek Pillars", value: 2.0 },
        { name: "Tek Replicator", value: 0.0 },
        { name: "Tek Teleporter (Small)", value: 0.1 },
        { name: "Tek Teleporter (Medium)", value: 0.0 },
        { name: "Tek Teleporter (Large)", value: 0.0 },
        { name: "Tek Triangle Ceilings", value: 2.0 },
        { name: "Tek Trough", value: 0.1 },
        { name: "Tek Wall", value: 1.2 },
        { name: "Transmitter", value: 0.3 },
        { name: "Vacuum Compartment", value: 0.2 },
        { name: "Vault", value: 0.4 }
    ];

    const defaultResourceValues = [
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

    const defaultItemValues = [
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
    const tekAmountInput = document.getElementById("tek-amount");
    const generateBtn = document.getElementById("generate-btn");
    const acceptedList = document.getElementById("accepted-list");
    const copyBtn = document.getElementById("copy-btn");
    const publicModeBtn = document.getElementById("public-mode-btn");
    const traderModeBtn = document.getElementById("trader-mode-btn");
    const outputSection = document.getElementById("output-section");
    const convertLabel = document.getElementById("convert-label");
    const populateBtn = document.getElementById("populate-btn");
    const modeIndicator = document.createElement('div');

    modeIndicator.id = 'mode-indicator';
    modeIndicator.style.color = '#5dade2';
    modeIndicator.style.position = 'absolute';
    modeIndicator.style.top = '10px';
    modeIndicator.style.left = '10px';
    modeIndicator.style.fontWeight = 'bold';
    document.body.appendChild(modeIndicator);

    function addRow(table, name, value) {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const valueCell = row.insertCell(1);
        const acceptCell = row.insertCell(2);

        nameCell.textContent = name;
        valueCell.innerHTML = `<input type="number" value="${value}" class="conversion-value" readonly>`;
        acceptCell.innerHTML = `<input type="checkbox" class="accept-checkbox" style="display: none;">`;
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

    function updateValues() {
        const tekAmount = parseInt(tekAmountInput.value, 10);

        resourcesTable.querySelectorAll('tr').forEach(row => {
            const valueInput = row.querySelector('.conversion-value');
            const baseValue = parseFloat(valueInput.defaultValue);
            let calculatedValue = baseValue * tekAmount;

            if (calculatedValue === 0 && tekAmount === 100) {
                calculatedValue = 1.0;
            }

            valueInput.value = (calculatedValue).toFixed(1);
        });

        itemsTable.querySelectorAll('tr').forEach(row => {
            const valueInput = row.querySelector('.conversion-value');
            const baseValue = parseFloat(valueInput.defaultValue);
            let calculatedValue = baseValue * tekAmount;

            if (calculatedValue === 0 && tekAmount === 100) {
                calculatedValue = 1.0;
            }

            valueInput.value = (calculatedValue).toFixed(1);
        });
    }

    function generateAcceptedList() {
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
    }

    function copyToClipboard() {
        let markdown = "";
        acceptedList.querySelectorAll("li").forEach(item => {
            markdown += `- ${item.textContent}\n`;
        });
        navigator.clipboard.writeText(markdown).then(() => {
            alert("Copied to clipboard!");
        });
    }

    function populateStandardValues() {
        resourcesTable.querySelectorAll('tr').forEach((row, index) => {
            const valueInput = row.querySelector('.conversion-value');
            valueInput.value = defaultResourceValues[index].value;
        });

        itemsTable.querySelectorAll('tr').forEach((row, index) => {
            const valueInput = row.querySelector('.conversion-value');
            valueInput.value = defaultItemValues[index].value;
        });
    }

    function setMode(mode) {
        if (mode === "public") {
            modeIndicator.textContent = "Mode: Public";
            publicModeBtn.classList.add("active");
            traderModeBtn.classList.remove("active");

            convertLabel.textContent = "Enter Tek Amount To Convert";
            tekAmountInput.style.display = "inline-block";
            tekAmountInput.style.margin = "0 auto";
            generateBtn.style.display = "none";
            outputSection.style.display = "none";
            populateBtn.style.display = "none";

            resourcesTable.querySelectorAll('.conversion-value').forEach(input => {
                input.setAttribute("readonly", "readonly");
            });

            itemsTable.querySelectorAll('.conversion-value').forEach(input => {
                input.setAttribute("readonly", "readonly");
            });

            resourcesTable.querySelectorAll('.accept-checkbox').forEach(checkbox => {
                checkbox.style.display = "none";
            });

            itemsTable.querySelectorAll('.accept-checkbox').forEach(checkbox => {
                checkbox.style.display = "none";
            });

            updateValues();
        } else if (mode === "trader") {
            modeIndicator.textContent = "Mode: Trader";
            publicModeBtn.classList.remove("active");
            traderModeBtn.classList.add("active");

            convertLabel.textContent = "Select Your Accepted Items/Resource Then Click The Button Below";
            tekAmountInput.style.display = "none";
            generateBtn.style.display = "block";
            generateBtn.style.margin = "0 auto";
            outputSection.style.display = "block";
            populateBtn.style.display = "block";

            resourcesTable.querySelectorAll('.conversion-value').forEach(input => {
                input.removeAttribute("readonly");
                input.value = 0;
            });

            itemsTable.querySelectorAll('.conversion-value').forEach(input => {
                input.removeAttribute("readonly");
                input.value = 0;
            });

            resourcesTable.querySelectorAll('.accept-checkbox').forEach(checkbox => {
                checkbox.style.display = "block";
            });

            itemsTable.querySelectorAll('.accept-checkbox').forEach(checkbox => {
                checkbox.style.display = "block";
            });
        }
    }

    tekAmountInput.addEventListener("input", updateValues);
    generateBtn.addEventListener("click", generateAcceptedList);
    copyBtn.addEventListener("click", copyToClipboard);
    populateBtn.addEventListener("click", populateStandardValues);
    publicModeBtn.addEventListener("click", () => setMode("public"));
    traderModeBtn.addEventListener("click", () => setMode("trader"));

    setMode("public");
});
