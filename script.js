document.addEventListener('DOMContentLoaded', function () {
    // Collapsible Section Functionality
    document.querySelectorAll('.collapsible-header').forEach(button => {
        button.addEventListener('click', function () {
            let content = this.nextElementSibling;
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
    });

    // Load Flow Solver Calculation
    document.getElementById('calcLoadFlow').addEventListener('click', function () {
        let voltage = parseFloat(document.getElementById('loadVoltage').value);
        let current = parseFloat(document.getElementById('loadCurrent').value);
        let powerFactor = parseFloat(document.getElementById('loadPF').value);

        if (isNaN(voltage) || isNaN(current) || isNaN(powerFactor)) {
            document.getElementById('loadFlowResult').textContent = 'Invalid input';
            return;
        }

        let power = voltage * current * powerFactor;
        document.getElementById('loadFlowResult').textContent = `Power: ${power.toFixed(2)} W`;
    });

    // Power Factor Correction
    document.getElementById('calcPowerFactorCorrection').addEventListener('click', function () {
        let realPower = parseFloat(document.getElementById('pfRealPower').value);
        let apparentPower = parseFloat(document.getElementById('pfApparentPower').value);
        let pf = realPower / apparentPower;

        document.getElementById('pfCorrectionResult').textContent = `Power Factor: ${pf.toFixed(2)}`;
    });

    // Voltage Drop Calculator
    document.getElementById('calcVoltageDrop').addEventListener('click', function () {
        let length = parseFloat(document.getElementById('vdLength').value);
        let current = parseFloat(document.getElementById('vdCurrent').value);
        let resistance = parseFloat(document.getElementById('vdResistance').value);

        let drop = 2 * length * resistance * current;
        document.getElementById('vdResult').textContent = `Voltage Drop: ${drop.toFixed(2)} V`;
    });

    // Short Circuit Analysis
    document.getElementById('calcShortCircuit').addEventListener('click', function () {
        let voltage = parseFloat(document.getElementById('scVoltage').value);
        let impedance = parseFloat(document.getElementById('scImpedance').value);
        let current = voltage / impedance;

        document.getElementById('scResult').textContent = `Short Circuit Current: ${current.toFixed(2)} A`;
    });
});
